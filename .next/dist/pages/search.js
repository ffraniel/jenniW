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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Loading = require('../components/Loading.js');

var _Loading2 = _interopRequireDefault(_Loading);

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
            loading: true
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
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Searched for \'', this.props.searchValue, '\'')), _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2652328449' + ' ' + 'articleBriefList',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_ActiveSearch2.default, { allArticles: this.state.allArticles, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), this.props.searchValue && _react2.default.createElement('h1', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Searched for "', this.props.searchValue, '"'), this.state.searchResults.length === 0 && this.state.loading === true && _react2.default.createElement(_Loading2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }), this.state.searchResults.length === 0 && this.state.loading === false && this.props.searchValue && _react2.default.createElement('h1', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'Sorry, we were not able to find any results.'), this.state.searchResults.length === 0 && this.state.loading === false && !this.props.searchValue && _react2.default.createElement('h1', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, 'Search the Archives'), _react2.default.createElement('ul', {
                className: 'jsx-2652328449',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, this.state.searchResults && this.state.searchResults.map(function (article, key) {
                return _react2.default.createElement('li', { key: key, className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                    }
                }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-2652328449' + ' ' + 'linkToArticle',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                    }
                }, article.data.articletitle[0].text), _react2.default.createElement('p', {
                    className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    }
                }, article.data.mainarticle[0].text, '...'))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: '2652328449',
                css: '.articleBriefList.jsx-2652328449{padding:0 15% 0 15%;}ul.jsx-2652328449{list-style:none;}a.jsx-2652328449{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR3FCLEFBRzRDLEFBR0gsQUFJckIsZ0JBSEMsSUFIQSxDQU1BIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3RpdmVTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9BY3RpdmVTZWFyY2guanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcuanMnO1xuXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOnRoaXMucHJvcHMuc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOnRoaXMucHJvcHMucG9zdHMsXG4gICAgICAgICAgICBhbGxBcnRpY2xlczonJyxcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLmdldEFsbCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnk6IHsgc2VhcmNoVmFsdWUgfSB9KSB7XG4gICAgICAgIGlmIChzZWFyY2hWYWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwb3N0czp7XG4gICAgICAgICAgICAgICAgICAgIG5vSW5wdXQ6dHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6XCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAoUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSkpXG4gICAgICAgICAgICAudGhlbigoYXBpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoW1xuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAnYXJ0aWNsZScpLFxuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuZnVsbHRleHQoJ2RvY3VtZW50JywgYCR7c2VhcmNoVmFsdWV9YClcbiAgICAgICAgICAgICAgICBdKTsgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgICAgICBwb3N0czpkYXRhLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6c2VhcmNoVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFwiXCIpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQXJ0aWNsZXM6cmVzLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U2VhcmNoZWQgZm9yICd7dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX0nPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlQnJpZWZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlU2VhcmNoIGFsbEFydGljbGVzPXt0aGlzLnN0YXRlLmFsbEFydGljbGVzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLnNlYXJjaFZhbHVlKSAmJiA8aDE+U2VhcmNoZWQgZm9yIFwie3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9XCI8L2gxPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUpICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID09PSAwICYmIHRoaXMuc3RhdGUubG9hZGluZyA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgPGgxPlNvcnJ5LCB3ZSB3ZXJlIG5vdCBhYmxlIHRvIGZpbmQgYW55IHJlc3VsdHMuPC9oMT59XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPT09IDAgJiYgdGhpcy5zdGF0ZS5sb2FkaW5nID09PSBmYWxzZSAmJiAhdGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgPGgxPlNlYXJjaCB0aGUgQXJjaGl2ZXM8L2gxPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMgJiYgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8/dWlkPSR7YXJ0aWNsZS51aWR9YH0gYXM9e2AvcG9zdHMvJHthcnRpY2xlLnVpZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rVG9BcnRpY2xlXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGF0YS5tYWluYXJ0aWNsZVswXS50ZXh0fS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVCcmllZkxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmVcbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19 */\n/*@ sourceURL=pages/search.js?entry */'
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
                                if (!(searchValue === "")) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return', {
                                    posts: {
                                        noInput: true
                                    },
                                    searchValue: ""
                                });

                            case 2:
                                _context.next = 4;
                                return Prismic.getApi(apiEndpoint, { accessToken: accessToken }).then(function (api) {
                                    return api.query([Prismic.Predicates.at('document.type', 'article'), Prismic.Predicates.fulltext('document', '' + searchValue)]);
                                }).then(function (res) {
                                    return res;
                                });

                            case 4:
                                data = _context.sent;
                                return _context.abrupt('return', {
                                    posts: data.results,
                                    searchValue: searchValue
                                });

                            case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJQcmlzbWljIiwicmVxdWlyZSIsImNvbmZpZyIsImFwaUVuZHBvaW50IiwiYWNjZXNzVG9rZW4iLCJmZXRjaCIsIkxheW91dCIsIlJlYWN0IiwiQWN0aXZlU2VhcmNoIiwiTGluayIsIkhlYWQiLCJMb2FkaW5nIiwiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFZhbHVlIiwic2VhcmNoUmVzdWx0cyIsInBvc3RzIiwiYWxsQXJ0aWNsZXMiLCJsb2FkaW5nIiwiZ2V0QWxsIiwiYmluZCIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJlcyIsInNldFN0YXRlIiwicmVzdWx0cyIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsIm1haW5hcnRpY2xlIiwibm9JbnB1dCIsIlByZWRpY2F0ZXMiLCJhdCIsImZ1bGx0ZXh0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7Ozs7OztBQVZwQixJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7QUFDM0IsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjs7O0ksQUFVckI7b0NBQ0Y7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7MElBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7eUJBQ1csTUFBQSxBQUFLLE1BRFYsQUFDZ0IsQUFDdkI7MkJBQWMsTUFBQSxBQUFLLE1BRlosQUFFa0IsQUFDekI7eUJBSE8sQUFHSyxB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Y0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFBSTtBQUFKO0FBQUEsMkJBQUksQUFBUSxLQUFSLEFBQWEsWUFBYixBQUF5QixHQUE3QixBQUFnQyxNQUxoRCxBQUNJLEFBQ0ksQUFDSSxBQUVJLEFBS25CO0FBekJiLEFBSUksQUFDSSxBQVFJLEFBQzZCLGFBQUE7eUJBZHpDO3FCQURKLEFBQ0ksQUE4Q1A7QUE5Q087Ozs7OztvQixBQTNDaUMsbUJBQVQsQSxNQUFTLEE7Ozs7OztzQ0FDakMsZ0JBQWdCLEE7Ozs7Ozs7aURBQ1QsQUFDRyxBQUNNLEFBRVo7QUFITSxBQUNGO2lEQUZELEFBSVMsQTtBQUpULEFBQ0g7Ozs7K0NBTVksQUFBUSxPQUFSLEFBQWUsYUFBWSxFQUFFLGFBQTlCLEFBQUMsQUFBMkIsQUFBZSxlQUEzQyxBQUNkLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDVDsyQ0FBTyxJQUFBLEFBQUksTUFBTSxDQUNiLFFBQUEsQUFBUSxXQUFSLEFBQW1CLEdBQW5CLEFBQXNCLGlCQURULEFBQ2IsQUFBdUMsWUFDdkMsUUFBQSxBQUFRLFdBQVIsQUFBbUIsU0FBbkIsQUFBNEIsaUJBRmhDLEFBQU8sQUFBVSxBQUViLEFBQTJDLEFBRWxEO0FBTmMsaUNBQUMsRUFBRCxBQU9kLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDVDsyQ0FBQSxBQUFPLEFBRVY7QUFWYyxBOztpQ0FBYjtBOzsyQ0FZUSxLQURILEFBQ1EsQUFDWDtpRCxBQUZHLEFBRVM7QUFGVCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcENLLGdCQUFNLEEsQUEyRzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNlYXJjaC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=