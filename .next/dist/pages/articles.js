'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ArticleBody = require('../components/ArticleBody.js');

var _ArticleBody2 = _interopRequireDefault(_ArticleBody);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/articles.js?entry';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Articles = function Articles(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-2239707107',
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
        styleId: '2239707107',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWE0QiIsImZpbGUiOiJwYWdlcy9hcnRpY2xlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEFydGljbGVCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cblxuY29uc3QgQXJ0aWNsZXMgPSAocHJvcHMpID0+IChcbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQm9keSBhcnRpY2xlcz17cHJvcHMuYXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuKTtcblxuQXJ0aWNsZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQpXG4gICAgLnRoZW4oKGFwaSkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFxuICAgICAgICAgICAgXCJcIiwgeyAnb3JkZXJpbmdzJyA6ICdbbXkuYXJ0aWNsZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGVdJyB9XG4gICAgICAgICAgKTsgXG4gICAgICAgIC8vICAgW215LmFydGljbGUubGFzdF9wdWJsaWNhdGlvbl9kYXRlXVxuICAgICAgICAvLyBBbiBlbXB0eSBxdWVyeSB3aWxsIHJldHVybiBhbGwgdGhlIGRvY3VtZW50c1xuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXJ0aWNsZXM6cmVzLnJlc3VsdHMucmV2ZXJzZSgpXG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7Il19 */\n/*@ sourceURL=pages/articles.js?entry */'
    }));
};

Articles.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Prismic.getApi(apiEndpoint).then(function (api) {
                        return api.query("", { 'orderings': '[my.article.last_publication_date]' });
                        //   [my.article.last_publication_date]
                        // An empty query will return all the documents
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt('return', {
                        articles: res.results.reverse()
                    });

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Articles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkFydGljbGVCb2R5IiwiTGF5b3V0IiwiQXJ0aWNsZXMiLCJwcm9wcyIsImFydGljbGVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7Ozs7O0FBSm5CLElBQUksVUFBSixBQUFJLEFBQVU7QUFDZCxJQUFJLGNBQUosQUFBa0I7OztBQU1sQixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEOzJCQUVMLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx1Q0FBWSxVQUFVLE1BQXZCLEFBQTZCO3NCQUE3Qjt3QkFGUixBQUNJLEFBQ0k7QUFBQTs7aUJBRlI7YUFGSyxBQUVMO0FBQUE7QUFGWjs7QUFXQSxTQUFBLEFBQVMsMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0wsQUFBUSxPQUFSLEFBQWUsYUFBZixBQUNqQixLQUFLLFVBQUEsQUFBQyxLQUFRLEFBQ1g7K0JBQU8sSUFBQSxBQUFJLE1BQUosQUFDSCxJQUFJLEVBQUUsYUFEVixBQUFPLEFBQ0MsQUFBZ0IsQUFFeEI7QUFDQTtBQUNIO0FBUnNCLEFBQ0wscUJBQUE7O3FCQUFaO0FBRGlCLG1DQUFBOztrQ0FVVixJQUFBLEFBQUksUUFWTSxBQVNoQixBQUNNLEFBQVk7QUFEbEIsQUFDSDs7cUJBVm1CO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQTNCLEFBY0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYXJ0aWNsZXMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9