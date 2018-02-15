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
        className: 'jsx-514286856' + ' ' + 'index',
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
        className: 'jsx-514286856',
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
        className: 'jsx-514286856' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-514286856' + ' ' + 'slideInLeft',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Education/Social Work/Policy')), _react2.default.createElement('section', {
        className: 'jsx-514286856' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: '/static/jwRetires.jpeg', alt: 'Jenni at retirement celebration', className: 'jsx-514286856' + ' ' + 'jwImage',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('div', {
        className: 'jsx-514286856' + ' ' + 'articleList',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('section', {
        className: 'jsx-514286856' + ' ' + 'archiveTitle',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement('h3', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, 'Archive'), _react2.default.createElement('div', {
        className: 'jsx-514286856' + ' ' + 'marginBottom',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement(_link2.default, { href: '/articles', as: '/articles', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('a', { href: '#', className: 'jsx-514286856' + ' ' + 'linkToAllArticles',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'Go to all articles')))), _react2.default.createElement('section', {
        className: 'jsx-514286856' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-514286856' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 38
            }
        }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
            }
        }, _react2.default.createElement('a', { href: '#', className: 'jsx-514286856' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-514286856' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-514286856',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 42
            }
        }, article.data.articletitle[0].text))));
    })))), _react2.default.createElement(_style2.default, {
        styleId: '514286856',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.archiveTitle{padding:0 15% 0px 15%;text-align:right;}.archiveTitle h3{font-family:var(--mainFont);font-size:var(--midSizeFont);}.articleList section h3{padding:0 15% 0px 15%;text-align:center;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:100%;}.linkToAllArticles{box-shadow:1px 1px 2px 1px;border-radius:1px;text-decoration:none;margin:0 5% 0 0%;padding:4px;}.linkToAllArticles:hover{box-shadow:1px 3px 4px 1px;}.linkToAllArticles:active{color:white;box-shadow:1px 0px 2px 1px;}.marginBottom{margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEb0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1MLEFBTUQsQUFJTSxBQUlOLEFBSUosQUFTVyxBQU9GLEFBR0EsQUFHVixBQU1VLEFBT0EsQUFHZixBQUlPLFdBMUd0QixDQXVHOEIsQ0FwR1YsQ0ErQkMsR0FxRE4sRUFvQmYsQ0FoRkEsRUEwQm9CLEFBUUMsQ0FkSixJQWtDakIsQUFHQSxBQVNxQixBQU9yQixDQXJGNEIsQUFNSSxBQVNDLEFBV0gsQUFnQkUsQ0FpQkYsQUFjWixDQXBGSCxDQStCTyxLQWFtQixHQU16QyxBQWtEQSxDQTFDQSxDQXpEMEYsR0FxRjFGLENBSXdCLElBekRILElBckJJLEVBMEJBLENBaUNKLENBckRNLEFBb0MzQixDQTNCQSxRQWdFb0IsQ0F6RHBCLENBMkJzQyxJQWhCdkIsRUEvQmYsQUEwRGtCLEdBakNDLEdBbkJuQixHQXdFZSxDQTlDZixLQTJCaUIsSUFqQ2pCLEVBcURBLFFBL0J1QyxBQVl2Qyx3QkF4RWtDLFVBNkRiLGtCQUNBLEVBN0RVLGdCQThEWCxXQTdEUyxNQStEN0IsbUJBOUQwQixzQkFDTyw2QkFDSSwrQkFDckMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBhcGlFbmRwb2ludCA9IGNvbmZpZy5hcGlFbmRwb2ludDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gY29uZmlnLmFjY2Vzc1Rva2VuO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7IFxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4XCIgPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SmVubmkgV2hpdGVoZWFkPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkplbm5pIFdoaXRlaGVhZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbGlkZUluTGVmdFwiPkVkdWNhdGlvbi9Tb2NpYWwgV29yay9Qb2xpY3k8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BbGwgdGhpcyBjb250ZW50IGlzIGdhdGhlcmVkIG92ZXIgeCB5ZWFycy4uLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9qd1JldGlyZXMuanBlZ1wiIGFsdD1cIkplbm5pIGF0IHJldGlyZW1lbnQgY2VsZWJyYXRpb25cIiBjbGFzc05hbWU9XCJqd0ltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFyY2hpdmVUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFyY2hpdmU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5Cb3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYXJ0aWNsZXMnfSBhcz17Jy9hcnRpY2xlcyd9IHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQWxsQXJ0aWNsZXNcIiBocmVmPVwiI1wiPkdvIHRvIGFsbCBhcnRpY2xlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlc0ludHJvLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0RpdlwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvP3VpZD0ke2FydGljbGUudWlkfWB9IGFzPXtgL3Bvc3RzLyR7YXJ0aWNsZS51aWR9YH0gcGFzc0hyZWYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtUb0FydGljbGVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpbmtJbWFnZVwiIHNyYz17YXJ0aWNsZS5kYXRhLmltYWdlMS51cmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID57YFxuICAgICAgICAgICAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6OTguOTI3ODcxMjc3NzZ2dztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFpbkltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vc3RhdGljL25hdHVyZS1wbGFudC1sZWFmLWxlYXZlcy02NTgzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1iaWdGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDUlIDAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUlIDUlIDAlIDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDAgMTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxNaWRGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuandJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tZGFya0dyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMjBweCAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOjQlOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFyY2hpdmVUaXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDBweCAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcmNoaXZlVGl0bGUgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLW1pZFNpemVGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZUxpc3Qgc2VjdGlvbiBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTUlIDBweCAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MC4ycHggMC4ycHggMC4ycHggMC4ycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDI1cHgsIDUwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjI4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2OmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxcHggMXB4IDJweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rVG9BbGxBcnRpY2xlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjFweCAxcHggMnB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA1JSAwIDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtUb0FsbEFydGljbGVzOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDNweCA0cHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5saW5rVG9BbGxBcnRpY2xlczphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjFweCAwcHggMnB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFyZ2luQm90dG9tIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50LHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0pXG4gICAgLnRoZW4oKGFwaSkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpLnF1ZXJ5KFsgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ2FydGljbGUnKV0sXG4gICAgICAgICAgICB7IG9yZGVyaW5ncyA6ICdbbXkuYXJ0aWNsZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGUsIG15LmFydGljbGUuZmlyc3RfcHVibGljYXRpb25fZGF0ZSxdJyB9KTsgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcnRpY2xlc0ludHJvOnJlcy5yZXN1bHRzLnNsaWNlKDAsMylcbiAgICAgICAgfSAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIkxheW91dCIsIkhlYWQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiaW1hZ2UxIiwidXJsIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImdldEluaXRpYWxQcm9wcyIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsIlByZWRpY2F0ZXMiLCJhdCIsIm9yZGVyaW5ncyIsInJlcyIsInJlc3VsdHMiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7OztBQVBQLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7QUFNM0IsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBVSxBQUNyQjsyQkFDUSxjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRlIsQUFDSSxBQUNJLEFBRUoscUNBQUEsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQTsyQ0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esb0NBQUEsY0FB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