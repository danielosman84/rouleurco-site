const nextJest = require('next/jest');

const createJestConfig = nextJest();

const customJestConfig = {
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
