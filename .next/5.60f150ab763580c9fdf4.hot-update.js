webpackHotUpdate(5,{

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _ArticleText = __webpack_require__(399);

var _ArticleText2 = _interopRequireDefault(_ArticleText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/Articles.js';

var Articles = function Articles(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, props.articles.results.map(function (article) {
        return _react2.default.createElement('article', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        }, _react2.default.createElement('h1', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        }, article.data.articletitle[0].text), _react2.default.createElement('img', { src: article.data.image1.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }), _react2.default.createElement(_ArticleText2.default, { articleText: article.data.mainarticle, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }));
    }));
};

exports.default = Articles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FydGljbGVzLmpzIl0sIm5hbWVzIjpbIkFydGljbGVUZXh0IiwiQXJ0aWNsZXMiLCJwcm9wcyIsImFydGljbGVzIiwicmVzdWx0cyIsIm1hcCIsImFydGljbGUiLCJkYXRhIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImltYWdlMSIsInVybCIsIm1haW5hcnRpY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7Ozs7Ozs7QUFDeEIsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDsyQkFDTCxjQUFBOztzQkFBQTt3QkFBQSxBQUNLO0FBREw7QUFBQSxLQUFBLFFBQ0ssQUFBTSxTQUFOLEFBQWUsUUFBZixBQUF1QixJQUFJLFVBQUEsQUFBQyxTQUFVLEFBQ25DOytCQUNJLGNBQUE7OzBCQUFBOzRCQUFBLEFBQ0k7QUFESjtBQUFBLFNBQUEsa0JBQ0ksY0FBQTs7MEJBQUE7NEJBQUEsQUFBSztBQUFMO0FBQUEsbUJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQURuQyxBQUNJLEFBQWtDLEFBRWxDLDhDQUFLLEtBQUssUUFBQSxBQUFRLEtBQVIsQUFBYSxPQUF2QixBQUE4QjswQkFBOUI7NEJBSEosQUFHSSxBQUNBO0FBREE7NEJBQ0EsQUFBQyx1Q0FBWSxhQUFhLFFBQUEsQUFBUSxLQUFsQyxBQUF1QzswQkFBdkM7NEJBTFIsQUFDSSxBQUlJLEFBR1g7QUFIVzs7QUFSWCxBQUNMLEFBQ0s7QUFGakIsQUFlQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcnRpY2xlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/francis/Code/JenniW/pages/Articles.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/francis/Code/JenniW/pages/Articles.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Articles")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42MGYxNTBhYjc2MzU4MGM5ZmRmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXJ0aWNsZXMuanM/YWM0NTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZVRleHQgZnJvbSAnLi9BcnRpY2xlVGV4dC5qcyc7XG5jb25zdCBBcnRpY2xlcyA9IChwcm9wcykgPT4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuYXJ0aWNsZXMucmVzdWx0cy5tYXAoKGFydGljbGUpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1gJHthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH1gIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVUZXh0IGFydGljbGVUZXh0PXthcnRpY2xlLmRhdGEubWFpbmFydGljbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQXJ0aWNsZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7O0FBTkE7QUFhQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==