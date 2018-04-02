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

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

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

var _jsxFileName = '/home/francis/Code/JenniW/components/SearchBox.js';

var Prismic = require('prismic-javascript');

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


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
        key: 'handleSearch',
        value: function handleSearch(e) {
            e.preventDefault();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({
                searchVal: e.target.value,
                change: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-1272658684' + ' ' + 'searchComp',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('form', { onSubmit: this.handleSearch, className: 'jsx-1272658684' + ' ' + 'textSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('input', { type: 'text', value: this.state.searchVal, placeholder: "Search", onChange: this.handleChange, className: 'jsx-1272658684',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement(_link2.default, { prefetch: true, href: '/search/?searchVal=' + this.state.searchVal, as: '/search/' + this.state.searchVal, passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('a', { href: '#', className: 'jsx-1272658684',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('button', { type: 'submit', value: 'search', className: 'jsx-1272658684' + ' ' + 'searchButton',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Search')))), this.state.loading && _react2.default.createElement(_Loading2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), !this.state.loading && _react2.default.createElement(_LinksToArticles2.default, { list: this.state.list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '1272658684',
                css: '.searchComp.jsx-1272658684{display:inline-block;}.searchButton.jsx-1272658684{background-color:var(--midGrey);color:black;text-align:center;font-family:var(--titleFont);font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDNkIsQUFLNkMsQUFHVyxxQkFGakMsV0FJYyxZQUNNLGtCQUNVLDZCQUNiLGdCQUVuQiIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaEJveC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlua3NUb0FydGljbGVzIGZyb20gJy4vTGlua3NUb0FydGljbGVzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmNsYXNzIFNlYXJjaEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNlYXJjaFZhbDonJyxcbiAgICAgICAgICAgIGNoYW5nZTpudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZVNlYXJjaChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hWYWw6ZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICBjaGFuZ2U6dHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoQ29tcFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRleHRTZWFyY2hcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx9IHBsYWNlaG9sZGVyPXtcIlNlYXJjaFwifSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9zZWFyY2gvP3NlYXJjaFZhbD0ke3RoaXMuc3RhdGUuc2VhcmNoVmFsfWB9IGFzPXtgL3NlYXJjaC8ke3RoaXMuc3RhdGUuc2VhcmNoVmFsfWB9IHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic2VhcmNoXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+ICAgXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiA8TG9hZGluZyAvPn1cbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZyAmJiA8TGlua3NUb0FydGljbGVzIGxpc3Q9e3RoaXMuc3RhdGUubGlzdH0gLz4gfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0U2VhcmNoIHsgfVxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tCb3hlcyB7IH1cbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaENvbXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VhcmNoQnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWlkR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aXRsZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPiAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94OyJdfQ== */\n/*@ sourceURL=components/SearchBox.js */'
            }));
        }
    }]);

    return SearchBox;
}(_react2.default.Component);

exports.default = SearchBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIlJlYWN0IiwiTGlua3NUb0FydGljbGVzIiwiTG9hZGluZyIsIlNlYXJjaEJveCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hWYWwiLCJjaGFuZ2UiLCJoYW5kbGVTZWFyY2giLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJsaXN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQWE7Ozs7Ozs7O0FBUnBCLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7SSxBQU9yQjt1Q0FDRjs7dUJBQUEsQUFBWSxPQUFPOzRDQUFBOztnSkFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzt1QkFBTSxBQUNHLEFBQ1Y7b0JBRkosQUFBVyxBQUVBLEFBRVg7QUFKVyxBQUNQO2NBR0osQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7Y0FBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FQdkIsQUFPZjtlQUNIOzs7OztxQyxBQUNZLEdBQUcsQUFDWjtjQUFBLEFBQUUsQUFDTDs7OztxQ0FDWSxBLEdBQUcsQUFDWjtpQkFBQSxBQUFLOzJCQUNTLEVBQUEsQUFBRSxPQURGLEFBQ1MsQUFDbkI7d0JBRkosQUFBYyxBQUVILEFBR2Q7QUFMaUIsQUFDVjs7OztpQ0FLQyxBQUNMO21DQUNJLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBLFVBQTZCLFVBQVUsS0FBdkMsQUFBNEMsa0RBQTVDLEFBQWdCOzs4QkFBaEI7Z0NBQUEsQUFDSTtBQURKO3dEQUNXLE1BQVAsQUFBWSxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQS9CLEFBQXFDLFdBQVcsYUFBaEQsQUFBNkQsVUFBVSxVQUFVLEtBQWpGLEFBQXNGLHlCQUF0Rjs7OEJBQUE7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsOEJBQTRCLEtBQUEsQUFBSyxNQUFoRCxBQUFzRCxXQUFhLGlCQUFlLEtBQUEsQUFBSyxNQUF2RixBQUE2RixXQUFhLFVBQTFHOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLGdCQUFSOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxZQUFpQyxNQUFqQyxBQUFzQyxVQUFTLE9BQS9DLEFBQXFELDhDQUFyRCxBQUFrQjs7OEJBQWxCO2dDQUFBO0FBQUE7ZUFMaEIsQUFDSSxBQUVJLEFBQ0ksQUFDSSxBQUlYLG1CQUFBLEFBQUssTUFBTCxBQUFXLDJCQUFXLEFBQUM7OzhCQUFEO2dDQVQzQixBQVMyQixBQUN0QjtBQURzQjtBQUFBLGFBQUEsSUFDckIsS0FBQSxBQUFLLE1BQU4sQUFBWSwyQkFBVyxBQUFDLDJDQUFnQixNQUFNLEtBQUEsQUFBSyxNQUE1QixBQUFrQzs4QkFBbEM7Z0NBVjVCLEFBVTRCO0FBQUE7YUFBQTt5QkFWNUI7cUJBREosQUFDSSxBQThCUDtBQTlCTzs7Ozs7RUF0QlksZ0JBQU0sQSxBQXNEOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==