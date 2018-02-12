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
        className: "jsx-1646254303" + " " + "index",
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
        className: "jsx-1646254303" + " " + "hero",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement("h1", {
        className: "jsx-1646254303",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, "Jenni Whitehead"), _react2.default.createElement("h2", {
        className: "jsx-1646254303",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, "Education/Social Work/Policy")), _react2.default.createElement("section", {
        className: "jsx-1646254303" + " " + "intro",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement("h2", {
        className: "jsx-1646254303",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, "All this content is gathered over x years..."), _react2.default.createElement("img", { src: "/static/jwRetires.jpeg", alt: "Jenni at retirement celebration", className: "jsx-1646254303" + " " + "jwImage",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement("p", {
        className: "jsx-1646254303",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, "Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.")), _react2.default.createElement("section", {
        className: "jsx-1646254303" + " " + "preview",
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement("div", { key: key, className: "jsx-1646254303" + " " + "previewDiv",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, _react2.default.createElement(_link2.default, { href: "/posts/?uid=" + article.uid, as: "/posts/" + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
            }
        }, _react2.default.createElement("a", { href: "#", className: "jsx-1646254303" + " " + "linkToArticle",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 29
            }
        }, _react2.default.createElement("img", { src: article.data.image1.url, className: "jsx-1646254303" + " " + "linkImage",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        }), _react2.default.createElement("h3", {
            className: "jsx-1646254303",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 31
            }
        }, article.data.articletitle[0].text))));
    }))), _react2.default.createElement(_style2.default, {
        styleId: "1646254303",
        css: ".mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url(\"../static/nature-plant-leaf-leaves-6583.jpg\") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDb0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1MLEFBUUwsQUFTVyxBQU9GLEFBR0EsQUFHVixXQTVFcEIsRUFHb0IsQ0ErQkMsR0EyQ04sR0FsRGYsR0FvQmlCLElBd0JqQixBQUdBLENBM0Q0QixBQU1JLEFBU0MsQUFXSCxDQXVCQSxBQWNiLENBMUVGLENBK0JPLEtBYW1CLEtBM0NpRCxFQTBFMUYsTUExQ3FCLElBckJJLEVBMEJBLENBdUJKLENBM0NNLENBUzNCLFNBT0EsQ0FpQnNDLElBTnZCLEVBL0JmLEFBZ0RrQixHQXZCQyxHQW5CbkIsSUE0QkEsS0FlaUIsSUF2QmpCLFVBWXVDLEFBWXZDLHdCQTlEa0MsVUFtRGIsa0JBQ0EsRUFuRFUsZ0JBb0RYLFdBbkRTLE1BcUQ3QixtQkFwRDBCLHNCQUNPLDZCQUNJLCtCQUNyQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbnZhciBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9KZW5uaVcucHJpc21pYy5pby9hcGkvdjJcIjtcbnZhciBhY2Nlc3NUb2tlbiA9IFwiTUM1WGIwWTBRVk5uUVVGRVlXdHZlVFJNLjc3LTk3Ny05WlI3dnY3M3Z2NzN2djczdnY3MEtOZzN2djczdnY3M3Z2NzFOSXUtX3ZUWkVOLS1fdmUtX3ZVSHZ2NzB0TlVUdnY3M3Z2NzN2djczdnY3M3Z2NzBcIjtcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHsgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleFwiID5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SmVubmkgV2hpdGVoZWFkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVkdWNhdGlvbi9Tb2NpYWwgV29yay9Qb2xpY3k8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BbGwgdGhpcyBjb250ZW50IGlzIGdhdGhlcmVkIG92ZXIgeCB5ZWFycy4uLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9qd1JldGlyZXMuanBlZ1wiIGFsdD1cIkplbm5pIGF0IHJldGlyZW1lbnQgY2VsZWJyYXRpb25cIiBjbGFzc05hbWU9XCJqd0ltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XG5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydGljbGVzSW50cm8ubWFwKChhcnRpY2xlLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0RpdlwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8/dWlkPSR7YXJ0aWNsZS51aWR9YH0gYXM9e2AvcG9zdHMvJHthcnRpY2xlLnVpZH1gfSBwYXNzSHJlZiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rVG9BcnRpY2xlXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpbmtJbWFnZVwiIHNyYz17YXJ0aWNsZS5kYXRhLmltYWdlMS51cmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbCA+e2BcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYWluSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zdGF0aWMvbmF0dXJlLXBsYW50LWxlYWYtbGVhdmVzLTY1ODMuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLWJpZ0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSUgNSUgMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHJlZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLW1pZFNpemVGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNSUgNSUgMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHJlZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMCAxNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbE1pZEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5qd0ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1kYXJrR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo4MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAyMHB4IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6NCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowLjJweCAwLjJweCAwLjJweCAwLjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjVweCwgNTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IGEgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjFweCAxcHggMnB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGlua0ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo4MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAudGhlbigoYXBpKSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucXVlcnkoXCJcIik7IC8vIEFuIGVtcHR5IHF1ZXJ5IHdpbGwgcmV0dXJuIGFsbCB0aGUgZG9jdW1lbnRzXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgICBhcnRpY2xlc0ludHJvOnJlcy5yZXN1bHRzLnJldmVyc2UoKS5zbGljZSgwLDMpLFxuICAgIH0gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=pages/index.js?entry */"
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
                        return api.query(""); // An empty query will return all the documents
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt("return", {
                        articlesIntro: res.results.reverse().slice(0, 3)
                    });

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIkxheW91dCIsIkluZGV4IiwicHJvcHMiLCJhcnRpY2xlc0ludHJvIiwibWFwIiwiYXJ0aWNsZSIsImtleSIsInVpZCIsImRhdGEiLCJpbWFnZTEiLCJ1cmwiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQU5uQixJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCO0FBQ2xCLElBQUksY0FBSixBQUFrQjs7QUFNbEIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBVSxBQUVyQjs7MkJBQ1EsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0E7QUFEQTtBQUFBLHVCQUNBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLG9DQUFBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhKLEFBQ0EsQUFFSSxBQUVKLGtEQUFBLGNBQUE7NENBQUEsQUFBbUI7O3NCQUFuQjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esd0ZBQUssS0FBTCxBQUFTLDBCQUF5QixLQUFsQyxBQUFzQyx1RUFBdEMsQUFBa0Y7O3NCQUFsRjt3QkFGSixBQUVJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSSixBQUtBLEFBR0ksQUFFSixnc0JBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBRUs7QUFGTDtBQUFBLGFBRUssQUFBTSxjQUFOLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxLQUFNLEFBQ3JDOytCQUNnQixjQUFBLFNBQTRCLEtBQTVCLEFBQWlDLHlDQUFqQyxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLHVCQUFxQixRQUEzQixBQUFtQyxLQUFPLGdCQUFjLFFBQXhELEFBQWdFLEtBQU8sVUFBdkU7MEJBQUE7NEJBQUEsQUFDSTtBQURKOzJCQUNJLGNBQUEsT0FBNkIsTUFBN0IsQUFBa0MseUNBQWxDLEFBQWE7OzBCQUFiOzRCQUFBLEFBQ0k7QUFESjtrREFDK0IsS0FBSyxRQUFBLEFBQVEsS0FBUixBQUFhLE9BQTdDLEFBQW9ELHlDQUFwRCxBQUFlOzswQkFBZjs0QkFESixBQUNJLEFBQ0E7QUFEQTs0QkFDQSxjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxtQkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBTDNELEFBQ2dCLEFBQ0ksQUFDSSxBQUVJLEFBQWtDLEFBS2pFO0FBeEJULEFBQ0ksQUFVQSxBQUVLO2lCQWJUO2FBRFIsQUFDUSxBQXNIWDtBQXRIVztBQUhaOztBQTRIQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0YsQUFBUSxPQUFSLEFBQWUsYUFBWSxFQUFFLGFBQTdCLEFBQTJCLEFBQWUsZUFBMUMsQUFDakIsS0FBSyxVQUFBLEFBQUM7K0JBQ0ksSUFBQSxBQUFJLE1BREEsQUFDWCxBQUFPLEFBQVUsSUFETixBQUNYLENBQXNCLEFBQ3pCO0FBSm1CLEFBQ0YscUJBQUE7O3FCQUFaO0FBRGMsbUNBQUE7O3VDQU1GLElBQUEsQUFBSSxRQUFKLEFBQVksVUFBWixBQUFzQixNQUF0QixBQUE0QixHQU4xQixBQUtiLEFBQ1csQUFBOEI7QUFEekMsQUFDSDs7cUJBTmdCO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQXhCLEFBV0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9