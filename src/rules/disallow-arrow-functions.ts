import { TSESLint } from "@typescript-eslint/utils";

import { createRule } from "../lib/createRule";

type MessageIds = "disallow-arrow-function";
type Options = [];

export const disallowArrowFunctions = createRule<Options, MessageIds>({
  name: "disallow-arrow-function",
  meta: {
    messages: {
      "disallow-arrow-function": "Arrow function is disallowed",
    },
    docs: {
      description: "Disallow using of arrow functions",
      recommended: "error",
      requiresTypeChecking: false,
    },
    type: "problem",
    schema: {},
  },
  defaultOptions: [],
  create: function (
    context: Readonly<TSESLint.RuleContext<"disallow-arrow-function", never[]>>
  ) {
    return {
      VariableDeclarator(node) {
        if (node.init && node.init.type === "ArrowFunctionExpression") {
          context.report({
            node,
            messageId: `disallow-arrow-function`,
          });
        }
      },
    };
  },
});
