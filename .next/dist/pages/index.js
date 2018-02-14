"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/pages/index.js?entry";

var Prismic = require("prismic-javascript");
var apiEndpoint = "https://JenniW.prismic.io/api/v2";
var accessToken = "MC5Xb0Y0QVNnQUFEYWtveTRM.77-977-9ZR7vv73vv73vv73vv70KNg3vv73vv73vv71NIu-_vTZEN--_ve-_vUHvv70tNUTvv73vv73vv73vv73vv70";

var Index = function Index(props) {

    return _react2.default.createElement("div", {
        className: "jsx-3207863471" + " " + "index",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement("div", {
        className: "jsx-3207863471" + " " + "hero",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement("h1", {
        className: "jsx-3207863471",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, "Jenni Whitehead"), _react2.default.createElement("h2", {
        className: "jsx-3207863471" + " " + "slideInLeft",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, "Education/Social Work/Policy")), _react2.default.createElement("section", {
        className: "jsx-3207863471" + " " + "intro",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement("h2", {
        className: "jsx-3207863471",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, "All this content is gathered over x years..."), _react2.default.createElement("img", { src: "/static/jwRetires.jpeg", alt: "Jenni at retirement celebration", className: "jsx-3207863471" + " " + "jwImage",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement("p", {
        className: "jsx-3207863471",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, "Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.")), _react2.default.createElement("section", {
        className: "jsx-3207863471" + " " + "preview",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement("div", { key: key, className: "jsx-3207863471" + " " + "previewDiv",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, _react2.default.createElement(_link2.default, { href: "/posts/?uid=" + article.uid, as: "/posts/" + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
            }
        }, _react2.default.createElement("a", { href: "#", className: "jsx-3207863471" + " " + "linkToArticle",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 29
            }
        }, _react2.default.createElement("img", { src: article.data.image1.url, className: "jsx-3207863471" + " " + "linkImage",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        }), _react2.default.createElement("h3", {
            className: "jsx-3207863471",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 31
            }
        }, article.data.articletitle[0].text))));
    }))), _react2.default.createElement(_style2.default, {
        styleId: "3207863471",
        css: ".mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url(\"../static/nature-plant-leaf-leaves-6583.jpg\") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDb0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1MLEFBUUwsQUFTVyxBQU9GLEFBR0EsQUFHVixXQTVFcEIsRUFHb0IsQ0ErQkMsR0EyQ04sR0FsRGYsR0FvQmlCLElBd0JqQixBQUdBLENBM0Q0QixBQU1JLEFBU0MsQUFXSCxDQXVCQSxBQWNaLENBMUVILENBK0JPLEtBYW1CLEtBM0NpRCxHQTJFMUYsS0EzQ3FCLElBckJJLEVBMEJBLENBdUJKLENBM0NNLENBUzNCLFNBT0EsQ0FpQnNDLElBTnZCLEVBL0JmLEFBZ0RrQixHQXZCQyxHQW5CbkIsSUE0QkEsS0FlaUIsSUF2QmpCLFVBWXVDLEFBWXZDLHdCQTlEa0MsVUFtRGIsa0JBQ0EsRUFuRFUsZ0JBb0RYLFdBbkRTLE1BcUQ3QixtQkFwRDBCLHNCQUNPLDZCQUNJLCtCQUNyQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbnZhciBhY2Nlc3NUb2tlbiA9IFwiTUM1WGIwWTBRVk5uUVVGRVlXdHZlVFJNLjc3LTk3Ny05WlI3dnY3M3Z2NzN2djczdnY3MEtOZzN2djczdnY3M3Z2NzFOSXUtX3ZUWkVOLS1fdmUtX3ZVSHZ2NzB0TlVUdnY3M3Z2NzN2djczdnY3M3Z2NzBcIjtcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHsgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleFwiID5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SmVubmkgV2hpdGVoZWFkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNsaWRlSW5MZWZ0XCI+RWR1Y2F0aW9uL1NvY2lhbCBXb3JrL1BvbGljeTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkFsbCB0aGlzIGNvbnRlbnQgaXMgZ2F0aGVyZWQgb3ZlciB4IHllYXJzLi4uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2p3UmV0aXJlcy5qcGVnXCIgYWx0PVwiSmVubmkgYXQgcmV0aXJlbWVudCBjZWxlYnJhdGlvblwiIGNsYXNzTmFtZT1cImp3SW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByZXZpZXdcIj5cblxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuYXJ0aWNsZXNJbnRyby5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3RGl2XCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLz91aWQ9JHthcnRpY2xlLnVpZH1gfSBhcz17YC9wb3N0cy8ke2FydGljbGUudWlkfWB9IHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlua0ltYWdlXCIgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID57YFxuICAgICAgICAgICAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1haW5JbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9uYXR1cmUtcGxhbnQtbGVhZi1sZWF2ZXMtNjU4My5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tYmlnRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tbWlkU2l6ZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41JSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsTWlkRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmp3SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWRhcmtHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlldyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDIwcHggMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDo0JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAuMnB4IDAuMnB4IDAuMnB4IDAuMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNXB4LCA1MDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDoyODBweDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDozMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYgYSBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0Rpdjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDFweCAycHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KVxuICAgIC50aGVuKChhcGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShbXG4gICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAnYXJ0aWNsZScpICwgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7ICAgb3JkZXJpbmdzIDogJ1tteS5hcnRpY2xlLmxhc3RfcHVibGljYXRpb25fZGF0ZSwgbXkuYXJ0aWNsZS5maXJzdF9wdWJsaWNhdGlvbl9kYXRlLF0nICAgICAgICAgXG4gICAgICAgICAgICB9KTsgLy8gQW4gZW1wdHkgcXVlcnkgd2lsbCByZXR1cm4gYWxsIHRoZSBkb2N1bWVudHNcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzSW50cm86cmVzLnJlc3VsdHMuc2xpY2UoMCwzKSxcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=pages/index.js?entry */"
    }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Prismic.getApi(apiEndpoint, { accessToken: accessToken }).then(function (api) {
                        return api.query([Prismic.Predicates.at('document.type', 'article')], { orderings: '[my.article.last_publication_date, my.article.first_publication_date,]'
                        }); // An empty query will return all the documents
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt("return", {
                        articlesIntro: res.results.slice(0, 3)
                    });

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIkxheW91dCIsIkluZGV4IiwicHJvcHMiLCJhcnRpY2xlc0ludHJvIiwibWFwIiwiYXJ0aWNsZSIsImtleSIsInVpZCIsImRhdGEiLCJpbWFnZTEiLCJ1cmwiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwiUHJlZGljYXRlcyIsImF0Iiwib3JkZXJpbmdzIiwicmVzIiwicmVzdWx0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7O0FBTm5CLElBQUksVUFBSixBQUFJLEFBQVU7QUFDZCxJQUFJLGNBQUosQUFBa0I7QUFDbEIsSUFBSSxjQUFKLEFBQWtCOztBQU1sQixJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFVLEFBRXJCOzsyQkFDUSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esb0NBQUEsY0FBQTs0Q0FBQSxBQUFjOztzQkFBZDt3QkFBQTtBQUFBO0FBQUEsT0FISixBQUNBLEFBRUksQUFFSixrREFBQSxjQUFBOzRDQUFBLEFBQW1COztzQkFBbkI7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLHdGQUFLLEtBQUwsQUFBUywwQkFBeUIsS0FBbEMsQUFBc0MsdUVBQXRDLEFBQWtGOztzQkFBbEY7d0JBRkosQUFFSSxBQUNBO0FBREE7d0JBQ0EsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BUkosQUFLQSxBQUdJLEFBRUosZ3NCQUFBLGNBQUE7NENBQUEsQUFBbUI7O3NCQUFuQjt3QkFBQSxBQUVLO0FBRkw7QUFBQSxhQUVLLEFBQU0sY0FBTixBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsS0FBTSxBQUNyQzsrQkFDZ0IsY0FBQSxTQUE0QixLQUE1QixBQUFpQyx5Q0FBakMsQUFBZTs7MEJBQWY7NEJBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksQUFBQyxnQ0FBSyx1QkFBcUIsUUFBM0IsQUFBbUMsS0FBTyxnQkFBYyxRQUF4RCxBQUFnRSxLQUFPLFVBQXZFOzBCQUFBOzRCQUFBLEFBQ0k7QUFESjsyQkFDSSxjQUFBLE9BQTZCLE1BQTdCLEFBQWtDLHlDQUFsQyxBQUFhOzswQkFBYjs0QkFBQSxBQUNJO0FBREo7a0RBQytCLEtBQUssUUFBQSxBQUFRLEtBQVIsQUFBYSxPQUE3QyxBQUFvRCx5Q0FBcEQsQUFBZTs7MEJBQWY7NEJBREosQUFDSSxBQUNBO0FBREE7NEJBQ0EsY0FBQTt1QkFBQTs7MEJBQUE7NEJBQUEsQUFBSztBQUFMO0FBQUEsbUJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQUwzRCxBQUNnQixBQUNJLEFBQ0ksQUFFSSxBQUFrQyxBQUtqRTtBQXhCVCxBQUNJLEFBVUEsQUFFSztpQkFiVDthQURSLEFBQ1EsQUF1SFg7QUF2SFc7QUFIWjs7QUE2SEEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtRQUFBO2tFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBO21DQUNGLEFBQVEsT0FBUixBQUFlLGFBQVksRUFBRSxhQUE3QixBQUEyQixBQUFlLGVBQTFDLEFBQ2pCLEtBQUssVUFBQSxBQUFDO21DQUNJLEFBQUksTUFBTSxDQUNiLFFBQUEsQUFBUSxXQUFSLEFBQW1CLEdBQW5CLEFBQXNCLGlCQURuQixBQUFVLEFBQ2IsQUFBdUMsZUFDbkMsV0FIRyxBQUNYLEFBQU8sQUFFSCxBQUFnQjtBQUFoQix5QkFGRyxFQURJLEFBQ1gsQ0FHUSxBQUNYO0FBUG1CLEFBQ0YscUJBQUE7O3FCQUFaO0FBRGMsbUNBQUE7O3VDQVNGLElBQUEsQUFBSSxRQUFKLEFBQVksTUFBWixBQUFrQixHQVRoQixBQVFiLEFBQ1csQUFBb0I7QUFEL0IsQUFDSDs7cUJBVGdCO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQXhCLEFBYUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9