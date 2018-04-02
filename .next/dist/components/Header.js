'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _SearchBox = require('./SearchBox');

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _Meta = require('../components/Meta');

var _Meta2 = _interopRequireDefault(_Meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/components/Header.js';


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement('header', {
    className: 'jsx-4138335258' + ' ' + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Meta2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('div', {
    className: 'jsx-4138335258' + ' ' + 'topBar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-4138335258' + ' ' + 'pageTitle topBlock',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('span', {
    className: 'jsx-4138335258' + ' ' + 'titleBackground',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Jenni W')), _react2.default.createElement('nav', {
    className: 'jsx-4138335258' + ' ' + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-4138335258' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/articles', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-4138335258' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Articles')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-4138335258' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-4138335258' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Contact'))), _react2.default.createElement(_SearchBox2.default, { className: 'topBlock', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '4138335258',
    css: '.header.jsx-4138335258{background-color:var(--lightGrey);overflow:hidden;position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:0px;border-bottom:solid var(--darkGrey) 0.5px;width:100%;}.pageTitle.jsx-4138335258{font-family:var(--titleFont);font-size:1.5rem;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;}.topBlock.jsx-4138335258{display:inline;padding:0 20px;}.sideBorder.jsx-4138335258{border-left:solid black 1px;}.topBar.jsx-4138335258{display:block;position:relative;padding:20px 0;}.links.jsx-4138335258{display:inline;}a.jsx-4138335258{text-decoration:none;color:var(--darkGrey);font-family:var(--thickFont);}a.jsx-4138335258:hover{color:black;}a.jsx-4138335258:active{color:white;background-color:var(--darkGrey);border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCcUIsQUFHOEMsQUFTTCxBQU1kLEFBS2MsQUFHZixBQU9DLEFBR00sQUFNVCxBQUdBLFlBRmIsQUFHa0MsRUFuQmYsQ0FSSCxBQWVoQixNQUd1QixPQWJ2QixDQVhrQixDQVFsQixFQU9pQixFQXhCQyxTQWtDWSxFQVNWLENBakNBLENBZ0JwQixHQXpCa0IsYUEyQ2xCLFNBUkEsa0JBbEMwQix3QkFDakIsUUFDa0MsaUJBUTNDLHlCQVBZLFdBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4vU2VhcmNoQm94JztcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8TWV0YSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcEJhclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlVGl0bGUgdG9wQmxvY2tcIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZUJhY2tncm91bmRcIj5KZW5uaSBXPC9zcGFuPjwvaDE+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0gY2xhc3NOYW1lPVwidG9wQmxvY2sgc2lkZUJvcmRlclwiPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGljbGVzXCI+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9IGNsYXNzTmFtZT1cInRvcEJsb2NrIHNpZGVCb3JkZXJcIj5BcnRpY2xlczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0gY2xhc3NOYW1lPVwidG9wQmxvY2sgc2lkZUJvcmRlclwiPkFib3V0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9IGNsYXNzTmFtZT1cInRvcEJsb2NrIHNpZGVCb3JkZXJcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxTZWFyY2hCb3ggY2xhc3NOYW1lPVwidG9wQmxvY2tcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4ID57YCAgICAgICAgIFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodEdyZXkpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206c29saWQgdmFyKC0tZGFya0dyZXkpIDAuNXB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2VUaXRsZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aXRsZUZvbnQpO1xuICAgICAgICAgICAgZm9udC1zaXplOjEuNXJlbTs7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzo1cHg7XG4gICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDAuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wQmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XG4gICAgICAgICAgICBwYWRkaW5nOjAgMjBweDtcbiAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMC41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaWRlQm9yZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBibGFjayAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3BCYXIge1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHdoaXRlIDAuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHdoaXRlIDAuNXB4O1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICBjb2xvcjp2YXIoLS1kYXJrR3JleSk7IFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCB3aGl0ZSAwLjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjpibGFjazsgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrR3JleSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJTZWFyY2hCb3giLCJNZXRhIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNO2VBQU4sQUFBa0IsQUFDSDtBQURHLEFBQ2hCOztBQUdGLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTt5QkFDWCxjQUFBO3dDQUFBLEFBQWtCOztnQkFBbEI7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0U7QUFERjtBQUFBLHNCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQSxBQUFtQztBQUFuQztBQUFBLHFCQUFtQyxjQUFBO3dDQUFBLEFBQWdCOztnQkFBaEI7a0JBQUE7QUFBQTtBQUFBLEtBRHJDLEFBQ0UsQUFBbUMsQUFDbkMsNkJBQUEsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRiwwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FMSixBQUlFLEFBQ0UsQUFFRiw4QkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FSSixBQU9FLEFBQ0UsQUFFRiwyQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FiTixBQUVFLEFBVUUsQUFDRSxBQUdKLDhCQUFBLEFBQUMscUNBQVUsV0FBWCxBQUFxQjtnQkFBckI7a0JBbEJOLEFBRUksQUFnQkU7QUFBQTs7YUFsQk47U0FEVyxBQUNYO0FBQUE7QUFESixBQXlFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9