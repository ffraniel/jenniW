"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/francis/Code/JenniW/components/Reference.js";

var Reference = function Reference(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, props.references.map(function (words, key) {
        return _react2.default.createElement("p", { className: "text", key: key, style: { fontStyle: "italic" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        }, words.text);
    }));
};

exports.default = Reference;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIlJlZmVyZW5jZSIsInByb3BzIiwicmVmZXJlbmNlcyIsIm1hcCIsIndvcmRzIiwia2V5IiwiZm9udFN0eWxlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLFlBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxPQUFEOzJCQUNkLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0s7QUFETDtBQUFBLEtBQUEsUUFDSyxBQUFNLFdBQU4sQUFBaUIsSUFBSSxVQUFBLEFBQUMsT0FBRCxBQUFRLEtBQU0sQUFDaEM7K0JBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLEtBQXBCLEFBQXlCLEtBQUssT0FBTyxFQUFDLFdBQXRDLEFBQXFDLEFBQVk7MEJBQWpEOzRCQUFBLEFBQTZEO0FBQTdEO1NBQUEsUUFESixBQUNJLEFBQW1FLEFBRTFFO0FBTlMsQUFDZCxBQUNLO0FBRlQsQUFVQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZWZlcmVuY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9