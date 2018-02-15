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
            lineNumber: 13
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Jenni Whitehead')), _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-514286856' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-514286856' + ' ' + 'slideInLeft',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'Education/Social Work/Policy')), _react2.default.createElement('section', {
        className: 'jsx-514286856' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: '/static/jwRetires.jpeg', alt: 'Jenni at retirement celebration', className: 'jsx-514286856' + ' ' + 'jwImage',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('div', {
        className: 'jsx-514286856' + ' ' + 'articleList',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement('section', {
        className: 'jsx-514286856' + ' ' + 'archiveTitle',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('h3', {
        className: 'jsx-514286856',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, 'Archive'), _react2.default.createElement('div', {
        className: 'jsx-514286856' + ' ' + 'marginBottom',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement(_link2.default, { href: '/articles', as: '/articles', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('a', { href: '#', className: 'jsx-514286856' + ' ' + 'linkToAllArticles',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, 'Go to all articles')))), _react2.default.createElement('section', {
        className: 'jsx-514286856' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-514286856' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 39
            }
        }, _react2.default.createElement(_link2.default, { href: '/posts/?uid=' + article.uid, as: '/posts/' + article.uid, passHref: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('a', { href: '#', className: 'jsx-514286856' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-514286856' + ' ' + 'linkImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 42
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-514286856',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }, article.data.articletitle[0].text))));
    })))), _react2.default.createElement(_style2.default, {
        styleId: '514286856',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.jwImage{display:block;margin-left:auto;margin-right:auto;border-radius:50%;}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 20px 15%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4%;}.archiveTitle{padding:0 15% 0px 15%;text-align:right;}.archiveTitle h3{font-family:var(--mainFont);font-size:var(--midSizeFont);}.articleList section h3{padding:0 15% 0px 15%;text-align:center;}.previewDiv{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;box-shadow:0.2px 0.2px 0.2px 0.2px;grid-auto-rows:minmax(25px,500px);border-radius:1px;text-align:center;min-height:280px;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);display:inline;max-width:30%;}.previewDiv a h3{font-size:var(--smallFont);}.previewDiv:hover{box-shadow:1px 1px 2px 1px;}.linkImage{padding-top:10px;width:300px;max-width:100%;}.linkToAllArticles{box-shadow:1px 1px 2px 1px;border-radius:1px;text-decoration:none;margin:0 5% 0 0%;padding:4px;}.linkToAllArticles:hover{box-shadow:1px 3px 4px 1px;}.linkToAllArticles:active{color:white;box-shadow:1px 0px 2px 1px;}.marginBottom{margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Eb0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSWIsQUFPYSxBQU1MLEFBTUQsQUFJTSxBQUlOLEFBSUosQUFTVyxBQU9GLEFBR0EsQUFHVixBQU1VLEFBT0EsQUFHZixBQUlPLFdBMUd0QixDQXVHOEIsQ0FwR1YsQ0ErQkMsR0FxRE4sRUFvQmYsQ0FoRkEsRUEwQm9CLEFBUUMsQ0FkSixJQWtDakIsQUFHQSxBQVNxQixBQU9yQixDQXJGNEIsQUFNSSxBQVNDLEFBV0gsQUFnQkUsQ0FpQkYsQUFjWixDQXBGSCxDQStCTyxLQWFtQixHQU16QyxBQWtEQSxDQTFDQSxDQXpEMEYsR0FxRjFGLENBSXdCLElBekRILElBckJJLEVBMEJBLENBaUNKLENBckRNLEFBb0MzQixDQTNCQSxRQWdFb0IsQ0F6RHBCLENBMkJzQyxJQWhCdkIsRUEvQmYsQUEwRGtCLEdBakNDLEdBbkJuQixHQXdFZSxDQTlDZixLQTJCaUIsSUFqQ2pCLEVBcURBLFFBL0J1QyxBQVl2Qyx3QkF4RWtDLFVBNkRiLGtCQUNBLEVBN0RVLGdCQThEWCxXQTdEUyxNQStEN0IsbUJBOUQwQixzQkFDTyw2QkFDSSwrQkFDckMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBhcGlFbmRwb2ludCA9IGNvbmZpZy5hcGlFbmRwb2ludDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gY29uZmlnLmFjY2Vzc1Rva2VuO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7IFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIiA+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5KZW5uaSBXaGl0ZWhlYWQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SmVubmkgV2hpdGVoZWFkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNsaWRlSW5MZWZ0XCI+RWR1Y2F0aW9uL1NvY2lhbCBXb3JrL1BvbGljeTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkFsbCB0aGlzIGNvbnRlbnQgaXMgZ2F0aGVyZWQgb3ZlciB4IHllYXJzLi4uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2p3UmV0aXJlcy5qcGVnXCIgYWx0PVwiSmVubmkgYXQgcmV0aXJlbWVudCBjZWxlYnJhdGlvblwiIGNsYXNzTmFtZT1cImp3SW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZUxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJjaGl2ZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QXJjaGl2ZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpbkJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hcnRpY2xlcyd9IGFzPXsnL2FydGljbGVzJ30gcGFzc0hyZWYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rVG9BbGxBcnRpY2xlc1wiIGhyZWY9XCIjXCI+R28gdG8gYWxsIGFydGljbGVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydGljbGVzSW50cm8ubWFwKChhcnRpY2xlLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3RGl2XCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8/dWlkPSR7YXJ0aWNsZS51aWR9YH0gYXM9e2AvcG9zdHMvJHthcnRpY2xlLnVpZH1gfSBwYXNzSHJlZiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQXJ0aWNsZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlua0ltYWdlXCIgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWwgPntgXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDo5OC45Mjc4NzEyNzc3NnZ3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYWluSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zdGF0aWMvbmF0dXJlLXBsYW50LWxlYWYtbGVhdmVzLTY1ODMuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8gaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLWJpZ0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSUgNSUgMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHJlZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLW1pZFNpemVGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNSUgNSUgMCUgMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHJlZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMCAxNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1zbWFsbE1pZEZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5qd0ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1kYXJrR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo4MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAyMHB4IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6NCU7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXJjaGl2ZVRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMHB4IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFyY2hpdmVUaXRsZSBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tbWlkU2l6ZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlTGlzdCBzZWN0aW9uIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxNSUgMHB4IDE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowLjJweCAwLjJweCAwLjJweCAwLjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjVweCwgNTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3RGl2IGEgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjFweCAxcHggMnB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGlua0ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtUb0FsbEFydGljbGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDFweCAycHggMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDUlIDAgMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGlua1RvQWxsQXJ0aWNsZXM6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzoxcHggM3B4IDRweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxpbmtUb0FsbEFydGljbGVzOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDBweCAycHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYXJnaW5Cb3R0b20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCx7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KVxuICAgIC50aGVuKChhcGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShbXG4gICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAnYXJ0aWNsZScpICwgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7ICAgb3JkZXJpbmdzIDogJ1tteS5hcnRpY2xlLmxhc3RfcHVibGljYXRpb25fZGF0ZSwgbXkuYXJ0aWNsZS5maXJzdF9wdWJsaWNhdGlvbl9kYXRlLF0nICAgICAgICAgXG4gICAgICAgICAgICB9KTsgLy8gQW4gZW1wdHkgcXVlcnkgd2lsbCByZXR1cm4gYWxsIHRoZSBkb2N1bWVudHNcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzSW50cm86cmVzLnJlc3VsdHMuc2xpY2UoMCwzKSxcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiY29uZmlnIiwiYXBpRW5kcG9pbnQiLCJhY2Nlc3NUb2tlbiIsImZldGNoIiwiTGluayIsIkxheW91dCIsIkhlYWQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJ1aWQiLCJkYXRhIiwiaW1hZ2UxIiwidXJsIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImdldEluaXRpYWxQcm9wcyIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsIlByZWRpY2F0ZXMiLCJhdCIsIm9yZGVyaW5ncyIsInJlcyIsInJlc3VsdHMiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUduQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7OztBQVBQLElBQUksVUFBSixBQUFJLEFBQVU7O0FBRWQsSUFBTSxjQUFjLGlCQUFwQixBQUEyQjtBQUMzQixJQUFNLGNBQWMsaUJBQXBCLEFBQTJCOzs7QUFNM0IsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBVSxBQUVyQjs7MkJBQ1EsY0FBQTsyQ0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZSLEFBQ0ksQUFDSSxBQUVKLHFDQUFBLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0E7QUFEQTtBQUFBLHVCQUNBLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLG9DQUFBLGNB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