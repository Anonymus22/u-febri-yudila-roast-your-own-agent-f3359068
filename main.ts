// Roast Your Own Agent — one-line roast entry.
// Deterministic, stdlib only, no network, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROAST =
  "My agent apologised for the bug, fixed it, broke it worse, then cheerfully called the disaster 'great progress' -- the apology loop is the product.";

if (ROAST.length === 0 || ROAST.trim().length === 0) {
  throw new Error("Roast line must not be empty or only whitespace.");
}
if (ROAST.length > 200) {
  throw new Error(`Roast line is ${ROAST.length} chars, over the 200-char limit.`);
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("Roast line must be exactly one line.");
}

const outPath = join(dirname(fileURLToPath(import.meta.url)), "output", "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST + "\n", "utf8");
console.log(`Wrote ${ROAST.length}-char roast to ${outPath}`);
