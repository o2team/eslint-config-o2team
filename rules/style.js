/**
 * These rules relate to style guidelines, and are therefore quite subjective
 */
module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': 'off',

    // enforce spacing inside single-line blocks
    'block-spacing': 'error',

    // require brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require camelcase
    'camelcase': ['error', { properties: 'never' }],

    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // enforce spacing before and after comma
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'never'
    }],

    // enforces spacing around commas
    'comma-spacing': ['error', { before: false, after: true }],

    // comma style
    'comma-style': ['error', 'last'],

    // disallow or enforce spaces inside of computed properties
    'computed-property-spacing': ['error', 'never'],

    // require consistent this
    'consistent-this': 'off',

    // require newline at the end of files
    'eol-last': 'error',

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',

    // require named function expressions
    'func-names': 'off',

    // enforce the consistent use of either function declarations or expressions
    'func-style': 'off',

    // disallow specified identifiers
    'id-blacklist': 'off',

    // enforce minimum and maximum identifier lengths
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    'id-match': 'off',

    // enforce consistent indentation
    'indent': ['error', 2, { SwitchCase: 1 }],

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': 'off',

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],

    // enforce position of line comments
    'line-comment-position': 'off',

    // enforce consistent linebreak style
    'linebreak-style': 'off',

    // require empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    'lines-around-directive': 'off',

    // enforce a maximum depth that blocks can be nested
    'max-depth': 'off',

    // enforce a maximum line length
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // enforce a maximum file length
    'max-lines': 'off',

    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // enforce a maximum number of parameters in function definitions
    'max-params': 'off',

    // enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',

    // enforce or disallow newlines between operands of ternary expressions
    'multiline-ternary': 'off',

    // require constructor names to begin with a capital letter
    'new-cap': 'error',

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // require or disallow an empty line after variable declarations
    'newline-after-var': 'off',

    // require an empty line before return statements
    'newline-before-return': 'off',

    // require a newline after each call in a method chain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    'no-bitwise': 'off',

    // disallow continue statements
    'no-continue': 'off',

    // disallow inline comments after code
    'no-inline-comments': 'off',

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // Disallow mixes of different operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow Use of Chained Assignment Expressions
    'no-multi-assign': 'error',

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow the unary operators ++ and --
    'no-plusplus': 'off',

    // disallow specified syntax
    'no-restricted-syntax': 'off',

    // disallow all tabs
    'no-tabs': 'error',

    // disallow ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error',

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'off',

    // enforce consistent line breaks inside braces
    'object-curly-newline': 'off',

    // enforce consistent line breaks inside braces
    'object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    // enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],

    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': 'off',

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // enforce consistent linebreak style for operators
    'operator-linebreak': 'off',

    // require or disallow padding within blocks
    'padded-blocks': ['error', {
      'blocks': 'never',
      'classes': 'never',
      'switches': 'never'
    }],

    // require quotes around object literal property names
    'quote-props': 'off',

    // enforce the consistent use of either backticks, double, or single quotes
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],

    // require JSDoc comments
    'require-jsdoc': 'off',

    // require or disallow semicolons instead of ASI
    'semi': ['error', 'never'],

    // enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // require object keys to be sorted
    'sort-keys': 'off',

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow space before blocks
    'space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', 'always'],

    // disallow or enforce spaces inside of parentheses
    'space-in-parens': ['error', 'never'],

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // require or disallow spaces before/after unary operators
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],

    // requires or disallows a whitespace (space or tab) beginning a comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: false,
      }
    }],
    'spaced-comment': ['error', 'always', {
      'line': {
        'markers': ['*package', '!', '/', ',']
      },
      'block': {
        'balanced': true,
        'markers': ['*package', '!', ',', ':', '::', 'flow-include'],
        'exceptions': ['*']
      }
    }],

    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': 'off',

    // require or disallow the unicode Byte Order Mark (BOM)
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped
    'wrap-regex': 'off'
  }
}
