const { disallowArrowFunctions } = require("./rules/disallow-arrow-functions");

const configuration = {
  rules: {
    "disallow-anonymous-function": disallowArrowFunctions,
  },
};

module.exports = configuration;
