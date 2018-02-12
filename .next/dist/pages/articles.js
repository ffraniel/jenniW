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

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ArticleBody = require("../components/ArticleBody.js");

var _ArticleBody2 = _interopRequireDefault(_ArticleBody);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/pages/articles.js?entry";

var Prismic = require("prismic-javascript");
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";


var Articles = function Articles(props) {
    return _react2.default.createElement("div", {
        className: "jsx-2239707107",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_ArticleBody2.default, { articles: props.articles, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: "2239707107",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWE0QiIsImZpbGUiOiJwYWdlcy9hcnRpY2xlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbnZhciBhY2Nlc3NUb2tlbiA9IFwiTUM1WGIwWTBRVk5uUVVGRVlXdHZlVFJNLjc3LTk3Ny05WlI3dnY3M3Z2NzN2djczdnY3MEtOZzN2djczdnY3M3Z2NzFOSXUtX3ZUWkVOLS1fdmUtX3ZVSHZ2NzB0TlVUdnY3M3Z2NzN2djczdnY3M3Z2NzBcIjsgXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBBcnRpY2xlQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVCb2R5LmpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5cbmNvbnN0IEFydGljbGVzID0gKHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQm9keSBhcnRpY2xlcz17cHJvcHMuYXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuKTtcblxuQXJ0aWNsZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQsIHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0pXG4gICAgLnRoZW4oKGFwaSkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFxuICAgICAgICAgICAgXCJcIiwgeyAnb3JkZXJpbmdzJyA6ICdbbXkuYXJ0aWNsZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGVdJyB9XG4gICAgICAgICAgKTsgXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgICBhcnRpY2xlczpyZXMucmVzdWx0cy5yZXZlcnNlKClcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlczsiXX0= */\n/*@ sourceURL=pages/articles.js?entry */"
    }));
};

Articles.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Prismic.getApi(apiEndpoint, { accessToken: accessToken }).then(function (api) {
                        return api.query("", { 'orderings': '[my.article.last_publication_date]' });
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt("return", {
                        articles: res.results.reverse()
                    });

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Articles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiQXJ0aWNsZUJvZHkiLCJMYXlvdXQiLCJBcnRpY2xlcyIsInByb3BzIiwiYXJ0aWNsZXMiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBcGkiLCJ0aGVuIiwiYXBpIiwicXVlcnkiLCJyZXMiLCJyZXN1bHRzIiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBWTs7Ozs7Ozs7QUFMbkIsSUFBSSxVQUFKLEFBQUksQUFBVTtBQUNkLElBQUksY0FBSixBQUFrQjtBQUNsQixJQUFJLGNBQUosQUFBa0I7OztBQU1sQixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEOzJCQUNMLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx1Q0FBWSxVQUFVLE1BQXZCLEFBQTZCO3NCQUE3Qjt3QkFGUixBQUNJLEFBQ0k7QUFBQTs7aUJBRlI7YUFESyxBQUNMO0FBQUE7QUFEWjs7QUFVQSxTQUFBLEFBQVMsMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0wsQUFBUSxPQUFSLEFBQWUsYUFBYSxFQUFFLGFBQTlCLEFBQTRCLEFBQWUsZUFBM0MsQUFDakIsS0FBSyxVQUFBLEFBQUMsS0FBUSxBQUNYOytCQUFPLElBQUEsQUFBSSxNQUFKLEFBQ0gsSUFBSSxFQUFFLGFBRFYsQUFBTyxBQUNDLEFBQWdCLEFBRTNCO0FBTnNCLEFBQ0wscUJBQUE7O3FCQUFaO0FBRGlCLG1DQUFBOztrQ0FRVixJQUFBLEFBQUksUUFSTSxBQU9oQixBQUNNLEFBQVk7QUFEbEIsQUFDSDs7cUJBUm1CO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQTNCLEFBWUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYXJ0aWNsZXMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9