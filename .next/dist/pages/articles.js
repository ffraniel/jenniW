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

var _Articles = require('../components/Articles.js');

var _Articles2 = _interopRequireDefault(_Articles);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/articles.js?entry';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Index = function Index(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'hello there'), _react2.default.createElement(_Articles2.default, { articles: props.articles, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Prismic.getApi(apiEndpoint).then(function (api) {
                        return api.query(""); // An empty query will return all the documents
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt('return', {
                        articles: res
                    });

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkFydGljbGVzIiwiSGVhZGVyIiwiSW5kZXgiLCJwcm9wcyIsImFydGljbGVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7Ozs7Ozs7QUFKbkIsSUFBSSxVQUFKLEFBQUksQUFBVTtBQUNkLElBQUksY0FBSixBQUFrQjs7O0FBTWxCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7MkJBRUYsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZKLEFBRUksQUFDQSxnQ0FBQSxBQUFDLG9DQUFTLFVBQVUsTUFBcEIsQUFBMEI7c0JBQTFCO3dCQUxGLEFBRUYsQUFHSTtBQUFBOztBQUxoQjs7QUFTQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0YsQUFBUSxPQUFSLEFBQWUsYUFBZixBQUNqQixLQUFLLFVBQUEsQUFBQzsrQkFDSSxJQUFBLEFBQUksTUFEQSxBQUNYLEFBQU8sQUFBVSxJQUROLEFBQ1gsQ0FBc0IsQUFDekI7QUFKbUIsQUFDRixxQkFBQTs7cUJBQVo7QUFEYyxtQ0FBQTs7a0NBQUEsQUFLYixBQUNNO0FBRE4sQUFDSDs7cUJBTmdCO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQXhCLEFBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYXJ0aWNsZXMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9