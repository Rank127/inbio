// Generate pitch-deck.pdf and pitch-cover.png for embedding on /invest

import puppeteer from "puppeteer-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { existsSync, writeFileSync } from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_PATH = path.resolve(__dirname, "pitch-deck.html");
const SITE_PUBLIC = path.resolve(__dirname, "..", "public");
const PDF_PATH = path.resolve(SITE_PUBLIC, "docs", "pitch-deck.pdf");
const COVER_PATH = path.resolve(SITE_PUBLIC, "images", "pitch-cover.png");

const EDGE_CANDIDATES = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const edgePath = EDGE_CANDIDATES.find((p) => existsSync(p));
if (!edgePath) { console.error("Edge not found."); process.exit(1); }

const browser = await puppeteer.launch({
  executablePath: edgePath,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(HTML_PATH).href, { waitUntil: "networkidle0" });
  await page.evaluateHandle("document.fonts.ready");

  // 1. Cover thumbnail — screenshot of first .slide
  const cover = await page.$(".slide");
  const coverBuf = await cover.screenshot({ type: "png" });
  writeFileSync(COVER_PATH, coverBuf);
  console.log(`Cover  → ${COVER_PATH} (${(coverBuf.length / 1024).toFixed(0)} KB)`);

  // 2. PDF — full deck, one slide per page (HTML uses @page { size: 1280px 720px })
  const pdfBuf = await page.pdf({
    width: "1280px",
    height: "720px",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  writeFileSync(PDF_PATH, pdfBuf);
  console.log(`PDF    → ${PDF_PATH} (${(pdfBuf.length / 1024).toFixed(0)} KB)`);
} finally {
  await browser.close();
}
