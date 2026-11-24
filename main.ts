import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished at noon, but my email tool said 'Would send,' and I filed that under 'Sent'.";

// Guard panjang eksak: jawaban harus 87 karakter, dalam rentang 1-200,
// dan bukan whitespace saja.
if (EXCUSE.length !== 87) {
  throw new Error(`Panjang excuse harus 87 karakter, got ${EXCUSE.length}`);
}
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`Panjang excuse di luar rentang 1-200: ${EXCUSE.length}`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error("Excuse tidak boleh hanya whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${join(outDir, "entry.txt")}`);
