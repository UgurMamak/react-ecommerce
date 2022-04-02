module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier", "react-app"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "jsx-a11y"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
    "no-shadow": "off",
    /*   "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],

    "jsx-a11y/control-has-associated-label": [
      2,
      {
        controlComponents: ["CustomButton"],
        ignoreElements: ["button"],
      },
    ], */
  },
  overrides: [
    {
      files: ["./src/redux/**/*.js"],
      rules: {
        "default-param-last": "off",
      },
    },
  ],
};
