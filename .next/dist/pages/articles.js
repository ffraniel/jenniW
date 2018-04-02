"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ArticleBody = require("../components/ArticleBody.js");

var _ArticleBody2 = _interopRequireDefault(_ArticleBody);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/pages/articles.js?entry";

var Prismic = require("prismic-javascript");

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


var Articles = function Articles(props) {
  return _react2.default.createElement("div", {
    className: "jsx-3697373088",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("title", {
    className: "jsx-3697373088",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Articles - Jenni Whitehead ")), _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.articles && _react2.default.createElement(_ArticleBody2.default, { articles: props.articles, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), !props.articles && _react2.default.createElement("h1", {
    className: "jsx-3697373088",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "No articles found... something must be broken...")), _react2.default.createElement(_style2.default, {
    styleId: "3697373088",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IiLCJmaWxlIjoicGFnZXMvYXJ0aWNsZXMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xuY29uc3QgYXBpRW5kcG9pbnQgPSBjb25maWcuYXBpRW5kcG9pbnQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IGNvbmZpZy5hY2Nlc3NUb2tlbjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgQXJ0aWNsZUJvZHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IEFydGljbGVzID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkFydGljbGVzIC0gSmVubmkgV2hpdGVoZWFkIDwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxMYXlvdXQ+XG4gICAgICB7cHJvcHMuYXJ0aWNsZXMgJiYgPEFydGljbGVCb2R5IGFydGljbGVzPXtwcm9wcy5hcnRpY2xlc30gLz59XG4gICAgICB7IXByb3BzLmFydGljbGVzICYmIChcbiAgICAgICAgPGgxPk5vIGFydGljbGVzIGZvdW5kLi4uIHNvbWV0aGluZyBtdXN0IGJlIGJyb2tlbi4uLjwvaDE+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5BcnRpY2xlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQsIHtcbiAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW5cbiAgfSkudGhlbihhcGkgPT4ge1xuICAgIHJldHVybiBhcGkucXVlcnkoW1ByaXNtaWMuUHJlZGljYXRlcy5hdChcImRvY3VtZW50LnR5cGVcIiwgXCJhcnRpY2xlXCIpXSwge1xuICAgICAgb3JkZXJpbmdzOlxuICAgICAgICBcIltteS5hcnRpY2xlLmxhc3RfcHVibGljYXRpb25fZGF0ZSwgbXkuYXJ0aWNsZS5maXJzdF9wdWJsaWNhdGlvbl9kYXRlLF1cIlxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBhcnRpY2xlczogcmVzLnJlc3VsdHNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzO1xuIl19 */\n/*@ sourceURL=pages/articles.js?entry */"
  }));
};

Articles.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Prismic.getApi(apiEndpoint, {
            accessToken: accessToken
          }).then(function (api) {
            return api.query([Prismic.Predicates.at("document.type", "article")], {
              orderings: "[my.article.last_publication_date, my.article.first_publication_date,]"
            });
          });

        case 2:
          res = _context.sent;
          return _context.abrupt("return", {
            articles: res.results
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Articles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiQXJ0aWNsZUJvZHkiLCJMYXlvdXQiLCJIZWFkIiwiQXJ0aWNsZXMiLCJwcm9wcyIsImFydGljbGVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwiUHJlZGljYXRlcyIsImF0Iiwib3JkZXJpbmdzIiwicmVzIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7QUFQUCxJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7QUFDM0IsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjs7O0FBTTNCLElBQU0sV0FBVyxTQUFYLEFBQVcsZ0JBQUE7eUJBQ2YsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkosQUFDRSxBQUNFLEFBRUYsaURBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFNLDRCQUFZLEFBQUMsdUNBQVksVUFBVSxNQUF2QixBQUE2QjtnQkFBN0I7a0JBRHJCLEFBQ3FCLEFBQ2xCO0FBRGtCO0dBQUEsSUFDakIsTUFBRCxBQUFPLDRCQUNOLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFQTixBQUlFLEFBR0k7YUFQTjtTQURlLEFBQ2Y7QUFBQTtBQURGOztBQWlCQSxTQUFBLEFBQVMsMkZBQWtCLG1CQUFBO01BQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO3lCQUNQLEFBQVEsT0FBUixBQUFlO3lCQUFmLEFBQTRCLEFBQy9CO0FBRCtCLEFBQzVDLFdBRGdCLEVBQUEsQUFFZixLQUFLLGVBQU8sQUFDYjt1QkFBTyxBQUFJLE1BQU0sQ0FBQyxRQUFBLEFBQVEsV0FBUixBQUFtQixHQUFuQixBQUFzQixpQkFBakMsQUFBVSxBQUFDLEFBQXVDO3lCQUF6RCxBQUFPLEFBQStELEFBRWxFLEFBRUw7QUFKdUUsQUFDcEUsYUFESztBQUpnQixBQUNQOzthQUFaO0FBRG1CLHlCQUFBOztzQkFVYixJQVZhLEFBU2xCLEFBQ1M7QUFEVCxBQUNMOzthQVZ1QjthQUFBOzBCQUFBOztBQUFBO2NBQUE7QUFBM0IsQUFjQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJhcnRpY2xlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=