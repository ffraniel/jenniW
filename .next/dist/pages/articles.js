'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
    })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkFydGljbGVCb2R5IiwiTGF5b3V0IiwiQXJ0aWNsZXMiLCJwcm9wcyIsImFydGljbGVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBWTs7Ozs7Ozs7QUFKbkIsSUFBSSxVQUFKLEFBQUksQUFBVTtBQUNkLElBQUksY0FBSixBQUFrQjs7O0FBTWxCLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7MkJBRUwsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLHVDQUFZLFVBQVUsTUFBdkIsQUFBNkI7c0JBQTdCO3dCQUpILEFBRUwsQUFDSSxBQUNJO0FBQUE7O0FBSnBCOztBQVNBLFNBQUEsQUFBUywyRkFBa0IsbUJBQUE7UUFBQTtrRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FBQTttQ0FDTCxBQUFRLE9BQVIsQUFBZSxhQUFmLEFBQ2pCLEtBQUssVUFBQSxBQUFDLEtBQVEsQUFDWDsrQkFBTyxJQUFBLEFBQUksTUFBSixBQUNILElBQUksRUFBRSxhQURWLEFBQU8sQUFDQyxBQUFnQixBQUV4QjtBQUNBO0FBQ0g7QUFSc0IsQUFDTCxxQkFBQTs7cUJBQVo7QUFEaUIsbUNBQUE7O2tDQVVWLElBQUEsQUFBSSxRQVZNLEFBU2hCLEFBQ00sQUFBWTtBQURsQixBQUNIOztxQkFWbUI7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBM0IsQUFjQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJhcnRpY2xlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=