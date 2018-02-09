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
            return _react2.default.createElement("p", { className: "text", key: key, style: { fontStyle: "italic" }, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZVRleHQuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJwcm9wcyIsImFydGljbGVUZXh0IiwibWFwIiwid29yZHMiLCJrZXkiLCJ0eXBlIiwicGFkZGluZ0xlZnQiLCJ0ZXh0IiwiZm9udFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sY0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLE9BQUQ7MkJBQ2hCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0s7QUFETDtBQUFBLEtBQUEsUUFDSyxBQUFNLFlBQU4sQUFBa0IsSUFBSSxVQUFBLEFBQUMsT0FBRCxBQUFRLEtBQU0sQUFDakM7WUFBRyxNQUFBLEFBQU0sU0FBVCxBQUFrQixhQUFhLEFBQzNCO21DQUVJLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxLQUFwQixBQUF5Qjs4QkFBekI7Z0NBQUEsQUFBOEI7QUFBOUI7YUFBQTs7OEJBQThCO2dDQUE5QixBQUE4QixBQUFNO0FBQU47QUFBQSx3REFBWSxPQUFPLEVBQUMsYUFBZCxBQUFhLEFBQWM7OEJBQTNCO2dDQUFwQyxBQUFvQztBQUFBO2dCQUEyQyxnQkFGbkYsQUFFSSxBQUFxRixBQUU1RjtBQUNEO1lBQUcsTUFBQSxBQUFNLFNBQVQsQUFBa0IsWUFBWSxBQUMxQjttQ0FDSSxjQUFBLFFBQUksV0FBSixBQUFjLGVBQWMsS0FBNUIsQUFBaUM7OEJBQWpDO2dDQUFBLEFBQXVDO0FBQXZDO2FBQUEsUUFESixBQUNJLEFBQTZDLEFBRXBEO0FBQ0Q7WUFBRyxNQUFBLEFBQU0sU0FBVCxBQUFrQixZQUFZLEFBQzFCO21DQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWMsZUFBYyxLQUE1QixBQUFpQzs4QkFBakM7Z0NBQUEsQUFBdUM7QUFBdkM7YUFBQSxRQURKLEFBQ0ksQUFBNkMsQUFFcEQ7QUFDRDtZQUFHLE1BQUEsQUFBTSxTQUFOLEFBQWUsZUFBZSxRQUFqQyxBQUF5QyxHQUFHLEFBQ3hDO21DQUNJLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxLQUFwQixBQUF5QixLQUFLLE9BQU8sRUFBQyxXQUF0QyxBQUFxQyxBQUFZOzhCQUFqRDtnQ0FBQSxBQUE2RDtBQUE3RDthQUFBLFFBREosQUFDSSxBQUFtRSxBQUUxRTtBQUNEO1lBQUcsTUFBQSxBQUFNLFNBQVQsQUFBa0IsYUFBYSxBQUMzQjttQ0FDSSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sS0FBcEIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQStCO0FBQS9CO2FBQUEsUUFESixBQUNJLEFBQXFDLEFBRTVDO0FBSkQsZUFLSyxBQUNEO21DQUNJLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxLQUFwQixBQUF5Qjs4QkFBekI7Z0NBQUEsQUFBK0I7QUFBL0I7YUFBQSxRQURKLEFBQ0ksQUFBcUMsQUFFNUM7QUFDSjtBQWxDVyxBQUNoQixBQUNLO0FBRlQsQUFzQ0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQXJ0aWNsZVRleHQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9