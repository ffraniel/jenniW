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

var _jsxFileName = "/home/francis/Code/JenniW/components/Search.js";

//show all dates available
// show search box to do text search in prismic.io
// add search results list page - just heading and first paragraph

var Prismic = require("prismic-javascript");
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";


var Search = function (_React$Component) {
    (0, _inherits3.default)(Search, _React$Component);

    function Search(props) {
        (0, _classCallCheck3.default)(this, Search);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

        _this.state = {}
        // loading:true,
        // list:''

        // this.getDates = this.getDates.bind(this);
        ;return _this;
    }

    // componentDidMount () {
    //     this.getDates();
    // }

    (0, _createClass3.default)(Search, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                className: "jsx-746918724" + " " + "searchComp",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement("form", {
                className: "jsx-746918724" + " " + "textSearch",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement("input", { type: "text", className: "jsx-746918724",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement("input", { type: "submit", value: "Search", className: "jsx-746918724",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            })), this.state.loading && _react2.default.createElement(_Loading2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), !this.state.loading && _react2.default.createElement(_LinksToArticles2.default, { list: this.state.list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: "746918724",
                css: ".searchComp.jsx-746918724{padding:0px 0 6px 6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DNkIsQUFLK0Msc0JBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyIvL3Nob3cgYWxsIGRhdGVzIGF2YWlsYWJsZVxuLy8gc2hvdyBzZWFyY2ggYm94IHRvIGRvIHRleHQgc2VhcmNoIGluIHByaXNtaWMuaW9cbi8vIGFkZCBzZWFyY2ggcmVzdWx0cyBsaXN0IHBhZ2UgLSBqdXN0IGhlYWRpbmcgYW5kIGZpcnN0IHBhcmFncmFwaFxuXG52YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xudmFyIGFwaUVuZHBvaW50ID0gXCJodHRwczovL0plbm5pVy5wcmlzbWljLmlvL2FwaS92MlwiO1xudmFyIGFjY2Vzc1Rva2VuID0gXCJNQzVYYjBZMFFWTm5RVUZFWVd0dmVUUk0uNzctOTc3LTlaUjd2djczdnY3M3Z2NzN2djcwS05nM3Z2NzN2djczdnY3MU5JdS1fdlRaRU4tLV92ZS1fdlVIdnY3MHROVVR2djczdnY3M3Z2NzN2djczdnY3MFwiOyBcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rc1RvQXJ0aWNsZXMgZnJvbSAnLi9MaW5rc1RvQXJ0aWNsZXMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIC8vIGxvYWRpbmc6dHJ1ZSxcbiAgICAgICAgICAgIC8vIGxpc3Q6JydcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmdldERhdGVzID0gdGhpcy5nZXREYXRlcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyAgICAgdGhpcy5nZXREYXRlcygpO1xuICAgIC8vIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoQ29tcFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRleHRTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgIFxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPExvYWRpbmcgLz59XG4gICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPExpbmtzVG9BcnRpY2xlcyBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9IC8+IH1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICAgICAgICAgICAgICAudGV4dFNlYXJjaCB7IH1cbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrQm94ZXMgeyB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2hDb21wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwIDZweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIGdldERhdGVzKCkge1xuICAgIC8vICAgICBQcmlzbWljLmFwaShhcGlFbmRwb2ludCwgeyBhY2Nlc3N0b2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAvLyAgICAgICAgIC50aGVuKGFwaSA9PiB7XG4gICAgLy8gICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFwiXCIpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbigocmVzKT0+e1xuICAgIC8vICAgICAgICAgdmFyIHggPSByZXMucmVzdWx0cy5zb3J0KChhLCBiKT0+e1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBiLnVpZCAtIGEudWlkO1xuICAgIC8vICAgICAgICAgfSkgICAgICAgICBcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgIGxpc3Q6eCxcbiAgICAvLyAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgLy8gfVxuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdfQ== */\n/*@ sourceURL=components/Search.js */"
            }));
        }

        // getDates() {
        //     Prismic.api(apiEndpoint, { accesstoken: accessToken })
        //         .then(api => {
        //         return api.query("");
        //     })
        //     .then((res)=>{
        //         var x = res.results.sort((a, b)=>{
        //             return b.uid - a.uid;
        //         })         
        //         this.setState({
        //             list:x,
        //             loading:false
        //         })
        //     })
        //     .catch(console.log)
        // }

    }]);

    return Search;
}(_react2.default.Component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIlJlYWN0IiwiTGlua3NUb0FydGljbGVzIiwiTG9hZGluZyIsIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwibGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQWE7Ozs7Ozs7O0FBWHBCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCO0FBQ2xCLElBQUksY0FBSixBQUFrQjs7O0lBT1osQTtvQ0FDRjs7b0JBQUEsQUFBYSxPQUFPOzRDQUFBOzswSUFBQSxBQUNWLEFBQ047O2NBQUEsQUFBSyxRQUFNLEFBQ1A7QUFDQTtBQUVKOztBQUpBO1NBRmdCLE9BT25CO0FBRUQ7O0FBQ0E7QUFDQTs7Ozs7aUNBRVMsQUFDTDttQ0FDSSxjQUFBO21EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTttREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHdEQUNXLE1BQVAsQUFBWSxtQkFBWjs7OEJBQUE7Z0NBREosQUFDSSxBQUNBO0FBREE7eURBQ08sTUFBUCxBQUFZLFVBQVMsT0FBckIsQUFBMkIscUJBQTNCOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFFSDtBQUZHO3NCQUVILEFBQUssTUFBTCxBQUFXLDJCQUFXLEFBQUM7OzhCQUFEO2dDQUwzQixBQUsyQixBQUN0QjtBQURzQjtBQUFBLGFBQUEsSUFDckIsS0FBQSxBQUFLLE1BQU4sQUFBWSwyQkFBVyxBQUFDLDJDQUFnQixNQUFNLEtBQUEsQUFBSyxNQUE1QixBQUFrQzs4QkFBbEM7Z0NBTjVCLEFBTTRCO0FBQUE7YUFBQTt5QkFONUI7cUJBREosQUFDSSxBQWlCUDtBQWpCTztBQW1CUjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztFQWxEaUIsZ0JBQU0sQSxBQXFEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==