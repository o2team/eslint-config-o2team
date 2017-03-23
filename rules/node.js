/**
 * These rules relate to code running in Node.js, or in browsers with CommonJS
 */
module.exports = {
  rules: {
    // enforce return after callback
    'callback-return': 'off',

    // enforce require() on the top-level module scope
    'global-require': 'off',

    // enforce callback error handling
    'handle-callback-err': 'off',

    // disallow require calls to be mixed with regular variable declarations
    'no-mixed-requires': 'off',

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation when using __dirname and __filename
    'no-path-concat': 'error',

    // disallow process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    // disallow Node.js modules
    'no-restricted-modules': 'off',

    // disallow synchronous methods
    'no-sync': 'off',
  },
  env: {
    node: true
  }
}
