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
                var title = article.data.articletitle[0].text,
                    text = article.data.mainarticle[0].text,
                    uid = article.uid;

                return _react2.default.createElement('li', { key: key, className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    }
                }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + uid, as: '/posts/' + uid, passHref: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-2652328449' + ' ' + 'linkToArticle',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                    }
                }, title), _react2.default.createElement('p', {
                    className: 'jsx-2652328449',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96
                    }
                }, text, '...'))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: '2652328449',
                css: '.articleBriefList.jsx-2652328449{padding:0 15% 0 15%;}ul.jsx-2652328449{list-style:none;}a.jsx-2652328449{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5R3FCLEFBRzRDLEFBR0gsQUFJckIsZ0JBSEMsSUFIQSxDQU1BIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3RpdmVTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9BY3RpdmVTZWFyY2guanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcuanMnO1xuXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOnRoaXMucHJvcHMuc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOnRoaXMucHJvcHMucG9zdHMsXG4gICAgICAgICAgICBhbGxBcnRpY2xlczonJyxcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLmdldEFsbCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnk6IHsgc2VhcmNoVmFsdWUgfSB9KSB7XG4gICAgICAgIGlmIChzZWFyY2hWYWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwb3N0czp7XG4gICAgICAgICAgICAgICAgICAgIG5vSW5wdXQ6dHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6XCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAoUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSkpXG4gICAgICAgICAgICAudGhlbigoYXBpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoW1xuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAnYXJ0aWNsZScpLFxuICAgICAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuZnVsbHRleHQoJ2RvY3VtZW50JywgYCR7c2VhcmNoVmFsdWV9YClcbiAgICAgICAgICAgICAgICBdKTsgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgICAgICBwb3N0czpkYXRhLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6c2VhcmNoVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0QWxsICgpIHtcbiAgICAgICAgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFwiXCIpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQXJ0aWNsZXM6cmVzLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U2VhcmNoZWQgZm9yICd7dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX0nPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlQnJpZWZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlU2VhcmNoIGFsbEFydGljbGVzPXt0aGlzLnN0YXRlLmFsbEFydGljbGVzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLnNlYXJjaFZhbHVlKSAmJiA8aDE+U2VhcmNoZWQgZm9yIFwie3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9XCI8L2gxPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUpICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID09PSAwICYmIHRoaXMuc3RhdGUubG9hZGluZyA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgPGgxPlNvcnJ5LCB3ZSB3ZXJlIG5vdCBhYmxlIHRvIGZpbmQgYW55IHJlc3VsdHMuPC9oMT59XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPT09IDAgJiYgdGhpcy5zdGF0ZS5sb2FkaW5nID09PSBmYWxzZSAmJiAhdGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgPGgxPlNlYXJjaCB0aGUgQXJjaGl2ZXM8L2gxPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMgJiYgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gYXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gYXJ0aWNsZS5kYXRhLm1haW5hcnRpY2xlWzBdLnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZCA9IGFydGljbGUudWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLz91aWQ9JHt1aWR9YH0gYXM9e2AvcG9zdHMvJHt1aWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQXJ0aWNsZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RleHR9Li4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZUJyaWVmTGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0= */\n/*@ sourceURL=pages/search.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJQcmlzbWljIiwicmVxdWlyZSIsImNvbmZpZyIsImFwaUVuZHBvaW50IiwiYWNjZXNzVG9rZW4iLCJmZXRjaCIsIkxheW91dCIsIlJlYWN0IiwiQWN0aXZlU2VhcmNoIiwiTGluayIsIkhlYWQiLCJMb2FkaW5nIiwiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFZhbHVlIiwic2VhcmNoUmVzdWx0cyIsInBvc3RzIiwiYWxsQXJ0aWNsZXMiLCJsb2FkaW5nIiwiZ2V0QWxsIiwiYmluZCIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJlcyIsInNldFN0YXRlIiwicmVzdWx0cyIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ0aXRsZSIsImRhdGEiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwibWFpbmFydGljbGUiLCJ1aWQiLCJub0lucHV0IiwiUHJlZGljYXRlcyIsImF0IiwiZnVsbHRleHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFZOzs7O0FBR25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7Ozs7O0FBVnBCLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7SUFVckIsQTtvQ0FDRjs7b0JBQUEsQUFBWSxPQUFPOzRDQUFBOzswSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzt5QkFDVyxNQUFBLEFBQUssTUFEVixBQUNnQixBQUN2QjsyQkFBYyxNQUFBLEFBQUssTUFGWixBQUVrQixBQUN6Qjt5QkFI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LEFBQWE7O2tDQUFiO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBOytCQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSxtQkFESixBQUNJLEFBQ0Esd0JBQUEsY0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFBSTtBQUFKO0FBQUEsbUJBQUEsTUFMaEIsQUFDSSxBQUNJLEFBQ0ksQUFFSSxBQUtuQjtBQTdCYixBQUlJLEFBQ0ksQUFRSSxBQUM2QixhQUFBO3lCQWR6QztxQkFESixBQUNJLEFBa0RQO0FBbERPOzs7Ozs7b0IsQUEzQ2lDLG1CLEFBQVQsTUFBUyxBOzs7Ozs7c0NBQ2pDLGdCQUFnQixBOzs7Ozs7O2lEQUNULEFBQ0csQUFDTSxBQUVaO0FBSE0sQUFDRjtpREFGRCxBQUlTLEE7QUFKVCxBQUNIOzs7OytDQU1ZLEFBQVEsT0FBUixBQUFlLGFBQVksRUFBRSxhQUE5QixBQUFDLEFBQTJCLEFBQWUsZUFBM0MsQUFDZCxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ1Q7MkNBQU8sSUFBQSxBQUFJLE1BQU0sQ0FDYixRQUFBLEFBQVEsV0FBUixBQUFtQixHQUFuQixBQUFzQixpQkFEVCxBQUNiLEFBQXVDLFlBQ3ZDLFFBQUEsQUFBUSxXQUFSLEFBQW1CLFNBQW5CLEFBQTRCLGlCQUZoQyxBQUFPLEFBQVUsQUFFYixBQUEyQyxBQUVsRDtBQU5jLGlDQUFDLEVBQUQsQUFPZCxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ1Q7MkNBQUEsQUFBTyxBQUVWO0FBVmMsQTs7aUNBQWI7QTs7MkNBWVEsS0FESCxBQUNRLEFBQ1g7aUQsQUFGRyxBQUVTO0FBRlQsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDSyxnQkFBTSxBLEFBK0czQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzZWFyY2guanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9