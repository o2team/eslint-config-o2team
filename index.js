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
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    amd: false,
    mocha: false,
    jasmine: false
  }
}
