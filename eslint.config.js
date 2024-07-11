import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
  },
  typescript: true,
  yaml: false,
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'curly': ['error', 'multi-line'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/quotes': ['error', 'single', { avoidEscape: true }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'antfu/if-newline': 'off',
    'style/max-statements-per-line': ['error', { max: 2 }],
    'no-console': 'off',
  },
})
