/**
 * These rules relate to better ways of doing things to help you avoid problems
 */
module.exports = {
  rules: {
    // enfores getter/setter pairs in objects
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array’s methods
    'array-callback-return': 'error',

    // treat var as block scoped
    'block-scoped-var': 'error',

    // enforce that class methods utilize this
    'class-methods-use-this': 'error',

    // limit cyclomatic complexity
    'complexity': 'off',

    // require return statements to either always or never specify values
    'consistent-return': 'off',

    // require following curly brace conventions
    'curly': ['error', 'multi-line'],

    // require default case in switch statements
    'default-case': 'off',

    // enforce newline before and after dot
    'dot-location': ['error', 'property'],

    // require dot notation
    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of === and !==
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    // require guarding for-in
    'guard-for-in': 'off',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'off',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',

    // disallow return before else
    'no-else-return': 'error',

    // disallow empty functions, except for standalone funcs/arrows
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // disallow null comparisons
    'no-eq-null': 'off',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow extending of native objects
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // disallow floating decimals
    'no-floating-decimal': 'error',

    // disallow assignment to native objects or read-only global variables
    'no-global-assign': 'error',

    // disallow the type conversion with shorter notations
    'no-implicit-coercion': 'off',

    // disallow variable and function declarations in the global scope
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    'no-iterator': 'error',

    // disallow labeled statements
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow functions in loops
    'no-loop-func': 'error',

    // disallow magic numbers
    'no-magic-numbers': 'off',

    // disallow multiple spaces
    'no-multi-spaces': 'error',

    // disallow multiline strings
    'no-multi-str': 'error',

    // disallow new for side effects
    'no-new': 'error',

    // disallow function constructor
    'no-new-func': 'error',

    // disallow primitive wrapper instances
    'no-new-wrappers': 'error',

    // disallow use of (old style) octal literals
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    'no-param-reassign': 'off',

    // disallow use of __proto__ property
    'no-proto': 'error',

    // disallow variable redeclaration
    'no-redeclare': 'error',

    // disallow certain object properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],

    // disallow assignment in return statement
    'no-return-assign': 'error',

    // disallows unnecessary return await
    'no-return-await': 'error',

    // disallow script URLs
    // such as: location.href = 'javascript:void(0)'
    'no-script-url': 'error',

    // disallow self assignment
    'no-self-assign': 'error',

    // disallow self compare
    'no-self-compare': 'error',

    // disallow use of comma operator
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'off',

    // disallow unused expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],

    // disallow unused labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',

    // disallow useless string concatenation
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    'no-useless-escape': 'error',

    // disallow redundant return statements
    'no-useless-return': 'error',

    // disallow use of void operator
    'no-void': 'error',

    // disallow warning comments
    'no-warning-comments': 'off',

    // disallow with statements
    'no-with': 'error',

    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],

    // require radix parameter
    'radix': 'off',

    // disallow async functions which have no await expression
    'require-await': 'off',

    // require variable declarations to be at the top of their scope
    'vars-on-top': 'off',

    // require IIFEs to be wrapped
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],

    // require or disallow Yoda conditions
    'yoda': ['error', 'never']
  }
}
