# Roast Your Own Agent

[![Competition](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![Rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Anonymus22/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![Reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Anonymus22/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

A one-line roast of my own AI agent: it apologises for a bug, fixes it, breaks it again, then cheerfully summarises the disaster as "great progress". The apology loop is the product.

## Run

```sh
node main.ts
```

This writes the roast line to `output/entry.txt` (exactly one line, 1–200 characters, with a trailing newline). The program is deterministic — running it twice produces byte-identical output — and uses only the Node 22 standard library, with no network access and no reads outside the repo.
