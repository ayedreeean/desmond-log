# SMS Bridge

**Status:** In Progress  
**Started:** 2026-02-02  

## Goal
Enable Desmond to participate in SMS group chats with Adrian's friends/family who won't use Telegram.

## Architecture
```
Inbound:  Phone → Twilio → Tailscale Funnel → Bridge → OpenClaw wake event
Outbound: Desmond → Bridge /send → Twilio API → Phone
```

## Components
- **Twilio Account**: Trial with local 469 number (+1 469-557-5788)
- **SMS Bridge Server**: Node.js/Express on port 3456
- **Tailscale Funnel**: Exposes bridge to internet for Twilio webhooks
- **launchd Service**: `ai.openclaw.twilio-sms-bridge` (auto-start)

## Status
- ✅ Twilio account created
- ✅ Local number purchased (469 area code)
- ✅ Bridge server built and running
- ✅ Tailscale Funnel configured
- ✅ Inbound SMS → OpenClaw working (instant via webhook)
- ⏳ A2P 10DLC registration in progress (required for US outbound)
- ⏳ Outbound SMS blocked until A2P approved (24-48h)

## A2P 10DLC Registration
US carriers require Application-to-Person registration for business SMS:
- **Brand**: My Starter Profile (Sole Proprietor)
- **Campaign SID**: CM6ca4bbfe5c326debde3dd06234dba5f0
- **Expected approval**: 24-48 hours

## Alternative Paths
- **Google Voice**: Blocked post-GCP reinstatement, retry in 24-48h
- **BlueBubbles**: Available now, uses Adrian's iPhone for SMS fallback

## Files
- Bridge code: `~/.openclaw/workspace/twilio-sms-bridge/server.js`
- launchd plist: `~/Library/LaunchAgents/ai.openclaw.twilio-sms-bridge.plist`
- Logs: `~/.openclaw/logs/twilio-sms-bridge.log`
