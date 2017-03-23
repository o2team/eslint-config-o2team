/**
 * These rules relate to possible syntax or logic errors in javascript
 */
module.exports = {
  rules: {
    // disallow await inside of loops
    'no-await-in-loop': 'error',

    // disallow comparing against negative zero
    'no-compare-neg-zero': 'off',

    // disallow assignment operators in conditional statements
    'no-cond-assign': ['error', 'always'],

    // disallow the use of console
    'no-console': 'off',

    // disallow constant expressions in conditions
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // disallow use of debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',

    // disallow duplicate keys in object literals
    'no-dupe-keys': 'error',

    // disallow a duplicate case label
    'no-duplicate-case': 'error',

    // disallow empty block statements
    'no-empty': 'error',

    // disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',

    // disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    'no-extra-parens': ['error', 'functions'],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow reassigning function declarations
    'no-func-assign': 'error',

    // disallow variable or function declarations in nested blocks
    'no-inner-declarations': ['error', 'functions'],

    // disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace
    'no-irregular-whitespace': 'error',

    // disallow calling global object properties as functions
    'no-obj-calls': 'error',

    // Disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'off',

    // disallow multiple spaces in regular expression literals
    'no-regex-spaces': 'error',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',

    // disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 'error',

    // disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // require calls to isNaN() when checking for NaN
    'use-isnan': 'error',

    // enforce valid JSDoc comments
    'valid-jsdoc': 'off',

    // enforce comparing typeof expressions against valid strings
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }
}
