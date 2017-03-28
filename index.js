module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './rules/es6'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    amd: false,
    mocha: false,
    jasmine: false
  }
}
