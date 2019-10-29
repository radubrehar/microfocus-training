describe('TabStrip uncontrolled', () => {
  beforeAll(async () => {
    await page.goto(`${PREFIX}/uncontrolled`);
  });

  it('should correctly apply defaultSelectedTab', async () => {
    await page.reload();

    expect(await page.screenshot()).toMatchImageSnapshot();

    const tabs = await page.$$('.TabStripTab');

    expect(tabs.length).toEqual(2);

    const classes = await page.evaluate(tab => [...tab.classList], tabs[1]);
    expect(classes.includes('TabStripTab--selected')).toEqual(true);

    await tabs[0].click();
    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});
