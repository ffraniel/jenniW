'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleText = require('./ArticleText.js');

var _ArticleText2 = _interopRequireDefault(_ArticleText);

var _Reference = require('./Reference.js');

var _Reference2 = _interopRequireDefault(_Reference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/components/ArticleBody.js';


var ArticleBody = function ArticleBody(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, props.articles.map(function (article, articleKey) {
        if (article.data.initialpublicationdate[0]) {
            return _react2.default.createElement('article', { key: articleKey, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, article.data.articletitle[0].text), _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'Date: ', article.data.initialpublicationdate[0].text), _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, 'Place ', article.data.initialpublicationplace[0].text), _react2.default.createElement('img', { src: article.data.image1.url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement(_ArticleText2.default, { articleText: article.data.mainarticle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement(_Reference2.default, { references: article.data.references, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }));
        } else {
            _react2.default.createElement('article', { key: articleKey, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, article.data.articletitle[0].text), _react2.default.createElement('img', { src: article.data.image1.url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement(_ArticleText2.default, { articleText: article.data.mainarticle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement(_Reference2.default, { references: article.data.references, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }));
        }
    }));
};

exports.default = ArticleBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJSZWZlcmVuY2UiLCJBcnRpY2xlQm9keSIsInByb3BzIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiYXJ0aWNsZUtleSIsImRhdGEiLCJpbml0aWFscHVibGljYXRpb25kYXRlIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImluaXRpYWxwdWJsaWNhdGlvbnBsYWNlIiwiaW1hZ2UxIiwidXJsIiwibWFpbmFydGljbGUiLCJyZWZlcmVuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWU7Ozs7Ozs7OztBQUV0QixJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFEOzJCQUNSLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0s7QUFETDtBQUFBLEtBQUEsUUFDSyxBQUFNLFNBQU4sQUFBZSxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsWUFBYSxBQUN2QztZQUFHLFFBQUEsQUFBUSxLQUFSLEFBQWEsdUJBQWhCLEFBQUcsQUFBb0MsSUFBSSxBQUMzQzttQ0FDSSxjQUFBLGFBQVMsS0FBVCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLHVCQUFLLEFBQVEsS0FBUixBQUFhLGFBQWIsQUFBMEIsR0FEbkMsQUFDSSxBQUFrQyxBQUNsQyx1QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBVyxrQkFBQSxBQUFRLEtBQVIsQUFBYSx1QkFBYixBQUFvQyxHQUZuRCxBQUVJLEFBQWtELEFBQ2xELHVCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFXLGtCQUFBLEFBQVEsS0FBUixBQUFhLHdCQUFiLEFBQXFDLEdBSHBELEFBR0ksQUFBbUQsQUFFbkQsOENBQUssS0FBSyxRQUFBLEFBQVEsS0FBUixBQUFhLE9BQXZCLEFBQThCOzhCQUE5QjtnQ0FMSixBQUtJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHVDQUFZLGFBQWEsUUFBQSxBQUFRLEtBQWxDLEFBQXVDOzhCQUF2QztnQ0FOSixBQU1JLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHFDQUFVLFlBQVksUUFBQSxBQUFRLEtBQS9CLEFBQW9DOzhCQUFwQztnQ0FSUixBQUNJLEFBT0ksQUFHUDtBQUhPOztBQVRSLGVBYUssQUFDRDs0QkFBQSxjQUFBLGFBQVMsS0FBVCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSx1QkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBRC9CLEFBQ0EsQUFBa0MsQUFFbEMsOENBQUssS0FBSyxRQUFBLEFBQVEsS0FBUixBQUFhLE9BQXZCLEFBQThCOzhCQUE5QjtnQ0FIQSxBQUdBLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHVDQUFZLGFBQWEsUUFBQSxBQUFRLEtBQWxDLEFBQXVDOzhCQUF2QztnQ0FKQSxBQUlBLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHFDQUFVLFlBQVksUUFBQSxBQUFRLEtBQS9CLEFBQW9DOzhCQUFwQztnQ0FMQSxBQUtBLEFBRUg7QUFGRzs7QUFHUDtBQXpCRyxBQUNSLEFBQ0s7QUFGakIsQUE4QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQXJ0aWNsZUJvZHkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9