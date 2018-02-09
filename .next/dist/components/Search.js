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
                className: 'jsx-746918724' + ' ' + 'searchComp',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('form', {
                className: 'jsx-746918724' + ' ' + 'textSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'jsx-746918724',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement('input', { type: 'submit', value: 'Search', className: 'jsx-746918724',
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
                styleId: '746918724',
                css: '.searchComp.jsx-746918724{padding:0px 0 6px 6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DNkIsQUFLK0Msc0JBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyIvL3Nob3cgYWxsIGRhdGVzIGF2YWlsYWJsZVxuLy8gc2hvdyBzZWFyY2ggYm94IHRvIGRvIHRleHQgc2VhcmNoIGluIHByaXNtaWMuaW9cbi8vIGFkZCBzZWFyY2ggcmVzdWx0cyBsaXN0IHBhZ2UgLSBqdXN0IGhlYWRpbmcgYW5kIGZpcnN0IHBhcmFncmFwaFxuXG52YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xudmFyIGFwaUVuZHBvaW50ID0gXCJodHRwczovL0plbm5pVy5wcmlzbWljLmlvL2FwaS92MlwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmtzVG9BcnRpY2xlcyBmcm9tICcuL0xpbmtzVG9BcnRpY2xlcyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgbG9hZGluZzp0cnVlLFxuICAgICAgICAgICAgbGlzdDonJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0RGF0ZXMgPSB0aGlzLmdldERhdGVzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLmdldERhdGVzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hDb21wXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidGV4dFNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+ICAgXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiA8TG9hZGluZyAvPn1cbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZyAmJiA8TGlua3NUb0FydGljbGVzIGxpc3Q9e3RoaXMuc3RhdGUubGlzdH0gLz4gfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0U2VhcmNoIHsgfVxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tCb3hlcyB7IH1cbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaENvbXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDAgNnB4IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT4gICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0RGF0ZXMoKSB7XG4gICAgICAgIFByaXNtaWMuYXBpKGFwaUVuZHBvaW50KS50aGVuKGFwaSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgdmFyIHggPSByZXMucmVzdWx0cy5zb3J0KChhLCBiKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBiLnVpZCAtIGEudWlkO1xuICAgICAgICAgICAgfSkgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxpc3Q6eCxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgfVxuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdfQ== */\n/*@ sourceURL=components/Search.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJSZWFjdCIsIkxpbmtzVG9BcnRpY2xlcyIsIkxvYWRpbmciLCJTZWFyY2giLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImxpc3QiLCJnZXREYXRlcyIsImJpbmQiLCJhcGkiLCJ0aGVuIiwicXVlcnkiLCJyZXMiLCJ4IiwicmVzdWx0cyIsInNvcnQiLCJhIiwiYiIsInVpZCIsInNldFN0YXRlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBYTs7Ozs7Ozs7QUFWcEI7QUFDQTtBQUNBOztBQUVBLElBQUksVUFBSixBQUFJLEFBQVU7QUFDZCxJQUFJLGNBQUosQUFBa0I7OztJLEFBT1o7b0NBQ0Y7O29CQUFBLEFBQWEsT0FBTzs0Q0FBQTs7MElBQUEsQUFDVixBQUNOOztjQUFBLEFBQUs7cUJBQU0sQUFDQyxBQUNSO2tCQUZKLEFBQVcsQUFFRixBQUVUO0FBSlcsQUFDUDtjQUdKLEFBQUssV0FBVyxNQUFBLEFBQUssU0FBTCxBQUFjLEtBTmQsQUFNaEI7ZUFDSDs7Ozs7NENBRW9CLEFBQ2pCO2lCQUFBLEFBQUssQUFDUjs7OztpQ0FFUSxBQUNMO21DQUNJLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBO21EQUFBLEFBQWdCOzs4QkFBaEI7Z0NBQUEsQUFDSTtBQURKO0FBQUEsd0RBQ1csTUFBUCxBQUFZLG1CQUFaOzs4QkFBQTtnQ0FESixBQUNJLEFBQ0E7QUFEQTt5REFDTyxNQUFQLEFBQVksVUFBUyxPQUFyQixBQUEyQixxQkFBM0I7OzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUVIO0FBRkc7c0JBRUgsQUFBSyxNQUFMLEFBQVcsMkJBQVcsQUFBQzs7OEJBQUQ7Z0NBTDNCLEFBSzJCLEFBQ3RCO0FBRHNCO0FBQUEsYUFBQSxJQUNyQixLQUFBLEFBQUssTUFBTixBQUFZLDJCQUFXLEFBQUMsMkNBQWdCLE1BQU0sS0FBQSxBQUFLLE1BQTVCLEFBQWtDOzhCQUFsQztnQ0FONUIsQUFNNEI7QUFBQTthQUFBO3lCQU41QjtxQkFESixBQUNJLEFBaUJQO0FBakJPOzs7O21DQW1CRzt5QkFDUDs7b0JBQUEsQUFBUSxJQUFSLEFBQVksYUFBWixBQUF5QixLQUFLLGVBQU8sQUFDakM7dUJBQU8sSUFBQSxBQUFJLE1BQVgsQUFBTyxBQUFVLEFBQ3BCO0FBRkQsZUFBQSxBQUdDLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDVDtvQkFBSSxRQUFJLEFBQUksUUFBSixBQUFZLEtBQUssVUFBQSxBQUFDLEdBQUQsQUFBSSxHQUFJLEFBQzdCOzJCQUFPLEVBQUEsQUFBRSxNQUFNLEVBQWYsQUFBaUIsQUFDcEI7QUFGRCxBQUFRLEFBR1IsaUJBSFE7dUJBR1IsQUFBSzswQkFBUyxBQUNMLEFBQ0w7NkJBRkosQUFBYyxBQUVGLEFBRWY7QUFKaUIsQUFDVjtBQVJSLGVBQUEsQUFZQyxNQUFNLFFBWlAsQUFZZSxBQUNsQjs7Ozs7RUFqRGdCLGdCQUFNLEEsQUFvRDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=