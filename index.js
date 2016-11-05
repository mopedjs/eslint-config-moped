const ERROR = 2;
const WARNING = 1;

module.exports = {
  parser: require.resolve('babel-eslint'),
  rules: {
    // possible errors
    'comma-dangle': [WARNING, 'always-multiline'],
    'no-constant-condition': [ERROR],
    'no-control-regex': [ERROR],
    'no-debugger': [ERROR],
    'no-dupe-args': [ERROR],
    'no-dupe-keys': [ERROR],
    'no-duplicate-case': [ERROR],
    'no-empty-character-class': [ERROR],
    'no-empty': [ERROR],
    'no-extra-boolean-cast': [ERROR],
    'no-extra-parens': [ERROR, 'functions'],
    'no-extra-semi': [ERROR],
    'no-func-assign': [ERROR],
    'no-invalid-regexp': [ERROR],
    'no-irregular-whitespace': [ERROR],
    'no-negated-in-lhs': [ERROR],
    'no-obj-calls': [ERROR],
    'no-regex-spaces': [ERROR],
    'no-sparse-arrays': [ERROR],
    'no-unexpected-multiline': [ERROR],
    'no-unreachable': [ERROR],
    'use-isnan': [ERROR],
    'valid-typeof': [ERROR],

    // best practices
    'accessor-pairs': [ERROR],
    'block-scoped-var': [ERROR],
    'curly': [ERROR, 'multi-line'],
    'dot-location': [ERROR, 'property'],
    'eqeqeq': [ERROR, 'allow-null'],
    'no-alert': [ERROR],
    'no-caller': [ERROR],
    'no-labels': [ERROR, {allowLoop: true, allowSwitch: true}],
    'no-unused-labels': [ERROR],
    'no-empty-pattern': [ERROR],
    'no-extend-native': [ERROR],
    'no-extra-bind': [ERROR],
    'no-fallthrough': [ERROR],
    'no-floating-decimal': [ERROR],
    'no-implied-eval': [ERROR],
    'no-invalid-this': [WARNING],
    'no-iterator': [ERROR],
    'no-lone-blocks': [ERROR],
    'no-loop-func': [ERROR],
    'no-multi-spaces': [ERROR],
    'no-multi-str': [ERROR],
    'no-native-reassign': [ERROR],
    'no-new-wrappers': [ERROR],
    'no-new': [ERROR],
    'no-octal-escape': [ERROR],
    'no-octal': [ERROR],
    'no-proto': [ERROR],
    'no-script-url': [ERROR],
    'no-self-compare': [ERROR],
    'no-throw-literal': [ERROR],
    'no-unused-expressions': [ERROR],
    'no-useless-call': [ERROR],
    'no-useless-concat': [ERROR],
    'no-void': [ERROR],
    'no-warning-comments': [WARNING],
    'no-with': [ERROR],
    'radix': [ERROR],
    'yoda': [ERROR, 'never'],

    // strict mode
    'strict': [ERROR, 'never'], // Assumes use of babel-plugin-transform-strict-mode

    // variables
    'no-delete-var': [ERROR],
    'no-label-var': [ERROR],
    'no-shadow-restricted-names': [ERROR],
    'no-undef-init': [ERROR],
    'no-undef': [ERROR],
    // TODO: no-unused-vars does not work with JSX or react-pug
    // 'no-unused-vars': [ERROR, {vars: 'all', args: 'none'}],
    'no-use-before-define': [ERROR, 'nofunc'],

    // node.js
    'callback-return': [ERROR],
    'handle-callback-err': [ERROR],
    'no-new-require': [ERROR],

    // stylistic issues
    'array-bracket-spacing': [ERROR, 'never'],
    'block-spacing': [ERROR, 'always'],
    'brace-style': [ERROR, '1tbs', {allowSingleLine: true}],
    'comma-spacing': [ERROR, {before: false, after: true}],
    'comma-style': [ERROR, 'last'],
    'computed-property-spacing': [ERROR, 'never'],
    'consistent-this': [ERROR, 'self'],
    'eol-last': [ERROR],
    'func-style': [WARNING, 'declaration'],
    'indent': [ERROR, 2, {SwitchCase: WARNING}],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': [ERROR, {beforeColon: false, afterColon: true}],
    // this would be ok if we had better auto-fixing and could force editors and GitHub to do the right thing
    // 'linebreak-style': [ERROR, 'unix'],
    'max-len': [WARNING, 150, 2, {ignoreComments: true, ignoreUrls: true}],
    'new-cap': [ERROR],
    'new-parens': [ERROR],
    'no-array-constructor': [ERROR],
    'no-confusing-arrow': [ERROR, {allowParens: true}],
    'no-constant-condition': [ERROR],
    'no-lonely-if': [ERROR],
    'no-mixed-spaces-and-tabs': [ERROR],
    'no-multiple-empty-lines': [ERROR],
    'no-new-object': [ERROR],
    'no-spaced-func': [ERROR],
    'no-trailing-spaces': [ERROR],
    'no-unneeded-ternary': [ERROR],
    'object-curly-spacing': [ERROR, 'never'],
    'one-var': [ERROR, {initialized: 'never'}],
    'quote-props': [ERROR, 'consistent'],
    'semi-spacing': [ERROR, {before: false, after: true}],
    'semi': [ERROR, 'always'],
    'keyword-spacing': [ERROR, {before: true, after: true}],
    'space-before-blocks': [ERROR, 'always'],
    'space-before-function-paren': [ERROR, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [ERROR, 'never'],
    'space-infix-ops': [ERROR],
    'space-unary-ops': [ERROR, {words: true, nonwords: false}],
    'spaced-comment': [WARNING, 'always', {exceptions: ['*']}],

    // ES6
    'arrow-spacing': [ERROR],
    'constructor-super': [ERROR],
    'generator-star-spacing': [ERROR, {before: false, after: true}],

    'no-class-assign': [ERROR],
    'no-const-assign': [ERROR],
    'no-dupe-class-members': [ERROR],
    'no-this-before-super': [ERROR],
    'no-var': [ERROR],
    'object-shorthand': [ERROR, 'always'],
    'prefer-arrow-callback': [WARNING],
    'prefer-const': [WARNING],
    'prefer-spread': [ERROR],
  },
  env: {
    browser: true,
    node: true,
    worker: true,
    mocha: true,
    jest: true,
    serviceworker: true,
    es6: true,
  },
  globals: {
    // moped uses babel-plugin-import-globals to inject a bunch of helpful extra globals
    Component: false,
    Link: false,
    logout: false,
    Match: false,
    Miss: false,
    NavigationPrompt: false,
    PropTypes: false,
    React: false,
    ReactDOM: false,
    Redirect: false,
    render: false,
    request: false,
  },
};
