const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
require('@babel/polyfill');

// jest.setTimeout(10000000);
