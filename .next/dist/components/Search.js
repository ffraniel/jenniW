'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinksToArticles = require('./LinksToArticles');

var _LinksToArticles2 = _interopRequireDefault(_LinksToArticles);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/components/Search.js';

//show all dates available
// show search box to do text search in prismic.io
// add search results list page - just heading and first paragraph

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Search = function (_React$Component) {
    (0, _inherits3.default)(Search, _React$Component);

    function Search(props) {
        (0, _classCallCheck3.default)(this, Search);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

        _this.state = {
            loading: true,
            list: ''
        };
        _this.getDates = _this.getDates.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getDates();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-3933588802',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('form', {
                className: 'jsx-3933588802' + ' ' + 'textSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'jsx-3933588802',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement('input', { type: 'submit', className: 'jsx-3933588802',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            })), this.state.loading && _react2.default.createElement(_Loading2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), !this.state.loading && _react2.default.createElement(_LinksToArticles2.default, { list: this.state.list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '3933588802',
                css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DNkIiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbIi8vc2hvdyBhbGwgZGF0ZXMgYXZhaWxhYmxlXG4vLyBzaG93IHNlYXJjaCBib3ggdG8gZG8gdGV4dCBzZWFyY2ggaW4gcHJpc21pYy5pb1xuLy8gYWRkIHNlYXJjaCByZXN1bHRzIGxpc3QgcGFnZSAtIGp1c3QgaGVhZGluZyBhbmQgZmlyc3QgcGFyYWdyYXBoXG5cbnZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG52YXIgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vSmVubmlXLnByaXNtaWMuaW8vYXBpL3YyXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlua3NUb0FydGljbGVzIGZyb20gJy4vTGlua3NUb0FydGljbGVzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBsb2FkaW5nOnRydWUsXG4gICAgICAgICAgICBsaXN0OicnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXREYXRlcyA9IHRoaXMuZ2V0RGF0ZXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGF0ZXMoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRleHRTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT4gICBcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxMaW5rc1RvQXJ0aWNsZXMgbGlzdD17dGhpcy5zdGF0ZS5saXN0fSAvPiB9XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgICAgICAgICAgICAgLnRleHRTZWFyY2ggeyB9XG4gICAgICAgICAgICAgICAgICAgIC5jaGVja0JveGVzIHsgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldERhdGVzKCkge1xuICAgICAgICBQcmlzbWljLmFwaShhcGlFbmRwb2ludCkudGhlbihhcGkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShcIlwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIHZhciB4ID0gcmVzLnJlc3VsdHMuc29ydCgoYSwgYik9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gYi51aWQgLSBhLnVpZDtcbiAgICAgICAgICAgIH0pICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsaXN0OngsXG4gICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxuICAgIH1cbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0= */\n/*@ sourceURL=components/Search.js */'
            }));
        }
    }, {
        key: 'getDates',
        value: function getDates() {
            var _this2 = this;

            Prismic.api(apiEndpoint).then(function (api) {
                return api.query("");
            }).then(function (res) {
                var x = res.results.sort(function (a, b) {
                    return b.uid - a.uid;
                });
                _this2.setState({
                    list: x,
                    loading: false
                });
            }).catch(console.log);
        }
    }]);

    return Search;
}(_react2.default.Component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJSZWFjdCIsIkxpbmtzVG9BcnRpY2xlcyIsIkxvYWRpbmciLCJTZWFyY2giLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImxpc3QiLCJnZXREYXRlcyIsImJpbmQiLCJhcGkiLCJ0aGVuIiwicXVlcnkiLCJyZXMiLCJ4IiwicmVzdWx0cyIsInNvcnQiLCJhIiwiYiIsInVpZCIsInNldFN0YXRlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBYTs7Ozs7Ozs7QUFWcEI7QUFDQTtBQUNBOztBQUVBLElBQUksVUFBSixBQUFJLEFBQVU7QUFDZCxJQUFJLGNBQUosQUFBa0I7OztJLEFBT1o7b0NBQ0Y7O29CQUFBLEFBQWEsT0FBTzs0Q0FBQTs7MElBQUEsQUFDVixBQUNOOztjQUFBLEFBQUs7cUJBQU0sQUFDQyxBQUNSO2tCQUZKLEFBQVcsQUFFRixBQUVUO0FBSlcsQUFDUDtjQUdKLEFBQUssV0FBVyxNQUFBLEFBQUssU0FBTCxBQUFjLEtBTmQsQUFNaEI7ZUFDSDs7Ozs7NENBRW9CLEFBQ2pCO2lCQUFBLEFBQUssQUFDUjs7OztpQ0FFUSxBQUNMO21DQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTtvREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHdEQUNXLE1BQVAsQUFBWSxtQkFBWjs7OEJBQUE7Z0NBREosQUFDSSxBQUNBO0FBREE7eURBQ08sTUFBUCxBQUFZLHFCQUFaOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFFSDtBQUZHO3NCQUVILEFBQUssTUFBTCxBQUFXLDJCQUFXLEFBQUM7OzhCQUFEO2dDQUwzQixBQUsyQixBQUN0QjtBQURzQjtBQUFBLGFBQUEsSUFDckIsS0FBQSxBQUFLLE1BQU4sQUFBWSwyQkFBVyxBQUFDLDJDQUFnQixNQUFNLEtBQUEsQUFBSyxNQUE1QixBQUFrQzs4QkFBbEM7Z0NBTjVCLEFBTTRCO0FBQUE7YUFBQTt5QkFONUI7cUJBREosQUFDSSxBQWNQO0FBZE87Ozs7bUNBZ0JHO3lCQUNQOztvQkFBQSxBQUFRLElBQVIsQUFBWSxhQUFaLEFBQXlCLEtBQUssZUFBTyxBQUNqQzt1QkFBTyxJQUFBLEFBQUksTUFBWCxBQUFPLEFBQVUsQUFDcEI7QUFGRCxlQUFBLEFBR0MsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUO29CQUFJLFFBQUksQUFBSSxRQUFKLEFBQVksS0FBSyxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUksQUFDN0I7MkJBQU8sRUFBQSxBQUFFLE1BQU0sRUFBZixBQUFpQixBQUNwQjtBQUZELEFBQVEsQUFHUixpQkFIUTt1QkFHUixBQUFLOzBCQUFTLEFBQ0wsQUFDTDs2QkFGSixBQUFjLEFBRUYsQUFFZjtBQUppQixBQUNWO0FBUlIsZUFBQSxBQVlDLE1BQU0sUUFaUCxBQVllLEFBQ2xCOzs7OztFQTlDZ0IsZ0JBQU0sQSxBQWlEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==