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
                    lineNumber: 28
                }
            }, _react2.default.createElement('form', {
                className: 'jsx-3933588802' + ' ' + 'textSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'jsx-3933588802',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('input', { type: 'submit', className: 'jsx-3933588802',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })), this.state.loading && _react2.default.createElement('div', {
                className: 'jsx-3933588802' + ' ' + 'loading',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('h4', {
                className: 'jsx-3933588802',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Loading')), !this.state.loading && _react2.default.createElement(_LinksToArticles2.default, { list: this.state.list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '3933588802',
                css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNkIiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbIi8vc2hvdyBhbGwgZGF0ZXMgYXZhaWxhYmxlXG4vLyBzaG93IHNlYXJjaCBib3ggdG8gZG8gdGV4dCBzZWFyY2ggaW4gcHJpc21pYy5pb1xuLy8gYWRkIHNlYXJjaCByZXN1bHRzIGxpc3QgcGFnZSAtIGp1c3QgaGVhZGluZyBhbmQgZmlyc3QgcGFyYWdyYXBoXG5cbnZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG52YXIgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vSmVubmlXLnByaXNtaWMuaW8vYXBpL3YyXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlua3NUb0FydGljbGVzIGZyb20gJy4vTGlua3NUb0FydGljbGVzJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZSxcbiAgICAgICAgICAgIGxpc3Q6JydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldERhdGVzID0gdGhpcy5nZXREYXRlcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5nZXREYXRlcygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidGV4dFNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgIFxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PGg0PkxvYWRpbmc8L2g0PjwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZyAmJiA8TGlua3NUb0FydGljbGVzIGxpc3Q9e3RoaXMuc3RhdGUubGlzdH0gLz4gfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0U2VhcmNoIHsgfVxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tCb3hlcyB7IH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPiAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXREYXRlcygpIHtcbiAgICAgICAgUHJpc21pYy5hcGkoYXBpRW5kcG9pbnQpLnRoZW4oYXBpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhcGkucXVlcnkoXCJcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICB2YXIgeCA9IHJlcy5yZXN1bHRzLnNvcnQoKGEsIGIpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIudWlkIC0gYS51aWQ7XG4gICAgICAgICAgICB9KSAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGlzdDp4LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgICB9XG4gICAgXG59XG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19 */\n/*@ sourceURL=components/Search.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJSZWFjdCIsIkxpbmtzVG9BcnRpY2xlcyIsIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwibGlzdCIsImdldERhdGVzIiwiYmluZCIsImFwaSIsInRoZW4iLCJxdWVyeSIsInJlcyIsIngiLCJyZXN1bHRzIiwic29ydCIsImEiLCJiIiwidWlkIiwic2V0U3RhdGUiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBcUI7Ozs7Ozs7O0FBVDVCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCOzs7SUFNWixBO29DQUNGOztvQkFBQSxBQUFhLE9BQU87NENBQUE7OzBJQUFBLEFBQ1YsQUFDTjs7Y0FBQSxBQUFLO3FCQUFNLEFBQ0MsQUFDUjtrQkFGSixBQUFXLEFBRUYsQUFFVDtBQUpXLEFBQ1A7Y0FHSixBQUFLLFdBQVcsTUFBQSxBQUFLLFNBQUwsQUFBYyxLQU5kLEFBTWhCO2VBQ0g7Ozs7OzRDQUVvQixBQUNqQjtpQkFBQSxBQUFLLEFBQ1I7Ozs7aUNBRVEsQUFDTDttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7b0RBQUEsQUFBZ0I7OzhCQUFoQjtnQ0FBQSxBQUNJO0FBREo7QUFBQSx3REFDVyxNQUFQLEFBQVksbUJBQVo7OzhCQUFBO2dDQURKLEFBQ0ksQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxxQkFBWjs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBRUg7QUFGRztzQkFFSCxBQUFLLE1BQUwsQUFBVywyQkFBVyxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQXlCO0FBQXpCO0FBQUEsYUFBQSxrQkFBeUIsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTHBELEFBSzJCLEFBQXlCLEFBQy9DLGNBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSwyQkFBVyxBQUFDLDJDQUFnQixNQUFNLEtBQUEsQUFBSyxNQUE1QixBQUFrQzs4QkFBbEM7Z0NBTjVCLEFBTTRCO0FBQUE7YUFBQTt5QkFONUI7cUJBREosQUFDSSxBQWNQO0FBZE87Ozs7bUNBZ0JHO3lCQUNQOztvQkFBQSxBQUFRLElBQVIsQUFBWSxhQUFaLEFBQXlCLEtBQUssZUFBTyxBQUNqQzt1QkFBTyxJQUFBLEFBQUksTUFBWCxBQUFPLEFBQVUsQUFDcEI7QUFGRCxlQUFBLEFBR0MsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUNUO29CQUFJLFFBQUksQUFBSSxRQUFKLEFBQVksS0FBSyxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUksQUFDN0I7MkJBQU8sRUFBQSxBQUFFLE1BQU0sRUFBZixBQUFpQixBQUNwQjtBQUZELEFBQVEsQUFHUixpQkFIUTt1QkFHUixBQUFLOzBCQUFTLEFBQ0wsQUFDTDs2QkFGSixBQUFjLEFBRUYsQUFFZjtBQUppQixBQUNWO0FBUlIsZUFBQSxBQVlDLE1BQU0sUUFaUCxBQVllLEFBQ2xCOzs7OztFQTlDZ0IsZ0JBQU0sQSxBQWlEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==