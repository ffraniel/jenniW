'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/index.js?entry';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Index = function Index(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'Education/Social Work/Policy'), _react2.default.createElement('img', { src: 'data:image/jpeg;base64,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', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('section', { className: 'intro', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('section', { className: 'preview', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { className: 'previewDiv', key: key, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
            }
        }, _react2.default.createElement(_link2.default, { href: { pathname: '/blog', query: { UID: article.uid } }, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        }, _react2.default.createElement('a', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
            }
        }), _react2.default.createElement('h3', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 25
            }
        }, article.data.articletitle[0].text))));
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Prismic.getApi(apiEndpoint).then(function (api) {
                        return api.query(""); // An empty query will return all the documents
                    });

                case 2:
                    res = _context.sent;
                    return _context.abrupt('return', {
                        articlesIntro: res.results.reverse().slice(0, 3)
                    });

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJIZWFkZXIiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVUlEIiwidWlkIiwiZGF0YSIsImltYWdlMSIsInVybCIsImFydGljbGV0aXRsZSIsInRleHQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBcGkiLCJ0aGVuIiwiYXBpIiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7O0FBSm5CLElBQUksVUFBSixBQUFJLEFBQVU7QUFDZCxJQUFJLGNBQUosQUFBa0I7OztBQUtsQixJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFEOzJCQUNGLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBREosQUFDSSxBQUNBO0FBREE7QUFBQSx3QkFDQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGSixBQUVJLEFBQ0Esb0NBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEosQUFHSSxBQUNBLHdFQUFLLEtBQUwsQUFBUztzQkFBVDt3QkFKSixBQUlJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLGFBQVMsV0FBVCxBQUFtQjtzQkFBbkI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxpRUFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FQUixBQUtJLEFBRUksQUFFSixnc0JBQUEsY0FBQSxhQUFTLFdBQVQsQUFBbUI7c0JBQW5CO3dCQUFBLEFBRUs7QUFGTDthQUVLLEFBQU0sY0FBTixBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsS0FBTSxBQUNyQzsrQkFDZ0IsY0FBQSxTQUFLLFdBQUwsQUFBZSxjQUFhLEtBQTVCLEFBQWlDOzBCQUFqQzs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLE1BQU0sRUFBRSxVQUFGLEFBQVksU0FBUyxPQUFPLEVBQUUsS0FBSyxRQUEvQyxBQUFZLEFBQTRCLEFBQWU7MEJBQXZEOzRCQUFBLEFBQ0k7QUFESjsyQkFDSSxjQUFBOzswQkFBQTs0QkFBQSxBQUNJO0FBREo7QUFBQSxrREFDUyxLQUFLLFFBQUEsQUFBUSxLQUFSLEFBQWEsT0FBdkIsQUFBOEI7MEJBQTlCOzRCQURKLEFBQ0ksQUFDQTtBQURBOzRCQUNBLGNBQUE7OzBCQUFBOzRCQUFBLEFBQUs7QUFBTDtBQUFBLG1CQUFLLEFBQVEsS0FBUixBQUFhLGFBQWIsQUFBMEIsR0FMM0QsQUFDZ0IsQUFDSSxBQUNJLEFBRUksQUFBa0MsQUFLakU7QUF2QlAsQUFDRixBQVNJLEFBRUs7QUFackI7O0FBOEJBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7UUFBQTtrRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FBQTttQ0FDRixBQUFRLE9BQVIsQUFBZSxhQUFmLEFBQ2pCLEtBQUssVUFBQSxBQUFDOytCQUNJLElBQUEsQUFBSSxNQURBLEFBQ1gsQUFBTyxBQUFVLElBRE4sQUFDWCxDQUFzQixBQUN6QjtBQUptQixBQUNGLHFCQUFBOztxQkFBWjtBQURjLG1DQUFBOzt1Q0FNRixJQUFBLEFBQUksUUFBSixBQUFZLFVBQVosQUFBc0IsTUFBdEIsQUFBNEIsR0FOMUIsQUFLYixBQUNXLEFBQThCO0FBRHpDLEFBQ0g7O3FCQU5nQjtxQkFBQTtvQ0FBQTs7QUFBQTtnQkFBQTtBQUF4QixBQVVBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==