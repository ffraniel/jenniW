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

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ArticleBody = require('../components/ArticleBody.js');

var _ArticleBody2 = _interopRequireDefault(_ArticleBody);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/articles.js?entry';

var Prismic = require('prismic-javascript');

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


var Articles = function Articles(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-2239707107',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-2239707107',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, 'Articles - Jenni Whitehead ')), _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, props.articles && _react2.default.createElement(_ArticleBody2.default, { articles: props.articles, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), !props.articles && _react2.default.createElement('h1', {
        className: 'jsx-2239707107',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'No articles found... something must be broken...')), _react2.default.createElement(_style2.default, {
        styleId: '2239707107',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCNEIiLCJmaWxlIjoicGFnZXMvYXJ0aWNsZXMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBhcGlFbmRwb2ludCA9IGNvbmZpZy5hcGlFbmRwb2ludDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gY29uZmlnLmFjY2Vzc1Rva2VuO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQXJ0aWNsZUJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlQm9keS5qcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IEFydGljbGVzID0gKHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+QXJ0aWNsZXMgLSBKZW5uaSBXaGl0ZWhlYWQgPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydGljbGVzICYmIDxBcnRpY2xlQm9keSBhcnRpY2xlcz17cHJvcHMuYXJ0aWNsZXN9IC8+fVxuICAgICAgICAgICAgICAgICAgICB7IXByb3BzLmFydGljbGVzICYmIDxoMT5ObyBhcnRpY2xlcyBmb3VuZC4uLiBzb21ldGhpbmcgbXVzdCBiZSBicm9rZW4uLi48L2gxPn1cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4pO1xuXG5BcnRpY2xlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCwgeyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAudGhlbigoYXBpKSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucXVlcnkoXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ2FydGljbGUnKSAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgeyAgIG9yZGVyaW5ncyA6ICdbbXkuYXJ0aWNsZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGUsIG15LmFydGljbGUuZmlyc3RfcHVibGljYXRpb25fZGF0ZSxdJyAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICApOyBcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzOnJlcy5yZXN1bHRzXG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7Il19 */\n/*@ sourceURL=pages/articles.js?entry */'
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
                        return api.query([Prismic.Predicates.at('document.type', 'article')], { orderings: '[my.article.last_publication_date, my.article.first_publication_date,]'
                        });
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt('return', {
                        articles: res.results
                    });

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Articles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiQXJ0aWNsZUJvZHkiLCJMYXlvdXQiLCJIZWFkIiwiQXJ0aWNsZXMiLCJwcm9wcyIsImFydGljbGVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwiUHJlZGljYXRlcyIsImF0Iiwib3JkZXJpbmdzIiwicmVzIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7QUFQUCxJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7QUFDM0IsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjs7O0FBTTNCLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7MkJBQ0wsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGUixBQUNJLEFBQ0ksQUFFSixpREFBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNLO0FBREw7QUFBQSxhQUNLLEFBQU0sNEJBQVksQUFBQyx1Q0FBWSxVQUFVLE1BQXZCLEFBQTZCO3NCQUE3Qjt3QkFEdkIsQUFDdUIsQUFDbEI7QUFEa0I7S0FBQSxJQUNqQixNQUFELEFBQU8sNEJBQVksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLEtBQUEsRUFONUIsQUFJSSxBQUV3QjtpQkFONUI7YUFESyxBQUNMO0FBQUE7QUFEWjs7QUFjQSxTQUFBLEFBQVMsMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0wsQUFBUSxPQUFSLEFBQWUsYUFBYSxFQUFFLGFBQTlCLEFBQTRCLEFBQWUsZUFBM0MsQUFDakIsS0FBSyxVQUFBLEFBQUMsS0FBUSxBQUNYO21DQUFPLEFBQUksTUFDUCxDQUNJLFFBQUEsQUFBUSxXQUFSLEFBQW1CLEdBQW5CLEFBQXNCLGlCQUZ2QixBQUNILEFBQ0ksQUFBdUMsZUFDbkMsV0FIWixBQUFPLEFBR0MsQUFBZ0IsQUFHM0I7QUFIVyx5QkFIRDtBQUhZLEFBQ0wscUJBQUE7O3FCQUFaO0FBRGlCLG1DQUFBOztrQ0FXVixJQVhVLEFBVWhCLEFBQ1U7QUFEVixBQUNIOztxQkFYbUI7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBM0IsQUFlQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJhcnRpY2xlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=