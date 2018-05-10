"use strict"

exports.__esModule = true

exports.default = function (babel) {
  const { types: t } = babel;
  return {
    visitor: {
      CallExpression (path) {
        const { node } = path
        let isLazyImport = t.isIdentifier(node.callee, {
          name: 'lazyImport'
        })
        if (isLazyImport) {
          const [module, moduleName] = node.arguments
          if (moduleName) {
            module.leadingComments = [{
              type: "CommentBlock",
              value: `webpackChunkName: "${moduleName.value}"`
            }]
          }
          var newBody = t.arrowFunctionExpression(
            [],
            t.callExpression(
              t.identifier('import'),
              [module]
            )
          )
          path.replaceWith(newBody)
        }
      }
    }
  };
}

module.exports = exports["default"]
