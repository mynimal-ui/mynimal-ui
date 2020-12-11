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
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',

    // These are development scripts
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['./scripts/**/*.js'] }],

    // This is a UI library
    'react/jsx-props-no-spreading': 'off',

    // Enable uppercase Component filenames
    'unicorn/filename-case': 'off',

    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      files: ['*.stories.js', '*.stories.jsx', '*.stories.ts', '*.stories.tsx'],
      rules: {
        // Stories import from monorepo root dev dependencies
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Prop types will be generated automatically
        'react/prop-types': 'off',
      },
    },
  ],
};
