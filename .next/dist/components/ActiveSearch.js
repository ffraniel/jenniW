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
        value: function handleSubmit() {
            this.setState({
                reactiveSearchValue: ''
            });
            // no prever default so page reloads
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('form', {
                className: 'jsx-847420616' + ' ' + 'reactiveSearch',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('h3', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Search'), _react2.default.createElement('input', { type: 'text', value: this.state.reactiveSearchValue, onChange: this.handleChange, className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }), _react2.default.createElement('input', { type: 'submit', className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement('ul', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, this.state.reactiveSearchResults === "" && _react2.default.createElement('div', {
                className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles && this.state.reactiveSearchResults.map(function (article, key) {
                return _react2.default.createElement('li', { key: key, className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHre: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, article.data.articletitle[0].text))), _react2.default.createElement('p', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, article.data.mainarticle[0].text, '...'));
            })), _react2.default.createElement(_style2.default, {
                styleId: '847420616',
                css: 'ul.jsx-847420616{list-style:none;}a.jsx-847420616{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFcUIsQUFHeUMsQUFJckIsZ0JBSEMsS0FHQSIsImZpbGUiOiJjb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgQWN0aXZlU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hWYWx1ZTonJyxcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoUmVzdWx0czonJyxcbiAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWxsQXJ0aWNsZXMgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWFjdGl2ZVNlYXJjaFZhbHVlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5zdGF0ZS5hbGxBcnRpY2xlcy5maWx0ZXIoKGFydGljbGUpPT57XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBSZWdFeHAoZS50YXJnZXQudmFsdWUsJ2lnJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudGVzdChhcnRpY2xlLmRhdGEuc2VhcmNodGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoUmVzdWx0czpmaWx0ZXJlZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hWYWx1ZTonJ1xuICAgICAgICB9KVxuICAgICAgICAvLyBubyBwcmV2ZXIgZGVmYXVsdCBzbyBwYWdlIHJlbG9hZHNcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWFjdGl2ZVNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+U2VhcmNoPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucmVhY3RpdmVTZWFyY2hWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cyA9PT0gXCJcIikgJiYgPGRpdj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMubGVuZ3RoID49IDEgJiYgdGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFJlc3VsdHMgPCB0aGlzLnByb3BzLmFsbEFydGljbGVzKSAmJiB0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cy5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLz91aWQ9JHthcnRpY2xlLnVpZH1gfSBhcz17YC9wb3N0cy8ke2FydGljbGUudWlkfWB9IHBhc3NIcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGF0YS5tYWluYXJ0aWNsZVswXS50ZXh0fS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmVcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVNlYXJjaDsiXX0= */\n/*@ sourceURL=components/ActiveSearch.js */'
            }));
        }
    }]);

    return ActiveSearch;
}(_react2.default.Component);

exports.default = ActiveSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGF5b3V0IiwiUmVhY3QiLCJMaW5rIiwiQWN0aXZlU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInJlYWN0aXZlU2VhcmNoVmFsdWUiLCJyZWFjdGl2ZVNlYXJjaFJlc3VsdHMiLCJhbGxBcnRpY2xlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJhcnRpY2xlIiwiaW5wdXQiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YSIsInNlYXJjaHRleHQiLCJsZW5ndGgiLCJtYXAiLCJrZXkiLCJ1aWQiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwibWFpbmFydGljbGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7OztBQVBQLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7SSxBQU1yQjswQ0FDRjs7MEJBQUEsQUFBWSxPQUFPOzRDQUFBOztzSkFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztpQ0FBTSxBQUNhLEFBQ3BCO21DQUZPLEFBRWUsQUFDdEI7eUJBQVksTUFBQSxBQUFLLE1BSHJCLEFBQVcsQUFHZ0IsQUFFM0I7QUFMVyxBQUNQO2NBSUosQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7Y0FBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FSdkIsQUFRZjtlQUNIOzs7OztxQ0FDYSxBLEdBQUcsQUFDYjtjQUFBLEFBQUUsQUFDRjtnQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFmLEFBQStCLElBQUksQUFDL0I7cUJBQUEsQUFBSztpQ0FDVyxLQUFBLEFBQUssTUFEckIsQUFBYyxBQUNhLEFBRTlCO0FBSGlCLEFBQ1Y7QUFHUjtpQkFBQSxBQUFLO3FDQUNtQixFQUFBLEFBQUUsT0FEMUIsQUFBYyxBQUNtQixBQUVqQztBQUhjLEFBQ1Y7Z0JBRUUsZ0JBQVcsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixPQUFPLFVBQUEsQUFBQyxTQUFVLEFBQ3REO29CQUFNLFFBQVEsSUFBQSxBQUFJLE9BQU8sRUFBQSxBQUFFLE9BQWIsQUFBb0IsT0FBbEMsQUFBYyxBQUEwQixBQUN4Qzt1QkFBTyxNQUFBLEFBQU0sS0FBSyxRQUFBLEFBQVEsS0FBMUIsQUFBTyxBQUF3QixBQUM5QjtBQUhMLEFBQWlCLEFBSWpCLGFBSmlCO2lCQUlqQixBQUFLO3VDQUFMLEFBQWMsQUFDWSxBQUU3QjtBQUhpQixBQUNWOzs7O3VDQUlRLEFBQ1o7aUJBQUEsQUFBSztxQ0FBTCxBQUFjLEFBQ1UsQUFFeEI7QUFIYyxBQUNWO0FBR1A7Ozs7aUNBRVMsQUFDTjttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7bURBQUEsQUFBZ0I7OzhCQUFoQjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esb0RBQU8sTUFBUCxBQUFZLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBL0IsQUFBcUMscUJBQXFCLFVBQVUsS0FBcEUsQUFBeUUseUJBQXpFOzs4QkFBQTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTt5REFDTyxNQUFQLEFBQVkscUJBQVo7OzhCQUFBO2dDQUpSLEFBQ0ksQUFHSSxBQUVKO0FBRkk7aUNBRUosY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsb0JBQ00sQUFBSyxNQUFMLEFBQVcsMEJBQVosQUFBc0M7MkJBQU87OzhCQUFBO2dDQURsRCxBQUNrRCxBQUM1QztBQUQ0QztBQUFBLGFBQUEsUUFDNUMsQUFBSyxNQUFMLEFBQVcsc0JBQVgsQUFBaUMsVUFBakMsQUFBMkMsS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLHdCQUF3QixLQUFBLEFBQUssTUFBekYsQUFBK0Ysb0JBQWdCLEFBQUssTUFBTCxBQUFXLHNCQUFYLEFBQWlDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxLQUFNLEFBQ2pLO3VDQUNJLGNBQUEsUUFBSSxLQUFKLEFBQVMsZ0JBQVQ7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxBQUFDLGdDQUFLLHVCQUFxQixRQUEzQixBQUFtQyxLQUFPLGdCQUFjLFFBQXhELEFBQWdFLEtBQU8sU0FBdkU7a0NBQUE7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUEsT0FBRyxNQUFILEFBQVEsZ0JBQVI7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBOytCQUFBOztrQ0FBQTtvQ0FBQSxBQUFLO0FBQUw7QUFBQSwyQkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBSDNDLEFBQ0ksQUFDSSxBQUNJLEFBQWtDLEFBRzFDLHlCQUFBLGNBQUE7K0JBQUE7O2tDQUFBO29DQUFBLEFBQUk7QUFBSjtBQUFBLDJCQUFJLEFBQVEsS0FBUixBQUFhLFlBQWIsQUFBeUIsR0FBN0IsQUFBZ0MsTUFQeEMsQUFDSSxBQU1JLEFBR1g7QUFuQlQsQUFNSSxBQUVvSCxhQUFBO3lCQVJ4SDtxQkFESixBQUNJLEFBbUNQO0FBbkNPOzs7OztFQXZDZSxnQkFBTSxBLEFBNkVqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJBY3RpdmVTZWFyY2guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9