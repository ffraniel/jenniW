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
                    lineNumber: 73
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-21153322',
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
                className: 'jsx-21153322' + ' ' + 'articleBriefList',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('h3', {
                className: 'jsx-21153322',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Search results for \'', this.props.searchValue, '\': '), this.state.searchResults.length === 0 && _react2.default.createElement('div', {
                className: 'jsx-21153322' + ' ' + 'noResults',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('h2', {
                className: 'jsx-21153322',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Sorry, we could not find \'', this.state.searchValue, '\'.')), _react2.default.createElement('ul', {
                className: 'jsx-21153322',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, this.state.searchResults.map(function (article, key) {
                return _react2.default.createElement('li', {
                    className: 'jsx-21153322',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }, _react2.default.createElement(_link2.default, { key: key, href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-21153322' + ' ' + 'linkToArticle',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-21153322',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                    }
                }, article.data.articletitle[0].text))));
            })), _react2.default.createElement(_ActiveSearch2.default, { allArticles: this.state.allArticles, activeSearchChanged: this.activeSearchChanged, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '21153322',
                css: '.articleBriefList.jsx-21153322{padding:0 15% 0 15%;}ul.jsx-21153322{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR3FCLEFBRzRDLEFBR0gsZ0JBQ3BCLElBSEEiLCJmaWxlIjoicGFnZXMvc2VhcmNoLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuY29uc3QgYXBpRW5kcG9pbnQgPSBjb25maWcuYXBpRW5kcG9pbnQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IGNvbmZpZy5hY2Nlc3NUb2tlbjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdGl2ZVNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTp0aGlzLnByb3BzLnNlYXJjaFZhbHVlLFxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0czp0aGlzLnByb3BzLnBvc3RzLFxuICAgICAgICAgICAgYWxsQXJ0aWNsZXM6JycsXG4gICAgICAgICAgICBsb2FkaW5nOnRydWUsXG4gICAgICAgICAgICBhY3RpdmVMaXZlOmZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRBbGwgPSB0aGlzLmdldEFsbC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHRoaXMuZ2V0QWxsKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBzZWFyY2hWYWx1ZSB9IH0pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IChQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShbXG4gICAgICAgICAgICAgICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdhcnRpY2xlJyksXG4gICAgICAgICAgICAgICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5mdWxsdGV4dCgnZG9jdW1lbnQnLCBgJHtzZWFyY2hWYWx1ZX1gKVxuICAgICAgICAgICAgICAgIF0pOyBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgICAgIHBvc3RzOmRhdGEucmVzdWx0cyxcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTpzZWFyY2hWYWx1ZVxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRBbGwgKCkge1xuICAgICAgICBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KVxuICAgICAgICAgICAgLnRoZW4oKGFwaSk9PntcbiAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoXCJcIik7IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxBcnRpY2xlczpyZXMucmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgICAgICAgfVxuICAgIGFjdGl2ZVNlYXJjaENoYW5nZWQgKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVMaXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVMaXZlOnRydWUsXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0czonJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TZWFyY2hlZCBmb3IgJ3t0aGlzLnByb3BzLnNlYXJjaFZhbHVlfSc8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVCcmllZkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TZWFyY2ggcmVzdWx0cyBmb3IgJ3t0aGlzLnByb3BzLnNlYXJjaFZhbHVlfSc6IDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPT09IDApICYmIDxkaXYgY2xhc3NOYW1lPVwibm9SZXN1bHRzXCI+PGgyPlNvcnJ5LCB3ZSBjb3VsZCBub3QgZmluZCAne3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9Jy48L2gyPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubWFwKChhcnRpY2xlLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e2AvcG9zdHMvP3VpZD0ke2FydGljbGUudWlkfWB9IGFzPXtgL3Bvc3RzLyR7YXJ0aWNsZS51aWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQXJ0aWNsZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlU2VhcmNoIGFsbEFydGljbGVzPXt0aGlzLnN0YXRlLmFsbEFydGljbGVzfSBhY3RpdmVTZWFyY2hDaGFuZ2VkPXt0aGlzLmFjdGl2ZVNlYXJjaENoYW5nZWR9Lz4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVCcmllZkxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19 */\n/*@ sourceURL=pages/search.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJQcmlzbWljIiwicmVxdWlyZSIsImNvbmZpZyIsImFwaUVuZHBvaW50IiwiYWNjZXNzVG9rZW4iLCJmZXRjaCIsIkxheW91dCIsIlJlYWN0IiwiQWN0aXZlU2VhcmNoIiwiTGluayIsIkhlYWQiLCJTZWFyY2giLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hSZXN1bHRzIiwicG9zdHMiLCJhbGxBcnRpY2xlcyIsImxvYWRpbmciLCJhY3RpdmVMaXZlIiwiZ2V0QWxsIiwiYmluZCIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJlcyIsInNldFN0YXRlIiwicmVzdWx0cyIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImFjdGl2ZVNlYXJjaENoYW5nZWQiLCJQcmVkaWNhdGVzIiwiYXQiLCJmdWxsdGV4dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7QUFUUCxJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7QUFDM0IsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjs7O0ksQUFTckI7b0NBQ0Y7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7MElBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7eUJBQ1csTUFBQSxBQUFLLE1BRFYsQUFDZ0IsQUFDdkI7MkJBQWMsTUFBQSxBQUFLLE1BRlosQUFFa0IsQUFDekI7eUJBSE8sQUFHSyxBQUNaO3FCQUpPLEFBSUMsQUFDUjt3QkFMSixBQUFXLEFBS0ksQUFFZjtBQVBXLEFBQ1A7Y0FNSixBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQVRYLEFBU2Y7ZUFDSDs7Ozs7NENBQ29CLEFBQ2pCO2lCQUFBLEFBQUssQUFDUjs7OztpQ0FvQlM7eUJBQ047O29CQUFBLEFBQVEsT0FBUixBQUFlLGFBQVksRUFBRSxhQUE3QixBQUEyQixBQUFlLGVBQTFDLEFBQ0ssS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNiO3VCQUFPLElBQUEsQUFBSSxNQUFYLEFBQU8sQUFBVSxBQUNaO0FBSFQsZUFBQSxBQUlTLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDVDt1QkFBQSxBQUFLO2lDQUNXLElBREYsQUFDTSxBQUNoQjs2QkFGSixBQUFjLEFBRUYsQUFHZjtBQUxpQixBQUNWO0FBTmhCLGVBQUEsQUFXUyxNQUFNLFFBWGYsQUFXdUIsQUFDdEI7Ozs7OENBQ2tCLEFBQ25CO2dCQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBZixBQUE4QixNQUFNLEFBQ2hDO3FCQUFBLEFBQUs7Z0NBQVMsQUFDQyxBQUNYO21DQUZKLEFBQWMsQUFFSSxBQUVyQjtBQUppQixBQUNWO0FBSVg7Ozs7aUNBR1MsQUFDTjttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFzQix3QkFBQSxBQUFLLE1BQTNCLEFBQWlDLGFBRnpDLEFBQ0ksQUFDSSxBQUVKLHdCQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7a0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQXlCLDhCQUFBLEFBQUssTUFBOUIsQUFBb0MsYUFEeEMsQUFDSSxBQUNFLGNBQUEsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixXQUExQixBQUFxQyxxQkFBTSxjQUFBO2tEQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQTJCO0FBQTNCO0FBQUEsYUFBQSxrQkFBMkIsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQStCLG9DQUFBLEFBQUssTUFBcEMsQUFBMEMsYUFGckgsQUFFZ0QsQUFBMkIsQUFDdkUseUJBQUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDQztBQUREO0FBQUEsb0JBQ0MsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsS0FBTSxBQUMxQzt1Q0FDSSxjQUFBOytCQUFBOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7QUFBQSxpQkFBQSxrQkFDSSxBQUFDLGdDQUFLLEtBQU4sQUFBVyxLQUFLLHVCQUFxQixRQUFyQyxBQUE2QyxLQUFPLGdCQUFjLFFBQWxFLEFBQTBFLEtBQU8sVUFBakY7a0NBQUE7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUEsT0FBNkIsTUFBN0IsQUFBa0MsdUNBQWxDLEFBQWE7O2tDQUFiO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBOytCQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSwyQkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBSi9DLEFBQ0ksQUFDSSxBQUNJLEFBQ0ksQUFBa0MsQUFLckQ7QUFkTCxBQUdJLEFBQ0MsQUFZRCxpQ0FBQSxBQUFDLHdDQUFhLGFBQWEsS0FBQSxBQUFLLE1BQWhDLEFBQXNDLGFBQWEscUJBQXFCLEtBQXhFLEFBQTZFOzhCQUE3RTtnQ0FyQlosQUFJSSxBQUNJLEFBZ0JJO0FBQUE7O3lCQXJCWjtxQkFESixBQUNJLEFBc0NQO0FBdENPOzs7Ozs7b0JBNUNpQyxBLG1CLEFBQVQsTUFBUyxBOzs7Ozs7OytDQUNqQixBQUFRLE9BQVIsQUFBZSxhQUFZLEVBQUUsYUFBOUIsQUFBQyxBQUEyQixBQUFlLGVBQTNDLEFBQ2QsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUOzJDQUFPLElBQUEsQUFBSSxNQUFNLENBQ2IsUUFBQSxBQUFRLFdBQVIsQUFBbUIsR0FBbkIsQUFBc0IsaUJBRFQsQUFDYixBQUF1QyxZQUN2QyxRQUFBLEFBQVEsV0FBUixBQUFtQixTQUFuQixBQUE0QixpQkFGaEMsQUFBTyxBQUFVLEFBRWIsQUFBMkMsQUFFbEQ7QUFOYyxpQ0FBQyxFQUFELEFBT2QsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUOzJDQUFBLEFBQU8sQUFFVjtBQVZjLEE7O2lDQUFiO0E7OzJDQVlRLEtBREgsQUFDUSxBQUNYO2lELEFBRkcsQUFFUztBQUZULEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3QkssZ0JBQU0sQSxBQXFHM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2VhcmNoLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==