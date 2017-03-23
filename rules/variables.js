/**
 * These rules relate to variable declarations
 */
module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    'init-declarations': 'off',

    // disallow shadowing of variables inside of catch
    'no-catch-shadow': 'off',

    // disallow deleting variables
    'no-delete-var': 'error',

    // disallow labels that are variables names
    'no-label-var': 'error',

    // disallow specific global variables
    'no-restricted-globals': 'off',

    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'error',

    // disallow shadowing of restricted names
    'no-shadow-restricted-names': 'error',

    // disallow undeclared variables
    'no-undef': 'error',

    // disallow initializing to undefined
    'no-undef-init': 'error',

    // disallow use of undefined variable
    'no-undefined': 'error',

    // disallow unused variables
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],

    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  }
}
