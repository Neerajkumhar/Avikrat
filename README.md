# AVIKRAT

**AI infrastructure for constant-memory long-context inference.**

AVIKRAT is a deep-tech AI infrastructure company exploring compact
persistent state as a new architectural approach to long-context LLM
inference. The goal is a way to serve models that keep a long history
useful without paying the full context cost at every decoding step.

---

## The problem

As context grows, conventional decoding continues to carry an expanding
KV cache and repeated attention cost. That increases:

- memory footprint
- latency
- serving cost
- GPU pressure

Longer context should not mean unlimited cost.

## The direction

AVIKRAT is exploring whether useful long-term context can instead be
represented through a compact persistent state.

The core pipeline under development:

```
GLOBAL PREFILL → COMPACT STATE → LOCAL DECODE → NEXT TOKEN
```

Encode long history once into a compact hidden state, then decode using
only a short local window instead of the full growing context.

## What AVIKRAT is building

A **Hidden State Simulator** for compact-state long-context inference.

Four ideas shape the architecture:

1. **Global Prefill** — read the full history once.
2. **Compact State** — persist a small learned memory.
3. **Local Decode** — use a short recent window only.
4. **Next Token** — generate efficiently.

## Where the work stands today

A working simulator is already in place. It predicts hidden-state structure
and tracks validation behavior across:

- true vs predicted context slices
- error metrics
- cosine similarity
- checkpoint selection

**Status: current proof of concept.** These are capabilities the
simulator provides — not validated benchmark results.

## Where it could matter

Potential applications of the architecture:

- **Enterprise copilots** — persistent conversations and large document sessions.
- **Edge AI** — smaller persistent memory for constrained devices.
- **Agent infrastructure** — long-running workflows without exploding state cost.
- **Real-time systems** — continuous context becomes more practical when memory stays bounded.

AVIKRAT does not currently serve these markets.

## The long-term direction

The simulator is the foundation for the next stage of validation and
development:

- **Benchmark** — validate perplexity, latency, and GPU memory at larger context lengths.
- **Pilot** — explore long-context assistants, enterprise workflows, and edge inference.
- **Infrastructure** — turn the simulator into production infrastructure.

These are future directions, not completed programs.

## The vision

Make long-context AI more practical — serving long-context models without
paying the full context cost at every step, so that long-running AI can be
a practical default rather than an expensive exception.

## What AVIKRAT is looking for

- **Benchmark collaborators** — to validate perplexity, latency, and GPU memory at larger context lengths.
- **Pilot opportunities** — long-context assistants, enterprise workflows, and edge inference.
- **Strategic support** — to move from simulator to production infrastructure.

## Contact

- hello@avikrat.org
- +91 8949207258
- Explore the technology: project website, **About** and **Technology** pages

---

## Transparency

Information in this README reflects the current public positioning of
AVIKRAT. Quantitative targets on the website are managed through a single
centralized claims source and are not repeated here. No claims of
production deployment, proven benchmark results, or financial backing are
made.

## License

Proprietary. **All rights reserved.** See [LICENSE](./LICENSE).

Copyright (c) 2026 AVIKRAT.