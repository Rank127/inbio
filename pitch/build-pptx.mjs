// Build pitch-deck.pptx from pitch-deck.html
// Renders each <section class="slide"> to a 2× PNG via headless Edge,
// then embeds each as a full-bleed image in a 16:9 PPTX.

import puppeteer from "puppeteer-core";
import pptxgen from "pptxgenjs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { existsSync, mkdirSync, writeFileSync, rmSync } from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_PATH = path.resolve(__dirname, "pitch-deck.html");
const OUT_PATH = path.resolve(__dirname, "pitch-deck.pptx");
const TMP_DIR = path.resolve(__dirname, ".pptx-tmp");

const EDGE_CANDIDATES = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const edgePath = EDGE_CANDIDATES.find((p) => existsSync(p));
if (!edgePath) {
  console.error("Microsoft Edge not found in standard locations.");
  process.exit(1);
}

console.log(`Using Edge at: ${edgePath}`);
console.log(`Loading: ${HTML_PATH}`);

const browser = await puppeteer.launch({
  executablePath: edgePath,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  // 2× device scale = retina-quality screenshots
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(HTML_PATH).href, { waitUntil: "networkidle0" });

  // Wait for fonts and images to settle
  await page.evaluateHandle("document.fonts.ready");

  const slides = await page.$$(".slide");
  console.log(`Found ${slides.length} slides`);

  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.333 × 7.5 inches (16:9)
  pres.title = "iNBIO Investor Pitch";
  pres.author = "International BioRefineries";
  pres.company = "iNBIO";
  pres.subject = "Reg D 506(c) Investor Pitch";

  if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true });
  mkdirSync(TMP_DIR, { recursive: true });

  for (let i = 0; i < slides.length; i++) {
    const buffer = await slides[i].screenshot({ type: "png", omitBackground: false });
    const fname = path.join(TMP_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);
    writeFileSync(fname, buffer);
    const slide = pres.addSlide();
    slide.background = { color: "FAFAF7" };
    slide.addImage({ path: fname, x: 0, y: 0, w: 13.333, h: 7.5 });
    process.stdout.write(`  slide ${String(i + 1).padStart(2, "0")} captured (${(buffer.length / 1024).toFixed(0)} KB)\n`);
  }

  await pres.writeFile({ fileName: OUT_PATH });
  console.log(`\nWrote: ${OUT_PATH}`);

  // Clean up temp PNGs
  rmSync(TMP_DIR, { recursive: true });
} finally {
  await browser.close();
}
