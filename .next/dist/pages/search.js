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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActiveSearch = require('../components/ActiveSearch.js');

var _ActiveSearch2 = _interopRequireDefault(_ActiveSearch);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/search.js?entry';

var Prismic = require('prismic-javascript');

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
                className: 'jsx-21153322',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-21153322' + ' ' + 'articleBriefList',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('h3', {
                className: 'jsx-21153322',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Search results for "', this.props.searchValue, '": '), this.state.searchResults.length === 0 && _react2.default.createElement('div', {
                className: 'jsx-21153322' + ' ' + 'noResults',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('h2', {
                className: 'jsx-21153322',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Sorry, we could not find "', this.state.searchValue, '".')), _react2.default.createElement('ul', {
                className: 'jsx-21153322',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, this.state.searchResults.map(function (article, key) {
                return _react2.default.createElement('li', {
                    className: 'jsx-21153322',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                    }
                }, _react2.default.createElement(_link2.default, { key: key, href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-21153322' + ' ' + 'linkToArticle',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-21153322',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                }, article.data.articletitle[0].text))));
            })), _react2.default.createElement(_ActiveSearch2.default, { allArticles: this.state.allArticles, activeSearchChanged: this.activeSearchChanged, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '21153322',
                css: '.articleBriefList.jsx-21153322{padding:0 15% 0 15%;}ul.jsx-21153322{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RnFCLEFBRzRDLEFBR0gsZ0JBQ3BCLElBSEEiLCJmaWxlIjoicGFnZXMvc2VhcmNoLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuY29uc3QgYXBpRW5kcG9pbnQgPSBjb25maWcuYXBpRW5kcG9pbnQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IGNvbmZpZy5hY2Nlc3NUb2tlbjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdGl2ZVNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOnRoaXMucHJvcHMuc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOnRoaXMucHJvcHMucG9zdHMsXG4gICAgICAgICAgICBhbGxBcnRpY2xlczonJyxcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZUxpdmU6ZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldEFsbCA9IHRoaXMuZ2V0QWxsLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5nZXRBbGwoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IHNlYXJjaFZhbHVlIH0gfSkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgKFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50LHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0pKVxuICAgICAgICAgICAgLnRoZW4oKGFwaSk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFtcbiAgICAgICAgICAgICAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ2FydGljbGUnKSxcbiAgICAgICAgICAgICAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmZ1bGx0ZXh0KCdkb2N1bWVudCcsIGAke3NlYXJjaFZhbHVlfWApXG4gICAgICAgICAgICAgICAgXSk7IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgcG9zdHM6ZGF0YS5yZXN1bHRzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOnNlYXJjaFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldEFsbCAoKSB7XG4gICAgICAgIFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50LHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0pXG4gICAgICAgICAgICAudGhlbigoYXBpKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShcIlwiKTsgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEFydGljbGVzOnJlcy5yZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxuICAgICAgICB9XG4gICAgYWN0aXZlU2VhcmNoQ2hhbmdlZCAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUxpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxpdmU6dHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzOicnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVCcmllZkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TZWFyY2ggcmVzdWx0cyBmb3IgXCJ7dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX1cIjogPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCkgJiYgPGRpdiBjbGFzc05hbWU9XCJub1Jlc3VsdHNcIj48aDI+U29ycnksIHdlIGNvdWxkIG5vdCBmaW5kIFwie3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9XCIuPC9oMj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL3Bvc3RzLz91aWQ9JHthcnRpY2xlLnVpZH1gfSBhcz17YC9wb3N0cy8ke2FydGljbGUudWlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZVNlYXJjaCBhbGxBcnRpY2xlcz17dGhpcy5zdGF0ZS5hbGxBcnRpY2xlc30gYWN0aXZlU2VhcmNoQ2hhbmdlZD17dGhpcy5hY3RpdmVTZWFyY2hDaGFuZ2VkfS8+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlQnJpZWZMaXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMCAxNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdfQ== */\n/*@ sourceURL=pages/search.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJQcmlzbWljIiwicmVxdWlyZSIsImNvbmZpZyIsImFwaUVuZHBvaW50IiwiYWNjZXNzVG9rZW4iLCJmZXRjaCIsIkxheW91dCIsIlJlYWN0IiwiQWN0aXZlU2VhcmNoIiwiTGluayIsIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFJlc3VsdHMiLCJwb3N0cyIsImFsbEFydGljbGVzIiwibG9hZGluZyIsImFjdGl2ZUxpdmUiLCJnZXRBbGwiLCJiaW5kIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwicmVzIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiYXJ0aWNsZSIsImtleSIsInVpZCIsImRhdGEiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiYWN0aXZlU2VhcmNoQ2hhbmdlZCIsIlByZWRpY2F0ZXMiLCJhdCIsImZ1bGx0ZXh0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU87Ozs7Ozs7O0FBUlAsSUFBSSxVQUFKLEFBQUksQUFBVTs7QUFFZCxJQUFNLGNBQWMsaUJBQXBCLEFBQTJCO0FBQzNCLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7OztJQU9yQixBO29DQUNGOztvQkFBQSxBQUFZLE9BQU87NENBQUE7OzBJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3lCQUNXLE1BQUEsQUFBSyxNQURWLEFBQ2dCLEFBQ3ZCOzJCQUFjLE1BQUEsQUFBSyxNQUZaLEFBRWtCLEFBQ3pCO3lCQUhPLEFBR0ssQUFDWjtxQkFKTyxBQUlDLEFBQ1I7d0JBTEosQUFBVyxBQUtJLEFBRWY7QUFQVyxBQUNQO2NBTUosQUFBSyxTQUFTLE1BQUEsQUFBSyxPQUFMLEFBQVksS0FUWCxBQVNmO2VBQ0g7Ozs7OzRDQUNvQixBQUNqQjtpQkFBQSxBQUFLLEFBQ1I7Ozs7aUNBb0JTO3lCQUNOOztvQkFBQSxBQUFRLE9BQVIsQUFBZSxhQUFZLEVBQUUsYUFBN0IsQUFBMkIsQUFBZSxlQUExQyxBQUNLLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDYjt1QkFBTyxJQUFBLEFBQUksTUFBWCxBQUFPLEFBQVUsQUFDWjtBQUhULGVBQUEsQUFJUyxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ1Q7dUJBQUEsQUFBSztpQ0FDVyxJQURGLEFBQ00sQUFDaEI7NkJBRkosQUFBYyxBQUVGLEFBR2Y7QUFMaUIsQUFDVjtBQU5oQixlQUFBLEFBV1MsTUFBTSxRQVhmLEFBV3VCLEFBQ3RCOzs7OzhDQUNrQixBQUNuQjtnQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWYsQUFBOEIsTUFBTSxBQUNoQztxQkFBQSxBQUFLO2dDQUFTLEFBQ0MsQUFDWDttQ0FGSixBQUFjLEFBRUksQUFFckI7QUFKaUIsQUFDVjtBQUlYOzs7O2lDQUdTLEFBQ047bUNBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO2tEQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUF5Qiw2QkFBQSxBQUFLLE1BQTlCLEFBQW9DLGFBRHhDLEFBQ0ksQUFDRSxhQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsV0FBMUIsQUFBcUMscUJBQU0sY0FBQTtrREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUEyQjtBQUEzQjtBQUFBLGFBQUEsa0JBQTJCLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUErQixtQ0FBQSxBQUFLLE1BQXBDLEFBQTBDLGFBRnJILEFBRWdELEFBQTJCLEFBQ3ZFLHdCQUFBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLEtBQU0sQUFDMUM7dUNBQ0ksY0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO0FBQUEsaUJBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxLQUFOLEFBQVcsS0FBSyx1QkFBcUIsUUFBckMsQUFBNkMsS0FBTyxnQkFBYyxRQUFsRSxBQUEwRSxLQUFPLFVBQWpGO2tDQUFBO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBLE9BQTZCLE1BQTdCLEFBQWtDLHVDQUFsQyxBQUFhOztrQ0FBYjtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsMkJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQUovQyxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBQWtDLEFBS3JEO0FBZEwsQUFHSSxBQUNDLEFBWUQsaUNBQUEsQUFBQyx3Q0FBYSxhQUFhLEtBQUEsQUFBSyxNQUFoQyxBQUFzQyxhQUFhLHFCQUFxQixLQUF4RSxBQUE2RTs4QkFBN0U7Z0NBbEJaLEFBQ0ksQUFDSSxBQWdCSTtBQUFBOzt5QkFsQlo7cUJBREosQUFDSSxBQW1DUDtBQW5DTzs7Ozs7O29CLEFBNUNpQyxtQixBQUFULE0sQUFBUzs7Ozs7OzsrQ0FDakIsQUFBUSxPQUFSLEFBQWUsYUFBWSxFQUFFLGFBQTlCLEFBQUMsQUFBMkIsQUFBZSxlQUEzQyxBQUNkLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDVDsyQ0FBTyxJQUFBLEFBQUksTUFBTSxDQUNiLFFBQUEsQUFBUSxXQUFSLEFBQW1CLEdBQW5CLEFBQXNCLGlCQURULEFBQ2IsQUFBdUMsWUFDdkMsUUFBQSxBQUFRLFdBQVIsQUFBbUIsU0FBbkIsQUFBNEIsaUJBRmhDLEFBQU8sQUFBVSxBQUViLEFBQTJDLEFBRWxEO0FBTmMsaUNBQUMsRUFBRCxBQU9kLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDVDsyQ0FBQSxBQUFPLEFBRVY7QUFWYyxBOztpQ0FBYjtBOzsyQ0FZUSxLQURILEFBQ1EsQUFDWDtpREFGRyxBQUVTLEE7QUFGVCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0JLLGdCQUFNLEEsQUFrRzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNlYXJjaC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=