module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended',"@nuxt/eslint-config"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-undef': 'off',
  },
};
