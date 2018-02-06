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

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _Meta = require('../components/Meta');

var _Meta2 = _interopRequireDefault(_Meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/components/Header.js';


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement('div', {
    className: 'jsx-903467787' + ' ' + 'header',
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
    className: 'jsx-903467787',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-903467787' + ' ' + 'pageTitle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Jenni W')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-903467787',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/articles', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-903467787',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Articles')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-903467787',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-903467787',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Contact')), _react2.default.createElement(_Search2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '903467787',
    css: 'a.jsx-903467787{text-decoration:none;color:#363C3C;}a.jsx-903467787:hover{color:#95a5a6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCcUIsQUFHaUMsQUFJUCxjQUNmLE9BSEQsY0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZVRpdGxlXCI+SmVubmkgVzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRpY2xlc1wiPlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFydGljbGVzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Db250YWN0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgY29sb3I6IzM2M0MzQ1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiM5NWE1YTY7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJTZWFyY2giLCJNZXRhIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNO2VBQU4sQUFBa0IsQUFDSDtBQURHLEFBQ2hCOztBQUdGLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTt5QkFDWCxjQUFBO3VDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNFO0FBREY7QUFBQSxzQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0k7QUFESjtBQUFBLHFCQUNJLGNBQUE7dUNBQUEsQUFBYzs7Z0JBQWQ7a0JBQUE7QUFBQTtBQUFBLEtBSFIsQUFFSSxBQUNJLEFBRUosNkJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsc0JBQVY7O2dCQUFBO2tCQUFBO0FBQUE7S0FOTixBQUtJLEFBQ0UsQUFFRiwwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSxzQkFBVjs7Z0JBQUE7a0JBQUE7QUFBQTtLQVROLEFBUUksQUFDRSxBQUVGLDhCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLHNCQUFWOztnQkFBQTtrQkFBQTtBQUFBO0tBWk4sQUFXSSxBQUNFLEFBRUYsMkJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsc0JBQVY7O2dCQUFBO2tCQUFBO0FBQUE7S0FmTixBQWNJLEFBQ0UsQUFFRiw2QkFBQSxBQUFDOztnQkFBRDtrQkFqQkosQUFpQkk7QUFBQTtBQUFBO2FBakJKO1NBRFcsQUFDWDtBQUFBO0FBREosQUErQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==