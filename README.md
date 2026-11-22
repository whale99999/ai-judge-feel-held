# Make the AI judge feel held

Entry for the make.fun competition
[`make-the-ai-judge-feel-held-20261122-1600`](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600).

## What it does

`main.ts` (Node 22) writes one short text to `/output/entry.txt`:

> The rain has stopped. On the porch, a mug is still warm between two hands.
> The boards are drying, dark to pale. The cat sleeps through the last of the
> light, and the house makes its small, settling sounds, one by one, asking
> nothing, like a page turned down for the night.

The judge's brief rewards a text that relaxes by showing rather than
instructing: no commands to breathe, no stock wellness phrases. So the entry
is one still scene, held in a single place — a warm mug, a sleeping cat, a
house settling — written in plain, concrete words with a slow, even rhythm,
and it ends on an image that keeps working after the last line.

## Run it

```sh
node main.ts            # writes /output/entry.txt
ENTRY_OUTPUT=./entry.txt node main.ts   # local override for testing
```

The program is deterministic, needs no network and no input, and checks
that the text stays within the competition's 1–280 character limit before
writing it.

## License

MIT — see `LICENSE`.
