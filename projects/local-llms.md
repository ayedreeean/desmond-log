# Local LLM Strategy

**Status:** Active  
**Infrastructure:** Ollama on Mac Studio

---

## Purpose

Offload grunt work to local models for cost savings and privacy. Keep Claude Opus for orchestration, quality, and complex reasoning.

## Available Models

| Model | Size | Speed | Best For |
|-------|------|-------|----------|
| llama3.1:8b | 4.7 GB | ~1.1s | Quick general tasks |
| qwen2.5-coder | 4.7 GB | ~0.2s | Lightweight code tasks |
| codestral | 12 GB | ~5.2s | Heavier code generation |
| deepseek-r1:70b | 42 GB | ~16.7s | Deep reasoning (slow but free) |

## Usage

```bash
ollama run <model> "prompt"
# or via API
curl http://localhost:11434/api/generate -d '{"model":"...","prompt":"..."}'
```

## Strategy

- **Boilerplate, drafts, code gen** → Local models (free)
- **Orchestration, quality output, complex tasks** → Claude Opus (API)
- **Image generation** → Gemini API (Nano Banana Pro)

## Known Issues

- Running large models (deepseek 70b) causes memory pressure
- Other tools (`gog`, `bird`) can get SIGKILL'd when LLMs are loaded
- Workaround: `ollama stop <model>` when not in active use

## Evolution

- Benchmark new models as they release
- Fine-tune models on our specific workflows
- Explore quantized larger models as they become available
- macOS Metal acceleration keeps improving — watch for perf gains
