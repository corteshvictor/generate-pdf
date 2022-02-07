import puppeteer from 'puppeteer';

const generatePdf = async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle0',
    });

    const pdf = await page.pdf({
      printBackground: true,
      format: 'Letter',
    });

    await browser.close();

    res.statusCode = 200;
    res.setHeader('contentType', 'application/pdf');

    return res.send(pdf);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

export default generatePdf;
