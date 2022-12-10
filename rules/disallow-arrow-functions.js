module.exports = {
  create: (context) => {
    return {
      VariableDeclarator(node) {
        if (node.init && node.init.type === "ArrowFunctionExpression") {
          context.report(
            node,
            "Arrow functions are disallowed use traditional functions instead"
          );
        }
      },
    };
  },
};
