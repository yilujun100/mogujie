module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-dangle': 'off',
        indent: 'off',
        semi: 'off',
        'arrow-parens': ['error', 'as-needed'],
        'object-curly-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'arrow-body-style': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'global-require': 'off'
    }
}
