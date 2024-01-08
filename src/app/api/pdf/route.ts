import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

const saveAsPdf = async (url: string) => {
  console.log("got the url", url);
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const result = await page.pdf({
    format: "a4",
    printBackground: true,
  });
  await browser.close();

  return result;
};

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const url = sp.get("url");

  const pdf = await saveAsPdf(url as string);
  // const pdfBase64 = Buffer.from(pdf).toString("base64");
  return NextResponse.json(
    { pdf: pdf.toString("base64") },
    {
      status: 200,
      headers: {
        "Content-Disposition": 'attachment; filename="file.pdf"',
        "Content-Type": "application/pdf",
      },
    }
  );
}
