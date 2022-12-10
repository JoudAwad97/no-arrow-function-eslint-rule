const disallowArrowFunctionsRule = require("./rules/disallow-arrow-functions");

module.exports = {
  rules: {
    "disallow-anonymous-function": disallowArrowFunctionsRule,
  },
};
