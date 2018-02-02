'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/components/Search.js';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Search = function Search(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Search'), _react2.default.createElement('form', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('input', { type: 'text', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('input', { type: 'submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })));
};

// Search.getInitialProps = async function() {
//     const res = await Prismic.getApi(apiEndpoint)
//     .then((api) => {
//         return api.query(""); // An empty query will return all the documents
//     })
//     return {
//         articles:res
//     }    
// }

//can i filter props when retrieved?

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIlNlYXJjaCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsQUFBTzs7Ozs7Ozs7QUFGUCxJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCOzs7QUFJbEIsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBRDsyQkFDSCxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSwyQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxnREFDVyxNQUFQLEFBQVk7c0JBQVo7d0JBREosQUFDSSxBQUNBO0FBREE7aURBQ08sTUFBUCxBQUFZO3NCQUFaO3dCQUxMLEFBQ0gsQUFFSSxBQUVJO0FBQUE7O0FBTHBCOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxBQUVBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=