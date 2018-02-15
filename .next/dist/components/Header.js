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
    className: 'jsx-803566798' + ' ' + 'header',
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
    className: 'jsx-803566798',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-803566798' + ' ' + 'pageTitle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Jenni W')), _react2.default.createElement('nav', {
    className: 'jsx-803566798' + ' ' + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-803566798',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/articles', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-803566798',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Articles')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-803566798',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-803566798',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Contact'))), _react2.default.createElement(_SearchBox2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '803566798',
    css: '.pageTitle.jsx-803566798{font-family:var(--mainFont);font-style:italic;font-size:var(--midSizeFont);padding-left:1%;padding-top:25px;}.links.jsx-803566798{padding-bottom:6px;padding-left:6px;}a.jsx-803566798{text-decoration:none;color:var(--darkGrey);font-family:var(--thickFont);}a.jsx-803566798:hover{color:black;}.header.jsx-803566798{background-color:var(--darkGreen);overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCcUIsQUFHd0MsQUFPVCxBQUlFLEFBS1QsQUFHc0IsWUFGbkMsT0FUa0IsRUFJSyxPQVhKLE1BbUJELEVBWGxCLE9BS0QsR0FaK0IsSUFvQjlCLHNCQVJBLEdBWGlCLGdCQUNDLGlCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi9TZWFyY2hCb3gnO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZVRpdGxlXCI+SmVubmkgVzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFydGljbGVzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Db250YWN0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxTZWFyY2hCb3ggLz5cbiAgICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgICAucGFnZVRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLW1haW5Gb250KTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6aXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLW1pZFNpemVGb250KTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgY29sb3I6dmFyKC0tZGFya0dyZXkpOyBcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udClcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjpibGFjazsgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrR3JlZW4pO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAvLyBib3JkZXI6cmVkIHNvbGlkIDFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJTZWFyY2hCb3giLCJNZXRhIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNO2VBQU4sQUFBa0IsQUFDSDtBQURHLEFBQ2hCOztBQUdGLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTt5QkFDWCxjQUFBO3VDQUFBLEFBQWtCOztnQkFBbEI7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0U7QUFERjtBQUFBLHNCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDSTtBQURKO0FBQUEscUJBQ0ksY0FBQTt1Q0FBQSxBQUFjOztnQkFBZDtrQkFBQTtBQUFBO0FBQUEsS0FIUixBQUVJLEFBQ0ksQUFFSiw2QkFBQSxjQUFBO3VDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLHNCQUFWOztnQkFBQTtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUYsMEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsc0JBQVY7O2dCQUFBO2tCQUFBO0FBQUE7S0FMSixBQUlFLEFBQ0UsQUFFRiw4QkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxzQkFBVjs7Z0JBQUE7a0JBQUE7QUFBQTtLQVJKLEFBT0UsQUFDRSxBQUVGLDJCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLHNCQUFWOztnQkFBQTtrQkFBQTtBQUFBO0tBaEJSLEFBS0ksQUFVRSxBQUNFLEFBR0osOEJBQUEsQUFBQzs7Z0JBQUQ7a0JBbkJKLEFBbUJJO0FBQUE7QUFBQTthQW5CSjtTQURXLEFBQ1g7QUFBQTtBQURKLEFBbURBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=