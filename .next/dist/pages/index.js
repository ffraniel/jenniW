'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/index.js?entry';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Index = function Index(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-4063585890' + ' ' + 'index',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-4063585890' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-4063585890',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-4063585890',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'Education/Social Work/Policy')), _react2.default.createElement('section', {
        className: 'jsx-4063585890' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-4063585890',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: '/static/jwRetires.jpeg', alt: 'Jenni at retirement celebration', className: 'jsx-4063585890' + ' ' + 'jwImage',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-4063585890',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('section', {
        className: 'jsx-4063585890' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-4063585890' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            }
        }, _react2.default.createElement(_link2.default, { href: { pathname: '/blog', query: { UID: article.uid } }, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
            }
        }, _react2.default.createElement('a', {
            className: 'jsx-4063585890' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 25
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-4063585890' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-4063585890',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, article.data.articletitle[0].text))));
    }))), _react2.default.createElement(_style2.default, {
        styleId: '4063585890',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 0 15%;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{max-width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1SLEFBR1MsQUFPRixBQUdiLFdBM0RqQixFQUdvQixDQStCQyxBQTBCckIsTUFqQ0EsQUFvQkEsT0FVQSxDQTFDNEIsQUFNSSxBQVNDLEFBV0gsQ0FTQSxDQTlDZixDQStCTyxVQTlCb0UsUUFnQ3JFLElBckJJLEVBMEJBLENBU0osQ0E3Qk0sQ0FTM0IsU0FPQSxPQXBCQSxBQWtDa0IsR0FUQyxHQW5CbkIsU0E2QmlCLElBVGpCLFVBVUEsd0JBaERrQyw4QkFDSCwyQkFDRix5QkFDSCxzQkFDTyw2QkFDSSwrQkFDckMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG52YXIgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vSmVubmlXLnByaXNtaWMuaW8vYXBpL3YyXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleFwiID5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SmVubmkgV2hpdGVoZWFkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVkdWNhdGlvbi9Tb2NpYWwgV29yay9Qb2xpY3k8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BbGwgdGhpcyBjb250ZW50IGlzIGdhdGhlcmVkIG92ZXIgeCB5ZWFycy4uLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9qd1JldGlyZXMuanBlZ1wiIGFsdD1cIkplbm5pIGF0IHJldGlyZW1lbnQgY2VsZWJyYXRpb25cIiBjbGFzc05hbWU9XCJqd0ltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlc0ludHJvLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdEaXZcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvYmxvZycsIHF1ZXJ5OiB7IFVJRDogYXJ0aWNsZS51aWQgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpbmtJbWFnZVwiIHNyYz17YXJ0aWNsZS5kYXRhLmltYWdlMS51cmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbCA+e2BcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYWluSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zdGF0aWMvbmF0dXJlLXBsYW50LWxlYWYtbGVhdmVzLTY1ODMuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLWJpZ0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSUgNSUgMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHJlZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLW1pZFNpemVGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNSUgNSUgMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHJlZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMCAxNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbE1pZEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5qd0ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1kYXJrR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo4MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2OmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxcHggMXB4IDJweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4pO1xuXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50KVxuICAgIC50aGVuKChhcGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShcIlwiKTsgLy8gQW4gZW1wdHkgcXVlcnkgd2lsbCByZXR1cm4gYWxsIHRoZSBkb2N1bWVudHNcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzSW50cm86cmVzLnJlc3VsdHMucmV2ZXJzZSgpLnNsaWNlKDAsMylcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Prismic.getApi(apiEndpoint).then(function (api) {
                        return api.query(""); // An empty query will return all the documents
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt('return', {
                        articlesIntro: res.results.reverse().slice(0, 3)
                    });

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJMYXlvdXQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVUlEIiwidWlkIiwiZGF0YSIsImltYWdlMSIsInVybCIsImFydGljbGV0aXRsZSIsInRleHQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBcGkiLCJ0aGVuIiwiYXBpIiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQUpuQixJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCOzs7QUFLbEIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDsyQkFDRixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esb0NBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEosQUFDQSxBQUVJLEFBRUosa0RBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSx3RkFBSyxLQUFMLEFBQVMsMEJBQXlCLEtBQWxDLEFBQXNDLHVFQUF0QyxBQUFrRjs7c0JBQWxGO3dCQUZKLEFBRUksQUFDQTtBQURBO3dCQUNBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQVJKLEFBS0EsQUFHSSxBQUVKLGdzQkFBQSxjQUFBOzRDQUFBLEFBQW1COztzQkFBbkI7d0JBQUEsQUFFSztBQUZMO0FBQUEsYUFFSyxBQUFNLGNBQU4sQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLEtBQU0sQUFDckM7K0JBQ2dCLGNBQUEsU0FBNEIsS0FBNUIsQUFBaUMseUNBQWpDLEFBQWU7OzBCQUFmOzRCQUFBLEFBQ0k7QUFESjtTQUFBLGtCQUNJLEFBQUMsZ0NBQUssTUFBTSxFQUFFLFVBQUYsQUFBWSxTQUFTLE9BQU8sRUFBRSxLQUFLLFFBQS9DLEFBQVksQUFBNEIsQUFBZTswQkFBdkQ7NEJBQUEsQUFDSTtBQURKOzJCQUNJLGNBQUE7Z0RBQUEsQUFBYTs7MEJBQWI7NEJBQUEsQUFDSTtBQURKO0FBQUEsa0RBQytCLEtBQUssUUFBQSxBQUFRLEtBQVIsQUFBYSxPQUE3QyxBQUFvRCx5Q0FBcEQsQUFBZTs7MEJBQWY7NEJBREosQUFDSSxBQUNBO0FBREE7NEJBQ0EsY0FBQTt1QkFBQTs7MEJBQUE7NEJBQUEsQUFBSztBQUFMO0FBQUEsbUJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQUwzRCxBQUNnQixBQUNJLEFBQ0ksQUFFSSxBQUFrQyxBQUtqRTtBQXhCVCxBQUNJLEFBVUEsQUFFSztpQkFiVDthQURFLEFBQ0Y7QUFBQTtBQURaOztBQXFHQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0YsQUFBUSxPQUFSLEFBQWUsYUFBZixBQUNqQixLQUFLLFVBQUEsQUFBQzsrQkFDSSxJQUFBLEFBQUksTUFEQSxBQUNYLEFBQU8sQUFBVSxJQUROLEFBQ1gsQ0FBc0IsQUFDekI7QUFKbUIsQUFDRixxQkFBQTs7cUJBQVo7QUFEYyxtQ0FBQTs7dUNBTUYsSUFBQSxBQUFJLFFBQUosQUFBWSxVQUFaLEFBQXNCLE1BQXRCLEFBQTRCLEdBTjFCLEFBS2IsQUFDVyxBQUE4QjtBQUR6QyxBQUNIOztxQkFOZ0I7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBeEIsQUFVQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=