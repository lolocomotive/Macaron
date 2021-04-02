module.exports = {
    root: true,

    env: {
        node: true,
    },

    parserOptions: {
        parser: '@typescript-eslint/parser',
    },

    rules: {
        indent: [1, 4, { SwitchCase: 1 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            1,
            {
                singleQuote: true,
                tabWidth: 4,
            },
        ],
    },

    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/prettier',
        '@vue/typescript',
    ],
};
