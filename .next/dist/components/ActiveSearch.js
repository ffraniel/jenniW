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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/components/ActiveSearch.js';

var Prismic = require('prismic-javascript');

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


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
        key: 'handleChange',
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
            // this.props.activeSearchChanged();    
            this.setState({
                reactiveSearchResults: filtered
            });
        }
    }, {
        key: 'handleSubmit',
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
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('form', {
                className: 'jsx-847420616' + ' ' + 'reactiveSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('h3', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Search Again'), _react2.default.createElement('input', { type: 'text', value: this.state.reactiveSearchValue, onChange: this.handleChange, className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement('input', { type: 'submit', className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement('ul', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, this.state.reactiveSearchResults === "" && _react2.default.createElement('div', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles && this.state.reactiveSearchResults.map(function (article, key) {
                return _react2.default.createElement('li', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement(_link2.default, { key: key, href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHre: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, article.data.articletitle[0].text))));
            })), _react2.default.createElement(_style2.default, {
                styleId: '847420616',
                css: 'ul.jsx-847420616{list-style:none;}a.jsx-847420616{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFcUIsQUFHeUMsQUFJckIsZ0JBSEMsS0FHQSIsImZpbGUiOiJjb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgQWN0aXZlU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hWYWx1ZTonJyxcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoUmVzdWx0czonJyxcbiAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWxsQXJ0aWNsZXMgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWFjdGl2ZVNlYXJjaFZhbHVlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5zdGF0ZS5hbGxBcnRpY2xlcy5maWx0ZXIoKGFydGljbGUpPT57XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBSZWdFeHAoZS50YXJnZXQudmFsdWUsJ2lnJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudGVzdChhcnRpY2xlLmRhdGEuc2VhcmNodGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzLnByb3BzLmFjdGl2ZVNlYXJjaENoYW5nZWQoKTsgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hSZXN1bHRzOmZpbHRlcmVkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0ICgpIHtcbiAgICAgICAgaWYgKHJlYWN0aXZlU2VhcmNoUmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlcmUgYXJlIG5vIHJlc3VsdHNcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoVmFsdWU6JydcblxuICAgICAgICB9KVxuICAgICAgICAvL3JlbG9hZCBwYWdlIGhlcmVcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWFjdGl2ZVNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+U2VhcmNoIEFnYWluPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucmVhY3RpdmVTZWFyY2hWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cyA9PT0gXCJcIikgJiYgPGRpdj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMubGVuZ3RoID49IDEgJiYgdGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMgPCB0aGlzLnByb3BzLmFsbEFydGljbGVzKSAmJiB0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cy5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL3Bvc3RzLz91aWQ9JHthcnRpY2xlLnVpZH1gfSBhcz17YC9wb3N0cy8ke2FydGljbGUudWlkfWB9IHBhc3NIcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmVcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVNlYXJjaDsiXX0= */\n/*@ sourceURL=components/ActiveSearch.js */'
            }));
        }
    }]);

    return ActiveSearch;
}(_react2.default.Component);

exports.default = ActiveSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGF5b3V0IiwiUmVhY3QiLCJMaW5rIiwiQWN0aXZlU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInJlYWN0aXZlU2VhcmNoVmFsdWUiLCJyZWFjdGl2ZVNlYXJjaFJlc3VsdHMiLCJhbGxBcnRpY2xlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJhcnRpY2xlIiwiaW5wdXQiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YSIsInNlYXJjaHRleHQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibWFwIiwia2V5IiwidWlkIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFZOzs7O0FBR25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBUFAsSUFBSSxVQUFKLEFBQUksQUFBVTs7QUFFZCxJQUFNLGNBQWMsaUJBQXBCLEFBQTJCO0FBQzNCLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7OztJQU1yQixBOzBDQUNGOzswQkFBQSxBQUFZLE9BQU87NENBQUE7O3NKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO2lDQUFNLEFBQ2EsQUFDcEI7bUNBRk8sQUFFZSxBQUN0Qjt5QkFBWSxNQUFBLEFBQUssTUFIckIsQUFBVyxBQUdnQixBQUUzQjtBQUxXLEFBQ1A7Y0FJSixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtjQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQVJ2QixBQVFmO2VBQ0g7Ozs7O3FDLEFBQ2EsR0FBRyxBQUNiO2NBQUEsQUFBRSxBQUNGO2dCQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWYsQUFBK0IsSUFBSSxBQUMvQjtxQkFBQSxBQUFLO2lDQUNXLEtBQUEsQUFBSyxNQURyQixBQUFjLEFBQ2EsQUFFOUI7QUFIaUIsQUFDVjtBQUdSO2lCQUFBLEFBQUs7cUNBQ21CLEVBQUEsQUFBRSxPQUQxQixBQUFjLEFBQ21CLEFBRWpDO0FBSGMsQUFDVjtnQkFFRSxnQkFBVyxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLE9BQU8sVUFBQSxBQUFDLFNBQVUsQUFDdEQ7b0JBQU0sUUFBUSxJQUFBLEFBQUksT0FBTyxFQUFBLEFBQUUsT0FBYixBQUFvQixPQUFsQyxBQUFjLEFBQTBCLEFBQ3hDO3VCQUFPLE1BQUEsQUFBTSxLQUFLLFFBQUEsQUFBUSxLQUExQixBQUFPLEFBQXdCLEFBQzlCO0FBSEwsQUFBaUIsQUFJakIsYUFKaUI7QUFLakI7aUJBQUEsQUFBSzt1Q0FBTCxBQUFjLEFBQ1ksQUFFN0I7QUFIaUIsQUFDVjs7Ozt1Q0FJUSxBQUNaO2dCQUFJLHNCQUFBLEFBQXNCLFdBQTFCLEFBQXFDLEdBQUcsQUFDcEM7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQUNEO2lCQUFBLEFBQUs7cUNBQUwsQUFBYyxBQUNVLEFBR3hCOztBQUpjLEFBQ1Y7QUFJUDs7OztpQ0FFUyxBQUNOO21DQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTttREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwREFBTyxNQUFQLEFBQVksUUFBTyxPQUFPLEtBQUEsQUFBSyxNQUEvQixBQUFxQyxxQkFBcUIsVUFBVSxLQUFwRSxBQUF5RSx5QkFBekU7OzhCQUFBO2dDQUZKLEFBRUksQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxxQkFBWjs7OEJBQUE7Z0NBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTtpQ0FFSixjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNNO0FBRE47QUFBQSxvQkFDTSxBQUFLLE1BQUwsQUFBVywwQkFBWixBQUFzQzsyQkFBTzs7OEJBQUE7Z0NBRGxELEFBQ2tELEFBQzVDO0FBRDRDO0FBQUEsYUFBQSxRQUM1QyxBQUFLLE1BQUwsQUFBVyxzQkFBWCxBQUFpQyxVQUFqQyxBQUEyQyxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsd0JBQXdCLEtBQUEsQUFBSyxNQUF6RixBQUErRixvQkFBZ0IsQUFBSyxNQUFMLEFBQVcsc0JBQVgsQUFBaUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLEtBQU0sQUFDaks7dUNBQ0ksY0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO0FBQUEsaUJBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxLQUFOLEFBQVcsS0FBSyx1QkFBcUIsUUFBckMsQUFBNkMsS0FBTyxnQkFBYyxRQUFsRSxBQUEwRSxLQUFPLFNBQWpGO2tDQUFBO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLGdCQUFSOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsMkJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQUovQyxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBQWtDLEFBS3JEO0FBbEJULEFBTUksQUFFb0gsYUFBQTt5QkFSeEg7cUJBREosQUFDSSxBQWtDUDtBQWxDTzs7Ozs7RUE1Q2UsZ0JBQU0sQSxBQWlGakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQWN0aXZlU2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==