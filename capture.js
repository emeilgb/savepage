const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.reveone.cn/article/99827d5d-4d4f-4a52-ae43-92e543ce46b3', {waitUntil: 'networkidle2'});

  const content = await page.content();
  // 保存为HTML文件
  const fs = require('fs');
  fs.writeFileSync('page_snapshot.html', content);

  await browser.close();
})();
