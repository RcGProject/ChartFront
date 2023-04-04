module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@babel/eslint-parser",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["prettier", "react", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "default-param-last": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-cycle": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
