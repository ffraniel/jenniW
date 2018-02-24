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

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/index.js?entry';

var Prismic = require('prismic-javascript');

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


var Index = function Index(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-2751202892' + ' ' + 'index',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-2751202892',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, 'Jenni Whitehead')), _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-2751202892' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-2751202892',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-2751202892' + ' ' + 'slideInLeft',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Safeguarding in Education')), _react2.default.createElement('section', {
        className: 'jsx-2751202892' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-2751202892',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: '/static/jwRetires.jpeg', alt: 'Jenni at retirement celebration', className: 'jsx-2751202892' + ' ' + 'jwImage',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-2751202892',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('div', {
        className: 'jsx-2751202892' + ' ' + 'articleList',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('section', {
        className: 'jsx-2751202892' + ' ' + 'archiveTitle',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement('h3', {
        className: 'jsx-2751202892',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, 'Archive'), _react2.default.createElement('div', {
        className: 'jsx-2751202892' + ' ' + 'marginBottom',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement(_link2.default, { href: '/articles', as: '/articles', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('a', { href: '#', className: 'jsx-2751202892' + ' ' + 'linkToAllArticles',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Go to all articles')))), _react2.default.createElement('section', {
        className: 'jsx-2751202892' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-2751202892' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 38
            }
        }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
            }
        }, _react2.default.createElement('a', { href: '#', className: 'jsx-2751202892' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, article.data.image1.url && _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-2751202892' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }), !article.data.image1.url && _react2.default.createElement('img', { src: '../static/image4.jpeg', className: 'jsx-2751202892' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 42
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-2751202892',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }, article.data.articletitle[0].text))));
    })))), _react2.default.createElement(_style2.default, {
        styleId: '2751202892',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.archiveTitle{padding:0 15% 0px 15%;text-align:right;}.archiveTitle h3{font-family:var(--mainFont);font-size:var(--midSizeFont);}.articleList section h3{padding:0 15% 0px 15%;text-align:center;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:100%;max-height:180px;}.linkToAllArticles{box-shadow:1px 1px 2px 1px;border-radius:1px;text-decoration:none;margin:0 5% 0 0%;padding:4px;}.linkToAllArticles:hover{box-shadow:1px 3px 4px 1px;}.linkToAllArticles:active{color:white;box-shadow:1px 0px 2px 1px;}.marginBottom{margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Eb0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1MLEFBTUQsQUFJTSxBQUlOLEFBSUosQUFTVyxBQU9GLEFBR0EsQUFHVixBQU9VLEFBT0EsQUFHZixBQUlPLFdBM0d0QixDQXdHOEIsQ0FyR1YsQ0ErQkMsR0FxRE4sRUFxQmYsQ0FqRkEsRUEwQm9CLEFBUUMsQ0FkSixJQWtDakIsQUFHQSxBQVVxQixBQU9yQixDQXRGNEIsQUFNSSxBQVNDLEFBV0gsQUFnQkUsQ0FpQkYsQUFjWixDQXBGSCxDQStCTyxLQWFtQixHQU16QyxBQW1EQSxDQTNDQSxDQXpEMEYsR0FvRnRFLENBTUksSUExREgsSUFyQkksRUEwQkEsQ0FpQ0osQ0FyRE0sQUFvQzNCLENBM0JBLEdBNERBLEtBS29CLENBMURwQixDQTJCc0MsSUFoQnZCLEVBL0JmLEFBMERrQixHQWpDQyxHQW5CbkIsR0F5RWUsQ0EvQ2YsS0EyQmlCLElBakNqQixFQXNEQSxRQWhDdUMsQUFZdkMsd0JBeEVrQyxVQTZEYixrQkFDQSxFQTdEVSxnQkE4RFgsV0E3RFMsTUErRDdCLG1CQTlEMEIsc0JBQ08sNkJBQ0ksK0JBQ3JDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuY29uc3QgYXBpRW5kcG9pbnQgPSBjb25maWcuYXBpRW5kcG9pbnQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IGNvbmZpZy5hY2Nlc3NUb2tlbjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4geyBcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleFwiID5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkplbm5pIFdoaXRlaGVhZDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5KZW5uaSBXaGl0ZWhlYWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2xpZGVJbkxlZnRcIj5TYWZlZ3VhcmRpbmcgaW4gRWR1Y2F0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+QWxsIHRoaXMgY29udGVudCBpcyBnYXRoZXJlZCBvdmVyIHggeWVhcnMuLi48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvandSZXRpcmVzLmpwZWdcIiBhbHQ9XCJKZW5uaSBhdCByZXRpcmVtZW50IGNlbGVicmF0aW9uXCIgY2xhc3NOYW1lPVwiandJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcmNoaXZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BcmNoaXZlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luQm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2FydGljbGVzJ30gYXM9eycvYXJ0aWNsZXMnfSBwYXNzSHJlZiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FsbEFydGljbGVzXCIgaHJlZj1cIiNcIj5HbyB0byBhbGwgYXJ0aWNsZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuYXJ0aWNsZXNJbnRyby5tYXAoKGFydGljbGUsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdEaXZcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLz91aWQ9JHthcnRpY2xlLnVpZH1gfSBhcz17YC9wb3N0cy8ke2FydGljbGUudWlkfWB9IHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rVG9BcnRpY2xlXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuZGF0YS5pbWFnZTEudXJsICYmIDxpbWcgY2xhc3NOYW1lPVwibGlua0ltYWdlXCIgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshYXJ0aWNsZS5kYXRhLmltYWdlMS51cmwgJiYgPGltZyBjbGFzc05hbWU9XCJsaW5rSW1hZ2VcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2U0LmpwZWdcIiAvPiAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbCA+e2BcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOjk4LjkyNzg3MTI3Nzc2dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1haW5JbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9uYXR1cmUtcGxhbnQtbGVhZi1sZWF2ZXMtNjU4My5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tYmlnRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tbWlkU2l6ZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41JSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsTWlkRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmp3SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWRhcmtHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlldyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDIwcHggMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDo0JTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcmNoaXZlVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwcHggMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXJjaGl2ZVRpdGxlIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVMaXN0IHNlY3Rpb24gaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwcHggMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAuMnB4IDAuMnB4IDAuMnB4IDAuMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNXB4LCA1MDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDoyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDozMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYgYSBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0Rpdjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDFweCAycHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjE4MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtUb0FsbEFydGljbGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDFweCAycHggMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDUlIDAgMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGlua1RvQWxsQXJ0aWNsZXM6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxcHggM3B4IDRweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtUb0FsbEFydGljbGVzOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDBweCAycHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYXJnaW5Cb3R0b20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQseyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSlcbiAgICAudGhlbigoYXBpKSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucXVlcnkoWyBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAnYXJ0aWNsZScpXSxcbiAgICAgICAgICAgIHsgb3JkZXJpbmdzIDogJ1tteS5hcnRpY2xlLmxhc3RfcHVibGljYXRpb25fZGF0ZSwgbXkuYXJ0aWNsZS5maXJzdF9wdWJsaWNhdGlvbl9kYXRlLF0nIH0pOyBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFydGljbGVzSW50cm86cmVzLnJlc3VsdHNcbiAgICAgICAgfSAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=pages/index.js?entry */'
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
                        return api.query([Prismic.Predicates.at('document.type', 'article')], { orderings: '[my.article.last_publication_date, my.article.first_publication_date,]' });
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt('return', {
                        articlesIntro: res.results
                    });

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIkxheW91dCIsIkhlYWQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiaW1hZ2UxIiwidXJsIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImdldEluaXRpYWxQcm9wcyIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsIlByZWRpY2F0ZXMiLCJhdCIsIm9yZGVyaW5ncyIsInJlcyIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7QUFQUCxJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7QUFDM0IsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjs7O0FBTTNCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQVUsQUFDckI7MkJBQ1EsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZSLEFBQ0ksQUFDSSxBQUVKLHFDQUFBLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0E7QUFEQTtBQUFBLHVCQUNBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLG9DQUFBLGNBQUE7NENBQUEsQUFBYzs7c0JBQWQ7d0JBQUE7QUFBQTtBQUFBLE9BSEosQUFDQSxBQUVJLEFBRUosK0NBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSx3RkFBSyxLQUFMLEFBQVMsMEJBQXlCLEtBQWxDLEFBQXNDLHVFQUF0QyxBQUFrRjs7c0JBQWxGO3dCQUZKLEFBRUksQUFDQTtBQURBO3dCQUNBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQVJKLEFBS0EsQUFHSSxBQUVKLGdzQkFBQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7NENBQUEsQUFBbUI7O3NCQUFuQjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsNEJBQUEsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNBO0FBREE7QUFBQSx1QkFDQSxBQUFDLGdDQUFLLE1BQU4sQUFBWSxhQUFhLElBQXpCLEFBQTZCLGFBQWEsVUFBMUM7c0JBQUE7d0JBQUEsQUFDUTtBQURSO3VCQUNRLGNBQUEsT0FBaUMsTUFBakMsQUFBc0MseUNBQXRDLEFBQWE7O3NCQUFiO3dCQUFBO0FBQUE7T0FMaEIsQUFDSSxBQUVJLEFBQ0EsQUFDUSxBQUlaLDBDQUFBLGNBQUE7NENBQUEsQUFBbUI7O3NCQUFuQjt3QkFBQSxBQUNLO0FBREw7QUFBQSxhQUNLLEFBQU0sY0FBTixBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsS0FBTSxBQUNyQzsrQkFDSSxjQUFBLFNBQTRCLEtBQTVCLEFBQWlDLHlDQUFqQyxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLHVCQUFxQixRQUEzQixBQUFtQyxLQUFPLGdCQUFjLFFBQXhELEFBQWdFLEtBQU8sVUFBdkU7MEJBQUE7NEJBQUEsQUFDSTtBQURKOzJCQUNJLGNBQUEsT0FBNkIsTUFBN0IsQUFBa0MseUNBQWxDLEFBQWE7OzBCQUFiOzRCQUFBLEFBQ0s7QUFETDttQkFDSyxBQUFRLEtBQVIsQUFBYSxPQUFiLEFBQW9CLDhDQUFrQyxLQUFLLFFBQUEsQUFBUSxLQUFSLEFBQWEsT0FBN0MsQUFBb0QseUNBQXBELEFBQWU7OzBCQUFmOzRCQURoQyxBQUNnQyxBQUMzQjtBQUQyQjtTQUFBLElBQzFCLFFBQUEsQUFBUSxLQUFSLEFBQWEsT0FBZCxBQUFxQiw4Q0FBa0MsS0FBM0IsQUFBK0IsNkRBQS9CLEFBQWU7OzBCQUFmOzRCQUZqQyxBQUVpQyxBQUM3QjtBQUQ2QjtTQUFBLG1CQUM3QixjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxtQkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBTi9DLEFBQ0ksQUFDSSxBQUNJLEFBR0ksQUFBa0MsQUFLckQ7QUFwQ2IsQUFJSSxBQVVBLEFBU0ksQUFDSztpQkF4QmI7YUFEUixBQUNRLEFBOEpYO0FBOUpXO0FBRlo7O0FBa0tBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7UUFBQTtrRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FBQTttQ0FDRixBQUFRLE9BQVIsQUFBZSxhQUFZLEVBQUUsYUFBN0IsQUFBMkIsQUFBZSxlQUExQyxBQUNqQixLQUFLLFVBQUEsQUFBQyxLQUFRLEFBQ1g7K0JBQU8sSUFBQSxBQUFJLE1BQU0sQ0FBRSxRQUFBLEFBQVEsV0FBUixBQUFtQixHQUFuQixBQUFzQixpQkFBbEMsQUFBVSxBQUFFLEFBQXVDLGFBQ3RELEVBQUUsV0FETixBQUFPLEFBQ0gsQUFBYyxBQUNqQjtBQUxlLEFBQ0YscUJBQUE7O3FCQUFaO0FBRGMsbUNBQUE7O3VDQU9FLElBUEYsQUFNVCxBQUNlO0FBRGYsQUFDSDs7cUJBUFk7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBeEIsQUFXQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=