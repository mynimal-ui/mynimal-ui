module.exports = {
  root: true, // So parent files don't get applied
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/**/tsconfig.json'],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'always'],

    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',

    // Missing yarn workspace support
    'import/no-extraneous-dependencies': 'off',

    // This is a UI library
    'react/jsx-props-no-spreading': 'off',

    // Enable uppercase Component filenames
    'unicorn/filename-case': 'off',

    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Prop types will be generated automatically
        'react/prop-types': 'off',
      },
    },
  ],
};
