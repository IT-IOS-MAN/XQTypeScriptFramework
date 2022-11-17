module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
    ],
    plugins: ['vue', '@typescript-eslint'],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 12,
      parser: '@typescript-eslint/parser',
    },
    rules: {
        "prettier/prettier": "off"
    }
}