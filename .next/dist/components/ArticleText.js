"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

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
            }), " \xB0 ", words.text);
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
            return _react2.default.createElement("p", { className: "text", key: key, style: { fontStyle: "italic", fontFamily: "var(--mainFont)", fontWeight: "800" }, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZVRleHQuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJwcm9wcyIsImFydGljbGVUZXh0IiwibWFwIiwid29yZHMiLCJrZXkiLCJ0eXBlIiwicGFkZGluZ0xlZnQiLCJ0ZXh0IiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDaEIsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSztBQURMO0FBQUEsS0FBQSxRQUNLLEFBQU0sWUFBTixBQUFrQixJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsS0FBTSxBQUNqQztZQUFHLE1BQUEsQUFBTSxTQUFULEFBQWtCLGFBQWEsQUFDM0I7bUNBRUksY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLEtBQXBCLEFBQXlCOzhCQUF6QjtnQ0FBQSxBQUE4QjtBQUE5QjthQUFBOzs4QkFBOEI7Z0NBQTlCLEFBQThCLEFBQU07QUFBTjtBQUFBLHdEQUFZLE9BQU8sRUFBQyxhQUFkLEFBQWEsQUFBYzs4QkFBM0I7Z0NBQXBDLEFBQW9DO0FBQUE7Z0JBQTJDLGdCQUZuRixBQUVJLEFBQXFGLEFBRTVGO0FBQ0Q7WUFBRyxNQUFBLEFBQU0sU0FBVCxBQUFrQixZQUFZLEFBQzFCO21DQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWMsZUFBYyxLQUE1QixBQUFpQzs4QkFBakM7Z0NBQUEsQUFBdUM7QUFBdkM7YUFBQSxRQURKLEFBQ0ksQUFBNkMsQUFFcEQ7QUFDRDtZQUFHLE1BQUEsQUFBTSxTQUFULEFBQWtCLFlBQVksQUFDMUI7bUNBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYyxlQUFjLEtBQTVCLEFBQWlDOzhCQUFqQztnQ0FBQSxBQUF1QztBQUF2QzthQUFBLFFBREosQUFDSSxBQUE2QyxBQUVwRDtBQUNEO1lBQUcsTUFBQSxBQUFNLFNBQU4sQUFBZSxlQUFlLFFBQWpDLEFBQXlDLEdBQUcsQUFDeEM7bUNBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLEtBQXBCLEFBQXlCLEtBQUssT0FBTyxFQUFDLFdBQUQsQUFBWSxVQUFVLFlBQXRCLEFBQWlDLG1CQUFtQixZQUF6RixBQUFxQyxBQUErRDs4QkFBcEc7Z0NBQUEsQUFBNkc7QUFBN0c7YUFBQSxRQURKLEFBQ0ksQUFBbUgsQUFFMUg7QUFDRDtZQUFHLE1BQUEsQUFBTSxTQUFULEFBQWtCLGFBQWEsQUFDM0I7bUNBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLEtBQXBCLEFBQXlCOzhCQUF6QjtnQ0FBQSxBQUErQjtBQUEvQjthQUFBLFFBREosQUFDSSxBQUFxQyxBQUU1QztBQUpELGVBS0ssQUFDRDttQ0FDSSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sS0FBcEIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQStCO0FBQS9CO2FBQUEsUUFESixBQUNJLEFBQXFDLEFBRTVDO0FBQ0o7QUFsQ1csQUFDaEIsQUFDSztBQUZULEFBc0NBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFydGljbGVUZXh0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==