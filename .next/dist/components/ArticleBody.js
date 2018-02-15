'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

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
        className: 'jsx-3769647532' + ' ' + 'articleBodyComp',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, props.articles.map(function (article, articleKey) {
        return _react2.default.createElement('article', { key: articleKey, className: 'jsx-3769647532' + ' ' + 'singleArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, _react2.default.createElement('h1', {
            className: 'jsx-3769647532',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, article.data.articletitle[0].text), article.data.initialpublicationdate[0] && _react2.default.createElement('h5', {
            className: 'jsx-3769647532' + ' ' + 'articleDate',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }, article.data.initialpublicationdate[0].text), article.data.initialpublicationplace[0] && _react2.default.createElement('h5', {
            className: 'jsx-3769647532',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }, article.data.initialpublicationplace[0].text), article.data.image1.url && _react2.default.createElement('img', { src: article.data.image1.url, alt: 'decorative only', className: 'jsx-3769647532' + ' ' + 'postImage',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        }), _react2.default.createElement(_ArticleText2.default, { articleText: article.data.mainarticle, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        }), article.data.references && _react2.default.createElement(_Reference2.default, { references: article.data.references, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        }));
    }), _react2.default.createElement(_style2.default, {
        styleId: '3769647532',
        css: '.singleArticle.jsx-3769647532{font-family:var(--thickFont);border:solid 3px var(--midGrey);background-color:var(--midGrey);padding-left:10%;padding-right:10%;}.articleBodyComp.jsx-3769647532{padding-left:15%;padding-right:15%;}.articleDate.jsx-3769647532{padding-left:20px;}.postImage.jsx-3769647532{display:block;margin-left:auto;margin-right:auto;width:80%;max-width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQyxBQUdxRCxBQU9aLEFBSUMsQUFHSCxjQUNHLEdBUEEsQ0FJckIsV0FYb0MsRUFlZCxJQVB0QixjQVFjLFVBQ0csRUFoQmtCLFlBaUJuQyxvQkFoQm9CLGlCQUVyQixrQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0FydGljbGVCb2R5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZVRleHQgZnJvbSAnLi9BcnRpY2xlVGV4dC5qcyc7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gJy4vUmVmZXJlbmNlLmpzJztcblxuY29uc3QgQXJ0aWNsZUJvZHkgPSAocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZUJvZHlDb21wXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmFydGljbGVzLm1hcCgoYXJ0aWNsZSwgYXJ0aWNsZUtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17YXJ0aWNsZUtleX0gY2xhc3NOYW1lPVwic2luZ2xlQXJ0aWNsZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmRhdGEuaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZVswXSAmJiA8aDUgY2xhc3NOYW1lPVwiYXJ0aWNsZURhdGVcIiA+e2FydGljbGUuZGF0YS5pbml0aWFscHVibGljYXRpb25kYXRlWzBdLnRleHR9PC9oNT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuZGF0YS5pbml0aWFscHVibGljYXRpb25wbGFjZVswXSAmJiA8aDU+e2FydGljbGUuZGF0YS5pbml0aWFscHVibGljYXRpb25wbGFjZVswXS50ZXh0fTwvaDU+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kYXRhLmltYWdlMS51cmwgJiYgPGltZyBzcmM9e2FydGljbGUuZGF0YS5pbWFnZTEudXJsfSBhbHQ9XCJkZWNvcmF0aXZlIG9ubHlcIiBjbGFzc05hbWU9XCJwb3N0SW1hZ2VcIiAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVUZXh0IGFydGljbGVUZXh0PXthcnRpY2xlLmRhdGEubWFpbmFydGljbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuZGF0YS5yZWZlcmVuY2VzICYmIDxSZWZlcmVuY2UgcmVmZXJlbmNlcz17YXJ0aWNsZS5kYXRhLnJlZmVyZW5jZXN9IC8+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5zaW5nbGVBcnRpY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1taWRHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWlkR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxMCVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZUJvZHlDb21wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZURhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo4MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQm9keTsiXX0= */\n/*@ sourceURL=components/ArticleBody.js */'
    }));
};

exports.default = ArticleBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJSZWZlcmVuY2UiLCJBcnRpY2xlQm9keSIsInByb3BzIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiYXJ0aWNsZUtleSIsImRhdGEiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZSIsImluaXRpYWxwdWJsaWNhdGlvbnBsYWNlIiwiaW1hZ2UxIiwidXJsIiwibWFpbmFydGljbGUiLCJyZWZlcmVuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFlOzs7Ozs7Ozs7QUFFdEIsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDUixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLEtBQUEsUUFDSyxBQUFNLFNBQU4sQUFBZSxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsWUFBYSxBQUN2QzsrQkFDSSxjQUFBLGFBQVMsS0FBVCxBQUFjLGdEQUFkLEFBQW9DOzswQkFBcEM7NEJBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksY0FBQTt1QkFBQTs7MEJBQUE7NEJBQUEsQUFBSztBQUFMO0FBQUEsbUJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQURuQyxBQUNJLEFBQWtDLEFBQ2pDLGVBQUEsQUFBUSxLQUFSLEFBQWEsdUJBQWIsQUFBb0Msc0JBQU0sY0FBQTtnREFBQSxBQUFjOzswQkFBZDs0QkFBQSxBQUE4QjtBQUE5QjtBQUFBLFNBQUEsVUFBOEIsQUFBUSxLQUFSLEFBQWEsdUJBQWIsQUFBb0MsR0FGakgsQUFFK0MsQUFBcUUsQUFDL0csZUFBQSxBQUFRLEtBQVIsQUFBYSx3QkFBYixBQUFxQyxzQkFBTSxjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBLFVBQUssQUFBUSxLQUFSLEFBQWEsd0JBQWIsQUFBcUMsR0FIMUYsQUFHZ0QsQUFBNkMsQUFDeEYsZUFBQSxBQUFRLEtBQVIsQUFBYSxPQUFiLEFBQW9CLDhDQUFZLEtBQUssUUFBQSxBQUFRLEtBQVIsQUFBYSxPQUF2QixBQUE4QixLQUFLLEtBQW5DLEFBQXVDLHVEQUF2QyxBQUFtRTs7MEJBQW5FOzRCQUpoQyxBQUlnQyxBQUM1QjtBQUQ0QjtTQUFBLG1CQUM1QixBQUFDLHVDQUFZLGFBQWEsUUFBQSxBQUFRLEtBQWxDLEFBQXVDOzBCQUF2Qzs0QkFMSixBQUtJLEFBQ0M7QUFERDtvQkFDQyxBQUFRLEtBQVIsQUFBYSw4QkFBYyxBQUFDLHFDQUFVLFlBQVksUUFBQSxBQUFRLEtBQS9CLEFBQW9DOzBCQUFwQzs0QkFQcEMsQUFDSSxBQU1nQyxBQUduQztBQUhtQztTQUFBO0FBVDVDLEFBQ0s7aUJBREw7YUFEUSxBQUNSO0FBQUE7QUFEWixBQTRDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcnRpY2xlQm9keS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=