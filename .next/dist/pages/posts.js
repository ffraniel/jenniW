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

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ArticleBody = require('../components/ArticleBody.js');

var _ArticleBody2 = _interopRequireDefault(_ArticleBody);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleText = require('../components/ArticleText.js');

var _ArticleText2 = _interopRequireDefault(_ArticleText);

var _Reference = require('../components/Reference.js');

var _Reference2 = _interopRequireDefault(_Reference);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/posts.js?entry';

var Prismic = require('prismic-javascript');

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


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
                className: 'jsx-918297334',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-918297334',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, this.props.posts.articletitle[0].text, ' - Jenni Whitehead')), _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-918297334' + ' ' + 'articlePostComp',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('article', {
                className: 'jsx-918297334' + ' ' + 'singleArticle',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('h1', {
                className: 'jsx-918297334',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, this.props.posts.articletitle[0].text), this.props.posts.initialpublicationdate[0] && _react2.default.createElement('h5', {
                className: 'jsx-918297334' + ' ' + 'articleDate',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, this.props.posts.initialpublicationdate[0].text), this.props.posts.initialpublicationplace[0] && _react2.default.createElement('h5', {
                className: 'jsx-918297334',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, this.props.posts.initialpublicationplace[0].text), this.props.posts.image1.url && _react2.default.createElement('div', {
                className: 'jsx-918297334' + ' ' + 'postImageDiv',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, ' ', _react2.default.createElement('img', { src: this.props.posts.image1.url, className: 'jsx-918297334' + ' ' + 'postImage',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), ' '), _react2.default.createElement(_ArticleText2.default, { articleText: this.props.posts.mainarticle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), this.props.posts.references && _react2.default.createElement(_Reference2.default, { references: this.props.posts.references, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), _react2.default.createElement('button', {
                className: 'jsx-918297334',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('a', { id: 'backA', href: '/', className: 'jsx-918297334',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Home'))))), _react2.default.createElement(_style2.default, {
                styleId: '918297334',
                css: '.blog.jsx-918297334{padding:0 15% 0 15%;}.blog.jsx-918297334 h1.jsx-918297334{font-family:var(--mainFont);font-size:var(--midSizeFont);}.blog.jsx-918297334 p.jsx-918297334{font-family:var(--thickFont);font-size:var(--smallFont);}.postImage.jsx-918297334{display:block;margin-left:auto;margin-right:auto;width:80%;max-width:80%;}.articlePostComp.jsx-918297334{padding-left:15%;padding-right:15%;}.singleArticle.jsx-918297334{font-family:var(--thickFont);border:solid 3px var(--midGrey);background-color:var(--midGrey);padding-left:10%;padding-right:10%;}.articleDate.jsx-918297334{padding-left:20px;}#backA.jsx-918297334{display:block;width:50px;height:15px;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDcUIsQUFHNEMsQUFHUSxBQUlDLEFBT2QsQUFPRSxBQUtZLEFBT1gsQUFJSixjQXRCSSxBQXVCUCxHQWhCTyxDQVlyQixFQWpDQSxLQXNDZSxHQW5DaUIsQ0FJRixBQW1CTSxFQVhkLElBUXRCLEVBZ0J3QixZQXZCVixPQVJkLENBSkEsQ0FvQ0EsQ0F2QmlCLEVBVWtCLFlBVG5DLG9CQVVvQixpQkFFckIsa0JBQUMiLCJmaWxlIjoicGFnZXMvcG9zdHMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBhcGlFbmRwb2ludCA9IGNvbmZpZy5hcGlFbmRwb2ludDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gY29uZmlnLmFjY2Vzc1Rva2VuO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQXJ0aWNsZUJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlQm9keS5qcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXJ0aWNsZVRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlVGV4dC5qcyc7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvUmVmZXJlbmNlLmpzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNsYXNzIFBvc3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IHVpZCB9IH0pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IChQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShgW2F0KG15LmFydGljbGUudWlkLCBcIiR7dWlkfVwiKV1gKTsgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgcG9zdHM6ZGF0YS5yZXN1bHRzWzBdLmRhdGEgfTtcbiAgICB9XG4gICAgICBcbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnBvc3RzLmFydGljbGV0aXRsZVswXS50ZXh0fSAtIEplbm5pIFdoaXRlaGVhZDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVBvc3RDb21wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJzaW5nbGVBcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnBvc3RzLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucG9zdHMuaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZVswXSAmJiA8aDUgY2xhc3NOYW1lPVwiYXJ0aWNsZURhdGVcIiA+e3RoaXMucHJvcHMucG9zdHMuaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZVswXS50ZXh0fTwvaDU+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wb3N0cy5pbml0aWFscHVibGljYXRpb25wbGFjZVswXSAmJiA8aDU+e3RoaXMucHJvcHMucG9zdHMuaW5pdGlhbHB1YmxpY2F0aW9ucGxhY2VbMF0udGV4dH08L2g1PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucG9zdHMuaW1hZ2UxLnVybCAmJiA8ZGl2IGNsYXNzTmFtZT1cInBvc3RJbWFnZURpdlwiPiA8aW1nIHNyYz17dGhpcy5wcm9wcy5wb3N0cy5pbWFnZTEudXJsfSBjbGFzc05hbWU9XCJwb3N0SW1hZ2VcIiAvPiA8L2Rpdj4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlVGV4dCBhcnRpY2xlVGV4dD17dGhpcy5wcm9wcy5wb3N0cy5tYWluYXJ0aWNsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wb3N0cy5yZWZlcmVuY2VzICYmIDxSZWZlcmVuY2UgcmVmZXJlbmNlcz17dGhpcy5wcm9wcy5wb3N0cy5yZWZlcmVuY2VzfSAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48YSBpZD1cImJhY2tBXCIgaHJlZj1cIi9cIj5Ib21lPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ibG9nIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJsb2cgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gLnBvc3RJbWFnZURpdiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIC5wb3N0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6ODAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlUG9zdENvbXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZUFydGljbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1pZEdyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1taWRHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwJVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlRGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICNiYWNrQSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7Il19 */\n/*@ sourceURL=pages/posts.js?entry */'
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
                                return Prismic.getApi(apiEndpoint, { accessToken: accessToken }).then(function (api) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiQXJ0aWNsZUJvZHkiLCJMYXlvdXQiLCJSZWFjdCIsIkFydGljbGVUZXh0IiwiUmVmZXJlbmNlIiwiSGVhZCIsIlBvc3RzIiwicHJvcHMiLCJwb3N0cyIsImFydGljbGV0aXRsZSIsInRleHQiLCJpbml0aWFscHVibGljYXRpb25kYXRlIiwiaW5pdGlhbHB1YmxpY2F0aW9ucGxhY2UiLCJpbWFnZTEiLCJ1cmwiLCJtYWluYXJ0aWNsZSIsInJlZmVyZW5jZXMiLCJ1aWQiLCJxdWVyeSIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJyZXMiLCJkYXRhIiwicmVzdWx0cyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPOzs7Ozs7OztBQVZQLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7SUFTckIsQTs7Ozs7Ozs7Ozs7aUNBWVEsQUFDTjttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQVE7QUFBUjtBQUFBLG9CQUFRLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsYUFBakIsQUFBOEIsR0FBdEMsQUFBeUMsTUFGakQsQUFDSSxBQUNJLEFBRUosd0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTttREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO21EQUFBLEFBQW1COzs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFBSztBQUFMO0FBQUEsb0JBQUssQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixhQUFqQixBQUE4QixHQUR2QyxBQUNJLEFBQXNDLEFBQ3JDLFlBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQix1QkFBakIsQUFBd0Msc0JBQU0sY0FBQTttREFBQSxBQUFjOzs4QkFBZDtnQ0FBQSxBQUE4QjtBQUE5QjtBQUFBLGFBQUEsT0FBOEIsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQix1QkFBakIsQUFBd0MsR0FGekgsQUFFbUQsQUFBeUUsQUFDdkgsWUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLHdCQUFqQixBQUF5QyxzQkFBTSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSxhQUFBLE9BQUssQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQix3QkFBakIsQUFBeUMsR0FIbEcsQUFHb0QsQUFBaUQsQUFDaEcsWUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BQWpCLEFBQXdCLHVCQUFPLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUE7QUFBQTtBQUFBLGFBQUEsRUFBK0IsNENBQUssS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FBM0IsQUFBa0Msd0NBQWxDLEFBQWlEOzs4QkFBakQ7Z0NBQS9CLEFBQStCO0FBQUE7Z0JBSm5FLEFBSW9DLEFBQ2hDLHNCQUFBLEFBQUMsdUNBQVksYUFBYSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQXJDLEFBQTJDOzhCQUEzQztnQ0FMSixBQUtJLEFBQ0M7QUFERDtxQkFDQyxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLDhCQUFjLEFBQUMscUNBQVUsWUFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQWxDLEFBQXdDOzhCQUF4QztnQ0FOcEMsQUFNb0MsQUFDaEM7QUFEZ0M7YUFBQSxtQkFDaEMsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFBUTtBQUFSO0FBQUEsK0JBQVEsY0FBQSxPQUFHLElBQUgsQUFBTSxTQUFRLE1BQWQsQUFBbUIsZ0JBQW5COzs4QkFBQTtnQ0FBQTtBQUFBO2VBYnhCLEFBSUksQUFDSSxBQUNJLEFBT0ksQUFBUTt5QkFieEI7cUJBREosQUFDSSxBQW9FUDtBQXBFTzs7Ozs7O29CQWJpQyxBLFdBQVQsQSxNLEFBQVM7Ozs7Ozs7K0NBQ2pCLEFBQVEsT0FBUixBQUFlLGFBQVksRUFBRSxhQUE5QixBQUFDLEFBQTJCLEFBQWUsZUFBM0MsQUFDZCxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ1Q7MkNBQU8sSUFBQSxBQUFJLGdDQUFKLEFBQWtDLE1BQXpDLEFBQ0g7QUFIYyxpQ0FBQyxFQUFELEFBSWQsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUOzJDQUFBLEFBQU8sQUFDVjtBLEFBTmM7O2lDQUFiO0E7aUVBT0ssRUFBRSxPQUFNLEtBQUEsQUFBSyxRQUFMLEFBQWEsR0FBckIsQUFBd0IsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVR2QixnQkFBTSxBLEFBcUYxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwb3N0cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=