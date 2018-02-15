webpackHotUpdate(7,{

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/components/ArticleText.js";

var ArticleText = function ArticleText(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, props.articleText.map(function (words, key) {
        if (words.type === "list-item") {
            return _react2.default.createElement("p", { className: "list", key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }), _react2.default.createElement("span", { style: { paddingLeft: 45 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }), " - ", words.text);
        }
        if (words.type === "heading3") {
            return _react2.default.createElement("h3", { className: "textHeading", key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, words.text);
        }
        if (words.type === "heading2") {
            return _react2.default.createElement("h2", { className: "textHeading", key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, words.text);
        }
        if (words.type === "paragraph" && key === 0) {
            return _react2.default.createElement("p", { className: "text", key: key, style: { fontStyle: "italic", fontFamily: "var(--mainFont)", fontWeight: "800", fontSize: "var(--smallMidFont)" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, words.text);
        }
        if (words.type === "paragraph") {
            return _react2.default.createElement("p", { className: "text", key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, words.text);
        } else {
            return _react2.default.createElement("p", { className: "text", key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, words.text);
        }
    }));
};

exports.default = ArticleText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZVRleHQuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJwcm9wcyIsImFydGljbGVUZXh0IiwibWFwIiwid29yZHMiLCJrZXkiLCJ0eXBlIiwicGFkZGluZ0xlZnQiLCJ0ZXh0IiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFEOzJCQUNoQixjQUFBOztzQkFBQTt3QkFBQSxBQUNLO0FBREw7QUFBQSxLQUFBLFFBQ0ssQUFBTSxZQUFOLEFBQWtCLElBQUksVUFBQSxBQUFDLE9BQUQsQUFBUSxLQUFNLEFBQ2pDO1lBQUcsTUFBQSxBQUFNLFNBQVQsQUFBa0IsYUFBYSxBQUMzQjttQ0FFSSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sS0FBcEIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQThCO0FBQTlCO2FBQUE7OzhCQUE4QjtnQ0FBOUIsQUFBOEIsQUFBTTtBQUFOO0FBQUEsd0RBQVksT0FBTyxFQUFDLGFBQWQsQUFBYSxBQUFjOzhCQUEzQjtnQ0FBcEMsQUFBb0M7QUFBQTtnQkFBMkMsYUFGbkYsQUFFSSxBQUFxRixBQUU1RjtBQUNEO1lBQUcsTUFBQSxBQUFNLFNBQVQsQUFBa0IsWUFBWSxBQUMxQjttQ0FDSSxjQUFBLFFBQUksV0FBSixBQUFjLGVBQWMsS0FBNUIsQUFBaUM7OEJBQWpDO2dDQUFBLEFBQXVDO0FBQXZDO2FBQUEsUUFESixBQUNJLEFBQTZDLEFBRXBEO0FBQ0Q7WUFBRyxNQUFBLEFBQU0sU0FBVCxBQUFrQixZQUFZLEFBQzFCO21DQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWMsZUFBYyxLQUE1QixBQUFpQzs4QkFBakM7Z0NBQUEsQUFBdUM7QUFBdkM7YUFBQSxRQURKLEFBQ0ksQUFBNkMsQUFFcEQ7QUFDRDtZQUFHLE1BQUEsQUFBTSxTQUFOLEFBQWUsZUFBZSxRQUFqQyxBQUF5QyxHQUFHLEFBQ3hDO21DQUNJLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxLQUFwQixBQUF5QixLQUFLLE9BQU8sRUFBQyxXQUFELEFBQVksVUFBVSxZQUF0QixBQUFpQyxtQkFBbUIsWUFBcEQsQUFBK0QsT0FBTyxVQUEzRyxBQUFxQyxBQUErRTs4QkFBcEg7Z0NBQUEsQUFBNkk7QUFBN0k7YUFBQSxRQURKLEFBQ0ksQUFBbUosQUFFMUo7QUFDRDtZQUFHLE1BQUEsQUFBTSxTQUFULEFBQWtCLGFBQWEsQUFDM0I7bUNBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLEtBQXBCLEFBQXlCOzhCQUF6QjtnQ0FBQSxBQUErQjtBQUEvQjthQUFBLFFBREosQUFDSSxBQUFxQyxBQUU1QztBQUpELGVBS0ssQUFDRDttQ0FDSSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sS0FBcEIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQStCO0FBQS9CO2FBQUEsUUFESixBQUNJLEFBQXFDLEFBRTVDO0FBQ0o7QUFsQ1csQUFDaEIsQUFDSztBQUZULEFBc0NBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFydGljbGVUZXh0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/francis/Code/JenniW/components/ArticleText.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/francis/Code/JenniW/components/ArticleText.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy41ZWQ2M2VlMzI3NDMwNjhmZDcxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcnRpY2xlVGV4dC5qcz8xYWRmODYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFydGljbGVUZXh0ID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAge3Byb3BzLmFydGljbGVUZXh0Lm1hcCgod29yZHMsIGtleSk9PntcbiAgICAgICAgICAgIGlmKHdvcmRzLnR5cGUgPT09IFwibGlzdC1pdGVtXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdFwiIGtleT17a2V5fT48YnIgLz48c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiA0NX19Pjwvc3Bhbj4gLSB7d29yZHMudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod29yZHMudHlwZSA9PT0gXCJoZWFkaW5nM1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHRIZWFkaW5nXCIga2V5PXtrZXl9Pnt3b3Jkcy50ZXh0fTwvaDM+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod29yZHMudHlwZSA9PT0gXCJoZWFkaW5nMlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRIZWFkaW5nXCIga2V5PXtrZXl9Pnt3b3Jkcy50ZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod29yZHMudHlwZSA9PT0gXCJwYXJhZ3JhcGhcIiAmJiBrZXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCIga2V5PXtrZXl9IHN0eWxlPXt7Zm9udFN0eWxlOiBcIml0YWxpY1wiLCBmb250RmFtaWx5OlwidmFyKC0tbWFpbkZvbnQpXCIsIGZvbnRXZWlnaHQ6XCI4MDBcIiwgZm9udFNpemU6XCJ2YXIoLS1zbWFsbE1pZEZvbnQpXCJ9fT57d29yZHMudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod29yZHMudHlwZSA9PT0gXCJwYXJhZ3JhcGhcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIiBrZXk9e2tleX0+e3dvcmRzLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIiBrZXk9e2tleX0+e3dvcmRzLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVUZXh0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXJ0aWNsZVRleHQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQWhDQTtBQW9DQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==