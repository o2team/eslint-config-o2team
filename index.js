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
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  }
}
