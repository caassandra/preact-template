// Mostly taken from create-exposed-app
// https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js

module.exports = {
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "config/tsconfig.eslint.json",
  },
  ignorePatterns: ["build/*", ".yarn/*", "node_modules/*"],
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "unicorn",
  ],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  rules: {
    // Preact supports raw HTML properties https://preactjs.com/guide/v10/differences-to-react#raw-html-attributeproperty-names
    "react/no-unknown-property": ["error", { ignore: ["class"] }],

    // I prefer camelCase to kebab-case
    "unicorn/filename-case": ["error", { case: "camelCase" }],

    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",

    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",

    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",

    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],

    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],

    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
  },
  settings: {
    react: {
      pragma: "h",
      // https://preactjs.com/guide/v10/differences-to-react#version-compatibility
      version: "15",
    },
  },
  overrides: [
    // node files
    {
      files: "config/*.js",
      env: {
        browser: false,
        node: true,
      },
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },

    // Test files
    {
      files: ["*.test.tsx", "*.spec.tsx"],
      env: {
        jest: true,
        node: true,
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
