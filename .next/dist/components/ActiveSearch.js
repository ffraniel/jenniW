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
            this.setState({
                reactiveSearchResults: filtered
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            this.setState({
                reactiveSearchValue: ''
            });
            // e.preventDefault();
            // no prever default so page reloads
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('form', {
                className: 'jsx-847420616' + ' ' + 'reactiveSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('h3', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Search'), _react2.default.createElement('input', { type: 'text', value: this.state.reactiveSearchValue, onChange: this.handleChange, className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement('input', { type: 'submit', onSubmit: this.handleSubmit, className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement('ul', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, this.state.reactiveSearchResults === "" && _react2.default.createElement('div', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles && _react2.default.createElement('h1', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Results for "', this.state.reactiveSearchValue, '"'), this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles && this.state.reactiveSearchResults.map(function (article, key) {
                var uid = article.uid;
                var title = article.data.articletitle[0].text;
                var text = article.data.mainarticle[0].text;
                return _react2.default.createElement('li', { key: key, className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + uid, as: '/posts/' + uid, passHre: true, __source: {
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
                }, title))), _react2.default.createElement('p', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, text, '...'));
            })), _react2.default.createElement(_style2.default, {
                styleId: '847420616',
                css: 'ul.jsx-847420616{list-style:none;}a.jsx-847420616{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFcUIsQUFHeUMsQUFJckIsZ0JBSEMsS0FHQSIsImZpbGUiOiJjb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgQWN0aXZlU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hWYWx1ZTonJyxcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoUmVzdWx0czonJyxcbiAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWxsQXJ0aWNsZXMgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWFjdGl2ZVNlYXJjaFZhbHVlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5zdGF0ZS5hbGxBcnRpY2xlcy5maWx0ZXIoKGFydGljbGUpPT57XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBSZWdFeHAoZS50YXJnZXQudmFsdWUsJ2lnJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudGVzdChhcnRpY2xlLmRhdGEuc2VhcmNodGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoUmVzdWx0czpmaWx0ZXJlZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCAoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoVmFsdWU6JydcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gbm8gcHJldmVyIGRlZmF1bHQgc28gcGFnZSByZWxvYWRzXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVhY3RpdmVTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNlYXJjaDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoVmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cyA9PT0gXCJcIikgJiYgPGRpdj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMubGVuZ3RoID49IDEgJiYgdGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMgPCB0aGlzLnByb3BzLmFsbEFydGljbGVzKSAmJiA8aDE+UmVzdWx0cyBmb3IgXCJ7dGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFZhbHVlfVwiPC9oMT59XG4gICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMubGVuZ3RoID49IDEgJiYgdGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMgPCB0aGlzLnByb3BzLmFsbEFydGljbGVzKSAmJiB0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cy5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVpZCA9IGFydGljbGUudWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBhcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXJ0aWNsZS5kYXRhLm1haW5hcnRpY2xlWzBdLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8/dWlkPSR7dWlkfWB9IGFzPXtgL3Bvc3RzLyR7dWlkfWB9IHBhc3NIcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGV4dH0uLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVTZWFyY2g7Il19 */\n/*@ sourceURL=components/ActiveSearch.js */'
            }));
        }
    }]);

    return ActiveSearch;
}(_react2.default.Component);

exports.default = ActiveSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGF5b3V0IiwiUmVhY3QiLCJMaW5rIiwiQWN0aXZlU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInJlYWN0aXZlU2VhcmNoVmFsdWUiLCJyZWFjdGl2ZVNlYXJjaFJlc3VsdHMiLCJhbGxBcnRpY2xlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJhcnRpY2xlIiwiaW5wdXQiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YSIsInNlYXJjaHRleHQiLCJsZW5ndGgiLCJtYXAiLCJrZXkiLCJ1aWQiLCJ0aXRsZSIsImFydGljbGV0aXRsZSIsInRleHQiLCJtYWluYXJ0aWNsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFZOzs7O0FBR25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBUFAsSUFBSSxVQUFKLEFBQUksQUFBVTs7QUFFZCxJQUFNLGNBQWMsaUJBQXBCLEFBQTJCO0FBQzNCLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7OztJQU1yQixBOzBDQUNGOzswQkFBQSxBQUFZLE9BQU87NENBQUE7O3NKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO2lDQUFNLEFBQ2EsQUFDcEI7bUNBRk8sQUFFZSxBQUN0Qjt5QkFBWSxNQUFBLEFBQUssTUFIckIsQUFBVyxBQUdnQixBQUUzQjtBQUxXLEFBQ1A7Y0FJSixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtjQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQVJ2QixBQVFmO2VBQ0g7Ozs7O3FDQUNhLEEsR0FBRyxBQUNiO2NBQUEsQUFBRSxBQUNGO2dCQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWYsQUFBK0IsSUFBSSxBQUMvQjtxQkFBQSxBQUFLO2lDQUNXLEtBQUEsQUFBSyxNQURyQixBQUFjLEFBQ2EsQUFFOUI7QUFIaUIsQUFDVjtBQUdSO2lCQUFBLEFBQUs7cUNBQ21CLEVBQUEsQUFBRSxPQUQxQixBQUFjLEFBQ21CLEFBRWpDO0FBSGMsQUFDVjtnQkFFRSxnQkFBVyxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLE9BQU8sVUFBQSxBQUFDLFNBQVUsQUFDdEQ7b0JBQU0sUUFBUSxJQUFBLEFBQUksT0FBTyxFQUFBLEFBQUUsT0FBYixBQUFvQixPQUFsQyxBQUFjLEFBQTBCLEFBQ3hDO3VCQUFPLE1BQUEsQUFBTSxLQUFLLFFBQUEsQUFBUSxLQUExQixBQUFPLEFBQXdCLEFBQzlCO0FBSEwsQUFBaUIsQUFJakIsYUFKaUI7aUJBSWpCLEFBQUs7dUNBQUwsQUFBYyxBQUNZLEFBRTdCO0FBSGlCLEFBQ1Y7Ozs7cUMsQUFJTSxHQUFHLEFBQ2I7aUJBQUEsQUFBSztxQ0FBTCxBQUFjLEFBQ1UsQUFFeEI7QUFIYyxBQUNWO0FBR0o7QUFDSDs7OztpQ0FFUyxBQUNOO21DQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTttREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxvREFBTyxNQUFQLEFBQVksUUFBTyxPQUFPLEtBQUEsQUFBSyxNQUEvQixBQUFxQyxxQkFBcUIsVUFBVSxLQUFwRSxBQUF5RSx5QkFBekU7OzhCQUFBO2dDQUZKLEFBRUksQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxVQUFTLFVBQVUsS0FBL0IsQUFBb0MseUJBQXBDOzs4QkFBQTtnQ0FKUixBQUNJLEFBR0ksQUFFSjtBQUZJO2lDQUVKLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ007QUFETjtBQUFBLG9CQUNNLEFBQUssTUFBTCxBQUFXLDBCQUFaLEFBQXNDOzJCQUFPOzs4QkFBQTtnQ0FEbEQsQUFDa0QsQUFDNUM7QUFENEM7QUFBQSxhQUFBLFFBQzVDLEFBQUssTUFBTCxBQUFXLHNCQUFYLEFBQWlDLFVBQWpDLEFBQTJDLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyx3QkFBd0IsS0FBQSxBQUFLLE1BQXpGLEFBQStGLCtCQUFnQixjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQUFrQixzQkFBQSxBQUFLLE1BQXZCLEFBQTZCLHFCQUZqSixBQUVvSCxBQUM5RyxXQUFBLEFBQUssTUFBTCxBQUFXLHNCQUFYLEFBQWlDLFVBQWpDLEFBQTJDLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyx3QkFBd0IsS0FBQSxBQUFLLE1BQXpGLEFBQStGLG9CQUFnQixBQUFLLE1BQUwsQUFBVyxzQkFBWCxBQUFpQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsS0FBTSxBQUNqSztvQkFBTSxNQUFNLFFBQVosQUFBb0IsQUFDcEI7b0JBQU0sUUFBUSxRQUFBLEFBQVEsS0FBUixBQUFhLGFBQWIsQUFBMEIsR0FBeEMsQUFBMkMsQUFDM0M7b0JBQU0sT0FBTyxRQUFBLEFBQVEsS0FBUixBQUFhLFlBQWIsQUFBeUIsR0FBdEMsQUFBeUMsQUFDekM7dUNBQ0ksY0FBQSxRQUFJLEtBQUosQUFBUyxnQkFBVDs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLEFBQUMsZ0NBQUssdUJBQU4sQUFBMkIsS0FBTyxnQkFBbEMsQUFBZ0QsS0FBTyxTQUF2RDtrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxnQkFBUjs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUE7K0JBQUE7O2tDQUFBO29DQUFBLEFBQUs7QUFBTDtBQUFBLG1CQUhaLEFBQ0ksQUFDSSxBQUNJLEFBR1IsMEJBQUEsY0FBQTsrQkFBQTs7a0NBQUE7b0NBQUEsQUFBSTtBQUFKO0FBQUEsbUJBQUEsTUFQUixBQUNJLEFBTUksQUFHWDtBQXZCVCxBQU1JLEFBR29ILGFBQUE7eUJBVHhIO3FCQURKLEFBQ0ksQUF1Q1A7QUF2Q087Ozs7O0VBeENlLGdCQUFNLEEsQUFrRmpDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFjdGl2ZVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=