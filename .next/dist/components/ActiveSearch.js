"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/components/ActiveSearch.js";

var Prismic = require("prismic-javascript");
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

var ActiveSearch = function (_React$Component) {
    (0, _inherits3.default)(ActiveSearch, _React$Component);

    function ActiveSearch(props) {
        (0, _classCallCheck3.default)(this, ActiveSearch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ActiveSearch.__proto__ || (0, _getPrototypeOf2.default)(ActiveSearch)).call(this, props));

        _this.state = {
            reactiveSearchValue: '',
            reactiveSearchResults: '',
            allArticles: _this.props.allArticles
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ActiveSearch, [{
        key: "handleChange",
        value: function handleChange(e) {
            e.preventDefault();
            if (this.state.allArticles === "") {
                this.setState({
                    allArticles: this.props.allArticles
                });
            }
            this.setState({
                reactiveSearchValue: e.target.value
            });
            var filtered = this.state.allArticles.filter(function (article) {
                var input = new RegExp(e.target.value, 'ig');
                return input.test(article.data.searchtext);
            });
            this.props.activeSearchChanged();
            this.setState({
                reactiveSearchResults: filtered
            });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit() {
            if (reactiveSearchResults.length === 0) {
                console.log("there are no results");
            }
            this.setState({
                reactiveSearchValue: ''

            });
            //reload page here
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                className: "jsx-847420616",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement("form", {
                className: "jsx-847420616" + " " + "reactiveSearch",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement("h3", {
                className: "jsx-847420616",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, "Search Again"), _react2.default.createElement("input", { type: "text", value: this.state.reactiveSearchValue, onChange: this.handleChange, className: "jsx-847420616",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement("input", { type: "submit", className: "jsx-847420616",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement("ul", {
                className: "jsx-847420616",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, this.state.reactiveSearchResults === "" && _react2.default.createElement("div", {
                className: "jsx-847420616",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles && this.state.reactiveSearchResults.map(function (article, key) {
                return _react2.default.createElement("li", {
                    className: "jsx-847420616",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement(_link2.default, { key: key, href: "/posts/?uid=" + article.uid, as: "/posts/" + article.uid, passHre: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement("a", { href: "#", className: "jsx-847420616",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, _react2.default.createElement("h3", {
                    className: "jsx-847420616",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, article.data.articletitle[0].text))));
            })), _react2.default.createElement(_style2.default, {
                styleId: "847420616",
                css: "ul.jsx-847420616{list-style:none;}a.jsx-847420616{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFcUIsQUFHeUMsQUFJckIsZ0JBSEMsS0FHQSIsImZpbGUiOiJjb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbnZhciBhY2Nlc3NUb2tlbiA9IFwiTUM1WGIwWTBRVk5uUVVGRVlXdHZlVFJNLjc3LTk3Ny05WlI3dnY3M3Z2NzN2djczdnY3MEtOZzN2djczdnY3M3Z2NzFOSXUtX3ZUWkVOLS1fdmUtX3ZVSHZ2NzB0TlVUdnY3M3Z2NzN2djczdnY3M3Z2NzBcIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xudmFyIGFjY2Vzc1Rva2VuID0gXCJNQzVYYjBZMFFWTm5RVUZFWVd0dmVUUk0uNzctOTc3LTlaUjd2djczdnY3M3Z2NzN2djcwS05nM3Z2NzN2djczdnY3MU5JdS1fdlRaRU4tLV92ZS1fdlVIdnY3MHROVVR2djczdnY3M3Z2NzN2djczdnY3MFwiO1xuXG5jbGFzcyBBY3RpdmVTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICByZWFjdGl2ZVNlYXJjaFZhbHVlOicnLFxuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hSZXN1bHRzOicnLFxuICAgICAgICAgICAgYWxsQXJ0aWNsZXM6dGhpcy5wcm9wcy5hbGxBcnRpY2xlc1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbGxBcnRpY2xlcyA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWxsQXJ0aWNsZXM6dGhpcy5wcm9wcy5hbGxBcnRpY2xlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoVmFsdWU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLnN0YXRlLmFsbEFydGljbGVzLmZpbHRlcigoYXJ0aWNsZSk9PntcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gbmV3IFJlZ0V4cChlLnRhcmdldC52YWx1ZSwnaWcnKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC50ZXN0KGFydGljbGUuZGF0YS5zZWFyY2h0ZXh0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMuYWN0aXZlU2VhcmNoQ2hhbmdlZCgpOyAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWFjdGl2ZVNlYXJjaFJlc3VsdHM6ZmlsdGVyZWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQgKCkge1xuICAgICAgICBpZiAocmVhY3RpdmVTZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGVyZSBhcmUgbm8gcmVzdWx0c1wiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hWYWx1ZTonJ1xuXG4gICAgICAgIH0pXG4gICAgICAgIC8vcmVsb2FkIHBhZ2UgaGVyZVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJlYWN0aXZlU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZWFyY2ggQWdhaW48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUucmVhY3RpdmVTZWFyY2hSZXN1bHRzID09PSBcIlwiKSAmJiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cy5sZW5ndGggPj0gMSAmJiB0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cyA8IHRoaXMucHJvcHMuYWxsQXJ0aWNsZXMpICYmIHRoaXMuc3RhdGUucmVhY3RpdmVTZWFyY2hSZXN1bHRzLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e2AvcG9zdHMvP3VpZD0ke2FydGljbGUudWlkfWB9IGFzPXtgL3Bvc3RzLyR7YXJ0aWNsZS51aWR9YH0gcGFzc0hyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlU2VhcmNoOyJdfQ== */\n/*@ sourceURL=components/ActiveSearch.js */"
            }));
        }
    }]);

    return ActiveSearch;
}(_react2.default.Component);

exports.default = ActiveSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGF5b3V0IiwiUmVhY3QiLCJMaW5rIiwiQWN0aXZlU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInJlYWN0aXZlU2VhcmNoVmFsdWUiLCJyZWFjdGl2ZVNlYXJjaFJlc3VsdHMiLCJhbGxBcnRpY2xlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJhcnRpY2xlIiwiaW5wdXQiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YSIsInNlYXJjaHRleHQiLCJhY3RpdmVTZWFyY2hDaGFuZ2VkIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImtleSIsInVpZCIsImFydGljbGV0aXRsZSIsInRleHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBTlAsSUFBSSxVQUFKLEFBQUksQUFBVTtBQUNkLElBQUksY0FBSixBQUFrQjtBQUNsQixJQUFJLGNBQUosQUFBa0I7O0FBS2xCLElBQUksY0FBSixBQUFrQjs7SUFFWixBOzBDQUNGOzswQkFBQSxBQUFZLE9BQU87NENBQUE7O3NKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO2lDQUFNLEFBQ2EsQUFDcEI7bUNBRk8sQUFFZSxBQUN0Qjt5QkFBWSxNQUFBLEFBQUssTUFIckIsQUFBVyxBQUdnQixBQUUzQjtBQUxXLEFBQ1A7Y0FJSixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtjQUFBLEFBQUssZUFBZSxN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