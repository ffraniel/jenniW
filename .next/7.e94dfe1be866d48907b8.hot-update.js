webpackHotUpdate(7,{

/***/ 427:
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

var _isomorphicUnfetch = __webpack_require__(393);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Layout = __webpack_require__(405);

var _Layout2 = _interopRequireDefault(_Layout);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _ActiveSearch = __webpack_require__(428);

var _ActiveSearch2 = _interopRequireDefault(_ActiveSearch);

var _link = __webpack_require__(392);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/pages/search.js?entry";

var Prismic = __webpack_require__(401);
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
            loading: true,
            activeLive: false
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
        key: "activeSearchChanged",
        value: function activeSearchChanged() {
            if (this.state.activeLive === true) {
                this.setState({
                    activeLive: true,
                    searchResults: ''
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                className: "jsx-2119392568",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement("div", {
                className: "jsx-2119392568" + " " + "articleBriefList",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement("h3", {
                className: "jsx-2119392568",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, "Search results for \"", this.props.searchValue, "\": "), this.state.searchResults.length === 0 && _react2.default.createElement("div", {
                className: "jsx-2119392568" + " " + "noResults",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement("h2", {
                className: "jsx-2119392568",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, "Sorry, we could not find \"", this.state.searchValue, "\".")), this.state.searchResults.map(function (article, key) {
                return _react2.default.createElement(_link2.default, { key: key, href: "/posts/?uid=" + article.uid, as: "/posts/" + article.uid, passHref: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                    }
                }, _react2.default.createElement("a", { href: "#", className: "jsx-2119392568" + " " + "linkToArticle",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                    }
                }, _react2.default.createElement("h1", {
                    className: "jsx-2119392568",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    }
                }, article.data.articletitle[0].text)));
            }), _react2.default.createElement(_ActiveSearch2.default, { allArticles: this.state.allArticles, activeSearchChanged: this.activeSearchChanged, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: "2119392568",
                css: ".articleBriefList.jsx-2119392568{padding:0 15% 0 15%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RnFCLEFBRzRDLG9CQUN2QiIsImZpbGUiOiJwYWdlcy9zZWFyY2guanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG52YXIgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vSmVubmlXLnByaXNtaWMuaW8vYXBpL3YyXCI7XG52YXIgYWNjZXNzVG9rZW4gPSBcIk1DNVhiMFkwUVZOblFVRkVZV3R2ZVRSTS43Ny05NzctOVpSN3Z2NzN2djczdnY3M3Z2NzBLTmczdnY3M3Z2NzN2djcxTkl1LV92VFpFTi0tX3ZlLV92VUh2djcwdE5VVHZ2NzN2djczdnY3M3Z2NzN2djcwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3RpdmVTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9BY3RpdmVTZWFyY2guanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xudmFyIGFjY2Vzc1Rva2VuID0gXCJNQzVYYjBZMFFWTm5RVUZFWVd0dmVUUk0uNzctOTc3LTlaUjd2djczdnY3M3Z2NzN2djcwS05nM3Z2NzN2djczdnY3MU5JdS1fdlRaRU4tLV92ZS1fdlVIdnY3MHROVVR2djczdnY3M3Z2NzN2djczdnY3MFwiO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTp0aGlzLnByb3BzLnNlYXJjaFZhbHVlLFxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0czp0aGlzLnByb3BzLnBvc3RzLFxuICAgICAgICAgICAgYWxsQXJ0aWNsZXM6JycsXG4gICAgICAgICAgICBsb2FkaW5nOnRydWUsXG4gICAgICAgICAgICBhY3RpdmVMaXZlOmZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRBbGwgPSB0aGlzLmdldEFsbC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHRoaXMuZ2V0QWxsKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBzZWFyY2hWYWx1ZSB9IH0pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IChQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KSlcbiAgICAgICAgICAgIC50aGVuKChhcGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShbXG4gICAgICAgICAgICAgICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdhcnRpY2xlJyksXG4gICAgICAgICAgICAgICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5mdWxsdGV4dCgnZG9jdW1lbnQnLCBgJHtzZWFyY2hWYWx1ZX1gKVxuICAgICAgICAgICAgICAgIF0pOyBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgICAgIHBvc3RzOmRhdGEucmVzdWx0cyxcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTpzZWFyY2hWYWx1ZVxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRBbGwgKCkge1xuICAgICAgICBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KVxuICAgICAgICAgICAgLnRoZW4oKGFwaSk9PntcbiAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoXCJcIik7IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxBcnRpY2xlczpyZXMucmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgICAgICAgfVxuICAgIGFjdGl2ZVNlYXJjaENoYW5nZWQgKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVMaXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVMaXZlOnRydWUsXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0czonJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlQnJpZWZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VhcmNoIHJlc3VsdHMgZm9yIFwie3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9XCI6IDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPT09IDApICYmIDxkaXYgY2xhc3NOYW1lPVwibm9SZXN1bHRzXCI+PGgyPlNvcnJ5LCB3ZSBjb3VsZCBub3QgZmluZCBcInt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVwiLjwvaDI+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2tleX0gaHJlZj17YC9wb3N0cy8/dWlkPSR7YXJ0aWNsZS51aWR9YH0gYXM9e2AvcG9zdHMvJHthcnRpY2xlLnVpZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlU2VhcmNoIGFsbEFydGljbGVzPXt0aGlzLnN0YXRlLmFsbEFydGljbGVzfSBhY3RpdmVTZWFyY2hDaGFuZ2VkPXt0aGlzLmFjdGl2ZVNlYXJjaENoYW5nZWR9Lz4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVCcmllZkxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdfQ== */\n/*@ sourceURL=pages/search.js?entry */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJQcmlzbWljIiwicmVxdWlyZSIsImFwaUVuZHBvaW50IiwiYWNjZXNzVG9rZW4iLCJmZXRjaCIsIkxheW91dCIsIlJlYWN0IiwiQWN0aXZlU2VhcmNoIiwiTGluayIsIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFJlc3VsdHMiLCJwb3N0cyIsImFsbEFydGljbGVzIiwibG9hZGluZyIsImFjdGl2ZUxpdmUiLCJnZXRBbGwiLCJiaW5kIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwicmVzIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiYXJ0aWNsZSIsImtleSIsInVpZCIsImRhdGEiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiYWN0aXZlU2VhcmNoQ2hhbmdlZCIsIlByZWRpY2F0ZXMiLCJhdCIsImZ1bGx0ZXh0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTzs7Ozs7Ozs7QUFQUCxJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCO0FBQ2xCLElBQUksY0FBSixBQUFrQjs7QUFNbEIsSUFBSSxjQUFKLEFBQWtCOztJQUVaLEE7b0NBQ0Y7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7MElBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7eUJBQ1csTUFBQSxBQUFLLE1BRFYsQUFDZ0IsQUFDdkI7MkJBQWMsTUFBQSxBQUFLLE1BRlosQUFFa0IsQUFDekI7eUJBSE8sQUFHSyxBQUNaO3FCQUpPLEFBSUMsQUFDUjt3QkFMSixBQUFXLEFBS0ksQUFFZjtBQVBXLEFBQ1A7Y0FNSixBQUFL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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5lOTRkZmUxYmU4NjZkNDg5MDdiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VhcmNoLmpzP2RkNmM2OWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbnZhciBhY2Nlc3NUb2tlbiA9IFwiTUM1WGIwWTBRVk5uUVVGRVlXdHZlVFJNLjc3LTk3Ny05WlI3dnY3M3Z2NzN2djczdnY3MEtOZzN2djczdnY3M3Z2NzFOSXUtX3ZUWkVOLS1fdmUtX3ZVSHZ2NzB0TlVUdnY3M3Z2NzN2djczdnY3M3Z2NzBcIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdGl2ZVNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG52YXIgYWNjZXNzVG9rZW4gPSBcIk1DNVhiMFkwUVZOblFVRkVZV3R2ZVRSTS43Ny05NzctOVpSN3Z2NzN2djczdnY3M3Z2NzBLTmczdnY3M3Z2NzN2djcxTkl1LV92VFpFTi0tX3ZlLV92VUh2djcwdE5VVHZ2NzN2djczdnY3M3Z2NzN2djcwXCI7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOnRoaXMucHJvcHMuc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOnRoaXMucHJvcHMucG9zdHMsXG4gICAgICAgICAgICBhbGxBcnRpY2xlczonJyxcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZUxpdmU6ZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldEFsbCA9IHRoaXMuZ2V0QWxsLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5nZXRBbGwoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IHNlYXJjaFZhbHVlIH0gfSkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgKFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50LHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0pKVxuICAgICAgICAgICAgLnRoZW4oKGFwaSk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFtcbiAgICAgICAgICAgICAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ2FydGljbGUnKSxcbiAgICAgICAgICAgICAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmZ1bGx0ZXh0KCdkb2N1bWVudCcsIGAke3NlYXJjaFZhbHVlfWApXG4gICAgICAgICAgICAgICAgXSk7IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgcG9zdHM6ZGF0YS5yZXN1bHRzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOnNlYXJjaFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldEFsbCAoKSB7XG4gICAgICAgIFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50LHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0pXG4gICAgICAgICAgICAudGhlbigoYXBpKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShcIlwiKTsgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEFydGljbGVzOnJlcy5yZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxuICAgICAgICB9XG4gICAgYWN0aXZlU2VhcmNoQ2hhbmdlZCAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUxpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxpdmU6dHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzOicnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVCcmllZkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TZWFyY2ggcmVzdWx0cyBmb3IgXCJ7dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX1cIjogPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCkgJiYgPGRpdiBjbGFzc05hbWU9XCJub1Jlc3VsdHNcIj48aDI+U29ycnksIHdlIGNvdWxkIG5vdCBmaW5kIFwie3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9XCIuPC9oMj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL3Bvc3RzLz91aWQ9JHthcnRpY2xlLnVpZH1gfSBhcz17YC9wb3N0cy8ke2FydGljbGUudWlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQXJ0aWNsZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVTZWFyY2ggYWxsQXJ0aWNsZXM9e3RoaXMuc3RhdGUuYWxsQXJ0aWNsZXN9IGFjdGl2ZVNlYXJjaENoYW5nZWQ9e3RoaXMuYWN0aXZlU2VhcmNoQ2hhbmdlZH0vPiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZUJyaWVmTGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc2VhcmNoLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFOQTtBQU1BO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQW9CQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBSUE7QUFKQTtBQU5BOzs7O0FBY0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUhBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBOztBQWRBO0FBNEJBO0FBNUJBOzs7Ozs7Ozs7Ozs7O0FBM0NBO0FBRUE7QUFGQTtBQVVBOzs7QUFWQTs7O0FBWUE7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOUJBO0FBQ0E7QUEwRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==