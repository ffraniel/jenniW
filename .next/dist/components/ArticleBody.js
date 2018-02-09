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
        className: 'jsx-2394410988' + ' ' + 'articleBodyComp',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, props.articles.map(function (article, articleKey) {
        if (article.data.initialpublicationdate[0]) {
            return _react2.default.createElement('article', { key: articleKey, className: 'jsx-2394410988' + ' ' + 'singleArticle',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('h1', {
                className: 'jsx-2394410988',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, article.data.articletitle[0].text), _react2.default.createElement('h5', {
                className: 'jsx-2394410988' + ' ' + 'articleDate',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'Date: ', article.data.initialpublicationdate[0].text), _react2.default.createElement('h5', {
                className: 'jsx-2394410988',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, 'Place ', article.data.initialpublicationplace[0].text), _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-2394410988',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }), _react2.default.createElement(_ArticleText2.default, { articleText: article.data.mainarticle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement(_Reference2.default, { references: article.data.references, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }));
        }
        // else if (!article.data.initialpublicationdate[0]){
        //     <article key={articleKey}>
        //         <h1>{article.data.articletitle[0].text}</h1>
        //         <img src={article.data.image1.url} /> 
        //         <ArticleText articleText={article.data.mainarticle} />
        //         <Reference references={article.data.references} />
        //     </article>
        // }
    }), _react2.default.createElement(_style2.default, {
        styleId: '2394410988',
        css: '.singleArticle.jsx-2394410988{font-family:var(--thickFont);border:solid 3px var(--midGrey);background-color:var(--midGrey);}.articleBodyComp.jsx-2394410988{padding-left:15%;padding-right:15%;}.singleArticle.jsx-2394410988{padding-left:10%;padding-right:10%;}.articleDate.jsx-2394410988{padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQyxBQUdxRCxBQUtaLEFBS0ksQUFJSCxpQkFSQSxBQUtJLENBSXpCLFdBZG9DLE1BT3BDLEFBSUksMEJBVitCLGdDQUNuQyIsImZpbGUiOiJjb21wb25lbnRzL0FydGljbGVCb2R5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZVRleHQgZnJvbSAnLi9BcnRpY2xlVGV4dC5qcyc7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gJy4vUmVmZXJlbmNlLmpzJztcblxuY29uc3QgQXJ0aWNsZUJvZHkgPSAocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImFydGljbGVCb2R5Q29tcFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlcy5tYXAoKGFydGljbGUsIGFydGljbGVLZXkpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUuZGF0YS5pbml0aWFscHVibGljYXRpb25kYXRlWzBdKSB7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUga2V5PXthcnRpY2xlS2V5fSBjbGFzc05hbWU9XCJzaW5nbGVBcnRpY2xlXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS5kYXRhLmFydGljbGV0aXRsZVswXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFydGljbGVEYXRlXCIgPkRhdGU6IHthcnRpY2xlLmRhdGEuaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZVswXS50ZXh0fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBsYWNlIHthcnRpY2xlLmRhdGEuaW5pdGlhbHB1YmxpY2F0aW9ucGxhY2VbMF0udGV4dH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVUZXh0IGFydGljbGVUZXh0PXthcnRpY2xlLmRhdGEubWFpbmFydGljbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlZmVyZW5jZSByZWZlcmVuY2VzPXthcnRpY2xlLmRhdGEucmVmZXJlbmNlc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGlmICghYXJ0aWNsZS5kYXRhLmluaXRpYWxwdWJsaWNhdGlvbmRhdGVbMF0pe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGFydGljbGUga2V5PXthcnRpY2xlS2V5fT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8aDE+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz4gXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPEFydGljbGVUZXh0IGFydGljbGVUZXh0PXthcnRpY2xlLmRhdGEubWFpbmFydGljbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPFJlZmVyZW5jZSByZWZlcmVuY2VzPXthcnRpY2xlLmRhdGEucmVmZXJlbmNlc30gLz5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5zaW5nbGVBcnRpY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1taWRHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWlkR3JleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVCb2R5Q29tcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxNSU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xlQXJ0aWNsZSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlRGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVCb2R5OyJdfQ== */\n/*@ sourceURL=components/ArticleBody.js */'
    }));
};

exports.default = ArticleBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJSZWZlcmVuY2UiLCJBcnRpY2xlQm9keSIsInByb3BzIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiYXJ0aWNsZUtleSIsImRhdGEiLCJpbml0aWFscHVibGljYXRpb25kYXRlIiwiYXJ0aWNsZXRpdGxlIiwidGV4dCIsImluaXRpYWxwdWJsaWNhdGlvbnBsYWNlIiwiaW1hZ2UxIiwidXJsIiwibWFpbmFydGljbGUiLCJyZWZlcmVuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFlOzs7Ozs7Ozs7QUFFdEIsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDUixjQUFBOzRDQUFBLEFBQWdCOztzQkFBaEI7d0JBQUEsQUFDSztBQURMO0FBQUEsS0FBQSxRQUNLLEFBQU0sU0FBTixBQUFlLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxZQUFhLEFBQ3ZDO1lBQUcsUUFBQSxBQUFRLEtBQVIsQUFBYSx1QkFBaEIsQUFBRyxBQUFvQyxJQUFJLEFBQzNDO21DQUNJLGNBQUEsYUFBUyxLQUFULEFBQWMsZ0RBQWQsQUFBb0M7OzhCQUFwQztnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSx1QkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBRG5DLEFBQ0ksQUFBa0MsQUFDbEMsdUJBQUEsY0FBQTtvREFBQSxBQUFjOzs4QkFBZDtnQ0FBQTtBQUFBO0FBQUEsZUFBb0Msa0JBQUEsQUFBUSxLQUFSLEFBQWEsdUJBQWIsQUFBb0MsR0FGNUUsQUFFSSxBQUEyRSxBQUMzRSx1QkFBQSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBVyxrQkFBQSxBQUFRLEtBQVIsQUFBYSx3QkFBYixBQUFxQyxHQUhwRCxBQUdJLEFBQW1ELEFBQ25ELDhDQUFLLEtBQUssUUFBQSxBQUFRLEtBQVIsQUFBYSxPQUF2QixBQUE4QixnQkFBOUI7OzhCQUFBO2dDQUpKLEFBSUksQUFDQTtBQURBO2dDQUNBLEFBQUMsdUNBQVksYUFBYSxRQUFBLEFBQVEsS0FBbEMsQUFBdUM7OEJBQXZDO2dDQUxKLEFBS0ksQUFDQTtBQURBO2dDQUNBLEFBQUMscUNBQVUsWUFBWSxRQUFBLEFBQVEsS0FBL0IsQUFBb0M7OEJBQXBDO2dDQVBSLEFBQ0ksQUFNSSxBQUdQO0FBSE87O0FBSVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBdEJMLEFBQ0s7aUJBREw7YUFEUSxBQUNSO0FBQUE7QUFEWixBQWlEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcnRpY2xlQm9keS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=