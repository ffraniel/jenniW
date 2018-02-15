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
            }, 'Search Again'), _react2.default.createElement('input', { type: 'text', value: this.state.reactiveSearchValue, onChange: this.handleChange, className: 'jsx-847420616',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement('input', { type: 'submit', className: 'jsx-847420616',
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
            }), this.state.reactiveSearchResults.length >= 1 && this.state.reactiveSearchResults < this.props.allArticles && this.state.reactiveSearchResults.map(function (article, key) {
                return _react2.default.createElement('li', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, _react2.default.createElement(_link2.default, { key: key, href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHre: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }, _react2.default.createElement('a', { href: '#', className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, _react2.default.createElement('h3', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, article.data.articletitle[0].text))), _react2.default.createElement('p', {
                    className: 'jsx-847420616',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, article.data.mainarticle[0].text, '...'));
            })), _react2.default.createElement(_style2.default, {
                styleId: '847420616',
                css: 'ul.jsx-847420616{list-style:none;}a.jsx-847420616{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFcUIsQUFHeUMsQUFJckIsZ0JBSEMsS0FHQSIsImZpbGUiOiJjb21wb25lbnRzL0FjdGl2ZVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgQWN0aXZlU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hWYWx1ZTonJyxcbiAgICAgICAgICAgIHJlYWN0aXZlU2VhcmNoUmVzdWx0czonJyxcbiAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWxsQXJ0aWNsZXMgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsbEFydGljbGVzOnRoaXMucHJvcHMuYWxsQXJ0aWNsZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWFjdGl2ZVNlYXJjaFZhbHVlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5zdGF0ZS5hbGxBcnRpY2xlcy5maWx0ZXIoKGFydGljbGUpPT57XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBSZWdFeHAoZS50YXJnZXQudmFsdWUsJ2lnJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudGVzdChhcnRpY2xlLmRhdGEuc2VhcmNodGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzLnByb3BzLmFjdGl2ZVNlYXJjaENoYW5nZWQoKTsgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVhY3RpdmVTZWFyY2hSZXN1bHRzOmZpbHRlcmVkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0ICgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWFjdGl2ZVNlYXJjaFZhbHVlOicnXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG5vIHByZXZlciBkZWZhdWx0IHNvIHBhZ2UgcmVsb2Fkc1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJlYWN0aXZlU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZWFyY2ggQWdhaW48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yZWFjdGl2ZVNlYXJjaFZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUucmVhY3RpdmVTZWFyY2hSZXN1bHRzID09PSBcIlwiKSAmJiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cy5sZW5ndGggPj0gMSAmJiB0aGlzLnN0YXRlLnJlYWN0aXZlU2VhcmNoUmVzdWx0cyA8IHRoaXMucHJvcHMuYWxsQXJ0aWNsZXMpICYmIHRoaXMuc3RhdGUucmVhY3RpdmVTZWFyY2hSZXN1bHRzLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e2AvcG9zdHMvP3VpZD0ke2FydGljbGUudWlkfWB9IGFzPXtgL3Bvc3RzLyR7YXJ0aWNsZS51aWR9YH0gcGFzc0hyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kYXRhLm1haW5hcnRpY2xlWzBdLnRleHR9Li4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlU2VhcmNoOyJdfQ== */\n/*@ sourceURL=components/ActiveSearch.js */'
            }));
        }
    }]);

    return ActiveSearch;
}(_react2.default.Component);

exports.default = ActiveSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGF5b3V0IiwiUmVhY3QiLCJMaW5rIiwiQWN0aXZlU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInJlYWN0aXZlU2VhcmNoVmFsdWUiLCJyZWFjdGl2ZVNlYXJjaFJlc3VsdHMiLCJhbGxBcnRpY2xlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJhcnRpY2xlIiwiaW5wdXQiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YSIsInNlYXJjaHRleHQiLCJsZW5ndGgiLCJtYXAiLCJrZXkiLCJ1aWQiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwibWFpbmFydGljbGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7OztBQVBQLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7SSxBQU1yQjswQ0FDRjs7MEJBQUEsQUFBWSxPQUFPOzRDQUFBOztzSkFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztpQ0FBTSxBQUNhLEFBQ3BCO21DQUZPLEFBRWUsQUFDdEI7eUJBQVksTUFBQSxBQUFLLE1BSHJCLEFBQVcsQUFHZ0IsQUFFM0I7QUFMVyxBQUNQO2NBSUosQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7Y0FBQSxBQUFLLGVBQWUsTUFB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