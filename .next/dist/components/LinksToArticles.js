"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/components/LinksToArticles.js";


var LinksToArticles = function LinksToArticles(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("div", { className: "linksByTag", __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, props.list.map(function (listItem, key) {
        return _react2.default.createElement("div", { key: key, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, listItem.tags.map(function (tag, key) {
            _react2.default.createElement("ul", { key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement(_link2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, tag)));
        }));
    })));
};

exports.default = LinksToArticles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlua3NUb0FydGljbGVzLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJMaW5rc1RvQXJ0aWNsZXMiLCJwcm9wcyIsImxpc3QiLCJtYXAiLCJsaXN0SXRlbSIsImtleSIsInRhZ3MiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQUQ7MkJBQ3BCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNLO0FBREw7YUFDSyxBQUFNLEtBQU4sQUFBVyxJQUFJLFVBQUEsQUFBQyxVQUFELEFBQVcsS0FBTSxBQUN6QjsrQkFDSSxjQUFBLFNBQUssS0FBTCxBQUFVOzBCQUFWOzRCQUFBLEFBQ0s7QUFETDtTQUFBLFdBQ0ssQUFBUyxLQUFULEFBQWMsSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU0sQUFDM0I7NEJBQUEsY0FBQSxRQUFJLEtBQUosQUFBUzs4QkFBVDtnQ0FBQSxBQUFjO0FBQWQ7K0JBQWMsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFBTTtBQUFOO0FBQUEsK0JBQU0sY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsZUFBcEIsQUFBYyxBQUFNLEFBQ3ZCO0FBSlQsQUFDSSxBQUNLLEFBS1o7QUFYTyxBQUNwQixBQUNJLEFBQ0s7QUFIYixBQW1CQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJMaW5rc1RvQXJ0aWNsZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9