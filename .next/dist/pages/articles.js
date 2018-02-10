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
            lineNumber: 9
        }
    }, _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_ArticleBody2.default, { articles: props.articles, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '2239707107',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVk0QiIsImZpbGUiOiJwYWdlcy9hcnRpY2xlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEFydGljbGVCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cblxuY29uc3QgQXJ0aWNsZXMgPSAocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCb2R5IGFydGljbGVzPXtwcm9wcy5hcnRpY2xlc30gLz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4pO1xuXG5BcnRpY2xlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludClcbiAgICAudGhlbigoYXBpKSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucXVlcnkoXG4gICAgICAgICAgICBcIlwiLCB7ICdvcmRlcmluZ3MnIDogJ1tteS5hcnRpY2xlLmxhc3RfcHVibGljYXRpb25fZGF0ZV0nIH1cbiAgICAgICAgICApOyBcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzOnJlcy5yZXN1bHRzLnJldmVyc2UoKVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzOyJdfQ== */\n/*@ sourceURL=pages/articles.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkFydGljbGVCb2R5IiwiTGF5b3V0IiwiQXJ0aWNsZXMiLCJwcm9wcyIsImFydGljbGVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7Ozs7O0FBSm5CLElBQUksVUFBSixBQUFJLEFBQVU7QUFDZCxJQUFJLGNBQUosQUFBa0I7OztBQU1sQixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEOzJCQUNMLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx1Q0FBWSxVQUFVLE1BQXZCLEFBQTZCO3NCQUE3Qjt3QkFGUixBQUNJLEFBQ0k7QUFBQTs7aUJBRlI7YUFESyxBQUNMO0FBQUE7QUFEWjs7QUFVQSxTQUFBLEFBQVMsMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0wsQUFBUSxPQUFSLEFBQWUsYUFBZixBQUNqQixLQUFLLFVBQUEsQUFBQyxLQUFRLEFBQ1g7K0JBQU8sSUFBQSxBQUFJLE1BQUosQUFDSCxJQUFJLEVBQUUsYUFEVixBQUFPLEFBQ0MsQUFBZ0IsQUFFM0I7QUFOc0IsQUFDTCxxQkFBQTs7cUJBQVo7QUFEaUIsbUNBQUE7O2tDQVFWLElBQUEsQUFBSSxRQVJNLEFBT2hCLEFBQ00sQUFBWTtBQURsQixBQUNIOztxQkFSbUI7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBM0IsQUFZQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJhcnRpY2xlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=