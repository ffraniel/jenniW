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

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _LinksToArticles = require("./LinksToArticles");

var _LinksToArticles2 = _interopRequireDefault(_LinksToArticles);

var _Loading = require("./Loading");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/components/SearchBox.js";

//show all dates available
// show search box to do text search in prismic.io
// add search results list page - just heading and first paragraph

var Prismic = require("prismic-javascript");
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";


var SearchBox = function (_React$Component) {
    (0, _inherits3.default)(SearchBox, _React$Component);

    function SearchBox(props) {
        (0, _classCallCheck3.default)(this, SearchBox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBox.__proto__ || (0, _getPrototypeOf2.default)(SearchBox)).call(this, props));

        _this.state = {
            searchVal: '',
            change: null
        };
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(SearchBox, [{
        key: "handleSearch",
        value: function handleSearch(e) {
            e.preventDefault();
        }
    }, {
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({
                searchVal: e.target.value,
                change: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                className: "jsx-746918724" + " " + "searchComp",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement("form", { onSubmit: this.handleSearch, className: "jsx-746918724" + " " + "textSearch",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement("input", { type: "text", value: this.state.searchVal, onChange: this.handleChange, className: "jsx-746918724",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement(_link2.default, { prefetch: true, href: "/search/?searchVal=" + this.state.searchVal, as: "/search/" + this.state.searchVal, passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement("a", { href: "#", className: "jsx-746918724",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement("button", { type: "submit", value: "search", className: "jsx-746918724",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, "Search")))), this.state.loading && _react2.default.createElement(_Loading2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), !this.state.loading && _react2.default.createElement(_LinksToArticles2.default, { list: this.state.list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: "746918724",
                css: ".searchComp.jsx-746918724{padding:0px 0 6px 6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENkIsQUFLK0Msc0JBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyIvL3Nob3cgYWxsIGRhdGVzIGF2YWlsYWJsZVxuLy8gc2hvdyBzZWFyY2ggYm94IHRvIGRvIHRleHQgc2VhcmNoIGluIHByaXNtaWMuaW9cbi8vIGFkZCBzZWFyY2ggcmVzdWx0cyBsaXN0IHBhZ2UgLSBqdXN0IGhlYWRpbmcgYW5kIGZpcnN0IHBhcmFncmFwaFxuXG52YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xudmFyIGFwaUVuZHBvaW50ID0gXCJodHRwczovL0plbm5pVy5wcmlzbWljLmlvL2FwaS92MlwiO1xudmFyIGFjY2Vzc1Rva2VuID0gXCJNQzVYYjBZMFFWTm5RVUZFWVd0dmVUUk0uNzctOTc3LTlaUjd2djczdnY3M3Z2NzN2djcwS05nM3Z2NzN2djczdnY3MU5JdS1fdlRaRU4tLV92ZS1fdlVIdnY3MHROVVR2djczdnY3M3Z2NzN2djczdnY3MFwiOyBcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rc1RvQXJ0aWNsZXMgZnJvbSAnLi9MaW5rc1RvQXJ0aWNsZXMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcblxuY2xhc3MgU2VhcmNoQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2VhcmNoVmFsOicnLFxuICAgICAgICAgICAgY2hhbmdlOm51bGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlU2VhcmNoKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaFZhbDplLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIGNoYW5nZTp0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hDb21wXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidGV4dFNlYXJjaFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2Avc2VhcmNoLz9zZWFyY2hWYWw9JHt0aGlzLnN0YXRlLnNlYXJjaFZhbH1gfSBhcz17YC9zZWFyY2gvJHt0aGlzLnN0YXRlLnNlYXJjaFZhbH1gfSBwYXNzSHJlZiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInNlYXJjaFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cblxuICAgICAgICAgICAgICAgIDwvZm9ybT4gICBcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxMaW5rc1RvQXJ0aWNsZXMgbGlzdD17dGhpcy5zdGF0ZS5saXN0fSAvPiB9XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgICAgICAgICAgICAgLnRleHRTZWFyY2ggeyB9XG4gICAgICAgICAgICAgICAgICAgIC5jaGVja0JveGVzIHsgfVxuICAgICAgICAgICAgICAgICAgICAuc2VhcmNoQ29tcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMCA2cHggNnB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPiAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94OyJdfQ== */\n/*@ sourceURL=components/SearchBox.js */"
            }));
        }
    }]);

    return SearchBox;
}(_react2.default.Component);

exports.default = SearchBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIlJlYWN0IiwiTGlua3NUb0FydGljbGVzIiwiTG9hZGluZyIsIlNlYXJjaEJveCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hWYWwiLCJjaGFuZ2UiLCJoYW5kbGVTZWFyY2giLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJsaXN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBYTs7Ozs7Ozs7QUFYcEI7QUFDQTtBQUNBOztBQUVBLElBQUksVUFBSixBQUFJLEFBQVU7QUFDZCxJQUFJLGNBQUosQUFBa0I7QUFDbEIsSUFBSSxjQUFKLEFBQWtCOzs7SSxBQU9aO3VDQUNGOzt1QkFBQSxBQUFZLE9BQU87NENBQUE7O2dKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3VCQUFNLEFBQ0csQUFDVjtvQkFGSixBQUFXLEFBRUEsQUFFWDtBQUpXLEFBQ1A7Y0FHSixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtjQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQVB2QixBQU9mO2VBQ0g7Ozs7O3FDLEFBQ1ksR0FBRyxBQUNaO2NBQUEsQUFBRSxBQUNMOzs7O3FDQUNZLEEsR0FBRyxBQUNaO2lCQUFBLEFBQUs7MkJBQ1MsRUFBQSxBQUFFLE9BREYsQUFDUyxBQUNuQjt3QkFGSixBQUFjLEFBRUgsQUFHZDtBQUxpQixBQUNWOzs7O2lDQUtDLEFBQ0w7bUNBQ0ksY0FBQTttREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsVUFBNkIsVUFBVSxLQUF2QyxBQUE0QyxpREFBNUMsQUFBZ0I7OzhCQUFoQjtnQ0FBQSxBQUNJO0FBREo7d0RBQ1csTUFBUCxBQUFZLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBL0IsQUFBcUMsV0FBVyxVQUFVLEtBQTFELEFBQStELHlCQUEvRDs7OEJBQUE7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsOEJBQTRCLEtBQUEsQUFBSyxNQUFoRCxBQUFzRCxXQUFhLGlCQUFlLEtBQUEsQUFBSyxNQUF2RixBQUE2RixXQUFhLFVBQTFHOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLGdCQUFSOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLE9BQXRCLEFBQTRCLHFCQUE1Qjs7OEJBQUE7Z0NBQUE7QUFBQTtlQUxoQixBQUNJLEFBRUksQUFDSSxBQUNJLEFBTVgsbUJBQUEsQUFBSyxNQUFMLEFBQVcsMkJBQVcsQUFBQzs7OEJBQUQ7Z0NBWDNCLEFBVzJCLEFBQ3RCO0FBRHNCO0FBQUEsYUFBQSxJQUNyQixLQUFBLEFBQUssTUFBTixBQUFZLDJCQUFXLEFBQUMsMkNBQWdCLE1BQU0sS0FBQSxBQUFLLE1BQTVCLEFBQWtDOzhCQUFsQztnQ0FaNUIsQUFZNEI7QUFBQTthQUFBO3lCQVo1QjtxQkFESixBQUNJLEFBdUJQO0FBdkJPOzs7OztFQXRCWSxnQkFBTSxBLEFBK0M5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJTZWFyY2hCb3guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9