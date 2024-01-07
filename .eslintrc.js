module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin',
  'eslint-plugin-import-helpers',
  'unused-imports',],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
      'no-console': 2,
      'unused-imports/no-unused-imports': 2,
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/explicit-function-return-type': 2,
      '@typescript-eslint/explicit-module-boundary-types': 2,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-empty-interface': 2,
      '@typescript-eslint/no-var-requires': 2,
      eqeqeq: ['error', 'always'],
      'import-helpers/order-imports': [
        'error',
        {
          alphabetize: { order: 'asc', ignoreCase: true },
          groups: [
            'module',
            '/@application/',
            '/@domain/',
            '/@externals/',
            '/@features/',
            '/@infrastructure/',
            '/@interface/',
            '/@modules/',
            'parent',
            'sibling',
            'index',
          ],
          newlinesBetween: 'always',
        },
      ],
      semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ["adhoc/**"],
      rules: {
        'no-console': 0,
      }
    }
  ]
};
