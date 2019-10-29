module.exports = {
  testMatch: ['<rootDir>/src/pages/**/*.test.js'],
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['<rootDir>/jest-puppeteer-setup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    PREFIX: 'http://localhost:3000'
  }
};
