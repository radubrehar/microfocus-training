const width = 1400;
const height = 1200;
module.exports = {
  launch: {
    // dumpio: true,
    defaultViewport: {
      width,
      height,
    },
    devtools: true,
    headless: true, //process.env.HEADLESS !== 'false',
    // args: [`--window-size=${width},${height}`],
  },
  browserContext: 'default',
};
