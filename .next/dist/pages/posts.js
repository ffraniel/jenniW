'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ArticleBody = require('../components/ArticleBody.js');

var _ArticleBody2 = _interopRequireDefault(_ArticleBody);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/posts.js?entry';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Blog = function (_React$Component) {
    (0, _inherits3.default)(Blog, _React$Component);

    function Blog() {
        (0, _classCallCheck3.default)(this, Blog);

        return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
    }

    (0, _createClass3.default)(Blog, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-609674820' + ' ' + 'blog',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('h1', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'hello: ', this.props.postID))), _react2.default.createElement(_style2.default, {
                styleId: '609674820',
                css: '.blog.jsx-609674820{padding:0 15% 0 15%;}.blog.jsx-609674820 h1.jsx-609674820{font-family:var(--mainFont);font-size:var(--midSizeFont);}.blog.jsx-609674820 p.jsx-609674820{font-family:var(--thickFont);font-size:var(--smallFont);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCcUIsQUFHNEMsQUFHUSxBQUlDLG9CQU5oQyxRQUdnQyxDQUlGLDJCQUM5QixDQUpBIiwiZmlsZSI6InBhZ2VzL3Bvc3RzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xudmFyIGFwaUVuZHBvaW50ID0gXCJodHRwczovL0plbm5pVy5wcmlzbWljLmlvL2FwaS92MlwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQXJ0aWNsZUJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlQm9keS5qcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuXG5jbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IHVpZCB9IH0pIHtcbiAgICAgICAgcmV0dXJuIHsgcG9zdElEOiB1aWQgfVxuICAgICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExheW91dD4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmhlbGxvOiB7dGhpcy5wcm9wcy5wb3N0SUR9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmJsb2cge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYmxvZyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tbWlkU2l6ZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ibG9nIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgLy8gZmV0Y2hPbmVBcnRpY2xlICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIGZldGNoIChQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCkpXG4gICAgLy8gICAgIC50aGVuKChhcGkpID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBhcGkucXVlcnkoYFthdChteS5hcnRpY2xlLnVpZCwgXCIke3Byb3BzLnJvdXRlci5xdWVyeS5VSUR9fVwiKV1gKTsgXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKChyZXMpPT57XG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgICAgICBpbmRpdmlkdWFsQXJ0aWNsZTogcmVzLnJlc3VsdHMsXG4gICAgLy8gICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxuICAgIC8vIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il19 */\n/*@ sourceURL=pages/posts.js?entry */'
            }));
        }
        // fetchOneArticle () {
        //     return fetch (Prismic.getApi(apiEndpoint))
        //     .then((api) => {
        //         return api.query(`[at(my.article.uid, "${props.router.query.UID}}")]`); 
        //     })
        //     .then((res)=>{
        //         this.setState({
        //             individualArticle: res.results,
        //             loading:false
        //         })
        //     })
        //     .catch(console.log)
        // }

    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var uid = _ref.query.uid;

            return { postID: uid };
        }
    }]);

    return Blog;
}(_react2.default.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkFydGljbGVCb2R5IiwiTGF5b3V0IiwiUmVhY3QiLCJCbG9nIiwicHJvcHMiLCJwb3N0SUQiLCJ1aWQiLCJxdWVyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7O0FBTFAsSUFBSSxVQUFKLEFBQUksQUFBVTtBQUNkLElBQUksY0FBSixBQUFrQjs7O0ksQUFRWjs7Ozs7Ozs7Ozs7aUNBS1EsQUFDTjttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVksZ0JBQUEsQUFBSyxNQUg3QixBQUNJLEFBQ0ksQUFDSSxBQUF1Qjt5QkFIbkM7cUJBREosQUFDSSxBQXdCUDtBQXhCTztBQXlCUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OENBM0M0QztnQkFBVCxBQUFTLFdBQWxCLEFBQWtCLE1BQVQsQUFBUyxBQUN4Qzs7bUJBQU8sRUFBRSxRQUFULEFBQU8sQUFBVSxBQUNsQjs7Ozs7RUFIWSxnQkFBTSxBLEFBaUR6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwb3N0cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=