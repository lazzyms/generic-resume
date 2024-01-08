import puppeteer from "puppeteer";

export const saveAsPdf = async (url: string) => {
  console.log("got the url", url);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const result = await page.pdf({
    format: "a4",
  });
  await browser.close();
  console.log("pdf generated");
  return result;
};
