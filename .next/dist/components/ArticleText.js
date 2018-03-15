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