"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ReactSearch = require("../components/ReactSearch.js");

var _ReactSearch2 = _interopRequireDefault(_ReactSearch);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/pages/search.js?entry";

var Prismic = require("prismic-javascript");
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

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
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getAll();
        }
    }, {
        key: "getAll",
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
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                className: "jsx-2119392568",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement("div", {
                className: "jsx-2119392568" + " " + "articleBriefList",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement("h3", {
                className: "jsx-2119392568",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, "Search results for \"", this.props.searchValue, "\": "), this.state.searchResults.length === 0 && _react2.default.createElement("div", {
                className: "jsx-2119392568" + " " + "noResults",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement("h2", {
                className: "jsx-2119392568",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, "Sorry, we could not find \"", this.state.searchValue, "\".")), this.state.searchResults.map(function (article, key) {
                return _react2.default.createElement(_link2.default, { key: key, href: "/posts/?uid=" + article.uid, as: "/posts/" + article.uid, passHref: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }, _react2.default.createElement("a", { href: "#", className: "jsx-2119392568" + " " + "linkToArticle",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }, _react2.default.createElement("h1", {
                    className: "jsx-2119392568",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, article.data.articletitle[0].text)));
            }))), _react2.default.createElement(_style2.default, {
                styleId: "2119392568",
                css: ".articleBriefList.jsx-2119392568{padding:0 15% 0 15%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRnFCLEFBRzRDLG9CQUN2QiIsImZpbGUiOiJwYWdlcy9zZWFyY2guanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG52YXIgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vSmVubmlXLnByaXNtaWMuaW8vYXBpL3YyXCI7XG52YXIgYWNjZXNzVG9rZW4gPSBcIk1DNVhiMFkwUVZOblFVRkVZV3R2ZVRSTS43Ny05NzctOVpSN3Z2NzN2djczdnY3M3Z2NzBLTmczdnY3M3Z2NzN2djcxTkl1LV92VFpFTi0tX3ZlLV92VUh2djcwdE5VVHZ2NzN2djczdnY3M3Z2NzN2djcwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL1JlYWN0U2VhcmNoLmpzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbnZhciBhY2Nlc3NUb2tlbiA9IFwiTUM1WGIwWTBRVk5uUVVGRVlXdHZlVFJNLjc3LTk3Ny05WlI3dnY3M3Z2NzN2djczdnY3MEtOZzN2djczdnY3M3Z2NzFOSXUtX3ZUWkVOLS1fdmUtX3ZVSHZ2NzB0TlVUdnY3M3Z2NzN2djczdnY3M3Z2NzBcIjtcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2VhcmNoVmFsdWU6dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSxcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHM6dGhpcy5wcm9wcy5wb3N0cyxcbiAgICAgICAgICAgIGFsbEFydGljbGVzOicnLFxuICAgICAgICAgICAgbG9hZGluZzp0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRBbGwgPSB0aGlzLmdldEFsbC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHRoaXMuZ2V0QWxsKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBzZWFyY2hWYWx1ZSB9IH0pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IChQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShbXG4gICAgICAgICAgICAgICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdhcnRpY2xlJyksXG4gICAgICAgICAgICAgICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5mdWxsdGV4dCgnZG9jdW1lbnQnLCBgJHtzZWFyY2hWYWx1ZX1gKVxuICAgICAgICAgICAgICAgIF0pOyBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgICAgIHBvc3RzOmRhdGEucmVzdWx0cyxcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTpzZWFyY2hWYWx1ZVxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRBbGwgKCkge1xuICAgICAgICBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KVxuICAgICAgICAgICAgLnRoZW4oKGFwaSk9PntcbiAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoXCJcIik7IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxBcnRpY2xlczpyZXMucmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgICAgICAgfVxuICAgIFxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVCcmllZkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UmVhY3RTZWFyY2ggLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VhcmNoIHJlc3VsdHMgZm9yIFwie3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9XCI6IDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPT09IDApICYmIDxkaXYgY2xhc3NOYW1lPVwibm9SZXN1bHRzXCI+PGgyPlNvcnJ5LCB3ZSBjb3VsZCBub3QgZmluZCBcInt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVwiLjwvaDI+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2tleX0gaHJlZj17YC9wb3N0cy8/dWlkPSR7YXJ0aWNsZS51aWR9YH0gYXM9e2AvcG9zdHMvJHthcnRpY2xlLnVpZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZUJyaWVmTGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19 */\n/*@ sourceURL=pages/search.js?entry */"
            }));
        }
    }], [{
        key: "getInitialProps",
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
                                    return api.query([Prismic.Predicates.at('document.type', 'article'), Prismic.Predicates.fulltext('document', "" + searchValue)]);
                                }).then(function (res) {
                                    return res;
                                });

                            case 2:
                                data = _context.sent;
                                return _context.abrupt("return", {
                                    posts: data.results,
                                    searchValue: searchValue
                                });

                            case 4:
                            case "end":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJQcmlzbWljIiwicmVxdWlyZSIsImFwaUVuZHBvaW50IiwiYWNjZXNzVG9rZW4iLCJmZXRjaCIsIkxheW91dCIsIlJlYWN0IiwiUmVhY3RTZWFyY2giLCJMaW5rIiwiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFZhbHVlIiwic2VhcmNoUmVzdWx0cyIsInBvc3RzIiwiYWxsQXJ0aWNsZXMiLCJsb2FkaW5nIiwiZ2V0QWxsIiwiYmluZCIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJlcyIsInNldFN0YXRlIiwicmVzdWx0cyIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsIlByZWRpY2F0ZXMiLCJhdCIsImZ1bGx0ZXh0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTzs7Ozs7Ozs7QUFQUCxJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCO0FBQ2xCLElBQUksY0FBSixBQUFrQjs7QUFNbEIsSUFBSSxjQUFKLEFBQWtCOztJLEFBRVo7b0NBQ0Y7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7MElBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7eUJBQ1csTUFBQSxBQUFLLE1BRFYsQUFDZ0IsQUFDdkI7MkJBQWMsTUFBQSxBQUFLLE1BRlosQUFFa0IsQUFDekI7eUJBSE8sQUFHSyxBQUNaO3FCQUpKLEFBQVcsQUFJQyxBQUVaO0FBTlcsQUFDUDtjQUtKLEFBQUssU0FBUyxNQUFBLEFBQUssT0FBTCxBQUFZLEtBUlgsQUFRZjtlQUNIOzs7Ozs0Q0FDb0IsQUFDakI7aUJBQUEsQUFBSyxBQUNSOzs7O2lDQW9CUzt5QkFDTjs7b0JBQUEsQUFBUSxPQUFSLEFBQWUsYUFBWSxFQUFFLGFBQTdCLEFBQTJCLEFBQWUsZUFBMUMsQUFDSyxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ2I7dUJBQU8sSUFBQSxBQUFJLE1BQVgsQUFBTyxBQUFVLEFBQ1o7QUFIVCxlQUFBLEFBSVMsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUO3VCQUFBLEFBQUs7aUNBQ1csSUFERixBQUNNLEFBQ2hCOzZCQUZKLEFBQWMsQUFFRixBQUdmO0FBTGlCLEFBQ1Y7QUFOaEIsZUFBQSxBQVdTLE1BQU0sUUFYZixBQVd1QixBQUN0Qjs7OztpQ0FJSyxBQUNOO21DQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUVJO0FBRko7QUFBQSwrQkFFSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBeUIsOEJBQUEsQUFBSyxNQUE5QixBQUFvQyxhQUZ4QyxBQUVJLEFBQ0UsY0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLFdBQTFCLEFBQXFDLHFCQUFNLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFBMkI7QUFBM0I7QUFBQSxhQUFBLGtCQUEyQixjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBK0Isb0NBQUEsQUFBSyxNQUFwQyxBQUEwQyxhQUhySCxBQUdnRCxBQUEyQixBQUN0RSxjQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLEtBQU0sQUFDMUM7dUNBQ0ksQUFBQyxnQ0FBSyxLQUFOLEFBQVcsS0FBSyx1QkFBcUIsUUFBckMsQUFBNkMsS0FBTyxnQkFBYyxRQUFsRSxBQUEwRSxLQUFPLFVBQWpGO2tDQUFBO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBLE9BQTZCLE1BQTdCLEFBQWtDLHlDQUFsQyxBQUFhOztrQ0FBYjtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsMkJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQUgzQyxBQUNJLEFBQ0ksQUFDSSxBQUFrQyxBQUlqRDtBQWRiLEFBQ0ksQUFDSSxBQUlLO3lCQU5iO3FCQURKLEFBQ0ksQUE4QlA7QUE5Qk87Ozs7OztvQixBQXJDaUMsbUJBQVQsQSxNQUFTLEE7Ozs7Ozs7K0NBQ2pCLEFBQVEsT0FBUixBQUFlLGFBQVksRUFBRSxhQUE5QixBQUFDLEFBQTJCLEFBQWUsZUFBM0MsQUFDZCxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ1Q7MkNBQU8sSUFBQSxBQUFJLE1BQU0sQ0FDYixRQUFBLEFBQVEsV0FBUixBQUFtQixHQUFuQixBQUFzQixpQkFEVCxBQUNiLEFBQXVDLFlBQ3ZDLFFBQUEsQUFBUSxXQUFSLEFBQW1CLFNBQW5CLEFBQTRCLGlCQUZoQyxBQUFPLEFBQVUsQUFFYixBQUEyQyxBQUVsRDtBQU5jLGlDQUFDLEVBQUQsQUFPZCxLQUFLLFVBQUEsQUFBQyxLQUFNLEFBQ1Q7MkNBQUEsQUFBTyxBQUVWO0FBVmMsQTs7aUNBQWI7QTs7MkNBWVEsS0FESCxBQUNRLEFBQ1g7aURBRkcsQUFFUyxBO0FBRlQsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTVCSyxnQkFBTSxBLEFBcUYzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzZWFyY2guanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9