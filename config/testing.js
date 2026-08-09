module.exports = {
  overrides: [
    {
      files: ['*.test.{ts,js,jsx,tsx}', '*.spec.{ts,js,jsx,tsx}'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
      settings: {
        // vitest projects don't have jest installed, so give
        // eslint-plugin-jest an explicit version to work against instead of
        // letting it fail while trying to detect one
        jest: {
          version: 29,
        },
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.test.+(js|jsx|ts|tsx)',
              '**/*.spec.+(js|jsx|ts|tsx)',
            ],
          },
        ],
      },
    },
  ],
};
