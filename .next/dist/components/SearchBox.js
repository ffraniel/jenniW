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
                className: 'jsx-1815890031' + ' ' + 'searchComp',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('form', { onSubmit: this.handleSearch, className: 'jsx-1815890031' + ' ' + 'textSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('input', { type: 'text', value: this.state.searchVal, onChange: this.handleChange, className: 'jsx-1815890031',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement(_link2.default, { prefetch: true, href: '/search/?searchVal=' + this.state.searchVal, as: '/search/' + this.state.searchVal, passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('a', { href: '#', className: 'jsx-1815890031',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('button', { type: 'submit', value: 'search', className: 'jsx-1815890031',
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
                styleId: '1815890031',
                css: '.searchComp.jsx-1815890031{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDNkIsQUFNNkMscUJBQ3RCIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuY29uc3QgYXBpRW5kcG9pbnQgPSBjb25maWcuYXBpRW5kcG9pbnQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IGNvbmZpZy5hY2Nlc3NUb2tlbjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rc1RvQXJ0aWNsZXMgZnJvbSAnLi9MaW5rc1RvQXJ0aWNsZXMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcblxuY2xhc3MgU2VhcmNoQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2VhcmNoVmFsOicnLFxuICAgICAgICAgICAgY2hhbmdlOm51bGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlU2VhcmNoKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaFZhbDplLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIGNoYW5nZTp0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hDb21wXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidGV4dFNlYXJjaFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2Avc2VhcmNoLz9zZWFyY2hWYWw9JHt0aGlzLnN0YXRlLnNlYXJjaFZhbH1gfSBhcz17YC9zZWFyY2gvJHt0aGlzLnN0YXRlLnNlYXJjaFZhbH1gfSBwYXNzSHJlZiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInNlYXJjaFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgIFxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPExvYWRpbmcgLz59XG4gICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPExpbmtzVG9BcnRpY2xlcyBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9IC8+IH1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICAgICAgICAgICAgICAudGV4dFNlYXJjaCB7IH1cbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrQm94ZXMgeyB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2hDb21wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6Z3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT4gICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveDsiXX0= */\n/*@ sourceURL=components/SearchBox.js */'
            }));
        }
    }]);

    return SearchBox;
}(_react2.default.Component);

exports.default = SearchBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIlJlYWN0IiwiTGlua3NUb0FydGljbGVzIiwiTG9hZGluZyIsIlNlYXJjaEJveCIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hWYWwiLCJjaGFuZ2UiLCJoYW5kbGVTZWFyY2giLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJsaXN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQWE7Ozs7Ozs7O0FBUnBCLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7SSxBQU9yQjt1Q0FDRjs7dUJBQUEsQUFBWSxPQUFPOzRDQUFBOztnSkFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzt1QkFBTSxBQUNHLEFBQ1Y7b0JBRkosQUFBVyxBQUVBLEFBRVg7QUFKVyxBQUNQO2NBR0osQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7Y0FBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FQdkIsQUFPZjtlQUNIOzs7OztxQyxBQUNZLEdBQUcsQUFDWjtjQUFBLEFBQUUsQUFDTDs7OztxQ0FDWSxBLEdBQUcsQUFDWjtpQkFBQSxBQUFLOzJCQUNTLEVBQUEsQUFBRSxPQURGLEFBQ1MsQUFDbkI7d0JBRkosQUFBYyxBQUVILEFBR2Q7QUFMaUIsQUFDVjs7OztpQ0FLQyxBQUNMO21DQUNJLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBLFVBQTZCLFVBQVUsS0FBdkMsQUFBNEMsa0RBQTVDLEFBQWdCOzs4QkFBaEI7Z0NBQUEsQUFDSTtBQURKO3dEQUNXLE1BQVAsQUFBWSxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQS9CLEFBQXFDLFdBQVcsVUFBVSxLQUExRCxBQUErRCx5QkFBL0Q7OzhCQUFBO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLEFBQUMsZ0NBQUssVUFBTixNQUFlLDhCQUE0QixLQUFBLEFBQUssTUFBaEQsQUFBc0QsV0FBYSxpQkFBZSxLQUFBLEFBQUssTUFBdkYsQUFBNkYsV0FBYSxVQUExRzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxnQkFBUjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsWUFBUSxNQUFSLEFBQWEsVUFBUyxPQUF0QixBQUE0QixxQkFBNUI7OzhCQUFBO2dDQUFBO0FBQUE7ZUFMaEIsQUFDSSxBQUVJLEFBQ0ksQUFDSSxBQUlYLG1CQUFBLEFBQUssTUFBTCxBQUFXLDJCQUFXLEFBQUM7OzhCQUFEO2dDQVQzQixBQVMyQixBQUN0QjtBQURzQjtBQUFBLGFBQUEsSUFDckIsS0FBQSxBQUFLLE1BQU4sQUFBWSwyQkFBVyxBQUFDLDJDQUFnQixNQUFNLEtBQUEsQUFBSyxNQUE1QixBQUFrQzs4QkFBbEM7Z0NBVjVCLEFBVTRCO0FBQUE7YUFBQTt5QkFWNUI7cUJBREosQUFDSSxBQXlCUDtBQXpCTzs7Ozs7RUF0QlksZ0JBQU0sQSxBQWlEOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==