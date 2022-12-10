import { disallowArrowFunctions } from "./rules/disallow-arrow-functions";

const configuration = {
  rules: {
    "disallow-anonymous-function": disallowArrowFunctions,
  },
};

export default configuration;
