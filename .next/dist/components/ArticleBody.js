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
        className: 'jsx-2790543326' + ' ' + 'articleBodyComp',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, props.articles.map(function (article, articleKey) {
        return _react2.default.createElement('article', { key: articleKey, className: 'jsx-2790543326' + ' ' + 'singleArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, _react2.default.createElement('h1', {
            className: 'jsx-2790543326',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, article.data.articletitle[0].text), article.data.initialpublicationdate[0] && _react2.default.createElement('h5', {
            className: 'jsx-2790543326' + ' ' + 'articleDate',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }, article.data.initialpublicationdate[0].text), article.data.initialpublicationplace[0] && _react2.default.createElement('h5', {
            className: 'jsx-2790543326',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }, article.data.initialpublicationplace[0].text), article.data.image1.url && _react2.default.createElement('img', { src: article.data.image1.url, alt: 'decorative only', className: 'jsx-2790543326' + ' ' + 'postImage',
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
        styleId: '2790543326',
        css: '.singleArticle.jsx-2790543326{font-family:var(--thickFont);border:solid 3px var(--midGrey);background-color:var(--midGrey);padding-left:10%;padding-right:10%;}.articleBodyComp.jsx-2790543326{padding-left:15%;padding-right:15%;}.articleDate.jsx-2790543326{padding-left:20px;}.postImage.jsx-2790543326{display:block;margin-left:auto;margin-right:auto;width:80%;max-width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQyxBQUdxRCxBQU9aLEFBS0MsQUFHSCxjQUNHLEdBUkEsQ0FLckIsV0Fab0MsRUFnQmQsSUFQdEIsY0FRYyxVQUNHLEVBakJrQixZQWtCbkMsb0JBakJvQixpQkFFckIsa0JBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9BcnRpY2xlQm9keS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFydGljbGVUZXh0IGZyb20gJy4vQXJ0aWNsZVRleHQuanMnO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tICcuL1JlZmVyZW5jZS5qcyc7XG5cbmNvbnN0IEFydGljbGVCb2R5ID0gKHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVCb2R5Q29tcFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlcy5tYXAoKGFydGljbGUsIGFydGljbGVLZXkpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2FydGljbGVLZXl9IGNsYXNzTmFtZT1cInNpbmdsZUFydGljbGVcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnthcnRpY2xlLmRhdGEuYXJ0aWNsZXRpdGxlWzBdLnRleHR9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kYXRhLmluaXRpYWxwdWJsaWNhdGlvbmRhdGVbMF0gJiYgPGg1IGNsYXNzTmFtZT1cImFydGljbGVEYXRlXCIgPnthcnRpY2xlLmRhdGEuaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZVswXS50ZXh0fTwvaDU+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmRhdGEuaW5pdGlhbHB1YmxpY2F0aW9ucGxhY2VbMF0gJiYgPGg1PnthcnRpY2xlLmRhdGEuaW5pdGlhbHB1YmxpY2F0aW9ucGxhY2VbMF0udGV4dH08L2g1PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuZGF0YS5pbWFnZTEudXJsICYmIDxpbWcgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gYWx0PVwiZGVjb3JhdGl2ZSBvbmx5XCIgY2xhc3NOYW1lPVwicG9zdEltYWdlXCIgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlVGV4dCBhcnRpY2xlVGV4dD17YXJ0aWNsZS5kYXRhLm1haW5hcnRpY2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmRhdGEucmVmZXJlbmNlcyAmJiA8UmVmZXJlbmNlIHJlZmVyZW5jZXM9e2FydGljbGUuZGF0YS5yZWZlcmVuY2VzfSAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xlQXJ0aWNsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWlkR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1pZEdyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTAlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVCb2R5Q29tcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxNSU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZURhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBvc3RJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo4MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQm9keTsiXX0= */\n/*@ sourceURL=components/ArticleBody.js */'
    }));
};

exports.default = ArticleBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUJvZHkuanMiXSwibmFtZXMiOlsiQXJ0aWNsZVRleHQiLCJSZWZlcmVuY2UiLCJBcnRpY2xlQm9keSIsInByb3BzIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiYXJ0aWNsZUtleSIsImRhdGEiLCJhcnRpY2xldGl0bGUiLCJ0ZXh0IiwiaW5pdGlhbHB1YmxpY2F0aW9uZGF0ZSIsImluaXRpYWxwdWJsaWNhdGlvbnBsYWNlIiwiaW1hZ2UxIiwidXJsIiwibWFpbmFydGljbGUiLCJyZWZlcmVuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFlOzs7Ozs7Ozs7QUFFdEIsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDUixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0s7QUFETDtBQUFBLEtBQUEsUUFDSyxBQUFNLFNBQU4sQUFBZSxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsWUFBYSxBQUN2QzsrQkFDSSxjQUFBLGFBQVMsS0FBVCxBQUFjLGdEQUFkLEFBQW9DOzswQkFBcEM7NEJBQUEsQUFDSTtBQURKO1NBQUEsa0JBQ0ksY0FBQTt1QkFBQTs7MEJBQUE7NEJBQUEsQUFBSztBQUFMO0FBQUEsbUJBQUssQUFBUSxLQUFSLEFBQWEsYUFBYixBQUEwQixHQURuQyxBQUNJLEFBQWtDLEFBQ2pDLGVBQUEsQUFBUSxLQUFSLEFBQWEsdUJBQWIsQUFBb0Msc0JBQU0sY0FBQTtnREFBQSxBQUFjOzswQkFBZDs0QkFBQSxBQUE4QjtBQUE5QjtBQUFBLFNBQUEsVUFBOEIsQUFBUSxLQUFSLEFBQWEsdUJBQWIsQUFBb0MsR0FGakgsQUFFK0MsQUFBcUUsQUFDL0csZUFBQSxBQUFRLEtBQVIsQUFBYSx3QkFBYixBQUFxQyxzQkFBTSxjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBLFVBQUssQUFBUSxLQUFSLEFBQWEsd0JBQWIsQUFBcUMsR0FIMUYsQUFHZ0QsQUFBNkMsQUFDeEYsZUFBQSxBQUFRLEtBQVIsQUFBYSxPQUFiLEFBQW9CLDhDQUFZLEtBQUssUUFBQSxBQUFRLEtBQVIsQUFBYSxPQUF2QixBQUE4QixLQUFLLEtBQW5DLEFBQXVDLHVEQUF2QyxBQUFtRTs7MEJBQW5FOzRCQUpoQyxBQUlnQyxBQUM1QjtBQUQ0QjtTQUFBLG1CQUM1QixBQUFDLHVDQUFZLGFBQWEsUUFBQSxBQUFRLEtBQWxDLEFBQXVDOzBCQUF2Qzs0QkFMSixBQUtJLEFBQ0M7QUFERDtvQkFDQyxBQUFRLEtBQVIsQUFBYSw4QkFBYyxBQUFDLHFDQUFVLFlBQVksUUFBQSxBQUFRLEtBQS9CLEFBQW9DOzBCQUFwQzs0QkFQcEMsQUFDSSxBQU1nQyxBQUduQztBQUhtQztTQUFBO0FBVDVDLEFBQ0s7aUJBREw7YUFEUSxBQUNSO0FBQUE7QUFEWixBQTZDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcnRpY2xlQm9keS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=