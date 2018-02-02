'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleText = require('./ArticleText.js');

var _ArticleText2 = _interopRequireDefault(_ArticleText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/components/Articles.js';

var Articles = function Articles(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, props.articles.results.map(function (article, articleKey) {
        return _react2.default.createElement('article', { key: articleKey, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZXMuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJBcnRpY2xlcyIsInByb3BzIiwiYXJ0aWNsZXMiLCJyZXN1bHRzIiwibWFwIiwiYXJ0aWNsZSIsImFydGljbGVLZXkiLCJkYXRhIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImltYWdlMSIsInVybCIsIm1haW5hcnRpY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7Ozs7Ozs7QUFDeEIsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDsyQkFDTCxjQUFBOztzQkFBQTt3QkFBQSxBQUNLO0FBREw7QUFBQSxLQUFBLFFBQ0ssQUFBTSxTQUFOLEFBQWUsUUFBZixBQUF1QixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsWUFBYSxBQUMvQzsrQkFDSSxjQUFBLGFBQVMsS0FBVCxBQUFjOzBCQUFkOzRCQUFBLEFBQ0k7QUFESjtTQUFBLGtCQUNJLGNBQUE7OzBCQUFBOzRCQUFBLEFBQUs7QUFBTDtBQUFBLG1CQUFLLEFBQVEsS0FBUixBQUFhLGFBQWIsQUFBMEIsR0FEbkMsQUFDSSxBQUFrQyxBQUVsQyw4Q0FBSyxLQUFLLFFBQUEsQUFBUSxLQUFSLEFBQWEsT0FBdkIsQUFBOEI7MEJBQTlCOzRCQUhKLEFBR0ksQUFDQTtBQURBOzRCQUNBLEFBQUMsdUNBQVksYUFBYSxRQUFBLEFBQVEsS0FBbEMsQUFBdUM7MEJBQXZDOzRCQUxSLEFBQ0ksQUFJSSxBQUdYO0FBSFc7O0FBUlgsQUFDTCxBQUNLO0FBRmpCLEFBZUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQXJ0aWNsZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9