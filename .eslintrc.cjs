module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
		sourceType: 'module',
  },
  rules: {
    'max-depth': ['error', 2],
    'max-params': ['error', 3],
    'max-lines-per-function': ['error', { max: 15 }],
    'import/extensions': 'off',
  },
};