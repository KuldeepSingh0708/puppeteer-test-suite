const timeout = 50000
describe('logout', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto('https://erosnow.com/',{waitUntil: 'networkidle2'});
  }, timeout);

  afterAll(async () => {
    await page.close()
  });

  it('can logout', async () => {
    await page.click('#loginControls > span:first-child > a.lnk-login.header-text-link');
    await page.type('#modelTxtEmail','kuldeep@erostest.com');
    await page.type('#modelTxtPassword','password');
    await page.click('#dialogLoginBtnContinue');
    await page.waitFor(5000);

    await page.click('#contentWrapper > div.header > div.header-inner > ul.header-menu.menu-exp > li.head-menu-item.head-menu-tv > a');
    await page.waitFor(5000);
    await page.click('#slides > div > div > div:nth-child(1)')
    await page.waitFor(5000);
    await page.click('#btnVideoPlay');
    await page.waitFor(50000);

    await page.hover('#userInfo');
    const element = await page.$('#userInfo > div > div.menu-drop-down');
    await page.waitFor(5000);
    const logout = await page.$('#logout');
    await logout.click();
    await page.waitFor(5000);

  }, timeout);
}, timeout);
