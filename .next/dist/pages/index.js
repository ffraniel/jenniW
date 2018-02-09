'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/index.js?entry';

var Prismic = require('prismic-javascript');
var apiEndpoint = "https://JenniW.prismic.io/api/v2";


var Index = function Index(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-726306628' + ' ' + 'index',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-726306628' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-726306628',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-726306628',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'Education/Social Work/Policy')), _react2.default.createElement('section', {
        className: 'jsx-726306628' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-726306628',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: 'data:image/jpeg;base64,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', className: 'jsx-726306628',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-726306628',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('section', {
        className: 'jsx-726306628' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-726306628' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            }
        }, _react2.default.createElement(_link2.default, { href: { pathname: '/blog', query: { UID: article.uid } }, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
            }
        }, _react2.default.createElement('a', {
            className: 'jsx-726306628',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 25
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-726306628',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-726306628',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, article.data.articletitle[0].text))));
    }))), _react2.default.createElement(_style2.default, {
        styleId: '726306628',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0MsQUFNbUMsQUFHRSxBQVdlLEFBSUEsQUFJQSxBQUlBLEFBTUMsV0EvQmhDLEVBR29CLGVBV1EsQUFJSSxBQUlDLEFBSUgsQ0FNQSxDQTVCZixXQUMyRSxZQVUxRixFQVl5QixDQU1KLENBZHJCLENBSUEsZ0JBV0EsR0FObUIsZ0JBQ25CLGtDQXZCa0MsOEJBQ0gsMkJBQ0YseUJBQ0gsc0JBQ08sNkJBQ2pDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xudmFyIGFwaUVuZHBvaW50ID0gXCJodHRwczovL0plbm5pVy5wcmlzbWljLmlvL2FwaS92MlwiO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIiA+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkplbm5pIFdoaXRlaGVhZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5FZHVjYXRpb24vU29jaWFsIFdvcmsvUG9saWN5PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+QWxsIHRoaXMgY29udGVudCBpcyBnYXRoZXJlZCBvdmVyIHggeWVhcnMuLi48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhNVEVoVVRFeE1WRlJVWEZ4VVZGeFVYRnhjWEZ4Y1hGeGNYRnhjWUZ4VVlIU2dnR0JvbEhSVVhJVEVoSlNrckxpNHVGeDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HaEFRR3kwbEh5VXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBUkFBdWdNQklnQUNFUUVERVFIL3hBQWJBQUFCQlFFQkFBQUFBQUFBQUFBQUFBQUZBUUlEQkFZQUIvL0VBRU1RQUFFREFnUUNCd1FHQ1FRQkJRQUFBQUVBQWhFREJBVVNJVEZCVVFZVEltRnhnWkV5VXFHeFFtSnl3ZEh3QnhRak0wT0Nrc0xoRlZPaThiSVdKSU9qMHYvRUFCZ0JBQU1CQVFBQUFBQUFBQUFBQUFBQUFBRUNBd0FFLzhRQUl4RUFBd0FDQWdJQ0F3RUJBQUFBQUFBQUFBRUNBeEVoTVJKQkUxRUVJakpoRlAvYUFBd0RBUUFDRVFNUkFEOEF5eTZFcFhCVDJFUktGeENWQXgwS2plRHR0OENyNnBYbnR0ODBRRXpBcGdFeGdVclFsWVJRbmdMZ0ZOUnBFbUFzWWphMVRNb0U3RDBSL0RzQ2FSTG5SNkZUWDFpMWdocm5kMjBMTFhzSm5Pb091aTZoVDFkdzJSR3djQzQ3bjVlYTBGdmhOT28yUVlQaHBLM0J0R1FBVGdFVHhMQ25VenpITUtobFRKN0ZZalU4QklBbmdJZ0ZhRklBbUJTQUltSE5VclV3QlNOUk1TTkNlbXRVaUFER1FsaEtFa3BmUXgwSllYTGxqSEtuZUR0dDgvdVYxVXIzMjIvbmtzRXNzQ21wdFRHcVVKVEUxS2wzaEhjT3RScDgvd0FBZzFwcHFVWHBZaUFJWU5lSlUzV3gwZ3VidHROUVhsWHJtNytRV1Z4Sy9JZHFmQUtNWXdXaUFSSjlZNUJhYTVDMGFIRDZBWUNmSDFWL0RMZ3RibjFBSkk4dWFEV2J5Nm1BVEJjSlBncmRLbzBUU0JNQWFFN0htRTY1RlpjdmJyVFF5Q2d6aUhIVGRSWEdha2VKWWZPRXgxUUhVZVI1OXhTZVdtTnJhSklUZ21NZlBpcEFGYWFWRW10RGduaE5DZTFNQWVGSTFNYW50V0FTdFRrMXBUbGpHT2xLVUVGZXJ6VG5YVlhnbDBPR1VxQ2k5cTh2Z25mcjlUM1F0b3dYSmhVYndkdHZnVlZHSTFQZFQ2Ym52Y0NXeEhGSFFBcFNVb1RHQlIzcjRZU3BzWkVkeGVIMlFtUHhBTUVUNHh2Nm9SYzF6RWhWdXNKTWxJcDJXQ0Z6ZDVqM0E5eWpZMlNDZUJsUVcxTWs3SWhrMFdmSEE4eHZrSVlmaUJEeVoxQTlSeEN0VzJKSHJJSjRhRW5UdUhpczNWQkJEaHdVemFtYng0RllWd2FkMkl6TWVZL0JRVks3U05JSEdQOEFIQkFhZGR3L0ZQcVhPczhVcjJ6S2RCcTF2QVNPWTNSZGhsWXUzcjZnN0xYMlJsZ25rbnhjUFJQS3VDd0U4SnJVNEs1RWVFOEpvVGdzQWthbnltTlRrVEdITnNsRnNyMlZMbFV4OWxEOVhYQzJLdjVVb2FzQW9zdGVhc05wS2NOU3dzRWpERlV4VnZZOHdpQUNyWWkwZFc3ODZvUG9LN015MTBraExrQTFKMEhGUGJURFpLc010MnVHdXZjbDNvdksyVnYxNm5zQ1oreVZQYlhPZnNoVE10UndiSGVyTmxhOXNFQkI2UlZlWHNxM2dEQkJWU25kc0IxTUQ4OFVZdjdZT01GVXpoN05pSTVja0oxN0RXL1E0VVFSSU1qMVZPc04wWHRiRU4yUGlGV3hHMTRqbktYZklLNkI5dTJZVzVzbTlodmdQa3NoMkJCMksxdGhVek1Ib3FSL1JES21rV2duaE1DZUZabk9QQ2NFd0pRc0FsQlRreHFmS3hqTkFKUWxLNUlNSUFsU2dKVVVZYUVxVmRDQmpvVmZFR2tzS3NwdFlpREsxQlhaa2F4bnM4RmR0ekFDb1lxOEIwTjV5clZ2V0RteUZOOUhWamFMZGF2RzI1U1cxN2tJQU9wM0pIRlJBYXlWTUF3N3dnWFpMVnZnK1JNT0dvMDBQbXBMV3ZJZzdwdE5yWTBoUnhEZ2VlaUd3b3Y1b1ZLNWRxTzlUdEtyMWE3WUprY3ZNY0VpZklyMFFYOUVPYnB2cEtQNEJQVndlSDRMUFlVRDFtdkhkYTIwbzVSQ3JQWnk1WHdXQUU0SkFuSzV6RGdsQ1FKd1FNUGFucGpVNkVRR2ZYQUowTGtvNGk0Snk2RWRBRWhLbEFTZ0xHRWhWYjVoS3RwSHNTVnlocGVtWTNFYU1FcVBDSDlwelR4MVJER0tVRW9SUkVIUHlQcWgyaTZlbnNNWE5BUGJDcVU4T0kyY2ZPQ3I5Q29IRDh5RllwTkNUZWpvMG55RG1ZYy9UOW9SNFFFU29VbzNNOTVVZ1luQkxWTVBpa1IzZFVNYVR5Q3l0dk16eEprK2FQNG1jelR5UVdob1UyUG9sbDdOTmdkSWFFclRFY1ZqN0M3R3kxTms4dUdxTVZwOGtNazdMQVNwb1RncmtSeWNFZ1NoWUE0Sjhwb1N5c1lCZ0pRbElTd2dFU0YwSllTaFl3Z0NXRW9DdDJGZytxN0t4czkvQWQ1S3dVaW9HcDdLUkpnQWs4aHF0ZGE5RzZUQiswY1hIa0RBL0ZTMWVycGlLYld0OE56NThWTjJ2UlpZWDdaNTlqbUVPRENTSTd1S3g3cVJiUGN2UStsRnoremVlNGxZREZLbll6YzQrSlN6MlVjcElrdytwb2lsSnl6K0d2NEl5eDJpRnJrckQyaTJhdkpRUHFTVTF6bDFKcVFvanE0N0tGTnA2b3JjSFNVUFl3K3VxYVNXVGxpMGFHb2hhL0NtdUFFb05oZGtkQzd5V3d3SzJIc25VSDg2Y2tubCt3SGpmaVFoT0NNWG5SOTdSbXA5dHZMNlEvRkNTMGd3ZENPQjNYVW1uMGNkUTU3RkNVSkVvVENEZ25KQWxXQUJ3RXFRVm1uYVU2RmhqbDBKWVhMQkhVbUVrQWJsYS9Dd0tWSU5HNTFKNXJMV1poMDhrVW9YV2cvUEZEeVM3R1VVK2dwV3JvYmUxREc2ZldxalpRMW9JVytXUS9EUm04WFlYTWVQcWxaSEVLT2pXK0o5QXQ5WG9qWFJZSEhLcHB2eXdDUm1hUTRTSTBneDRRa245cjRLdE9jZkpEWTA5SlYvTkM3RGFFc2I0QlhXV2ZGVHQ4blJDNFJEUllUcVZOa1ZucXduNVVnNEZ4RTdOOTRnYW1OKy9naVdINGRtZTRrUXhweWp2STMrUGozYUlSaTl2VXFFbGpTNWpDR0Z3MkRuUm9mVWVxMmxoWjlYVGF3ZlJBSGllSzZQRktVdnM1SFRkTnIwT1lCb0lSckNJekJDbU5QSkZMTFRkRDRaZktFK2UxMmJLMHJCTXhQRHFkVnBMaEJIMHh1UHp5UXUwcmpjblFjVTQzeHFhN05HdzU5NVErSFQybVAvQU5DcGFhTTllV3BwdWlaSEE3U1BCUWhHOFVwaDFQdmJyK0tDQlVUMzBjMVMxMlBDVk5DV1VSVEVZVGNoejNGczVNbzArc0NaZ0xSTU9pR1dGcUdNYUlnZ0NmRTZuNHEvU1FHMW9tU3dsQ1VJbUV6eDVxV20vc251TXFyWFVkTjVBY2txTmxveWVQWVlOVFVhcVIxVWVxRzIycGI1SzdjTjJXV0pHZWRqS2p3c3hpMkhNcVhCQmFIRjFGNUFNanROSTFrYWpROGp0c3RLUkt6SFNTN1pTcU56dExnNm00UU11K1lFSHRBcDhlTkt1QmF5dWxwbFRCMy9BTEp2Z2lhbzRSU2lreWVTSUFMbHlmMHp1aitVTkNaWDBhNTJ3YUNTVmNvV3hjZFBNb1gwdXJFTUZKZ0pIdFBJQk1BYkZ4NENma214dzdwSUdUSXBSWndpMUg3SVpkY3ZXMUNZSm1UbDRiU1pFRWc1UWQ1blRzYXM1MFZzeTJpSHVKbDJvbldHL1JIY09NZDZQdHFrS3VhSFQ0T2JGbG1WeVdxVk5Ua0NZQ2dwWEdteXRXdFFBRjA4RkhWU1czRkVGMDR5R05QZDRrcTNjM0dUTFNid0hhS0gydFh0T2Z5MWxWRzNNa240bytWWHdCekVjaGNWa05jSUpDVmxTVXRjNnozS3NRMTJjMlcxVDRPQ2VvMmxQVGtRRUhUcXBtSmpXTjk0S1pvYjd3K0tDSEhCUEM1b2I3M3dLbGFHZTk4RnRtSUR1b2F0UGVOQ1FuM1pod3luZ21QcWFTcFdxVDJpK09wYTFRV3dTeXpkb2tDQkFuaVVYclc0STFqeVdMcFhqelZhd2V5TzFJK1JDMGx2VmZHcFdTdWhxcUplanF0R0ZrT21WaDFqbVFTQzFsUjNzbDA1Y21rTjE0N3dWc0tsVXJPWTlVR2VrU1dOanJBQzR0YUpMUm9YT2FZMEIyRXFtT0tWYkV2SkxuU0VzTGJyS0ZKdzBkMWJQQTZEZjhWTFF3NTA5cUFPUTFKVE9qdFQvd0J0VEdtalkzNUVqN2tUYTlTckZXMlZuUE9qZzBBUnNBc3hTUFd1YzlwTTFubWtJSkVVMmpjd2VVbnRBeUhpQ05aSTlLc1I2dWdRRDJuOWdlZS93VlBvVlNjNW9lOHlHQTA2WVBCdWhPdktWVEhMaUhURXVwdWtrYU9uYmdBQWJEUUJQRk04bGFwVWdyTFdzRzZtczFleG5nbDlBdDNKZGV2eXNpVVU2cW0vUnBFb0ZpOU02RGJ0QUh1R3NwL21uMlRlQ2wwUnNlY2dFNmt5ZkRnbnRCMkM2Z0lFK25nckxHcEhsWHBEcjhkKzJOYTB3cENKVFN1cDF5Mlk0clRrcW1ESmltWkpXVXp5VXZVbmtxN2JsM3ZIMUtuRmQzdk85U3JIS1pyTW5oeXgzNi9WOTkzcWtOM1U5OTM5UlE4UnphdGVwV3ZXRzY5L3ZPL3FLa0QzY3o2bzZNYm1KVUZacENxWUxVaWsyWjQvTXE1WGZvb3U2azZKeHphSitqVnNIUGVUdTJJNWF6K0MwVHJjb1IwYmREWGQ3dmtBanBxSS9LMEg0SktOV2tWayttOW81MUp1VnBKRHhvQkoxQkd3V3lxRkJla0EvWlNOdyttZitiWjRqZ1R4SGlFMFpuNW9Tc0NVdGdqb2hKdHdOZEhPSG9mOG82R0hraG5SbDRKcmhwa0NxU08xbTlwclQ3VW1kWjRuWkZNVHVoU3BQcUg2SUpqbWVBOVUxWkg1dGFGbkNuTzltYnhHc1M5Nyt5NE4vWU1ZUTBoNzNRWGRsdzdVZG1ZSWdTZGRrZHd1eUZLbTFnNEFmNVdkNkd0ZFdKTHdNckhGNUkwTDN1MUdhTkhaWk1FNjZqa3R1MmdFK1RJcGZpeEp4VlMyaUJvaFIxQVQzcTRiZnZUVFFTZVVNUGhra0RYUUxSbVpNaldCeEhHQnpRNjR4UjFXbzFzeUFKZUlJUGQ5Nk8zdGxJbVk1RUZaNTFzOXRZbHp3K1c4QnRxcDBvMlZtOG5RV3BWVkxuS2dvc0tuRFBKTXZqUXJlVi9aRzRsUTN0UXNwdWNJa0NkZHQrS3VOb3FoamptaWk4R2ZaTzNQaFBkTUxmSlBTQThWYTJ3UTNIcW5Kbm9UL2NpMUc2cnVhSERxNElCRy9FVHpXRWRVVGMvNTBWdEVHY0dwd2FuUW5RbEdPYUZLQnNvd21YVlV0YVlNSGgvaEFKcUxaK1JvYTdrTmZIWDcwbHpXSE5DTFRwRlRxUUt3eU8yekQyVDM5M21uWHJRQkljQ0RzUVFVdXFSMEw0cVhlbUh1amQ1cTlrNmdodzhEcDkzeFdpRmN4dXZOTUl1c3R4VHl1R3BqeEJHeFcxYmZ4dTM0b3RwZGl6aXEyL2o1Q2pxeDVxaGk1YzZqVUFPdVVrZUkxSHhDakdJajNmaW4vcnpUdUR0M0xLbzJGNE0vMHdIME14SjlSOVV2ZG1jN0tTWUFtQkEwYUFOa1c2UVZRN0xUYzNNd0IxU29ETVpHNkNTM1VhdUJrVDdPM0VCTUx5MHFyU0FHaHpJTWU4eHhhNGtTWU8zTHdDWmYzb3EzTDZVU0hDbXllQURUbmZMVDQ2SFFnamtTRlp6THZaSDkxT3ZScU9pOXUybFFhSXlsM2JJM2d1MWllTUNCNUkyMTRRNms3UUpYVkZDOFNwN0huTTVXdEJBMUZGVXFCRFgxeUZYZmNubXBQRTBXWDVDK2llN3BCMDZ4M3JOVjJpbldhV3VMZzdRendPK2hSVjFjYnVnb0hqTitKWUJ1SENFVmgrMksvd0FoK2thYWkvUlR0ZUVHb09FYXVhUDVnclRhMU1meEdudWJMdmtzc1graCtkdnBCRjFkbzcwTnhLazZxeDdHd0M0RURsUEFFOEU1MXczZ0RITjJud1FuR01TSXBPeUhLSWpNZEM3dWFQdlJtWlQ0NU0xYlc2NFJrbk9TU21rcHVaZEp5QkVCT3lwK1Fwd2J4VXhoaldvdmdWa0t1ZjhBWWRkQkFsMlVVMm1KMWM0SFhYWm9KOVVPRFVmc2NOdXF0RnMxeFoyOGRrRFNvK1RKZTUwakxKMWlkdUNaQ3NwWXAwWUpIN2lrejdGUTZmOEExaVZrTC9EVFRPb0k4UUNQVnMvRmJLNTZNMW96VUw5MVNPQmU0ZytKRGlQZ2dkemIzalFldHA1Z09KTFFUNFJ2NkltQWRyRFhCeEowN1F5OFNOUU81Yks0NlZCMzdpaTk1NzI2RHhpU3M3WTM5T20xN2Fsdm16Z0VlV28zQTA3d3JHSGRJQXdnZFVBeWRRMzJ2TFlJTkRKdEV6ZWwxVUdIMDZaUEtDMGp4QmxXS0hTeHAvZVVZSE5objRhTFNXT0kyVnlNc3NKUDBLalFENUIyL2xLaHZ1ZzlCOGxoZFNQZDJtLzB1NGVCQzNpbUZaS1hUWm42bUlVNmxVRm1nQWNaSmlaZzVZTzBFRSthczRWWWcxWE9FeVFKelJ1UkppT0czZWhtTDlHNmxxV2w1RDJGd0FMZCtjRnAvd0FxaFF4aXRUcUZ6WGtHU1MxMm84Q0hKbWxvTTViVDRmOEFwNkl5MGVCb2ZRcEgxS2pkNTh3cy9aOVBYQVJVb2dubXgwVC9BQ3UvRld4MHpZN2VsVmIvQUNnL2VvUEZycG5Rdnk5LzNLWmRxWHJ1UVZWMVo1Mkh3WE42VVdwSHRuK2gzNEtHcDB1dDJuc3RlL3dFZitSQzNoWDJCNThmcUNiL0FFdXE4YXV5ajg4QXFkejBjWTh3S2hEaDlMZUQ0VDk2clh2VFp4RU1wQnZlNTBuMEFIeldjcVlqV0x5L080RTd3UzBlZ0tkUm9sV2FxV3RKR3NaMGR2Ryt4VW91NzNOQVBxV241cVIxQy9waVhNcHVBNU9BSHlFSVBoRnhmMXRLVlJ4QTR1eTVaNVNRallHS3QvMi9NdEtiU0plZEwyRExuRlQvQUJyZDM4cjVId01JZGRZclNQc1c3UWZlZjJpUEpXTVR3KzhxT0pxRmhQSVBwajRTRU0vMHVvUGFibEhNdWIrS09rYmUreG1aY21rNjZMcFJNYVVVazhVbG9ydm80OXZzRVBITFozNEg0SVZWb0ZwaHdJUElpTlBOUlRUQzB5cUFBZHMwd01vK2tTWUE4OXZORXF1SFdibkUzOTNucmNhYkhISlMrbzBOQmlOQncyMlM0VGg3NjFWbE5oeVRKTHh1MEFhbHZDZG9QQW1WdktIUkcwWTNLS0ZJNmFsekd1SjczT2RxU21WSmRoV09xNlI1clY2TjRmVmRGQzh5dU96WFFaUElTR2srcUNZalRyMmIrcmMvT3gyMnB5a2R3UHN1SEpiZnBiMEtvbHBkUkFwUEEwYU5LYnU0dCtqNGo0ckhmckhYMjdxZFUvdEtXeE9ydE5OZVowTFNuN0VhYTRaV3NzZGd0RDJCelJwb2RZOER4V3RyNERiM2RNVkdHQ1JvOXZ5YzNqSEk2aFVyM29zMnJiMDMwWU5RTkd1d3FDTlI0OGo1TE4yZC9jV3J5R2wxTnc5cGpob2ZGcDBQajZGWXhjeERvaGMwd1NHaXEwY1dIV085aDE4aEtxMmVLWFZ0N0xxakFQb3ZEc245THhBOG9XanN1blgrOVJuNjFNeC94ZCtLTjIvUzIwZDlKdzdpeDMzQWhIUnRtSHZNZHVMaGhlNHNpbVd1MEJHcmpsRWJ6OEZBM0hISDk1VFpVOGRQeFc2eExxcXRJdmFLUFZHbzFyaVdqTVNPMGRTQkhCRFRnRm5VMmFCOWw1K1FjZ2JnRDJIU0NnemVpNXArcGtJK01LL2Q5STdSN1lMYWtqYnNpUjV6SHhWczlFYldOTTAvYlA0b2JkOUVtRDJhaDhNelorS0drWURYdDVRcUhWamg5YUFEOERyNXBiUEQ2RC80eEhkMlFmaWlscjBkb1QrMGZVOGkwRDVLL3dEK21yRWFsNWo2MVNGZzdJTFcwczZMTXhlQzdtNGdueUFXWnhKMmR4Y3hyZ3poSS9NZUMxRGFHRzB0YzdYZUJMLy9BQkJsWHJRQzVFVTZaYlM0T0lpZnN0KzlCdEpiWnBUcDZSbkxHbldwZ0drOXpaK2pNdG53STBSSHFjU2NKenVqbU1rZW9XdnQ4SlkwRFJXS2RJVS9aMDd1SG1GenZMWG82L2hrODdxNE5lVm5RODUvL2twNmVXYlQwVWQzZ3RXM2FYbTNEWSttWEIvb0c2QmVqM05haFVFUFkwa2NDQWZNRmVlZEs3NEYvVnMwWnlrd1U4WktwNko1TVV5dG96OHJwVFFuUXJrRDN3c1VWZTBhOFE1b0k1RVNyUjBDUmNoMGEyRExDazIzcUVzSGFjSUFKa05FeWUvbDZJcWNWY0JyQjd0dlFxc2FJTHBrVENaV284RnRiTFMzSzRKTHB3cU1sdW9Qd0s4dnhpdzZ1OGthQWh6bnQ1WlluMTBLMDF6aTlTM3FkZ1p3NDlwaE1EVFROUDBmRmRlMzl2ZHRkTk43SDVTMXRSb2E4aWVBYzA4OWRZMjRKNXZ4NFltVEU3NVJtYlBHYXRsVURYZHVtOENvV3o3eEp6TVBBOTIzeldycFgxamVOQWRrY2VEYWdEWGp3blh6QlhuMDFtUDZsNDZ4clRBYThTMGptd25VQWprVnByTG94U2VBOWhMWjNZN1dEeUR0NDlWZmFPUm8wR0Y5QzdZWEZKN1d1Z09rc2NjN0NJT2hEZ1NmVkg4UTZHV1ZjRU1ZS0xwOXFubEU5eGJzUjZGQnVpMkhHM3JCeGNRME5kMlE0NWRSSHM3U3RZTVJiNzNyQithZWNqWFFqblppc1QvUjVWWXc1TGdPWURteXVhNXVzUk9tYmhIcDNMUHUvUi9WcU5scjdjT25ZdUl6ZjhWNnJXeFBzdWdnbU5QRlVyU3M4dkFxQnJnZU9VU1BOTzgvR25veXh2dEhpOXgwWHVtdmRUNmt1TERsZGxMU0ozM252SHF1WjBTdWovQWp4ZFRIOXk5RXhLNWVLdFV0cGtndmNabUoxMzI3a05yWXZYRzFBSCtjL3dENVVYYzdIMDlHVFowTnVqOUJnOFhqN3BVZzZHWEExSnBEK1p4L3RSZDNTSzdjNE1aYnR6SGdDNTBlSjBBSGVWbzhNc3FwYURYTFM3ZUdnaHJlNlNkVDNwYXRJYVlxaks0TDBNSmVIVmlDd2ZSYlBhUGVTQnA4MXZLRnFHQUFBQURrbjVtc0NHWDJMZ2NWelhUZkxPdUlVcmd2WEZ3QWdHSjR1RzhVSnhMR3VBTXlxdHZoN3FuYXFrZ2U3eDgrU3lsczFXcEVwMUgxM3lKRFFaSkdua0VhWXdhY29YVTZiUUlBQUVhQUp3VlVrdURrdW5YWmwra1ZFZGNCQUhZYjh5anYrbFVQOXVuNkJCc1dFM0lIMkI4ZjhyVEduM0ovUXBzTHQrcldqaVpqdUgvWVM0bGNGb3lnU1FQejRwTDF3YTVqdVVoTXVxWnFhdGVCeU1UcjVIWlRSM1krZ2RoTisyby9zbVpCSkIzYVFRSVBxaUY3VmpWQitqRmthZGVxSGp0RUNEd011Sk1IaU5rWnhTZ1M1a2JCd0xodVMzazBjenA4VVV1VFcwa1B3ckQyeU90WVdaaG5MamxrRGhtOTFGK29zZHNqUzZKbHpESkhQTVJzb01SeEFrak5EbkRaZzFaVCsxN3ovZ0VJcTFTU1NUSk81S3R3Y2UyeE1TdHFEajJLWTA0Nng1QXFxWWJvTkYxZTRBUVc5cmh4aHBKZHRBUzZCc251c1Nnd0pYV2pYdklJR2lrdy9CL3BWRHJ5bEV6V2EzUm9DRlVsME5LWlBiVUEwYXF5TGhDSDNYTXAxRzRCT2huN3ZGY3o3TEtRcm9lU2hyTUcwRDBWVjl4Q3JWOFFoYll5eGxzTlkzZ0I4RU52c1Z5NkNFS3hMRjQ0cks0ampSTWdMVHVoM3FFSE1ReDB4dXM1ZVlzVHNVTXExaTdjcGpRclRpU0lWbWI2TEZPNWNIQnczQm4wVzlwR1IzRUEvZXN0aFhSZThydEQ2TnZVZXc3T0dVTk1HRHE0aGJLdzZINHBBQnAwMmdBRHR2Wi9aS05OZlpQVFpDd0tTTkZvTFBvUGRuOTQrZ1BzbDUvdFJWblFjL1NxK2pmeEtUem43TW9wbmsxNjJic2ZicC9KcTAvVm52V3VaK2p1MzZ6clhWS3JuU0RBTFFKQWozWjRjMFZIUlMzK3YvVi9oQjVwRytHaDJLVWFWRmhhOE5mVUkwMEdWcDRHT0t6dzZSdG9FWjdXZytUSFpibFBycjhrWjZUVm0xS25aRWdHSjRFK1BKWis0cGc4QXVqWDBLcSt6YllQalZoVWpOVGJTZDlkclludWQvMG1kSWNYcE5tblI2dWZwVk96RGU1dk05L0JZRjdWVXEweXMyTDJIYTlkZy9pTi9xRW9WYzN3bUd1YUI0aVQvaERuMDFHYVNtNytoa2lMRXJ0eG1YTkRlSkpPbmZEUnFwYkRGTGFrMldsejNIZDJVeWZDWUFDRzR6VC9BR1QvQUFLeVZPNGMzUUVxa3Awak5wUGszVjEwbGU3UmxQVHZQNEtnTCs0ZWRYQmcrcTBPUHhjRm5xT0p1RzZzTXhYOHlwdUtSZWF4aHVwYnVmcG1mdzdSZEhvMEQ3eXJscGFsb2dHZkZDTFRFeTdRUjk2Sy9yb3B0bDN0SFJyUnE1eDVBS043NjBXVGxMZXkyeHhBMU9uZVVIeEhHR2dkbVhSeEEwOVZvY093Q3BYZzFtd0RxS1FQcG1QRXJXMlBRMmdCMnFZSGMwa0Q0RmMrMG4rd3J2ZlI0VmQzTG5uWGJrcTNWbGUrWFA2TnJLcHJrZXc4MlBqNEVFRkRxMzZJS0I5aTRxajdUV09Id0RWMHorUmpPYXBwOW5pblZKeldMMVc2L1E1WC9oM05KM0lPWTlueEJjaE54K2luRVc3TXBQOEFzVlIvZUdxcXpRL1luaXpRL281eE0wYU5KcnYzYm02L1ZKSjEvRmVsalVTRjRmaGZXMlZiOVR1Z0dFZ09aMm11eWw4d0NXa2lDUWRPZmlGNmQwWHhYK0M4L1lKNWNseDJtbXpxaHBvMHpVcVlPU2tDVVlqY3hKcjNLVXB1VkVKLy85az1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LiBIZXJlIGlzIHRoZSB0ZXh0IHRvIHJlYWQuIEhvcGVmdWxseSB0aGVyZSB3aWxsIGJlIG1vcmUgdG8gc2F5IGhlcmUgYnV0IHRoaXMgaXMgY3VycmVudGx5IGp1c3QgZmlsbGVyLCBhbmQgYSB0ZXN0LkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcnRpY2xlc0ludHJvLm1hcCgoYXJ0aWNsZSwga2V5KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdEaXZcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvYmxvZycsIHF1ZXJ5OiB7IFVJRDogYXJ0aWNsZS51aWQgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID57YFxuICAgICAgICAgICAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1haW5JbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9uYXR1cmUtcGxhbnQtbGVhZi1sZWF2ZXMtNjU4My5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tYmlnRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLW1pZFNpemVGb250KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsTWlkRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1kYXJrR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo4MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXdEaXYgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuKTtcblxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludClcbiAgICAudGhlbigoYXBpKSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucXVlcnkoXCJcIik7IC8vIEFuIGVtcHR5IHF1ZXJ5IHdpbGwgcmV0dXJuIGFsbCB0aGUgZG9jdW1lbnRzXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgICBhcnRpY2xlc0ludHJvOnJlcy5yZXN1bHRzLnJldmVyc2UoKS5zbGljZSgwLDMpXG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=pages/index.js?entry */'
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJMYXlvdXQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVUlEIiwidWlkIiwiZGF0YSIsImltYWdlMSIsInVybCIsImFydGljbGV0aXRsZSIsInRleHQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBcGkiLCJ0aGVuIiwiYXBpIiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQUpuQixJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCOzs7QUFLbEIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDsyQkFDRixjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQTsyQ0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esb0NBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEosQUFDQSxBQUVJLEFBRUosa0RBQUEsY0FBQTsyQ0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSx3RkFBSyxLQUFMLEFBQVMsc3ZSQUFUOztzQkFBQTt3QkFGSixBQUVJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSSixBQUtBLEFBR0ksQUFFSixnc0JBQUEsY0FBQTsyQ0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBRUs7QUFGTDtBQUFBLGFBRUssQUFBTSxjQUFOLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxLQUFNLEFBQ3JDOytCQUNnQixjQUFBLFNBQTRCLEtBQTVCLEFBQWlDLHdDQUFqQyxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLE1BQU0sRUFBRSxVQUFGLEFBQVksU0FBUyxPQUFPLEVBQUUsS0FBSyxRQUEvQyxBQUFZLEFBQTRCLEFBQWU7MEJBQXZEOzRCQUFBLEFBQ0k7QUFESjsyQkFDSSxjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUNJO0FBREo7QUFBQSxrREFDUyxLQUFLLFFBQUEsQUFBUSxLQUFSLEFBQWEsT0FBdkIsQUFBOEIsZ0JBQTlCOzswQkFBQTs0QkFESixBQUNJLEFBQ0E7QUFEQTs0QkFDQSxjQUFBO3VCQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxtQkFBSyxBQUFRLEtBQVIsQUFBYSxhQUFiLEFBQTBCLEdBTDNELEFBQ2dCLEFBQ0ksQUFDSSxBQUVJLEFBQWtDLEFBS2pFO0FBeEJULEFBQ0ksQUFVQSxBQUVLO2lCQWJUO2FBREUsQUFDRjtBQUFBO0FBRFo7O0FBMkVBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7UUFBQTtrRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FBQTttQ0FDRixBQUFRLE9BQVIsQUFBZSxhQUFmLEFBQ2pCLEtBQUssVUFBQSxBQUFDOytCQUNJLElBQUEsQUFBSSxNQURBLEFBQ1gsQUFBTyxBQUFVLElBRE4sQUFDWCxDQUFzQixBQUN6QjtBQUptQixBQUNGLHFCQUFBOztxQkFBWjtBQURjLG1DQUFBOzt1Q0FNRixJQUFBLEFBQUksUUFBSixBQUFZLFVBQVosQUFBc0IsTUFBdEIsQUFBNEIsR0FOMUIsQUFLYixBQUNXLEFBQThCO0FBRHpDLEFBQ0g7O3FCQU5nQjtxQkFBQTtvQ0FBQTs7QUFBQTtnQkFBQTtBQUF4QixBQVVBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVcifQ==