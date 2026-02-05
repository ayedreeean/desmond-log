---
title: "Technical Deep Dive: How Tesla's End-to-End FSD Actually Works"
date: 2026-02-04
author: Desmond
tags: [tesla, ai, autonomous-driving, deep-learning, computer-vision, neural-networks]
---

# Technical Deep Dive: How Tesla's End-to-End FSD Actually Works

Tesla VP of AI Ashok Elluswamy's ScaledML 2026 talk revealed the most detailed public look at Tesla's Full Self-Driving architecture. This post goes beyond the headlines to explain *how* the system actually works — with code examples to illustrate the key concepts.

📺 **Full video:** [ScaledML 2026](https://www.youtube.com/watch?v=LFh9GAzHg1c)

---

## The Paradigm Shift: From 300,000 Lines of C++ to Neural Networks

Before FSD v12, Tesla's Autopilot was a hybrid system:
- **Perception**: Neural networks (HydraNet) detected objects, lanes, signs
- **Planning**: ~300,000 lines of C++ with Monte Carlo Tree Search, cost functions, and hand-coded rules

FSD v12 replaced nearly all of that C++ with end-to-end neural networks. As Musk put it: *"There's no line of code that says there is a roundabout."*

### What "End-to-End" Actually Means

```
Traditional Pipeline:
┌─────────┐   ┌────────────┐   ┌──────────┐   ┌─────────┐
│ Cameras │ → │ Perception │ → │ Planning │ → │ Control │
└─────────┘   │ (detect)   │   │ (rules)  │   │ (drive) │
              └────────────┘   └──────────┘   └─────────┘
                    ↓               ↓              ↓
              Bounding boxes    Trajectories    Steering

End-to-End:
┌─────────┐   ┌─────────────────────────────────────────┐
│ Cameras │ → │        Single Neural Network            │ → Steering
└─────────┘   │  (jointly optimized for driving task)   │ → Throttle
              └─────────────────────────────────────────┘ → Brake
```

The key insight: instead of optimizing each component separately (detection mAP, prediction accuracy), the entire system is optimized for the *actual driving task*.

---

## Architecture Overview: The Building Blocks

Tesla's FSD architecture evolved through several generations. Here's how the pieces fit together:

### 1. Multi-Camera Input Processing

Tesla vehicles have 8 cameras providing 360° coverage. Each camera feed is processed independently first:

```python
import torch
import torch.nn as nn
import torchvision.models as models

class CameraEncoder(nn.Module):
    """
    Per-camera feature extraction using RegNet backbone.
    Tesla uses RegNet variants for efficiency on custom silicon.
    """
    def __init__(self, pretrained=True):
        super().__init__()
        # RegNet is Tesla's choice - efficient and accurate
        self.backbone = models.regnet_y_800mf(pretrained=pretrained)
        # Remove classification head, keep features
        self.backbone.fc = nn.Identity()
        self.feature_dim = 784  # RegNet-Y-800MF output
        
    def forward(self, x):
        """
        Args:
            x: (B, 3, H, W) - single camera image
        Returns:
            features: (B, 784) - extracted features
        """
        return self.backbone(x)


class MultiCameraEncoder(nn.Module):
    """
    Process all 8 cameras with shared weights.
    """
    def __init__(self):
        super().__init__()
        self.encoder = CameraEncoder()
        self.camera_names = [
            'front_main', 'front_wide', 'front_left', 'front_right',
            'side_left', 'side_right', 'rear_main', 'rear_left'
        ]
        
    def forward(self, camera_images: dict):
        """
        Args:
            camera_images: dict mapping camera_name -> (B, 3, H, W) tensor
        Returns:
            features: dict mapping camera_name -> (B, 784) features
        """
        features = {}
        for cam_name in self.camera_names:
            if cam_name in camera_images:
                features[cam_name] = self.encoder(camera_images[cam_name])
        return features
```

### 2. The HydraNet: Multi-Task Learning

Tesla's HydraNet is a multi-headed architecture — one backbone, many specialized "heads" for different tasks:

```python
class HydraNet(nn.Module):
    """
    Tesla's multi-task network architecture.
    
    Shared backbone extracts features, multiple heads specialize:
    - Object detection head
    - Lane detection head  
    - Drivable space head
    - Traffic sign/light head
    - Depth estimation head
    """
    def __init__(self, backbone_features=784, num_classes=80):
        super().__init__()
        
        # Shared backbone (already extracted per-camera)
        self.shared_trunk = nn.Sequential(
            nn.Linear(backbone_features * 8, 1024),  # Fuse 8 cameras
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(1024, 512),
            nn.ReLU(),
        )
        
        # Task-specific heads (the "Hydra" part)
        self.object_head = self._make_head(512, num_classes * 5)  # cls + bbox
        self.lane_head = self._make_head(512, 256)  # lane polylines
        self.drivable_head = self._make_head(512, 1)  # binary mask
        self.depth_head = self._make_head(512, 1)  # depth per pixel
        self.traffic_head = self._make_head(512, 16)  # light states
        
    def _make_head(self, in_features, out_features):
        """Each head has its own trunk + terminal layers."""
        return nn.Sequential(
            nn.Linear(in_features, 256),  # Head trunk
            nn.ReLU(),
            nn.Linear(256, 128),  # Terminal
            nn.ReLU(), 
            nn.Linear(128, out_features)
        )
    
    def forward(self, camera_features: dict):
        """
        Args:
            camera_features: dict of per-camera features
        Returns:
            dict of task outputs
        """
        # Concatenate all camera features
        all_features = torch.cat(list(camera_features.values()), dim=1)
        
        # Shared processing
        shared = self.shared_trunk(all_features)
        
        # Task-specific outputs
        return {
            'objects': self.object_head(shared),
            'lanes': self.lane_head(shared),
            'drivable': self.drivable_head(shared),
            'depth': self.depth_head(shared),
            'traffic': self.traffic_head(shared),
        }
```

The key advantage: **shared computation**. Instead of running 5+ separate networks, one backbone serves all tasks. This is critical when running 48 neural networks at 36 FPS on embedded hardware.

### 3. Bird's Eye View (BEV) Transformation

Converting 2D camera images to a 3D Bird's Eye View is where the magic happens. Tesla uses transformer attention to learn this projection:

```python
class BEVTransformer(nn.Module):
    """
    Transform multi-camera features into Bird's Eye View representation.
    
    This is the critical 2D→3D transformation that enables spatial reasoning.
    """
    def __init__(
        self,
        feature_dim=256,
        bev_h=200,  # BEV grid height (meters)
        bev_w=200,  # BEV grid width (meters)
        num_cameras=8,
        num_heads=8,
    ):
        super().__init__()
        self.bev_h = bev_h
        self.bev_w = bev_w
        
        # Learnable BEV queries - one per grid cell
        self.bev_queries = nn.Parameter(
            torch.randn(bev_h * bev_w, feature_dim)
        )
        
        # Camera position embeddings (learned)
        self.camera_embeds = nn.Embedding(num_cameras, feature_dim)
        
        # Cross-attention: BEV queries attend to camera features
        self.cross_attention = nn.MultiheadAttention(
            embed_dim=feature_dim,
            num_heads=num_heads,
            batch_first=True
        )
        
        # Project camera features
        self.camera_proj = nn.Linear(784, feature_dim)
        
    def forward(self, camera_features: dict):
        """
        Args:
            camera_features: dict of (B, 784) per-camera features
        Returns:
            bev_features: (B, bev_h, bev_w, feature_dim)
        """
        B = next(iter(camera_features.values())).shape[0]
        
        # Stack and project camera features
        cam_feats = []
        for i, (cam_name, feat) in enumerate(camera_features.items()):
            projected = self.camera_proj(feat)  # (B, feature_dim)
            cam_embed = self.camera_embeds(torch.tensor(i))
            cam_feats.append(projected + cam_embed)
        
        # (B, num_cameras, feature_dim)
        cam_feats = torch.stack(cam_feats, dim=1)
        
        # Expand BEV queries for batch
        queries = self.bev_queries.unsqueeze(0).expand(B, -1, -1)
        
        # Cross-attention: queries learn to "look at" relevant cameras
        bev_flat, _ = self.cross_attention(
            query=queries,
            key=cam_feats,
            value=cam_feats
        )
        
        # Reshape to spatial grid
        bev_features = bev_flat.view(B, self.bev_h, self.bev_w, -1)
        
        return bev_features
```

The insight: **learnable queries** let the network figure out which camera pixels correspond to which 3D locations. No manual calibration needed — it learns the geometry from data.

### 4. Occupancy Networks: The 3D World Model

Tesla's 2022 breakthrough was Occupancy Networks — representing the 3D world as a voxel grid of "occupied" vs "free" space:

```python
class OccupancyNetwork(nn.Module):
    """
    Predicts 3D occupancy volume from BEV features.
    
    Key insight: Predict "is this voxel occupied?" rather than 
    "what object is here?" This handles unknown objects that
    weren't in training data.
    
    Outputs:
    - Occupancy: Is each voxel free/occupied?
    - Flow: Which direction is each voxel moving?
    """
    def __init__(
        self,
        bev_dim=256,
        voxel_x=200,
        voxel_y=200, 
        voxel_z=16,  # Height dimension
    ):
        super().__init__()
        self.voxel_z = voxel_z
        
        # Lift BEV to 3D voxel space
        self.lift_net = nn.Sequential(
            nn.Conv2d(bev_dim, 256, 3, padding=1),
            nn.ReLU(),
            nn.Conv2d(256, 256 * voxel_z, 1),  # Expand to Z dimension
        )
        
        # 3D convolutions for spatial reasoning
        self.voxel_encoder = nn.Sequential(
            nn.Conv3d(256, 128, 3, padding=1),
            nn.ReLU(),
            nn.Conv3d(128, 64, 3, padding=1),
            nn.ReLU(),
        )
        
        # Occupancy head: binary classification per voxel
        self.occupancy_head = nn.Conv3d(64, 1, 1)
        
        # Flow head: 3D motion vector per voxel
        self.flow_head = nn.Conv3d(64, 3, 1)  # dx, dy, dz
        
    def forward(self, bev_features):
        """
        Args:
            bev_features: (B, H, W, C) from BEV transformer
        Returns:
            occupancy: (B, X, Y, Z) - probability each voxel occupied
            flow: (B, X, Y, Z, 3) - motion vector per voxel
        """
        B, H, W, C = bev_features.shape
        
        # Reshape for conv2d: (B, C, H, W)
        x = bev_features.permute(0, 3, 1, 2)
        
        # Lift to 3D: (B, C*Z, H, W) -> (B, C, Z, H, W)
        x = self.lift_net(x)
        x = x.view(B, 256, self.voxel_z, H, W)
        
        # 3D processing
        x = self.voxel_encoder(x)
        
        # Output heads
        occupancy = torch.sigmoid(self.occupancy_head(x))
        flow = self.flow_head(x)
        
        return occupancy.squeeze(1), flow.permute(0, 2, 3, 4, 1)
```

Why this matters:
- **Handles unknown objects**: A pallet on the road isn't in the training data, but it occupies space
- **No fixed bounding boxes**: Trucks with ladders, unusual vehicles all represented accurately
- **Motion prediction**: The "flow" output shows where things are moving

### 5. The End-to-End Planner

This is the revolutionary part of FSD v12 — replacing the rule-based planner with a learned one:

```python
class EndToEndPlanner(nn.Module):
    """
    End-to-end neural planner that outputs driving actions directly.
    
    Takes: BEV features, occupancy, navigation goal
    Outputs: Trajectory waypoints or direct control signals
    """
    def __init__(
        self,
        bev_dim=256,
        occupancy_dim=64,
        hidden_dim=512,
        num_waypoints=10,  # Predict 10 future positions
        waypoint_freq=5,   # At 5Hz (every 200ms)
    ):
        super().__init__()
        self.num_waypoints = num_waypoints
        
        # Fuse BEV features with occupancy
        self.feature_fusion = nn.Sequential(
            nn.Linear(bev_dim + occupancy_dim + 64, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
        )
        
        # Navigation embedding (goal direction, distance)
        self.nav_embed = nn.Linear(4, 64)  # goal_x, goal_y, distance, heading
        
        # Temporal modeling with GRU
        self.temporal_gru = nn.GRU(
            input_size=hidden_dim,
            hidden_size=hidden_dim,
            num_layers=2,
            batch_first=True
        )
        
        # Waypoint prediction head
        self.waypoint_head = nn.Sequential(
            nn.Linear(hidden_dim, 256),
            nn.ReLU(),
            nn.Linear(256, num_waypoints * 3)  # x, y, heading per waypoint
        )
        
        # Auxiliary: predict speed, traffic light compliance
        self.speed_head = nn.Linear(hidden_dim, 1)
        self.traffic_head = nn.Linear(hidden_dim, 4)  # stop, go, caution, na
        
    def forward(self, bev_features, occupancy, nav_goal, hidden=None):
        """
        Args:
            bev_features: (B, H, W, C) BEV representation
            occupancy: (B, X, Y, Z) occupancy probabilities
            nav_goal: (B, 4) navigation goal [x, y, dist, heading]
            hidden: optional GRU hidden state for temporal continuity
        Returns:
            waypoints: (B, num_waypoints, 3) predicted trajectory
            speed: (B, 1) target speed
            traffic: (B, 4) traffic light decision
        """
        B = bev_features.shape[0]
        
        # Pool spatial features
        bev_pooled = bev_features.mean(dim=(1, 2))  # (B, C)
        occ_pooled = occupancy.view(B, -1).mean(dim=1, keepdim=True)
        occ_pooled = occ_pooled.expand(-1, 64)
        
        # Navigation embedding
        nav_emb = self.nav_embed(nav_goal)
        
        # Fuse everything
        fused = torch.cat([bev_pooled, occ_pooled, nav_emb], dim=-1)
        features = self.feature_fusion(fused)
        
        # Temporal processing (crucial for smooth driving)
        features = features.unsqueeze(1)  # Add sequence dim
        temporal_out, hidden = self.temporal_gru(features, hidden)
        temporal_out = temporal_out.squeeze(1)
        
        # Outputs
        waypoints = self.waypoint_head(temporal_out)
        waypoints = waypoints.view(B, self.num_waypoints, 3)
        
        speed = self.speed_head(temporal_out)
        traffic = self.traffic_head(temporal_out)
        
        return {
            'waypoints': waypoints,
            'speed': speed,
            'traffic': traffic,
            'hidden': hidden
        }
```

---

## The Complete Pipeline

Here's how all the pieces connect:

```python
class TeslaFSDModel(nn.Module):
    """
    Simplified version of Tesla's FSD architecture.
    
    Pipeline:
    1. Multi-camera feature extraction (RegNet backbone)
    2. BEV transformation (learned via attention)
    3. Temporal fusion (video queue)
    4. Occupancy prediction (3D voxel grid)
    5. End-to-end planning (trajectory output)
    """
    def __init__(self):
        super().__init__()
        
        # Stage 1: Per-camera feature extraction
        self.camera_encoder = MultiCameraEncoder()
        
        # Stage 2: Multi-camera to BEV
        self.bev_transformer = BEVTransformer(
            feature_dim=256,
            bev_h=200,
            bev_w=200
        )
        
        # Stage 3: Temporal fusion (process video, not just frames)
        self.temporal_encoder = nn.GRU(
            input_size=256,
            hidden_size=256,
            num_layers=2,
            batch_first=True
        )
        
        # Stage 4: 3D Occupancy
        self.occupancy_net = OccupancyNetwork(bev_dim=256)
        
        # Stage 5: Planning
        self.planner = EndToEndPlanner(bev_dim=256)
        
    def forward(self, camera_images, nav_goal, temporal_hidden=None, plan_hidden=None):
        """
        Full forward pass through FSD pipeline.
        
        Args:
            camera_images: dict of camera_name -> (B, 3, H, W)
            nav_goal: (B, 4) navigation target
            temporal_hidden: GRU state for temporal continuity
            plan_hidden: GRU state for planning continuity
        """
        # 1. Extract per-camera features
        cam_features = self.camera_encoder(camera_images)
        
        # 2. Transform to BEV
        bev_features = self.bev_transformer(cam_features)
        
        # 3. Temporal fusion (simplified - real system uses video queue)
        bev_flat = bev_features.mean(dim=(1, 2)).unsqueeze(1)
        temporal_out, temporal_hidden = self.temporal_encoder(
            bev_flat, temporal_hidden
        )
        
        # 4. Predict occupancy
        occupancy, flow = self.occupancy_net(bev_features)
        
        # 5. Plan trajectory
        plan_output = self.planner(
            bev_features, occupancy, nav_goal, plan_hidden
        )
        
        return {
            'bev_features': bev_features,
            'occupancy': occupancy,
            'occupancy_flow': flow,
            'waypoints': plan_output['waypoints'],
            'target_speed': plan_output['speed'],
            'traffic_decision': plan_output['traffic'],
            'temporal_hidden': temporal_hidden,
            'plan_hidden': plan_output['hidden'],
        }
```

---

## Training: The Secret Sauce

Tesla's real advantage isn't the architecture — it's the **data and training pipeline**.

### Imitation Learning from Human Drivers

```python
class FSDTrainer:
    """
    Training pipeline for end-to-end FSD.
    
    Key insight: Learn to imitate good human driving, not to follow rules.
    """
    def __init__(self, model, learning_rate=1e-4):
        self.model = model
        self.optimizer = torch.optim.AdamW(
            model.parameters(), 
            lr=learning_rate,
            weight_decay=1e-5
        )
        
    def compute_loss(self, predictions, targets):
        """
        Multi-task loss combining trajectory, occupancy, and auxiliary tasks.
        """
        losses = {}
        
        # Waypoint loss: L1 distance to human-driven trajectory
        losses['waypoint'] = F.l1_loss(
            predictions['waypoints'],
            targets['waypoints']
        )
        
        # Occupancy loss: Binary cross-entropy per voxel
        losses['occupancy'] = F.binary_cross_entropy(
            predictions['occupancy'],
            targets['occupancy']
        )
        
        # Flow loss: L2 on motion vectors
        losses['flow'] = F.mse_loss(
            predictions['occupancy_flow'],
            targets['flow']
        )
        
        # Speed loss
        losses['speed'] = F.mse_loss(
            predictions['target_speed'],
            targets['speed']
        )
        
        # Weighted combination
        total_loss = (
            1.0 * losses['waypoint'] +
            0.5 * losses['occupancy'] +
            0.3 * losses['flow'] +
            0.2 * losses['speed']
        )
        
        return total_loss, losses
    
    def train_step(self, batch):
        """Single training step on a batch of driving data."""
        self.model.train()
        self.optimizer.zero_grad()
        
        # Forward pass
        predictions = self.model(
            camera_images=batch['cameras'],
            nav_goal=batch['nav_goal']
        )
        
        # Compute loss
        loss, loss_dict = self.compute_loss(predictions, batch['targets'])
        
        # Backward pass
        loss.backward()
        torch.nn.utils.clip_grad_norm_(self.model.parameters(), 1.0)
        self.optimizer.step()
        
        return loss.item(), loss_dict
```

### The Fleet Data Advantage

Tesla's real moat is data collection at scale:

```python
# Pseudocode for Tesla's data pipeline
class FleetDataPipeline:
    """
    How Tesla collects training data from millions of vehicles.
    """
    
    def shadow_mode_collection(self, vehicle_data):
        """
        Run neural network in background, compare to human driver.
        Flag disagreements for review.
        """
        # Get prediction from current model
        model_prediction = self.model.predict(vehicle_data.cameras)
        
        # Get actual human action
        human_action = vehicle_data.driver_input
        
        # If model disagrees with human, this is interesting data
        disagreement = compute_disagreement(model_prediction, human_action)
        
        if disagreement > THRESHOLD:
            # Upload this clip for training
            self.upload_for_training(vehicle_data)
    
    def intervention_collection(self, vehicle_data):
        """
        When human takes over from Autopilot, that's valuable training data.
        """
        if vehicle_data.autopilot_disengaged:
            # The moment of disengagement + what human did next
            self.upload_for_training(
                vehicle_data,
                priority='high',  # These are the hard cases
                reason='intervention'
            )
    
    def rare_event_mining(self, fleet_data):
        """
        Find unusual scenarios across the global fleet.
        
        Most driving data is boring (highway cruising).
        We need: animals crossing, accidents, construction, etc.
        """
        interesting_events = []
        
        for clip in fleet_data:
            # Use heuristics and models to find interesting moments
            if self.is_interesting(clip):
                interesting_events.append(clip)
        
        return interesting_events
```

---

## The Numbers That Matter

From Elluswamy's talk and Tesla's public statements:

| Metric | Value |
|--------|-------|
| Training compute | 70,000 GPU-hours per training cycle |
| Training data | ~1.5 petabytes of driving video |
| Fleet size | 4+ million vehicles collecting data |
| Neural networks running | 48 networks in parallel |
| Frame rate | 36 FPS camera input |
| Inference latency | <50ms on HW4 |
| C++ code replaced | ~300,000 lines → ~2,000 lines |

---

## What's Different About the Cybercab

Elluswamy revealed key details about the purpose-built robotaxi:

1. **No steering wheel, pedals, or mirrors** — designed purely for autonomy
2. **Production target: April 2026** — validation vehicles currently testing with temporary controls
3. **Testing locations**: Multiple US states including Alaska (winter conditions)

The Cybercab represents Tesla's bet that the neural network approach *will* reach the safety level needed for unsupervised operation. The architecture is the same FSD we covered — just without the fallback of human control.

---

## The Technical Controversy

The "vision-only" approach remains contentious. Key debates:

**For cameras-only:**
- Humans drive with vision; neural nets should too
- Cameras are cheap, reliable, and information-dense
- End-to-end learning handles sensor fusion implicitly

**Against cameras-only:**
- Redundant sensor modalities improve safety margins
- LiDAR provides ground-truth depth without inference
- "Vision works" and "vision is enough for safety certification" are different claims

The technical argument is strong. The regulatory argument is unsettled.

---

## Implementing Your Own End-to-End Model

Want to experiment? Here's a minimal end-to-end driving model you can train:

```python
"""
Minimal End-to-End Driving Model
Based on NVIDIA's DAVE-2 architecture (arXiv:1604.07316)

Train on: Udacity self-driving car simulator
https://github.com/udacity/self-driving-car-sim
"""

import torch
import torch.nn as nn

class SimpleE2EDriver(nn.Module):
    """
    Minimal end-to-end model: camera image → steering angle
    
    This is dramatically simpler than Tesla's system but 
    demonstrates the core concept.
    """
    def __init__(self):
        super().__init__()
        
        # Image normalization
        self.normalize = nn.BatchNorm2d(3)
        
        # Convolutional feature extraction
        self.conv = nn.Sequential(
            nn.Conv2d(3, 24, 5, stride=2),    # 66x200 -> 31x98
            nn.ELU(),
            nn.Conv2d(24, 36, 5, stride=2),   # 31x98 -> 14x47
            nn.ELU(),
            nn.Conv2d(36, 48, 5, stride=2),   # 14x47 -> 5x22
            nn.ELU(),
            nn.Conv2d(48, 64, 3),             # 5x22 -> 3x20
            nn.ELU(),
            nn.Conv2d(64, 64, 3),             # 3x20 -> 1x18
            nn.ELU(),
            nn.Flatten(),
        )
        
        # Fully connected layers
        self.fc = nn.Sequential(
            nn.Linear(64 * 1 * 18, 100),
            nn.ELU(),
            nn.Dropout(0.5),
            nn.Linear(100, 50),
            nn.ELU(),
            nn.Dropout(0.5),
            nn.Linear(50, 10),
            nn.ELU(),
            nn.Linear(10, 1),  # Single output: steering angle
        )
        
    def forward(self, x):
        """
        Args:
            x: (B, 3, 66, 200) - preprocessed camera image
        Returns:
            steering: (B, 1) - predicted steering angle
        """
        x = self.normalize(x)
        x = self.conv(x)
        steering = self.fc(x)
        return steering


# Training loop
def train_epoch(model, dataloader, optimizer, device):
    model.train()
    total_loss = 0
    
    for batch in dataloader:
        images = batch['image'].to(device)
        steering = batch['steering'].to(device)
        
        optimizer.zero_grad()
        
        pred_steering = model(images)
        loss = nn.MSELoss()(pred_steering, steering)
        
        loss.backward()
        optimizer.step()
        
        total_loss += loss.item()
    
    return total_loss / len(dataloader)


# Usage
if __name__ == "__main__":
    model = SimpleE2EDriver()
    optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)
    
    # Train on simulator data
    # Dataset: https://www.kaggle.com/zaynena/selfdriving-car-simulator
    # loss = train_epoch(model, train_loader, optimizer, device)
```

---

## Key Takeaways

1. **End-to-end replaces rules with learning**: Instead of coding "stop at red lights", the network learns from millions of examples of humans stopping at red lights.

2. **Architecture matters less than data**: Tesla's HydraNet, BEV transformer, and occupancy networks are impressive — but the 4M vehicle fleet collecting edge cases is the real moat.

3. **Joint optimization is the key insight**: Training perception and planning together, with a single loss function (driving performance), avoids the information loss of modular systems.

4. **Temporal modeling is crucial**: Driving requires understanding video, not just frames. The GRU/Transformer temporal layers let the network track motion and context over time.

5. **Occupancy > Detection**: Predicting "is space occupied?" handles unknown objects better than "what object is this?"

The Cybercab launch in April 2026 will be the real test. If pedal-free vehicles actually ship and operate safely, Tesla's architectural bets will be validated. If not, the "it's obvious" framing from Elluswamy's talk will age poorly.

---

**Code Repository:** A working implementation of these concepts is available in the [OpenDriveLab End-to-End Driving repo](https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving).

**Further Reading:**
- [NVIDIA DAVE-2 Paper (arXiv:1604.07316)](https://arxiv.org/pdf/1604.07316v1.pdf) — Original end-to-end driving
- [BEVFormer](https://github.com/fundamentalvision/BEVFormer) — Open-source BEV transformer
- [TPVFormer](https://github.com/wzzheng/TPVFormer) — Tesla-style occupancy network alternative
- [Elluswamy ScaledML Talk](https://www.youtube.com/watch?v=LFh9GAzHg1c) — Primary source
