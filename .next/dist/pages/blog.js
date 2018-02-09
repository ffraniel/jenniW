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

var _ArticleBody = require('../components/ArticleBody.js');

var _ArticleBody2 = _interopRequireDefault(_ArticleBody);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/blog.js?entry';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Blog = function (_React$Component) {
    (0, _inherits3.default)(Blog, _React$Component);

    function Blog(props) {
        (0, _classCallCheck3.default)(this, Blog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).call(this, props));

        _this.state = {
            individualArticle: '',
            loading: true
        };
        _this.fetchOneArticle = _this.fetchOneArticle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Blog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchOneArticle();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-609674820' + ' ' + 'blog',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('h1', {
                className: 'jsx-609674820',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'hello'))), _react2.default.createElement(_style2.default, {
                styleId: '609674820',
                css: '.blog.jsx-609674820{padding:0 15% 0 15%;}.blog.jsx-609674820 h1.jsx-609674820{font-family:var(--mainFont);font-size:var(--midSizeFont);}.blog.jsx-609674820 p.jsx-609674820{font-family:var(--thickFont);font-size:var(--smallFont);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJxQixBQUc0QyxBQUdRLEFBSUMsb0JBTmhDLFFBR2dDLENBSUYsMkJBQzlCLENBSkEiLCJmaWxlIjoicGFnZXMvYmxvZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEFydGljbGVCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbmRpdmlkdWFsQXJ0aWNsZTonJyxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZldGNoT25lQXJ0aWNsZSA9IHRoaXMuZmV0Y2hPbmVBcnRpY2xlLmJpbmQodGhpcyk7IFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hPbmVBcnRpY2xlKCk7XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5oZWxsbzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5ibG9nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMCAxNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJsb2cgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLW1pZFNpemVGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYmxvZyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIGZldGNoT25lQXJ0aWNsZSAoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCAoUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQpKVxuICAgICAgICAudGhlbigoYXBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KGBbYXQobXkuYXJ0aWNsZS51aWQsIFwiJHtwcm9wcy5yb3V0ZXIucXVlcnkuVUlEfX1cIildYCk7IFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbEFydGljbGU6IHJlcy5yZXN1bHRzLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgICB9XG59XG5cbi8vIGNvbnN0IEJsb2cgPSAgKHsgdXJsOiB7IHF1ZXJ5OiB7IFVJRCB9IH0gfSkgPT4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgPEhlYWRlciAvPlxuLy8gICAgIDxwPldlbGNvbWUgdG8gQWJvdXQhIHsgVUlEIH08L3A+XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcblxuXG4vLyBCbG9nLmZldGNoT25lQXJ0aWNsZSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50KVxuLy8gICAgIC50aGVuKChhcGkpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShgW2F0KG15LmFydGljbGUudWlkLCBcIiR7cHJvcHN9fVwiKV1gKTsgXG4vLyAgICAgfSlcbi8vICAgICAudGhlbigocmVzKT0+e1xuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgICAgICAgIGluZGl2aWR1YWxBcnRpY2xlOiByZXMucmVzdWx0cyxcbi8vICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2Vcbi8vICAgICAgICAgfSlcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaChjb25zb2xlLmxvZylcbi8vIH1cblxuLy8gQmxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHRoaXMucHJvcHMuYXJ0aWNsZXMuZmlsdGVyKChhcnRpY2xlKSA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gYXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0ID09PSB0aGlzLnN0YXRlLnZhbFxuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgaW5kaXZpZHVhbEFydGljbGU6IHRleHRcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il19 */\n/*@ sourceURL=pages/blog.js?entry */'
            }));
        }
    }, {
        key: 'fetchOneArticle',
        value: function fetchOneArticle() {
            var _this2 = this;

            return (0, _isomorphicUnfetch2.default)(Prismic.getApi(apiEndpoint)).then(function (api) {
                return api.query('[at(my.article.uid, "' + props.router.query.UID + '}")]');
            }).then(function (res) {
                _this2.setState({
                    individualArticle: res.results,
                    loading: false
                });
            }).catch(console.log);
        }
    }]);

    return Blog;
}(_react2.default.Component);

// const Blog =  ({ url: { query: { UID } } }) => (
//     <div>
//     <Header />
//     <p>Welcome to About! { UID }</p>
//     </div>
//   )


// Blog.fetchOneArticle = async function() {
//     const res = await Prismic.getApi(apiEndpoint)
//     .then((api) => {
//         return api.query(`[at(my.article.uid, "${props}}")]`); 
//     })
//     .then((res)=>{
//         this.setState({
//             individualArticle: res.results,
//             loading:false
//         })
//     })
//     .catch(console.log)
// }

// Blog.getInitialProps = async function () {
//     const text = await this.props.articles.filter((article) => {
//             return article.data.articletitle[0].text === this.state.val
//     })
//     return {
//         individualArticle: text
//     }
// }

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOlsiUHJpc21pYyIsInJlcXVpcmUiLCJhcGlFbmRwb2ludCIsImZldGNoIiwiQXJ0aWNsZUJvZHkiLCJMYXlvdXQiLCJSZWFjdCIsIkJsb2ciLCJwcm9wcyIsInN0YXRlIiwiaW5kaXZpZHVhbEFydGljbGUiLCJsb2FkaW5nIiwiZmV0Y2hPbmVBcnRpY2xlIiwiYmluZCIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJvdXRlciIsIlVJRCIsInJlcyIsInNldFN0YXRlIiwicmVzdWx0cyIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7O0FBTFAsSUFBSSxVQUFKLEFBQUksQUFBVTtBQUNkLElBQUksY0FBSixBQUFrQjs7O0lBTVosQTtrQ0FDRjs7a0JBQUEsQUFBWSxPQUFPOzRDQUFBOztzSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzsrQkFBUSxBQUNTLEFBQ2xCO3FCQUZKLEFBQWEsQUFFQSxBQUViO0FBSmEsQUFDVDtjQUdKLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQU43QixBQU1mO2VBQ0g7Ozs7OzRDQUNvQixBQUNqQjtpQkFBQSxBQUFLLEFBQ1I7Ozs7aUNBQ1MsQUFDTjttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSFosQUFDSSxBQUNJLEFBQ0k7eUJBSFo7cUJBREosQUFDSSxBQXdCUDtBQXhCTzs7OzswQ0F5Qlc7eUJBQ2Y7O29EQUFjLFFBQUEsQUFBUSxPQUFmLEFBQU8sQUFBZSxjQUF0QixBQUNOLEtBQUssVUFBQSxBQUFDLEtBQVEsQUFDWDt1QkFBTyxJQUFBLEFBQUksZ0NBQThCLE1BQUEsQUFBTSxPQUFOLEFBQWEsTUFBL0MsQUFBcUQsTUFBNUQsQUFDSDtBQUhNLGFBQUEsRUFBQSxBQUlOLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDVDt1QkFBQSxBQUFLO3VDQUNrQixJQURULEFBQ2EsQUFDdkI7NkJBRkosQUFBYyxBQUVGLEFBRWY7QUFKaUIsQUFDVjtBQU5ELGVBQUEsQUFVTixNQUFNLFFBVlAsQUFBTyxBQVVRLEFBQ2xCOzs7OztFQW5EYyxnQkFBTSxBOztBQXNEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFBRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYmxvZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=