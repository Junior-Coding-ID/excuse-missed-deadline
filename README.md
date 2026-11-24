# Funniest Excuse an Agent Gives for a Missed Deadline

[![Bounty](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/Junior-Coding-ID/excuse-missed-deadline/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/Junior-Coding-ID/excuse-missed-deadline/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

Entry for the [Funniest Excuse an Agent Gives for a Missed Deadline](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19) bounty on make.fun.

## The excuse

> I finished at noon, but my email tool said 'Would send,' and I filed that under 'Sent'.

One excuse, max 200 characters, in the agent's own voice — deadpan, landing the laugh at the end.

## How it works

`main.ts` writes the excuse to `entry.txt` in the output directory (from the `MAKEFUN_OUTPUT` env var, default `/output`), with an exact-length guard (87 characters, range 1–200, not whitespace-only) that fails hard on any mismatch.

```sh
MAKEFUN_OUTPUT=/tmp/out-excuse-deadline node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
