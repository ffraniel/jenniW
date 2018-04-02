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
        className: 'jsx-2473675379' + ' ' + 'articleBodyComp',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, props.articles.map(function (article, articleKey) {
        return _react2.default.createElement('article', { key: articleKey, className: 'jsx-2473675379' + ' ' + 'singleArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, _react2.default.createElement('h1', {
            className: 'jsx-2473675379',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, article.data.articletitle[0].text), article.data.initialpublicationdate[0] && _react2.default.createElement('h5', {
            className: 'jsx-2473675379' + ' ' + 'articleDate',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }, 'First published: ', article.data.initialpublicationdate[0].text), article.data.initialpublicationplace[0] && _react2.default.createElement('h5', {
            className: 'jsx-2473675379',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }, article.data.initialpublicationplace[0].text), article.data.image1.url && _react2.default.createElement('img', { src: article.data.image1.url, alt: 'decorative only', className: 'jsx-2473675379' + ' ' + 'postImage',
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
        styleId: '2473675379',
        css: '.singleArticle.jsx-2473675379{font-family:var(--thickFont);border:solid 3px var(--midGrey);background-color:var(--midGrey);padding-left:10%;padding-right:10%;}.articleBodyComp.jsx-2473675379{padding-left:15%;padding-right:15%;}.articleDate.jsx-2473675379{padding-left:20px;}.postImage.jsx-2473675379{display:block;margin-left:auto;margin-right:auto;width:80%;max-width:80%;-webkit-animation:fadeIn-jsx-2473675379 2s;animation:fadeIn-jsx-2473675379 2s;-webkit-animation:fadeIn 2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQyxBQUdxRCxBQU9aLEFBSUMsQUFHSCxjQUNHLEdBUEEsQ0FJckIsV0FYb0MsRUFlZCxJQVB0QixjQVFjLFVBQ0csRUFoQmtCLFlBaUJYLG9CQWhCSixpQkFFckIsa0JBQUMsdUJBZWdDLDRCQUNoQyIsImZpbGUiOiJjb21wb25lbnRzL0FydGljbGVCb2R5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZVRleHQgZnJvbSAnLi9BcnRpY2xlVGV4dC5qcyc7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gJy4vUmVmZXJlbmNlLmpzJztcblxuY29uc3QgQXJ0aWNsZUJvZHkgPSAocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZUJvZHlDb21wXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmFydGljbGVzLm1hcCgoYXJ0aWNsZSwgYXJ0aWNsZUtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17YXJ0aWNsZUtleX0gY2xhc3NOYW1lPVwic2luZ2xlQXJ0aWNsZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmRhdGEuaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZVswXSAmJiA8aDUgY2xhc3NOYW1lPVwiYXJ0aWNsZURhdGVcIiA+Rmlyc3QgcHVibGlzaGVkOiB7YXJ0aWNsZS5kYXRhLmluaXRpYWxwdWJsaWNhdGlvbmRhdGVbMF0udGV4dH08L2g1Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kYXRhLmluaXRpYWxwdWJsaWNhdGlvbnBsYWNlWzBdICYmIDxoNT57YXJ0aWNsZS5kYXRhLmluaXRpYWxwdWJsaWNhdGlvbnBsYWNlWzBdLnRleHR9PC9oNT4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybCAmJiA8aW1nIHNyYz17YXJ0aWNsZS5kYXRhLmltYWdlMS51cmx9IGFsdD1cImRlY29yYXRpdmUgb25seVwiIGNsYXNzTmFtZT1cInBvc3RJbWFnZVwiIC8+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVRleHQgYXJ0aWNsZVRleHQ9e2FydGljbGUuZGF0YS5tYWluYXJ0aWNsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kYXRhLnJlZmVyZW5jZXMgJiYgPFJlZmVyZW5jZSByZWZlcmVuY2VzPXthcnRpY2xlLmRhdGEucmVmZXJlbmNlc30gLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZUFydGljbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLW1pZEdyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1taWRHcmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwJVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlQm9keUNvbXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlRGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucG9zdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAyczsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG5cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUJvZHk7Il19 */\n/*@ sourceURL=components/ArticleBody.js */'
    }));
};

exports.default = ArticleBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJSZWZlcmVuY2UiLCJBcnRpY2xlQm9keSIsInByb3BzIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiYXJ0aWNsZUtleSIsImRhdGEiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZSIsImluaXRpYWxwdWJsaWNhdGlvbnBsYWNlIiwiaW1hZ2UxIiwidXJsIiwibWFpbmFydGljbGUiLCJyZWZlcmVuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFlOzs7Ozs7Ozs7QUFFdEIsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDUixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLEtBQUEsUUFDSyxBQUFNLFNBQU4sQUFBZSxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsWUFBYSxBQUN2QzsrQkFDSSxjQUFBLGFBQVMsS0FBVCxBQUFjLGdEQUFkLEFBQW9DOzswQkFBcEM7NEJBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksY0FBQTt1QkFBQTs7MEJBQUE7NEJBQUEsQUFBSztBQUFMO0FBQUEsbUJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQURuQyxBQUNJLEFBQWtDLEFBQ2pDLGVBQUEsQUFBUSxLQUFSLEFBQWEsdUJBQWIsQUFBb0Msc0JBQU0sY0FBQTtnREFBQSxBQUFjOzswQkFBZDs0QkFBQTtBQUFBO0FBQUEsU0FBQSxFQUErQyw2QkFBQSxBQUFRLEtBQVIsQUFBYSx1QkFBYixBQUFvQyxHQUZsSSxBQUUrQyxBQUFzRixBQUNoSSxlQUFBLEFBQVEsS0FBUixBQUFhLHdCQUFiLEFBQXFDLHNCQUFNLGNBQUE7dUJBQUE7OzBCQUFBOzRCQUFBLEFBQUs7QUFBTDtBQUFBLFNBQUEsVUFBSyxBQUFRLEtBQVIsQUFBYSx3QkFBYixBQUFxQyxHQUgxRixBQUdnRCxBQUE2QyxBQUN4RixlQUFBLEFBQVEsS0FBUixBQUFhLE9BQWIsQUFBb0IsOENBQVksS0FBSyxRQUFBLEFBQVEsS0FBUixBQUFhLE9BQXZCLEFBQThCLEtBQUssS0FBbkMsQUFBdUMsdURBQXZDLEFBQW1FOzswQkFBbkU7NEJBSmhDLEFBSWdDLEFBQzVCO0FBRDRCO1NBQUEsbUJBQzVCLEFBQUMsdUNBQVksYUFBYSxRQUFBLEFBQVEsS0FBbEMsQUFBdUM7MEJBQXZDOzRCQUxKLEFBS0ksQUFDQztBQUREO29CQUNDLEFBQVEsS0FBUixBQUFhLDhCQUFjLEFBQUMscUNBQVUsWUFBWSxRQUFBLEFBQVEsS0FBL0IsQUFBb0M7MEJBQXBDOzRCQVBwQyxBQUNJLEFBTWdDLEFBR25DO0FBSG1DO1NBQUE7QUFUNUMsQUFDSztpQkFETDthQURRLEFBQ1I7QUFBQTtBQURaLEFBNkNBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFydGljbGVCb2R5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==