// const puppeteer = require('puppeteer');
//
// (async () => {
//     const browser = await puppeteer.launch({headless: false, slowMo: 250});
//     const page = await browser.newPage();
//     await page.goto('https://bikroy.com/en/users/login?action=login&stack=webapp&redirect-url=/');
//     await page.type('#input_email', 'lodalos505@brayy.com');
//     await page.type('#input_password', 'lodalos505@brayy.com');
//     await page.click('.gtm-email-login');
//     await page.waitForSelector('.hide-for-inactive', {visible: true});
//     await page.screenshot({ path: 'images/example.png' });
//
//     // await browser.close();
// })();

// temp mail = lodalos505@brayy.com
// temp pass = lodalos505@brayy.com
// temp name = text

//first got to the url https://bikroy.com
//input the email --> #input_email
//input the password --> #input_password
//click the login button --> .gtm-email-login
//wait for .hide-for-inactive to be visible
//then take screenshot


const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://svelte.dev/');

    const getTitle = await page.evaluate(()=>{
        const grabTitle = document.querySelector('.svelte-1u1foo2 h3');
        const title = grabTitle.innerHTML;
        return title;
    })

    console.log(getTitle);

    await browser.close();
})();

