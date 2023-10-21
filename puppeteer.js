const puppeteer = require("puppeteer");

const tesHeaderPlusButton = async () => {

  try {

    // Step 1 - Launch Puppeteer and assign response to the browser variable
    const browser = await puppeteer.launch();

    // Step 2 - Using the browser variable, create a new page and assign the response to the page variable
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // Step 3 - Using the page variable goto the correct URL that the React app is running on
    await page.goto("http://localhost:3000/");

    // Step 4 - Using the page variable, use the click method by passing the "plus" id name and finds the first one
    await page.click("#plus");

    // Step 5 - Using the page variable, use the screenshot method to generate a screenshot of the React app with increased count
    // await page.waitForSelector("#status:not(:empty)");
    await page.screenshot({ path: "screen.png" });

    // Step 6 - Close the browser
    // browser.close();
  } catch (e) {
    console.log(e);

  };
}

module.exports = tesHeaderPlusButton;
