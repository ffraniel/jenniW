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
        className: 'jsx-3330585068' + ' ' + 'index',
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
        className: 'jsx-3330585068',
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
        className: 'jsx-3330585068' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-3330585068',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-3330585068' + ' ' + 'slideInLeft',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Safeguarding in Education')), _react2.default.createElement('section', {
        className: 'jsx-3330585068' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-3330585068',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: '/static/jwRetires.jpeg', alt: 'Jenni at retirement celebration', className: 'jsx-3330585068' + ' ' + 'jwImage',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-3330585068',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('div', {
        className: 'jsx-3330585068' + ' ' + 'articleList',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('section', {
        className: 'jsx-3330585068' + ' ' + 'archiveTitle',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement('h3', {
        className: 'jsx-3330585068',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, 'Archive'), _react2.default.createElement('div', {
        className: 'jsx-3330585068' + ' ' + 'marginBottom',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement(_link2.default, { href: '/articles', as: '/articles', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('a', { href: '#', className: 'jsx-3330585068' + ' ' + 'linkToAllArticles',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Go to all articles')))), _react2.default.createElement('section', {
        className: 'jsx-3330585068' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-3330585068' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 38
            }
        }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
            }
        }, _react2.default.createElement('a', { href: '#', className: 'jsx-3330585068' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, article.data.image1.url && _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-3330585068' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }), !article.data.image1.url && _react2.default.createElement('img', { src: '../static/image4.jpeg', className: 'jsx-3330585068' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 42
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-3330585068',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }, article.data.articletitle[0].text))));
    })))), _react2.default.createElement(_style2.default, {
        styleId: '3330585068',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);-webkit-animation:fadeIn 2s;animation:fadeIn 2s;-webkit-animation:fadeIn 2s;}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;position:relative;-webkit-animation:slider 2.5s;-webkit-animation:slider 2.5s;animation:slider 2.5s;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.intro>*{-webkit-animation:slider 3s;animation:slider 3s;-webkit-animation:slider 3s;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.archiveTitle{padding:0 15% 0px 15%;text-align:right;}.archiveTitle h3{font-family:var(--mainFont);font-size:var(--midSizeFont);}.articleList section h3{padding:0 15% 0px 15%;text-align:center;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:100%;max-height:180px;}.linkToAllArticles{box-shadow:1px 1px 2px 1px;border-radius:1px;text-decoration:none;margin:0 5% 0 0%;padding:4px;}.linkToAllArticles:hover{box-shadow:1px 3px 4px 1px;}.linkToAllArticles:active{color:white;box-shadow:1px 0px 2px 1px;}.marginBottom{margin-bottom:15px;}.slideInLeft{position:relative;-webkit-animation:mymove 5s infinite;-webkit-animation:slider 2.8s;animation:slider 2.8s;}@-webkit-keyframes slider{0%{left:-80px;opacity:0;}100%{left:0px;opacity:1;}}@keyframes slider{0%{left:-80px;opacity:0;}100%{left:0px;opacity:1;}}@-webkit-keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Eb0MsQUFNbUMsQUFHRSxBQWNlLEFBU0EsQUFNUixBQUdRLEFBSWIsQUFNYSxBQU1QLEFBSUUsQUFNRCxBQUlNLEFBSU4sQUFJSixBQVNXLEFBT0YsQUFHQSxBQUdWLEFBT1UsQUFPQSxBQUdmLEFBSU8sQUFHQSxBQU1ILEFBSUYsQUFNQSxBQUdBLFNBUkEsQ0FNYixBQUdBLENBMUlKLEFBNkhpQixDQWJhLENBN0dWLENBb0NDLEdBd0ROLENBd0IwQixDQUh6QyxBQWNJLENBbEdKLENBOEZJLENBakVnQixBQVFDLENBZEosSUFrQ2pCLEFBR0EsQUFVcUIsQUFPckIsQ0E1RjRCLEFBU0ksQUFTQyxBQVVILEFBb0JFLENBaUJGLEFBY1osQ0E1RkgsQ0FvQ08sS0FnQm1CLEdBTXpDLEFBbURBLENBM0NBLENBakUwRixHQTRGdEUsQ0FNSSxHQXBEUSxDQVRoQyxJQXhCeUIsRUE0QkEsQUEwRUUsQ0FyQ04sQ0F4RE0sQUF1QzNCLENBOUJBLEdBK0RBLEtBS29CLEVBL0JrQixJQWhCdkIsRUFyQ08sQUFnRUosRUFoQ2xCLENBTG1CLEdBbEJuQixHQTRFZSxDQS9DZixLQTJCaUIsR0FoRWlCLENBMkJsQyxFQTBEQSxRQWhDdUMsQUFZdkMsSUFtQ0EsZUFuRzBCLEtBaEJRLFVBcUViLGtCQUNBLEVBckVVLGdCQXNFWCxDQXREcEIsVUFmNkIsTUF1RTdCLG1CQXRFMEIsc0JBQ08sNkJBQ0ksK0JBQ2IsZ0RBQ1EsNEJBQ2hDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuY29uc3QgYXBpRW5kcG9pbnQgPSBjb25maWcuYXBpRW5kcG9pbnQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IGNvbmZpZy5hY2Nlc3NUb2tlbjtcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4geyBcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SmVubmkgV2hpdGVoZWFkPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkplbm5pIFdoaXRlaGVhZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbGlkZUluTGVmdFwiPlNhZmVndWFyZGluZyBpbiBFZHVjYXRpb248L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BbGwgdGhpcyBjb250ZW50IGlzIGdhdGhlcmVkIG92ZXIgeCB5ZWFycy4uLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9qd1JldGlyZXMuanBlZ1wiIGFsdD1cIkplbm5pIGF0IHJldGlyZW1lbnQgY2VsZWJyYXRpb25cIiBjbGFzc05hbWU9XCJqd0ltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFyY2hpdmVUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFyY2hpdmU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYXJ0aWNsZXMnfSBhcz17Jy9hcnRpY2xlcyd9IHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQWxsQXJ0aWNsZXNcIiBocmVmPVwiI1wiPkdvIHRvIGFsbCBhcnRpY2xlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlc0ludHJvLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0RpdlwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvP3VpZD0ke2FydGljbGUudWlkfWB9IGFzPXtgL3Bvc3RzLyR7YXJ0aWNsZS51aWR9YH0gcGFzc0hyZWYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kYXRhLmltYWdlMS51cmwgJiYgPGltZyBjbGFzc05hbWU9XCJsaW5rSW1hZ2VcIiBzcmM9e2FydGljbGUuZGF0YS5pbWFnZTEudXJsfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFhcnRpY2xlLmRhdGEuaW1hZ2UxLnVybCAmJiA8aW1nIGNsYXNzTmFtZT1cImxpbmtJbWFnZVwiIHNyYz1cIi4uL3N0YXRpYy9pbWFnZTQuanBlZ1wiIC8+ICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID57YFxuICAgICAgICAgICAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6OTguOTI3ODcxMjc3NzZ2dztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFpbkltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vc3RhdGljL25hdHVyZS1wbGFudC1sZWFmLWxlYXZlcy02NTgzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDJzOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tYmlnRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZXIgMi41czsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNsaWRlciAyLjVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUlIDUlIDAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxNaWRGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuandJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWRhcmtHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gPiAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVyIDNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlciAzczsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAyMHB4IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6NCU7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXJjaGl2ZVRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMHB4IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFyY2hpdmVUaXRsZSBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tbWlkU2l6ZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlTGlzdCBzZWN0aW9uIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMHB4IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowLjJweCAwLjJweCAwLjJweCAwLjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjVweCwgNTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IGEgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjFweCAxcHggMnB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGlua0ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDoxODBweDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rVG9BbGxBcnRpY2xlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjFweCAxcHggMnB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA1JSAwIDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtUb0FsbEFydGljbGVzOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDNweCA0cHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rVG9BbGxBcnRpY2xlczphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjFweCAwcHggMnB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFyZ2luQm90dG9tIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2xpZGVJbkxlZnQgeyAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbXltb3ZlIDVzIGluZmluaXRlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVyIDIuOHMgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC04MHB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KVxuICAgIC50aGVuKChhcGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShbIFByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdhcnRpY2xlJyldLFxuICAgICAgICAgICAgeyBvcmRlcmluZ3MgOiAnW215LmFydGljbGUubGFzdF9wdWJsaWNhdGlvbl9kYXRlLCBteS5hcnRpY2xlLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUsXScgfSk7IFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXJ0aWNsZXNJbnRybzpyZXMucmVzdWx0c1xuICAgICAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIkxheW91dCIsIkhlYWQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiaW1hZ2UxIiwidXJsIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImdldEluaXRpYWxQcm9wcyIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsIlByZWRpY2F0ZXMiLCJhdCIsIm9yZGVyaW5ncyIsInJlcyIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7QUFQUCxJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQU0sY0FBYyxpQkFBcEIsQUFBMkI7QUFDM0IsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjs7O0FBTTNCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQVUsQUFDckI7MkJBQ1EsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZSLEFBQ0ksQUFDSSxBQUVKLHFDQUFBLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0E7QUFEQTtBQUFBLHVCQUNBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLG9DQUFBLGNBQUE7NENBQUEs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