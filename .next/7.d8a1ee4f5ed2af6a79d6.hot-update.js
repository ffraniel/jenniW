webpackHotUpdate(7,{

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _config = __webpack_require__(393);

var _config2 = _interopRequireDefault(_config);

var _isomorphicUnfetch = __webpack_require__(394);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Layout = __webpack_require__(406);

var _Layout2 = _interopRequireDefault(_Layout);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _ActiveSearch = __webpack_require__(429);

var _ActiveSearch2 = _interopRequireDefault(_ActiveSearch);

var _link = __webpack_require__(392);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/search.js?entry';

var Prismic = __webpack_require__(400);

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


var Search = function (_React$Component) {
    (0, _inherits3.default)(Search, _React$Component);

    function Search(props) {
        (0, _classCallCheck3.default)(this, Search);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

        _this.state = {
            searchValue: _this.props.searchValue,
            searchResults: _this.props.posts,
            allArticles: '',
            loading: true,
            activeLive: false
        };
        _this.getAll = _this.getAll.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getAll();
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            var _this2 = this;

            Prismic.getApi(apiEndpoint, { accessToken: accessToken }).then(function (api) {
                return api.query("");
            }).then(function (res) {
                _this2.setState({
                    allArticles: res.results,
                    loading: false
                });
            }).catch(console.log);
        }
    }, {
        key: 'activeSearchChanged',
        value: function activeSearchChanged() {
            if (this.state.activeLive === true) {
                this.setState({
                    activeLive: true,
                    searchResults: ''
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Searched for \'', this.props.searchValue, '\'')), _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2652328449' + ' ' + 'articleBriefList',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_ActiveSearch2.default, { allArticles: this.state.allArticles, activeSearchChanged: this.activeSearchChanged, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }), _react2.default.createElement('h3', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Search results for \'', this.props.searchValue, '\': '), this.state.searchResults.length === 0 && _react2.default.createElement('div', {
                className: 'jsx-2652328449' + ' ' + 'noResults',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('h2', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Sorry, we could not find \'', this.state.searchValue, '\'.')), _react2.default.createElement('ul', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, this.state.searchResults.map(function (article, key) {
                return _react2.default.createElement('li', {
                    className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }, _react2.default.createElement(_link2.default, { key: key, href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-2652328449' + ' ' + 'linkToArticle',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                    }
                }, article.data.articletitle[0].text), _react2.default.createElement('p', {
                    className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                    }
                }, article.data.mainarticle[0].text, '...'))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: '2652328449',
                css: '.articleBriefList.jsx-2652328449{padding:0 15% 0 15%;}ul.jsx-2652328449{list-style:none;}a.jsx-2652328449{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR3FCLEFBRzRDLEFBR0gsQUFJckIsZ0JBSEMsSUFIQSxDQU1BIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3RpdmVTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9BY3RpdmVTZWFyY2guanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2VhcmNoVmFsdWU6dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSxcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHM6dGhpcy5wcm9wcy5wb3N0cyxcbiAgICAgICAgICAgIGFsbEFydGljbGVzOicnLFxuICAgICAgICAgICAgbG9hZGluZzp0cnVlLFxuICAgICAgICAgICAgYWN0aXZlTGl2ZTpmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLmdldEFsbCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnk6IHsgc2VhcmNoVmFsdWUgfSB9KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAoUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSkpXG4gICAgICAgICAgICAudGhlbigoYXBpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoW1xuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAnYXJ0aWNsZScpLFxuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuZnVsbHRleHQoJ2RvY3VtZW50JywgYCR7c2VhcmNoVmFsdWV9YClcbiAgICAgICAgICAgICAgICBdKTsgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgICAgICBwb3N0czpkYXRhLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6c2VhcmNoVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFwiXCIpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQXJ0aWNsZXM6cmVzLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgICAgIH1cbiAgICBhY3RpdmVTZWFyY2hDaGFuZ2VkICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlTGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlTGl2ZTp0cnVlLFxuICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHM6JydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U2VhcmNoZWQgZm9yICd7dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX0nPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlQnJpZWZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlU2VhcmNoIGFsbEFydGljbGVzPXt0aGlzLnN0YXRlLmFsbEFydGljbGVzfSBhY3RpdmVTZWFyY2hDaGFuZ2VkPXt0aGlzLmFjdGl2ZVNlYXJjaENoYW5nZWR9Lz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlYXJjaCByZXN1bHRzIGZvciAne3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9JzogPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCkgJiYgPGRpdiBjbGFzc05hbWU9XCJub1Jlc3VsdHNcIj48aDI+U29ycnksIHdlIGNvdWxkIG5vdCBmaW5kICd7dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX0nLjwvaDI+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2tleX0gaHJlZj17YC9wb3N0cy8/dWlkPSR7YXJ0aWNsZS51aWR9YH0gYXM9e2AvcG9zdHMvJHthcnRpY2xlLnVpZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rVG9BcnRpY2xlXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGF0YS5tYWluYXJ0aWNsZVswXS50ZXh0fS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlQnJpZWZMaXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMCAxNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lXG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdfQ== */\n/*@ sourceURL=pages/search.js?entry */'
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var searchValue = _ref.query.searchValue;
                var data;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Prismic.getApi(apiEndpoint, { accessToken: accessToken }).then(function (api) {
                                    return api.query([Prismic.Predicates.at('document.type', 'article'), Prismic.Predicates.fulltext('document', '' + searchValue)]);
                                }).then(function (res) {
                                    return res;
                                });

                            case 2:
                                data = _context.sent;
                                return _context.abrupt('return', {
                                    posts: data.results,
                                    searchValue: searchValue
                                });

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

    return Search;
}(_react2.default.Component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJQcmlzbWljIiwicmVxdWlyZSIsImNvbmZpZyIsImFwaUVuZHBvaW50IiwiYWNjZXNzVG9rZW4iLCJmZXRjaCIsIkxheW91dCIsIlJlYWN0IiwiQWN0aXZlU2VhcmNoIiwiTGluayIsIkhlYWQiLCJTZWFyY2giLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hSZXN1bHRzIiwicG9zdHMiLCJhbGxBcnRpY2xlcyIsImxvYWRpbmciLCJhY3RpdmVMaXZlIiwiZ2V0QWxsIiwiYmluZCIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJlcyIsInNldFN0YXRlIiwicmVzdWx0cyIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZVNlYXJjaENoYW5nZWQiLCJsZW5ndGgiLCJtYXAiLCJhcnRpY2xlIiwia2V5IiwidWlkIiwiZGF0YSIsImFydGljbGV0aXRsZSIsInRleHQiLCJtYWluYXJ0aWNsZSIsIlByZWRpY2F0ZXMiLCJhdCIsImZ1bGx0ZXh0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7OztBQVRQLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7SSxBQVNyQjtvQ0FDRjs7b0JBQUEsQUFBWSxPQUFPOzRDQUFBOzswSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzt5QkFDVyxNQUFBLEFBQUssTUFEVixBQUNnQixBQUN2QjsyQkFBYyxNQUFBLEFBQUssTUFGWixBQUVrQixBQUN6Qjt5QkFITyxBQUdLLEFBQ1o7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O0FBMUNPOzs7Ozs7b0IsQUE1Q2lDLG1CLEFBQVQsTUFBUyxBOzs7Ozs7OytDQUNqQixBQUFRLE9BQVIsQUFBZSxhQUFZLEVBQUUsYUFBOUIsQUFBQyxBQUEyQixBQUFlLGVBQTNDLEFBQ2QsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUOzJDQUFPLElBQUEsQUFBSSxNQUFNLENBQ2IsUUFBQSxBQUFRLFdBQVIsQUFBbUIsR0FBbkIsQUFBc0IsaUJBRFQsQUFDYixBQUF1QyxZQUN2QyxRQUFBLEFBQVEsV0FBUixBQUFtQixTQUFuQixBQUE0QixpQkFGaEMsQUFBTyxBQUFVLEFBRWIsQUFBMkMsQUFFbEQ7QUFOYyxpQ0FBQyxFQUFELEFBT2QsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUOzJDQUFBLEFBQU8sQUFFVjtBQVZjLEE7O2lDQUFiO0E7OzJDQVlRLEtBREgsQUFDUSxBQUNYO2lELEFBRkcsQUFFUztBQUZULEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3QkssZ0JBQU0sQSxBQXlHM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2VhcmNoLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/francis/Code/JenniW/pages/search.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/francis/Code/JenniW/pages/search.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/search")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5kOGExZWU0ZjVlZDJhZjZhNzlkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VhcmNoLmpzPzAyNDYxNWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3RpdmVTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9BY3RpdmVTZWFyY2guanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2VhcmNoVmFsdWU6dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSxcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHM6dGhpcy5wcm9wcy5wb3N0cyxcbiAgICAgICAgICAgIGFsbEFydGljbGVzOicnLFxuICAgICAgICAgICAgbG9hZGluZzp0cnVlLFxuICAgICAgICAgICAgYWN0aXZlTGl2ZTpmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLmdldEFsbCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnk6IHsgc2VhcmNoVmFsdWUgfSB9KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAoUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSkpXG4gICAgICAgICAgICAudGhlbigoYXBpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoW1xuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAnYXJ0aWNsZScpLFxuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuZnVsbHRleHQoJ2RvY3VtZW50JywgYCR7c2VhcmNoVmFsdWV9YClcbiAgICAgICAgICAgICAgICBdKTsgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgICAgICBwb3N0czpkYXRhLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6c2VhcmNoVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFwiXCIpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQXJ0aWNsZXM6cmVzLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgICAgIH1cbiAgICBhY3RpdmVTZWFyY2hDaGFuZ2VkICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlTGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlTGl2ZTp0cnVlLFxuICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHM6JydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U2VhcmNoZWQgZm9yICd7dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX0nPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlQnJpZWZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlU2VhcmNoIGFsbEFydGljbGVzPXt0aGlzLnN0YXRlLmFsbEFydGljbGVzfSBhY3RpdmVTZWFyY2hDaGFuZ2VkPXt0aGlzLmFjdGl2ZVNlYXJjaENoYW5nZWR9Lz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlYXJjaCByZXN1bHRzIGZvciAne3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9JzogPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCkgJiYgPGRpdiBjbGFzc05hbWU9XCJub1Jlc3VsdHNcIj48aDI+U29ycnksIHdlIGNvdWxkIG5vdCBmaW5kICd7dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX0nLjwvaDI+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2tleX0gaHJlZj17YC9wb3N0cy8/dWlkPSR7YXJ0aWNsZS51aWR9YH0gYXM9e2AvcG9zdHMvJHthcnRpY2xlLnVpZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rVG9BcnRpY2xlXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGF0YS5tYWluYXJ0aWNsZVswXS50ZXh0fS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlQnJpZWZMaXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMCAxNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lXG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBTkE7QUFNQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUlBO0FBSkE7QUFOQTs7OztBQWNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFWQTtBQTBDQTtBQTFDQTs7Ozs7Ozs7Ozs7OztBQTNDQTtBQUVBO0FBRkE7QUFVQTs7O0FBVkE7OztBQVlBOztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlCQTtBQUNBO0FBd0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=