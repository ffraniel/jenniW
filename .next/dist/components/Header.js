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
    className: 'jsx-2965228902' + ' ' + 'header',
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
    className: 'jsx-2965228902' + ' ' + 'topBar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-2965228902' + ' ' + 'pageTitle topBlock',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('span', {
    className: 'jsx-2965228902' + ' ' + 'titleBackground',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Jenni W')), _react2.default.createElement('nav', {
    className: 'jsx-2965228902' + ' ' + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-2965228902' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/articles', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-2965228902' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Articles')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-2965228902' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { style: linkStyle, className: 'jsx-2965228902' + ' ' + 'topBlock sideBorder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Contact'))), _react2.default.createElement(_SearchBox2.default, { className: 'topBlock', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '2965228902',
    css: '.pageTitle.jsx-2965228902{font-family:var(--titleFont);font-size:1.5rem;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;}.topBlock.jsx-2965228902{display:inline;padding:0 20px;}.sideBorder.jsx-2965228902{border-left:solid black 1px;}.topBar.jsx-2965228902{display:block;position:relative;padding:20px 0;}.links.jsx-2965228902{display:inline;}a.jsx-2965228902{text-decoration:none;color:var(--darkGrey);font-family:var(--thickFont);}a.jsx-2965228902:hover{color:black;}a.jsx-2965228902:active{color:white;background-color:var(--lightGreen);border-radius:4px;}.header.jsx-2965228902{background-color:var(--darkGreen);overflow:hidden;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCcUIsQUFHeUMsQUFNZCxBQUtjLEFBR2YsQUFPQyxBQUdNLEFBTVQsQUFHQSxBQUtzQixZQVBuQyxBQUdvQyxFQW5CakIsQ0FSSCxBQWVoQixNQUd1QixPQWJ2QixDQVhrQixDQVFsQixFQU9pQixFQXVCQyxTQWJZLEdBeEJWLENBZ0JwQixBQWlCb0IsR0FLRCxlQUpuQixHQU1BLElBZEEsbUVBeEJBIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuL1NlYXJjaEJveCc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPE1ldGEgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BCYXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZVRpdGxlIHRvcEJsb2NrXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVCYWNrZ3JvdW5kXCI+SmVubmkgVzwvc3Bhbj48L2gxPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9IGNsYXNzTmFtZT1cInRvcEJsb2NrIHNpZGVCb3JkZXJcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRpY2xlc1wiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfSBjbGFzc05hbWU9XCJ0b3BCbG9jayBzaWRlQm9yZGVyXCI+QXJ0aWNsZXM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9IGNsYXNzTmFtZT1cInRvcEJsb2NrIHNpZGVCb3JkZXJcIj5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfSBjbGFzc05hbWU9XCJ0b3BCbG9jayBzaWRlQm9yZGVyXCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8U2VhcmNoQm94IGNsYXNzTmFtZT1cInRvcEJsb2NrXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgICAucGFnZVRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRpdGxlRm9udCk7XG4gICAgICAgICAgICBmb250LXNpemU6MS41cmVtOztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjVweDtcbiAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCByZWQgMC41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3BCbG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICAgIHBhZGRpbmc6MCAyMHB4O1xuICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHJlZCAwLjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNpZGVCb3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcEJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAvLyBib3JkZXI6c29saWQgd2hpdGUgMC41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAvLyBib3JkZXI6c29saWQgd2hpdGUgMC41cHg7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgIGNvbG9yOnZhcigtLWRhcmtHcmV5KTsgXG4gICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgLy8gYm9yZGVyOnNvbGlkIHdoaXRlIDAuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrOyAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgYTphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxpZ2h0R3JlZW4pO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZGFya0dyZWVuKTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAvLyBib3JkZXI6cmVkIHNvbGlkIDFweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJTZWFyY2hCb3giLCJNZXRhIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNO2VBQU4sQUFBa0IsQUFDSDtBQURHLEFBQ2hCOztBQUdGLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTt5QkFDWCxjQUFBO3dDQUFBLEFBQWtCOztnQkFBbEI7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0U7QUFERjtBQUFBLHNCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQSxBQUFtQztBQUFuQztBQUFBLHFCQUFtQyxjQUFBO3dDQUFBLEFBQWdCOztnQkFBaEI7a0JBQUE7QUFBQTtBQUFBLEtBRHJDLEFBQ0UsQUFBbUMsQUFDbkMsNkJBQUEsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRiwwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FMSixBQUlFLEFBQ0UsQUFFRiw4QkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FSSixBQU9FLEFBQ0UsQUFFRiwyQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSwrQ0FBVixBQUErQjs7Z0JBQS9CO2tCQUFBO0FBQUE7S0FiTixBQUVFLEFBVUUsQUFDRSxBQUdKLDhCQUFBLEFBQUMscUNBQVUsV0FBWCxBQUFxQjtnQkFBckI7a0JBbEJOLEFBRUksQUFnQkU7QUFBQTs7YUFsQk47U0FEVyxBQUNYO0FBQUE7QUFESixBQXNFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9