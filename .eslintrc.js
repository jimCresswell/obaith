module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:json/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react",
    "plugin:markdown/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "jest", "prettier"],
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      plugins: ["yaml"],
      extends: ["plugin:yaml/recommended"],
    },
  ],
  ignorePatterns: ["yarn.lock", "*.*css", "*.svg", "*.ico"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error"],
  },
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
