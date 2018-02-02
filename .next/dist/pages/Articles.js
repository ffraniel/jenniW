'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleText = require('./ArticleText.js');

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