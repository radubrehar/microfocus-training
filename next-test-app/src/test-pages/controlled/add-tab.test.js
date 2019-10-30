describe('TabStrip controlled add tab', () => {
  beforeAll(async () => {
    await page.goto(`${PREFIX}/controlled/add-tab`);
  });

  it('should correctly add new tab', async () => {
    await page.reload();

    // expect(await page.screenshot()).toMatchImageSnapshot();

    await jestPuppeteer.debug();
    let tabs = await page.$$('.TabStripTab');

    expect(tabs.length).toEqual(2);

    const button = await page.$('button');
    await button.click();

    tabs = await page.$$('.TabStripTab');
    expect(tabs.length).toEqual(3);

    // expect(await page.screenshot()).toMatchImageSnapshot();

    await button.click();
    tabs = await page.$$('.TabStripTab');
    expect(tabs.length).toEqual(4);

    // expect(await page.screenshot()).toMatchImageSnapshot();
    // const tabs = await page.$$('.TabStripTab');

    // expect(tabs.length).toEqual(2);

    // const classes = await page.evaluate(tab => [...tab.classList], tabs[1]);
    // expect(classes.includes('TabStripTab--selected')).toEqual(true);

    // await tabs[0].click();
    // expect(await page.screenshot()).toMatchImageSnapshot();
  });
});
