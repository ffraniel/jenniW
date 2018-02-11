webpackHotUpdate(5,{

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(393);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = __webpack_require__(392);

var _link2 = _interopRequireDefault(_link);

var _Layout = __webpack_require__(413);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/index.js?entry';

var Prismic = __webpack_require__(399);
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Index = function Index(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-1646254303' + ' ' + 'index',
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
        className: 'jsx-1646254303' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-1646254303',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-1646254303',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'Education/Social Work/Policy')), _react2.default.createElement('section', {
        className: 'jsx-1646254303' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-1646254303',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: '/static/jwRetires.jpeg', alt: 'Jenni at retirement celebration', className: 'jsx-1646254303' + ' ' + 'jwImage',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-1646254303',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('section', {
        className: 'jsx-1646254303' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-1646254303' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            }
        }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
            }
        }, _react2.default.createElement('a', { href: '#', className: 'jsx-1646254303' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 25
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-1646254303' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-1646254303',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, article.data.articletitle[0].text))));
    }))), _react2.default.createElement(_style2.default, {
        styleId: '1646254303',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1MLEFBUUwsQUFTVyxBQU9GLEFBR0EsQUFHVixXQTVFcEIsRUFHb0IsQ0ErQkMsR0EyQ04sR0FsRGYsR0FvQmlCLElBd0JqQixBQUdBLENBM0Q0QixBQU1JLEFBU0MsQUFXSCxDQXVCQSxBQWNiLENBMUVGLENBK0JPLEtBYW1CLEtBM0NpRCxFQTBFMUYsTUExQ3FCLElBckJJLEVBMEJBLENBdUJKLENBM0NNLENBUzNCLFNBT0EsQ0FpQnNDLElBTnZCLEVBL0JmLEFBZ0RrQixHQXZCQyxHQW5CbkIsSUE0QkEsS0FlaUIsSUF2QmpCLFVBWXVDLEFBWXZDLHdCQTlEa0MsVUFtRGIsa0JBQ0EsRUFuRFUsZ0JBb0RYLFdBbkRTLE1BcUQ3QixtQkFwRDBCLHNCQUNPLDZCQUNJLCtCQUNyQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4XCIgPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5KZW5uaSBXaGl0ZWhlYWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RWR1Y2F0aW9uL1NvY2lhbCBXb3JrL1BvbGljeTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkFsbCB0aGlzIGNvbnRlbnQgaXMgZ2F0aGVyZWQgb3ZlciB4IHllYXJzLi4uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2p3UmV0aXJlcy5qcGVnXCIgYWx0PVwiSmVubmkgYXQgcmV0aXJlbWVudCBjZWxlYnJhdGlvblwiIGNsYXNzTmFtZT1cImp3SW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByZXZpZXdcIj5cblxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuYXJ0aWNsZXNJbnRyby5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3RGl2XCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLz91aWQ9JHthcnRpY2xlLnVpZH1gfSBhcz17YC9wb3N0cy8ke2FydGljbGUudWlkfWB9IHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlua0ltYWdlXCIgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID57YFxuICAgICAgICAgICAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1haW5JbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9uYXR1cmUtcGxhbnQtbGVhZi1sZWF2ZXMtNjU4My5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tYmlnRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tbWlkU2l6ZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41JSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsTWlkRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmp3SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWRhcmtHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlldyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDIwcHggMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDo0JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAuMnB4IDAuMnB4IDAuMnB4IDAuMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNXB4LCA1MDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDoyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDozMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYgYSBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0Rpdjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDFweCAycHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjgwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4pO1xuXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50KVxuICAgIC50aGVuKChhcGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShcIlwiKTsgLy8gQW4gZW1wdHkgcXVlcnkgd2lsbCByZXR1cm4gYWxsIHRoZSBkb2N1bWVudHNcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzSW50cm86cmVzLnJlc3VsdHMucmV2ZXJzZSgpLnNsaWNlKDAsMylcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJMYXlvdXQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiaW1hZ2UxIiwidXJsIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImdldEluaXRpYWxQcm9wcyIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJlcyIsInJlc3VsdHMiLCJyZXZlcnNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7QUFKbkIsSUFBSSxVQUFKLEFBQUksQUFBVTtBQUNkLElBQUksY0FBSixBQUFrQjs7O0FBS2xCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7MkJBQ0YsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0E7QUFEQTtBQUFBLHVCQUNBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLG9DQUFBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhKLEFBQ0EsQUFFSSxBQUVKLGtEQUFBLGNBQUE7NENBQUEsQUFBbUI7O3NCQUFuQjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esd0ZBQUssS0FBTCxBQUFTLDBCQUF5QixLQUFsQyxBQUFzQyx1RUFBdEMsQUFBa0Y7O3NCQUFsRjt3QkFGSixBQUVJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSSixBQUtBLEFBR0ksQUFFSixnc0JBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBRUs7QUFGTDtBQUFBLGFBRUssQUFBTSxjQUFOLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxLQUFNLEFBQ3JDOytCQUNnQixjQUFBLFNBQTRCLEtBQTVCLEFBQWlDLHlDQUFqQyxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLHVCQUFxQixRQUEzQixBQUFtQyxLQUFPLGdCQUFjLFFBQXhELEFBQWdFLEtBQU8sVUFBdkU7MEJBQUE7NEJBQUEsQUFDSTtBQURKOzJCQUNJLGNBQUEsT0FBNkIsTUFBN0IsQUFBa0MseUNBQWxDLEFBQWE7OzBCQUFiOzRCQUFBLEFBQ0k7QUFESjtrREFDK0IsS0FBSyxRQUFBLEFBQVEsS0FBUixBQUFhLE9BQTdDLEFBQW9ELHlDQUFwRCxBQUFlOzswQkFBZjs0QkFESixBQUNJLEFBQ0E7QUFEQTs0QkFDQSxjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxtQkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBTDNELEFBQ2dCLEFBQ0ksQUFDSSxBQUVJLEFBQWtDLEFBS2pFO0FBeEJULEFBQ0ksQUFVQSxBQUVLO2lCQWJUO2FBREUsQUFDRjtBQUFBO0FBRFo7O0FBeUhBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7UUFBQTtrRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FBQTttQ0FDRixBQUFRLE9BQVIsQUFBZSxhQUFmLEFBQ2pCLEtBQUssVUFBQSxBQUFDOytCQUNJLElBQUEsQUFBSSxNQURBLEFBQ1gsQUFBTyxBQUFVLElBRE4sQUFDWCxDQUFzQixBQUN6QjtBQUptQixBQUNGLHFCQUFBOztxQkFBWjtBQURjLG1DQUFBOzt1Q0FNRixJQUFBLEFBQUksUUFBSixBQUFZLFVBQVosQUFBc0IsTUFBdEIsQUFBNEIsR0FOMUIsQUFLYixBQUNXLEFBQThCO0FBRHpDLEFBQ0g7O3FCQU5nQjtxQkFBQTtvQ0FBQTs7QUFBQTtnQkFBQTtBQUF4QixBQVVBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/francis/Code/JenniW/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/francis/Code/JenniW/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zOWM4ZGJiYTVmNGRmYjQwMzVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MGZmMmY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xudmFyIGFwaUVuZHBvaW50ID0gXCJodHRwczovL0plbm5pVy5wcmlzbWljLmlvL2FwaS92MlwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIiA+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkplbm5pIFdoaXRlaGVhZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5FZHVjYXRpb24vU29jaWFsIFdvcmsvUG9saWN5PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+QWxsIHRoaXMgY29udGVudCBpcyBnYXRoZXJlZCBvdmVyIHggeWVhcnMuLi48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvandSZXRpcmVzLmpwZWdcIiBhbHQ9XCJKZW5uaSBhdCByZXRpcmVtZW50IGNlbGVicmF0aW9uXCIgY2xhc3NOYW1lPVwiandJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJldmlld1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlc0ludHJvLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdEaXZcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvP3VpZD0ke2FydGljbGUudWlkfWB9IGFzPXtgL3Bvc3RzLyR7YXJ0aWNsZS51aWR9YH0gcGFzc0hyZWYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQXJ0aWNsZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaW5rSW1hZ2VcIiBzcmM9e2FydGljbGUuZGF0YS5pbWFnZTEudXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWwgPntgXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFpbkltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vc3RhdGljL25hdHVyZS1wbGFudC1sZWFmLWxlYXZlcy02NTgzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1iaWdGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDUlIDAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUlIDUlIDAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxNaWRGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuandJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tZGFya0dyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMjBweCAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOjQlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MC4ycHggMC4ycHggMC4ycHggMC4ycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDI1cHgsIDUwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjI4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2OmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxcHggMXB4IDJweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6ODAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbik7XG5cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQpXG4gICAgLnRoZW4oKGFwaSkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFwiXCIpOyAvLyBBbiBlbXB0eSBxdWVyeSB3aWxsIHJldHVybiBhbGwgdGhlIGRvY3VtZW50c1xuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXJ0aWNsZXNJbnRybzpyZXMucmVzdWx0cy5yZXZlcnNlKCkuc2xpY2UoMCwzKVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQWJBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUF3SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQURBO0FBREE7O0FBTUE7QUFBQTtBQUNBO0FBUEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFVQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==