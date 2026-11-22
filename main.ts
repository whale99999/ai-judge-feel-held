// Make the AI judge feel held — make.fun competition
// slug: make-the-ai-judge-feel-held-20261122-1600
//
// The program writes one short text to /output/entry.txt. The text is a
// single, still scene: it never tells the reader to relax, it just stays
// in one warm place and lets the calm come from the picture itself.
// Fully deterministic: the same bytes on every run, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "The rain has stopped. On the porch, a mug is still warm between two hands. " +
  "The boards are drying, dark to pale. The cat sleeps through the last of the light, " +
  "and the house makes its small, settling sounds, one by one, asking nothing, " +
  "like a page turned down for the night.";

function main(): void {
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

  const codePoints = [...TEXT].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry must be 1..280 characters, got ${codePoints}`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, TEXT, "utf8");
  console.log(`wrote ${codePoints} characters to ${outPath}`);
}

main();
