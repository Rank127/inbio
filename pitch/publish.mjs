// One-command rebuild + deploy.
// Runs build-pptx.mjs and build-pdf-and-cover.mjs, then copies the HTML and
// PPTX into ../public/docs so the /invest page picks up the new versions.

import { spawnSync } from "node:child_process";
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_PUBLIC = path.resolve(__dirname, "..", "public");

function run(label, script) {
  console.log(`\n━━ ${label} ━━`);
  const r = spawnSync("node", [script], { stdio: "inherit", cwd: __dirname });
  if (r.status !== 0) {
    console.error(`✗ ${script} exited with code ${r.status}`);
    process.exit(r.status ?? 1);
  }
}

function copy(src, dst) {
  mkdirSync(path.dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  const kb = (statSync(dst).size / 1024).toFixed(0);
  console.log(`  ${path.relative(__dirname, src)} → ${path.relative(__dirname, dst)} (${kb} KB)`);
}

run("Build PPTX", "build-pptx.mjs");
run("Build PDF + cover", "build-pdf-and-cover.mjs");

console.log("\n━━ Copy HTML & PPTX into ../public/docs ━━");
copy(
  path.resolve(__dirname, "pitch-deck.html"),
  path.resolve(SITE_PUBLIC, "docs", "pitch-deck.html"),
);
copy(
  path.resolve(__dirname, "pitch-deck.pptx"),
  path.resolve(SITE_PUBLIC, "docs", "pitch-deck.pptx"),
);

console.log("\n✓ Published. Refresh /invest to see updates.");
