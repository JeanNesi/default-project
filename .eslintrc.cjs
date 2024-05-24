module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    camelcase: 2,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    "jsx-a11y/control-has-associated-label": [2, {
      "labelAttributes": ["label"],
      "controlComponents": ["CustomComponent"],
      "ignoreElements": [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "th",
        "td",
        "a",
        "button",
        "video",
      ],
      "ignoreRoles": [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid",
      ],
      "depth": 3,
    }],
  }
}
