module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["react-app", "airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  rules: {
    "linebreak-style": ["error", "windows"],
    "prettier/prettier": ["error"],
  },
};
