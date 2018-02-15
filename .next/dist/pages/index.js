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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/index.js?entry';

var Prismic = require('prismic-javascript');

var apiEndpoint = _config2.default.apiEndpoint;
var accessToken = _config2.default.accessToken;


var Index = function Index(props) {

    return _react2.default.createElement('div', {
        className: 'jsx-3207863471' + ' ' + 'index',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-3207863471' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-3207863471',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-3207863471' + ' ' + 'slideInLeft',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, 'Education/Social Work/Policy')), _react2.default.createElement('section', {
        className: 'jsx-3207863471' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-3207863471',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: '/static/jwRetires.jpeg', alt: 'Jenni at retirement celebration', className: 'jsx-3207863471' + ' ' + 'jwImage',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-3207863471',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('section', {
        className: 'jsx-3207863471' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-3207863471' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
            }
        }, _react2.default.createElement('a', { href: '#', className: 'jsx-3207863471' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 29
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-3207863471' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-3207863471',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 31
            }
        }, article.data.articletitle[0].text))));
    }))), _react2.default.createElement(_style2.default, {
        styleId: '3207863471',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDb0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1MLEFBUUwsQUFTVyxBQU9GLEFBR0EsQUFHVixXQTVFcEIsRUFHb0IsQ0ErQkMsR0EyQ04sR0FsRGYsR0FvQmlCLElBd0JqQixBQUdBLENBM0Q0QixBQU1JLEFBU0MsQUFXSCxDQXVCQSxBQWNaLENBMUVILENBK0JPLEtBYW1CLEtBM0NpRCxHQTJFMUYsS0EzQ3FCLElBckJJLEVBMEJBLENBdUJKLENBM0NNLENBUzNCLFNBT0EsQ0FpQnNDLElBTnZCLEVBL0JmLEFBZ0RrQixHQXZCQyxHQW5CbkIsSUE0QkEsS0FlaUIsSUF2QmpCLFVBWXVDLEFBWXZDLHdCQTlEa0MsVUFtRGIsa0JBQ0EsRUFuRFUsZ0JBb0RYLFdBbkRTLE1BcUQ3QixtQkFwRDBCLHNCQUNPLDZCQUNJLCtCQUNyQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByaXNtaWMgPSByZXF1aXJlKCdwcmlzbWljLWphdmFzY3JpcHQnKTtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGFwaUVuZHBvaW50ID0gY29uZmlnLmFwaUVuZHBvaW50O1xuY29uc3QgYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4geyBcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4XCIgPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5KZW5uaSBXaGl0ZWhlYWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2xpZGVJbkxlZnRcIj5FZHVjYXRpb24vU29jaWFsIFdvcmsvUG9saWN5PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+QWxsIHRoaXMgY29udGVudCBpcyBnYXRoZXJlZCBvdmVyIHggeWVhcnMuLi48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvandSZXRpcmVzLmpwZWdcIiBhbHQ9XCJKZW5uaSBhdCByZXRpcmVtZW50IGNlbGVicmF0aW9uXCIgY2xhc3NOYW1lPVwiandJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+SGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJldmlld1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlc0ludHJvLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdEaXZcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvP3VpZD0ke2FydGljbGUudWlkfWB9IGFzPXtgL3Bvc3RzLyR7YXJ0aWNsZS51aWR9YH0gcGFzc0hyZWYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQXJ0aWNsZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaW5rSW1hZ2VcIiBzcmM9e2FydGljbGUuZGF0YS5pbWFnZTEudXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWwgPntgXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFpbkltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vc3RhdGljL25hdHVyZS1wbGFudC1sZWFmLWxlYXZlcy02NTgzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1iaWdGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDUlIDAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUlIDUlIDAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxNaWRGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuandJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tZGFya0dyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMjBweCAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOjQlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MC4ycHggMC4ycHggMC4ycHggMC4ycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDI1cHgsIDUwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjI4MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2OmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxcHggMXB4IDJweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50LHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0pXG4gICAgLnRoZW4oKGFwaSkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFtcbiAgICAgICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdhcnRpY2xlJykgLCAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgICBvcmRlcmluZ3MgOiAnW215LmFydGljbGUubGFzdF9wdWJsaWNhdGlvbl9kYXRlLCBteS5hcnRpY2xlLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUsXScgICAgICAgICBcbiAgICAgICAgICAgIH0pOyAvLyBBbiBlbXB0eSBxdWVyeSB3aWxsIHJldHVybiBhbGwgdGhlIGRvY3VtZW50c1xuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXJ0aWNsZXNJbnRybzpyZXMucmVzdWx0cy5zbGljZSgwLDMpLFxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
                    return _context.abrupt('return', {
                        articlesIntro: res.results.slice(0, 3)
                    });

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIkxheW91dCIsIkluZGV4IiwicHJvcHMiLCJhcnRpY2xlc0ludHJvIiwibWFwIiwiYXJ0aWNsZSIsImtleSIsInVpZCIsImRhdGEiLCJpbWFnZTEiLCJ1cmwiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0QXBpIiwidGhlbiIsImFwaSIsInF1ZXJ5IiwiUHJlZGljYXRlcyIsImF0Iiwib3JkZXJpbmdzIiwicmVzIiwicmVzdWx0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFZOzs7O0FBR25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQU5uQixJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7QUFDM0IsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjs7O0FBSzNCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQVUsQUFFckI7OzJCQUNRLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNBO0FBREE7QUFBQSx1QkFDQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxvQ0FBQSxjQUFBOzRDQUFBLEFBQWM7O3NCQUFkO3dCQUFBO0FBQUE7QUFBQSxPQUhKLEFBQ0EsQUFFSSxBQUVKLGtEQUFBLGNBQUE7NENBQUEsQUFBbUI7O3NCQUFuQjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esd0ZBQUssS0FBTCxBQUFTLDBCQUF5QixLQUFsQyxBQUFzQyx1RUFBdEMsQUFBa0Y7O3NCQUFsRjt3QkFGSixBQUVJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSSixBQUtBLEFBR0ksQUFFSixnc0JBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBRUs7QUFGTDtBQUFBLGFBRUssQUFBTSxjQUFOLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxLQUFNLEFBQ3JDOytCQUNnQixjQUFBLFNBQTRCLEtBQTVCLEFBQWlDLHlDQUFqQyxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLHVCQUFxQixRQUEzQixBQUFtQyxLQUFPLGdCQUFjLFFBQXhELEFBQWdFLEtBQU8sVUFBdkU7MEJBQUE7NEJBQUEsQUFDSTtBQURKOzJCQUNJLGNBQUEsT0FBNkIsTUFBN0IsQUFBa0MseUNBQWxDLEFBQWE7OzBCQUFiOzRCQUFBLEFBQ0k7QUFESjtrREFDK0IsS0FBSyxRQUFBLEFBQVEsS0FBUixBQUFhLE9BQTdDLEFBQW9ELHlDQUFwRCxBQUFlOzswQkFBZjs0QkFESixBQUNJLEFBQ0E7QUFEQTs0QkFDQSxjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxtQkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBTDNELEFBQ2dCLEFBQ0ksQUFDSSxBQUVJLEFBQWtDLEFBS2pFO0FBeEJULEFBQ0ksQUFVQSxBQUVLO2lCQWJUO2FBRFIsQUFDUSxBQXVIWDtBQXZIVztBQUhaOztBQTZIQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7bUNBQ0YsQUFBUSxPQUFSLEFBQWUsYUFBWSxFQUFFLGFBQTdCLEFBQTJCLEFBQWUsZUFBMUMsQUFDakIsS0FBSyxVQUFBLEFBQUM7bUNBQ0ksQUFBSSxNQUFNLENBQ2IsUUFBQSxBQUFRLFdBQVIsQUFBbUIsR0FBbkIsQUFBc0IsaUJBRG5CLEFBQVUsQUFDYixBQUF1QyxlQUNuQyxXQUhHLEFBQ1gsQUFBTyxBQUVILEFBQWdCO0FBQWhCLHlCQUZHLEVBREksQUFDWCxDQUdRLEFBQ1g7QUFQbUIsQUFDRixxQkFBQTs7cUJBQVo7QUFEYyxtQ0FBQTs7dUNBU0YsSUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLEdBVGhCLEFBUWIsQUFDVyxBQUFvQjtBQUQvQixBQUNIOztxQkFUZ0I7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBeEIsQUFhQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=