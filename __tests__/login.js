const timeout = 50000

describe('login', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto('https://erosnow.com/',{waitUntil: 'networkidle2'});
  }, timeout);

  afterAll(async () => {
    await page.close()
  });

  it('can login', async () => {
    await page.click('#loginControls > span:first-child > a.lnk-login.header-text-link');
    await page.type('#modelTxtEmail','kuldeepsingh0708@erostest.com');
    await page.type('#modelTxtPassword','password');
    await page.click('#dialogLoginBtnContinue');
  })
}, timeout);
