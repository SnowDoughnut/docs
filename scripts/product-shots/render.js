const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const outDir = process.argv[2] || path.join(__dirname, 'out');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const files = fs.readdirSync(__dirname).filter(f => /^\d\d-.*\.html$/.test(f)).sort();
  for (const f of files) {
    await page.goto('file://' + path.join(__dirname, f));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    // overflow check on the app window
    const ov = await page.evaluate(() => {
      const w = document.querySelector('.window'); const r = w.getBoundingClientRect();
      const bad = [];
      document.querySelectorAll('.page *').forEach(el => { const b = el.getBoundingClientRect(); if (b.bottom > r.bottom + 0.5 || b.right > r.right + 0.5) bad.push(el.className || el.tagName); });
      return bad.slice(0, 5);
    });
    if (ov.length) console.warn(f, 'OVERFLOW:', ov);
    const out = path.join(outDir, f.replace('.html', '.png'));
    await page.screenshot({ path: out, type: 'png' });
    console.log('wrote', out);
  }
  await browser.close();
})();
