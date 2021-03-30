module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/prettier',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
            },
        ],
    },
};
