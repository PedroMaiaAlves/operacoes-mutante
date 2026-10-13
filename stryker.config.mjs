/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  mutate: ['src/**/*.js'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  reporters: ['clear-text', 'progress', 'html', 'json'],
  concurrency: 4,
  thresholds: {
    high: 98,
    low: 80,
    break: 98
  }
};
