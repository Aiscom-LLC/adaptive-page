module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/prop-types": 0,
    "react/button-has-type": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
  },
  env: {
    browser: true,
    node: true
  }
};
