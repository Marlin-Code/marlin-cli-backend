module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['mjs', '.js', '.jsx'] }],
  },
};
