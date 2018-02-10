'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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


var Posts = function (_React$Component) {
    (0, _inherits3.default)(Posts, _React$Component);

    function Posts() {
        (0, _classCallCheck3.default)(this, Posts);

        return (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || (0, _getPrototypeOf2.default)(Posts)).apply(this, arguments));
    }

    (0, _createClass3.default)(Posts, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-609674820' + ' ' + 'blog',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('h1', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'hello: ', this.props.postID), _react2.default.createElement('h1', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'this one ', this.props.posts.articletitle[0].text), _react2.default.createElement('p', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, ' then ', this.props.posts.mainarticle[0].text))), _react2.default.createElement(_style2.default, {
                styleId: '609674820',
                css: '.blog.jsx-609674820{padding:0 15% 0 15%;}.blog.jsx-609674820 h1.jsx-609674820{font-family:var(--mainFont);font-size:var(--midSizeFont);}.blog.jsx-609674820 p.jsx-609674820{font-family:var(--thickFont);font-size:var(--smallFont);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDcUIsQUFHNEMsQUFHUSxBQUlDLG9CQU5oQyxRQUdnQyxDQUlGLDJCQUM5QixDQUpBIiwiZmlsZSI6InBhZ2VzL3Bvc3RzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xudmFyIGFwaUVuZHBvaW50ID0gXCJodHRwczovL0plbm5pVy5wcmlzbWljLmlvL2FwaS92MlwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQXJ0aWNsZUJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlQm9keS5qcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBvc3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IHVpZCB9IH0pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IChQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCkpXG4gICAgICAgICAgICAudGhlbigoYXBpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoYFthdChteS5hcnRpY2xlLnVpZCwgXCIke3VpZH1cIildYCk7IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IHBvc3RzOmRhdGEucmVzdWx0c1swXS5kYXRhIH07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3N0cylcbiAgICB9XG4gICAgICBcbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+aGVsbG86IHt0aGlzLnByb3BzLnBvc3RJRH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnRoaXMgb25lIHt0aGlzLnByb3BzLnBvc3RzLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gdGhlbiB7dGhpcy5wcm9wcy5wb3N0cy5tYWluYXJ0aWNsZVswXS50ZXh0fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ibG9nIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJsb2cgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7Il19 */\n/*@ sourceURL=pages/posts.js?entry */'
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var uid = _ref.query.uid;
                var data;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Prismic.getApi(apiEndpoint).then(function (api) {
                                    return api.query('[at(my.article.uid, "' + uid + '")]');
                                }).then(function (res) {
                                    return res;
                                });

                            case 2:
                                data = _context.sent;
                                return _context.abrupt('return', { posts: data.results[0].data });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Posts;
}(_react2.default.Component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkFydGljbGVCb2R5IiwiTGF5b3V0IiwiUmVhY3QiLCJQb3N0cyIsInByb3BzIiwicG9zdElEIiwicG9zdHMiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwibWFpbmFydGljbGUiLCJ1aWQiLCJxdWVyeSIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJyZXMiLCJkYXRhIiwicmVzdWx0cyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7QUFMUCxJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCOzs7SSxBQU1aOzs7Ozs7Ozs7OztpQ0FhUSxBQUNOO21DQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTttREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBWSxnQkFBQSxBQUFLLE1BRHJCLEFBQ0ksQUFBdUIsQUFDdkIseUJBQUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQWMsa0JBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixhQUFqQixBQUE4QixHQUZoRCxBQUVJLEFBQStDLEFBQy9DLHVCQUFBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFVLGVBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixZQUFqQixBQUE2QixHQUxuRCxBQUNJLEFBQ0ksQUFHSSxBQUEwQzt5QkFMdEQ7cUJBREosQUFDSSxBQTJCUDtBQTNCTzs7Ozs7O29CQWRpQyxBLFdBQVQsQSxNLEFBQVM7Ozs7Ozs7K0NBQ2pCLEFBQVEsT0FBVCxBQUFDLEFBQWUsYUFBaEIsQUFDZCxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ1Q7MkNBQU8sSUFBQSxBQUFJLGdDQUFKLEFBQWtDLE1BQXpDLEFBQ0g7QUFIYyxpQ0FBQyxFQUFELEFBSWQsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUOzJDQUFBLEFBQU8sQUFDVjtBQU5jLEE7O2lDQUFiO0E7aUVBT0ssRUFBRSxPQUFNLEtBQUEsQUFBSyxRQUFMLEFBQWEsR0FBckIsQUFBd0IsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVR2QixnQkFBTSxBLEFBNkMxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwb3N0cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=