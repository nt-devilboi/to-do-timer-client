module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard',
        'eslint:recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ["C:\\Users\\VOISTINU\\Desktop\\to-do-timer-client\\tsconfig.json"]
    },
    plugins: [
        '@typescript-eslint'  // Для TypeScript.
    ],
    overrides: [ // Используем `overrides`, чтобы ESLint мог проверять файлы как JS, так и TS.
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                "plugin:react/recommended"
            ],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ["C:\\Users\\VOISTINU\\Desktop\\to-do-timer-client\\tsconfig.json"],
            },
        },
    ],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        quotes: ["error", "double"],  // Использовать двойные кавычки.
        semi: ["error", "always"],  // Всегда добавлять точку с запятой в конце утверждения.
        indent: ["error", 2],  // Отступ — это два пробела.
        "no-console": "off",
        "space-before-function-paren": "off",
        "no-trailing-spaces": "off",
        "indent-legacy": "off"
    }
}