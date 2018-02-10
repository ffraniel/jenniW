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
        className: 'jsx-2624693365' + ' ' + 'index',
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
        className: 'jsx-2624693365' + ' ' + 'hero',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-2624693365',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'Jenni Whitehead'), _react2.default.createElement('h2', {
        className: 'jsx-2624693365',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'Education/Social Work/Policy')), _react2.default.createElement('section', {
        className: 'jsx-2624693365' + ' ' + 'intro',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h2', {
        className: 'jsx-2624693365',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'All this content is gathered over x years...'), _react2.default.createElement('img', { src: 'data:image/jpeg;base64,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', className: 'jsx-2624693365',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-2624693365',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test. Here is the text to read. Hopefully there will be more to say here but this is currently just filler, and a test.')), _react2.default.createElement('section', {
        className: 'jsx-2624693365' + ' ' + 'preview',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, props.articlesIntro.map(function (article, key) {
        return _react2.default.createElement('div', { key: key, className: 'jsx-2624693365' + ' ' + 'previewDiv',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            }
        }, _react2.default.createElement(_link2.default, { href: { pathname: '/blog', query: { UID: article.uid } }, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
            }
        }, _react2.default.createElement('a', {
            className: 'jsx-2624693365' + ' ' + 'linkToArticle',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 25
            }
        }, _react2.default.createElement('img', { src: article.data.image1.url, className: 'jsx-2624693365',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        }), _react2.default.createElement('h3', {
            className: 'jsx-2624693365',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, article.data.articletitle[0].text))));
    }))), _react2.default.createElement(_style2.default, {
        styleId: '2624693365',
        css: '.mainImage{width:100%;}.hero{height:100vh;max-height:400px;width:100%;background:url("../static/nature-plant-leaf-leaves-6583.jpg") no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:absolute;border:solid 1px rgba(0,0,0,0);}.hero h1{font-family:var(--mainFont);font-size:var(--bigFont);padding:1% 5% 0% 10%;}.hero h2{font-family:var(--mainFont);font-size:var(--midSizeFont);padding:0.5% 5% 0% 10%;}.intro{padding:0 15% 0 15%;}.intro h2{font-family:var(--mainFont);font-size:var(--smallMidFont);}.intro p{font-family:var(--mainFont);font-size:var(--smallFont);color:var(--darkGrey);font-weight:800;}.preview{padding:0 15% 0 15%;}.previewDiv a{font-family:var(--thickFont);font-size:var(--smallFont);color:var(--blue);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0MsQUFNbUMsQUFHRSxBQVllLEFBTUEsQUFNUixBQUdRLEFBSUEsQUFNUixBQUdTLFdBMUNoQyxFQUdvQixPQXdCcEIsQUFhQSxRQXpCNEIsQUFNSSxBQVNDLEFBSUgsQ0FTQSxDQXZDZixXQUMyRSxZQVdqRSxFQW1CQSxDQVNKLENBdEJNLENBUzNCLGdCQWJBLEFBMkJBLEdBVG1CLEdBWm5CLGFBYUEsa0NBL0JrQyw4QkFDSCwyQkFDRix5QkFDSCxzQkFDTyw2QkFDSSwrQkFDckMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcmlzbWljID0gcmVxdWlyZSgncHJpc21pYy1qYXZhc2NyaXB0Jyk7XG52YXIgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vSmVubmlXLnByaXNtaWMuaW8vYXBpL3YyXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleFwiID5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SmVubmkgV2hpdGVoZWFkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkVkdWNhdGlvbi9Tb2NpYWwgV29yay9Qb2xpY3k8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BbGwgdGhpcyBjb250ZW50IGlzIGdhdGhlcmVkIG92ZXIgeCB5ZWFycy4uLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeE1URWhVVEV4TVZGUlVYRnhVVkZ4VVhGeGNYRnhjWEZ4Y1hGeGNZRnhVWUhTZ2dHQm9sSFJVWElURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHeTBsSHlVdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFSQUF1Z01CSWdBQ0VRRURFUUgveEFBYkFBQUJCUUVCQUFBQUFBQUFBQUFBQUFBRkFRSURCQVlBQi8vRUFFTVFBQUVEQWdRQ0J3UUdDUVFCQlFBQUFBRUFBaEVEQkFVU0lURkJVUVlUSW1GeGdaRXlVcUd4UW1KeXdkSHdCeFFqTTBPQ2tzTGhGVk9pOGJJV0pJT2owdi9FQUJnQkFBTUJBUUFBQUFBQUFBQUFBQUFBQUFFQ0F3QUUvOFFBSXhFQUF3QUNBZ0lDQXdFQkFBQUFBQUFBQUFFQ0F4RWhNUkpCRTFFRUlqSmhGUC9hQUF3REFRQUNFUU1SQUQ4QXl5NkVwWEJUMkVSS0Z4Q1ZBeDBLamVEdHQ4Q3I2cFhudHQ4MFFFekFwZ0V4Z1VyUWxZUlFuZ0xnRk5ScEVtQXNZamExVE1vRTdEMFIvRHNDYVJMblI2RlRYMWkxZ2hybmQyMExMWHNKbk9vT3VpNmhUMWR3MlJHd2NDNDduNWVhMEZ2aE5PbzJRWVBocEszQnRHUUFUZ0VUeExDblV6ekhNS2hsVEo3RllqVThCSUFuZ0lnRmFGSUFtQlNBSW1ITlVyVXdCU05STVNOQ2VtdFVpQURHUWxoS0VrcGZReDBKWVhMbGpIS25lRHR0OC91VjFVcjMyMi9ua3NFc3NDbXB0VEdxVUpURTFLbDNoSGNPdFJwOC93QUFnMXBwcVVYcFlpQUlZTmVKVTNXeDBndWJ0dE5RWGxYcm03K1FXVnhLL0lkcWZBS01Zd1dpQVJKOVk1QmFhNUMwYUhENkFZQ2ZIMVYvRExndGJuMUFKSTh1YURXYnk2bUFUQmNKUGdyZEtvMFRTQk1BYUU3SG1FNjVGWmN2YnJUUXlDZ3ppSEhUZFJYR2FrZUpZZk9FeDFRSFVlUjU5eFNlV21OcmFKSVRnbU1mUGlwQUZhYVZFbXREZ25oTkNlMU1BZUZJMU1hbnRXQVN0VGsxcFRsakdPbEtVRUZlcnpUblhWWGdsME9HVXFDaTlxOHZnbmZyOVQzUXRvd1hKaFVid2R0dmdWVkdJMVBkVDZibnZjQ1d4SEZIUUFwU1VvVEdCUjNyNFlTcHNaRWR4ZUgyUW1QeEFNRVQ0eHY2b1JjMXpFaFZ1c0pNbElwMldDRnpkNWozQTl5alkyU0NlQmxRVzFNazdJaGswV2ZIQTh4dmtJWWZpQkR5WjFBOVJ4Q3RXMkpIcklKNGFFblR1SGlzM1ZCQkRod1V6YW1ieDRGWVZ3YWQySXpNZVkvQlFWSzdTTklIR1A4QUhCQWFkZHcvRlBxWE9zOFVyMnpLZEJxMXZBU09ZM1JkaGxZdTNyNmc3TFgyUmxnbmtueGNQUlBLdUN3RThKclU0SzVFZUU4Sm9UZ3NBa2FueW1OVGtUR0hOc2xGc3IyVkxsVXg5bEQ5WFhDMkt2NVVvYXNBb3N0ZWFzTnBLY05Td3NFakRGVXhWdlk4d2lBQ3JZaTBkVzc4Nm9Qb0s3TXkxMGtoTGtBMUowSEZQYlREWktzTXQydUd1dmNsM292SzJWdjE2bnNDWit5VlBiWE9mc2hUTXRSd2JIZXJObGE5c0VCQjZSVmVYc3EzZ0RCQlZTbmRzQjFNRDg4VVl2N1lPTUZVemg3TmlJNWNrSjE3RFcvUTRVUVJJTWoxVk9zTjBYdGJFTjJQaUZXeEcxNGpuS1hmSUs2Qjl1MllXNXNtOWh2Z1Brc2gyQkIySzF0aFV6TUhvcVIvUkRLbWtXZ25oTUNlRlpuT1BDY0V3SlFzQWxCVGt4cWZLeGpOQUpRbEs1SU1JQWxTZ0pVVVlhRXFWZENCam9WZkVHa3NLc3B0WWlESzFCWFprYXhuczhGZHR6QUNvWXE4QjBONXlyVnZXRG15Rk45SFZqYUxkYXZHMjVTVzE3a0lBT3AzSkhGUkFheVZNQXc3d2dYWkxWdmcrUk1PR28wMFBtcExXdklnN3B0TnJZMGhSeERnZWVpR3dvdjVvVks1ZHFPOVR0S3IxYTdZSmtjdk1jRWlmSXIwUVg5RU9icHZwS1A0QlBWd2VINExQWVVEMW12SGRhMjBvNVJDclBaeTVYd1dBRTRKQW5LNXpEZ2xDUUp3UU1QYW5walU2RVFHZlhBSjBMa280aTRKeTZFZEFFaEtsQVNnTEdFaFZiNWhLdHBIc1NWeWhwZW1ZM0VhTUVxUENIOXB6VHgxUkRHS1VFb1JSRUhQeVBxaDJpNmVuc01YTkFQYkNxVThPSTJjZk9DcjlDb0hEOHlGWXBOQ1Rlam8wbnlEbVljL1Q5b1I0UUVTb1VvM005NVVnWW5CTFZNUGlrUjNkVU1hVHlDeXR2TXp4SmsrYVA0bWN6VHlRV2hvVTJQb2xsN05OZ2RJYUVyVEVjVmo3QzdHeTFOazh1R3FNVnA4a01rN0xBU3BvVGdya1J5Y0VnU2hZQTRKOHBvU3lzWUJnSlFsSVN3Z0VTRjBKWVNoWXdnQ1dFb0N0MkZnK3E3S3hzOS9BZDVLd1Vpb0dwN0tSSmdBazhocXRkYTlHNlRCKzBjWEhrREEvRlMxZXJwaUtiV3Q4Tno1OFZOMnZSWllYN1o1OWptRU9EQ1NJN3VLeDdxUmJQY3ZRK2xGeit6ZWU0bFlERktuWXpjNCtKU3oyVWNwSWt3K3BvaWxKeXorR3Y0SXl4MmlGcmtyRDJpMmF2SlFQcVNVMXpsMUpxUW9qcTQ3S0ZOcDZvcmNIU1VQWXcrdXFhU1dUbGkwYUdvaGEvQ211QUVvTmhka2RDN3lXd3dLMkhzblVIODZja25sK3dIamZpUWhPQ01YblI5N1JtcDl0dkw2US9GQ1MwZ3dkQ09CM1hVbW4wY2RRNTdGQ1VKRW9UQ0RnbkpBbFdBQndFcVFWbW5hVTZGaGpsMEpZWExCSFVtRWtBYmxhL0N3S1ZJTkc1MUo1ckxXWmgwOGtVb1hXZy9QRkR5UzdHVVUrZ3BXcm9iZTFERzZmV3FqWlExb0lXK1dRL0RSbThYWVhNZVBxbFpIRUtPalcrSjlBdDlYb2pYUllISEtwcHZ5d0NSbWFRNFNJMGd4NFFrbjlyNEt0T2NmSkRZMDlKVi9OQzdEYUVzYjRCWFdXZkZUdDhuUkM0UkRSWVRxVk5rVm5xd241VWc0RnhFN045NGdhbU4rL2dpV0g0ZG1lNGtReHB5anZJMytQajNhSVJpOXZVcUVsalM1akNHRncyRG5Sb2ZVZXEybGhaOVhUYXdmUkFIaWVLNlBGS1V2czVIVGROcjBPWUJvSVJyQ0l6QkNtTlBKRkxMVGRENFpmS0UrZTEyYkswckJNeFBEcWRWcExoQkgweHVQenlRdTByamNuUWNVNDN4cWE3Tkd3NTk1UStIVDJtUC9BTkNwYWFNOWVXcHB1aVpIQTdTUEJRaEc4VXBoMVB2YnIrS0NCVVQzMGMxUzEyUENWTkNXVVJURVlUY2h6M0ZzNU1vMCtzQ1pnTFJNT2lHV0ZxR01hSWdnQ2ZFNm40cS9TUUcxb21Td2xDVUltRXp4NXFXbS9zbnVNcXJYVWRONUFja3FObG95ZVBZWU5UVWFxUjFVZXFHMjJwYjVLN2NOMldXSkdlZGpLandzeGkySE1xWEJCYUhGMUY1QU1qdE5JMWthalE4anRzdEtSS3pIU1M3WlNxTnp0TGc2bTRRTXUrWUVIdEFwOGVOS3VCYXl1bHBsVEIzL0FMSnZnaWFvNFJTaWt5ZVNJQUxseWYwenVqK1VOQ1pYMGE1MndhQ1NWY29XeGNkUE1vWDB1ckVNRkpnSkh0UElCTUFiRng0Q2ZrbXh3N3BJR1RJcFJad2kxSDdJWmRjdlcxQ1lKbVRsNGJTWkVFZzVRZDVuVHNhczUwVnN5MmlIdUpsMm9uV0cvUkhjT01kNlB0cWtLdWFIVDRPYkZsbVZ5V3FWTlRrQ1lDZ3BYR215dFd0UUFGMDhGSFZTVzNGRUYwNHlHTlBkNGtxM2MzR1RMU2J3SGFLSDJ0WHRPZnkxbFZHM01rbjRvK1ZYd0J6RWNoY1ZrTmNJSkNWbFNVdGM2ejNLc1ExMmMyVzFUNE9DZW8ybFBUa1FFSFRxcG1KaldOOTRLWm9iN3crS0NISEJQQzVvYjczd0tsYUdlOThGdG1JRHVvYXRQZU5DUW4zWmh3eW5nbVBxYVNwV3FUMmkrT3BhMVFXd1N5emRva0NCQW5pVVhyVzRJMWp5V0xwWGp6VmF3ZXlPMUkrUkMwbHZWZkdwV1N1aHFxSmVqcXRHRmtPbVZoMWptUVNDMWxSM3NsMDVjbWtOMTQ3d1ZzS2xVck9ZOVVHZWtTV05qckFDNHRhSkxSb1hPYVkwQjJFcW1PS1ZiRXZKTG5TRXNMYnJLRkp3MGQxYlBBNkRmOFZMUXc1MDlxQU9RMUpUT2p0VC93QnRUR21qWTM1RWo3a1RhOVNyRlcyVm5QT2pnMEFSc0FzeFNQV3VjOXBNMW5ta0lKRVUyamN3ZVVudEF5SGlDTlpJOUtzUjZ1Z1FEMm45Z2VlL3dWUG9WU2M1b2U4eUdBMDZZUEJ1aE92S1ZUSExpSFRFdXB1a2thT25iZ0FBYkRRQlBGTThsYXBVZ3JMV3NHNm1zMWV4bmdsOUF0M0pkZXZ5c2lVVTZxbS9ScEVvRmk5TTZEYnRBSHVHc3AvbW4yVGVDbDBSc2VjZ0U2a3lmRGdudEIyQzZnSUUrbmdyTEdwSGxYcERyOGQrMk5hMHdwQ0pUU3VwMXkyWTRyVGtxbURKaW1aSldVenlVdlVua3E3YmwzdkgxS25GZDN2TzlTckhLWnJNbmh5eDM2L1Y5OTNxa04zVTk5MzlSUThSemF0ZXBXdldHNjkvdk8vcUtrRDNjejZvNk1ibUpVRlpwQ3FZTFVpazJaNC9NcTVYZm9vdTZrNkp4emFKK2pWc0hQZVR1Mkk1YXorQzBUcmNvUjBiZERYZDd2a0FqcHFJL0swSDRKS05Xa1ZrK205bzUxSnVWcEpEeG9CSjFCR3dXeXFGQmVrQS9aU053K21mK2JaNGpnVHhIaUUwWm41b1NzQ1V0Z2pvaEp0d05kSE9Ib2Y4bzZHSGtoblJsNEpyaHBrQ3FTTzFtOXByVDdVbWRaNG5aRk1UdWhTcFBxSDZJSmptZUE5VTFaSDV0YUZuQ25POW1ieEdzUzk3K3k0Ti9ZTVlRMGg3M1FYZGx3N1VkbVlJZ1NkZGtkd3V5RkttMWc0QWY1V2Q2R3RkV0pMd01ySEY1STBMM3UxR2FOSFpaTUU2NmprdHUyZ0UrVElwZml4SnhWUzJpQm9oUjFBVDNxNGJmdlRUUVNlVU1QaGtrRFhRTFJtWk1qV0J4SEdCelE2NHhSMVdvMXN5QUplSUlQZDk2TzN0bEltWTVFRlo1MXM5dFlsencrVzhCdHFwMG8yVm04blFXcFZWTG5LZ29zS25EUEpNdmpRcmVWL1pHNGxRM3RRc3B1Y0lrQ2RkdCtLdU5vcWhqam1paThHZlpPM1BoUGRNTGZKUFNBOFZhMndRM0hxbkpub1QvY2kxRzZydWFIRHE0SUJHL0VUeldFZFVUYy81MFZ0RUdjR3B3YW5RblFsR09hRktCc293bVhWVXRhWU1IaC9oQUpxTForUm9hN2tOZkhYNzBseldITkNMVHBGVHFRS3d5TzJ6RDJUMzkzbW5YclFCSWNDRHNRUVV1cVIwTDRxWGVtSHVqZDVxOWs2Z2h3OERwOTN4V2lGY3h1dk5NSXVzdHhUeXVHcGp4Qkd4VzFiZnh1MzRvdHBkaXppcTIvajVDanF4NXFoaTVjNmpVQU91VWtlSTFIeENqR0lqM2Zpbi9yelR1RHQzTEtvMkY0TS8wd0gwTXhKOVI5VXZkbWM3S1NZQW1CQTBhQU5rVzZRVlE3TFRjM013QjFTb0RNWkc2Q1MzVWF1QmtUN08zRUJNTHkwcXJTQUdoeklNZTh4eGE0a1NZTzNMd0NaZjNvcTNMNlVTSENteWVBRFRuZkxUNDZIUWdqa1NGWnpMdlpIOTFPdlJxT2k5dTJsUWFJeWwzYkkzZ3UxaWVNQ0I1STIxNFE2azdRSlhWRkM4U3A3SG5NNVd0QkExRkZVcUJEWDF5RlhmY25tcFBFMFdYNUMraWU3cEIwNngzck5WMmluV2FXdUxnN1F6d08raFJWMWNidWdvSGpOK0pZQnVIQ0VWaCsySy93QWgra2FhaS9SVHRlRUdvT0VhdWFQNWdyVGExTWZ4R251Ykx2a3NzWCtoK2R2cEJGMWRvNzBOeEtrNnF4N0d3QzRFRGxQQUU4RTUxdzNnREhOMm53UW5HTVNJcE95SEtJak1kQzd1YVB2Um1aVDQ1TTFiVzY0UmtuT1NTbWtwdVpkSnlCRUJPeXArUXB3YnhVeGhqV292Z1ZrS3VmOEFZZGRCQWwyVVUybUoxYzRIWFhab0o5VU9EVWZzY051cXRGczF4WjI4ZGtEU28rVEplNTBqTEoxaWR1Q1pDc3BZcDBZSkg3aWt6N0ZRNmY4QTFpVmtML0RUVE9vSThRQ1BWcy9GYks1Nk0xb3pVTDkxU09CZTRnK0pEaVBnZ2R6YjNqUWV0cDVnT0pMUVQ0UnY2SW1BZHJEWEJ4SjA3UXk4U05RTzViSzQ2VkIzN2lpOTU3MjZEeGlTczdZMzlPbTE3YWx2bXpnRWVXbzNBMDd3ckdIZElBd2dkVUF5ZFEzMnZMWUlOREp0RXplbDFVR0gwNlpQS0MwanhCbFdLSFN4cC9lVVlITmhuNGFMU1dPSTJWeU1zc0pQMEtqUUQ1QjIvbEtodnVnOUI4bGhkU1BkMm0vMHU0ZUJDM2ltRlpLWFRabjZtSVU2bFVGbWdBY1pKaVpnNVlPMEVFK2FzNFZZZzFYT0V5UUp6UnVSSmlPRzNlaG1MOUc2bHFXbDVEMkZ3QUxkK2NGcC93QXFoUXhpdFRxRnpYa0dTUzEybzhDSEptbG9NNWJUNGY4QXA2SXkwZUJvZlFwSDFLamQ1OHdzL1o5UFhBUlVvZ25teDBUL0FDdS9GV3gwelk3ZWxWYi9BQ2cvZW9QRnJwblF2eTkvM0taZHFYcnVRVlYxWjUySHdYTjZVV3BIdG4raDM0S0dwMHV0Mm5zdGUvd0VmK1JDM2hYMkI1OGZxQ2IvQUV1cThhdXlqODhBcWR6MGNZOHdLaERoOUxlRDRUOTZyWHZUWnhFTXBCdmU1MG4wQUh6V2NxWWpXTHkvTzRFN3dTMGVnS2RSb2xXYXFXdEpHc1owZHZHK3hVb3U3M05BUHFXbjVxUjFDL3BpWE1wdUE1T0FIeUVJUGhGeGYxdEtWUnhBNHV5NVo1U1FqWUdLdC8yL010S2JTSmVkTDJETG5GVC9BQnJkMzhyNUh3TUlkZFlyU1BzVzdRZmVmMmlQSldNVHcrOHFPSnFGaFBJUHBqNFNFTS8wdW9QYWJsSE11YitLT2tiZSt4bVpjbWs2NkxwUk1hVVVrOFVsb3J2bzQ5dnNFUEhMWjM0SDRJVlZvRnBod0lQSWlOUE5SVFRDMHlxQUFkczB3TW8ra1NZQTg5dk5FcXVIV2JuRTM5M25yY2FiSEhKUytvME5CaU5CdzIyUzRUaDc2MVZsTmh5VEpMeHUwQWFsdkNkb1BBbVZ2S0hSRzBZM0tLRkk2YWx6R3VKNzNPZHFTbVZKZGhXT3E2UjVyVjZONGZWZEZDOHl1T3pYUVpQSVNHaytxQ1lqVHIyYityYy9PeDIycHlrZHdQc3VISmJmcGIwS29scGRSQXBQQTBhTktidTR0K2o0ajRySGZySFgyN3FkVS90S1d4T3J0Tk5lWjBMU243RWFhNFpXc3NkZ3REMkJ6UnBvZFk4RHhXdHI0RGIzZE1WR0dDUm85dnljM2pISTZoVXIzb3MycmIwMzBZTlFOR3V3cUNOUjQ4ajVMTjJkL2NXcnlHbDFOdzlwamhvZkZwMFBqNkZZeGN4RG9oYzB3U0dpcTBjV0hXTzloMThoS3EyZUtYVnQ3THFqQVBvdkRzbjlMeEE4b1dqc3VuWCs5Um42MU14L3hkK0tOMi9TMjBkOUp3N2l4MzNBaEhSdG1Idk1kdUxoaGU0c2ltV3UwQkdyamxFYno4RkEzSEhIOTVUWlU4ZFB4VzZ4THFxdEl2YUtQVkdvMXJpV2pNU08wZFNCSEJEVGdGblUyYUI5bDUrUWNnYmdEMkhTQ2d6ZWk1cCtwa0krTUsvZDlJN1I3WUxha2pic2lSNXpIeFZzOUViV05NMC9iUDRvYmQ5RW1EMmFoOE16WitLR2tZRFh0NVFxSFZqaDlhQUQ4RHI1cGJQRDZELzR4SGQyUWZpaWxyMGRvVCswZlU4aTBENUsvd0QrbXJFYWw1ajYxU0ZnN0lMVzBzNkxNeGVDN200Z255QVdaeEoyZHhjeHJnemhJL01lQzFEYUdHMHRjN1hlQkwvL0FCQmxYclFDNUVVNlpiUzRPSWlmc3QrOUJ0SmJacFRwNlJuTEduV3BnR2s5elorak10bndJMFJIcWNTY0p6dWptTWtlb1d2dDhKWTBEUldLZElVL1owN3VIbUZ6dkxYbzYvaGs4N3E0TmVWblE4NS8va3A2ZVdiVDBVZDNndFczYVhtM0RZK21YQi9vRzZCZWozTmFoVUVQWTBrY0NBZk1GZWVkSzc0Ri9WczBaeWt3VThaS3A2SjVNVXl0b3o4cnBUUW5RcmtEM3dzVVZlMGE4UTVvSTVFU3JSMENSY2gwYTJETENrMjNxRXNIYWNJQUprTkV5ZS9sNklxY1ZjQnJCN3R2UXFzYUlMcGtUQ1pXbzhGdGJMUzNLNEpMcHdxTWx1b1B3Szh2eGl3NnU4a2FBaHpudDVaWW4xMEswMXppOVMzcWRnWnc0OXBoTURUVE5QMGZGZGUzOXZkdGROTjdINVMxdFJvYThpZUFjMDg5ZFkyNEo1dng0WW1URTc1Um1iUEdhdGxVRFhkdW04Q29Xejd4SnpNUEE5MjN6V3JwWDFqZU5BZGtjZURhZ0RYanduWHpCWG4wMW1QNmw0NnhyVEFhOFMwam13blVBamtWcHJMb3hTZUE5aExaM1k3V0R5RHQ0OVZmYU9SbzBHRjlDN1lYRko3V3VnT2tzY2M3Q0lPaERnU2ZWSDhRNkdXVmNFTVlLTHA5cW5sRTl4YnNSNkZCdWkySEczckJ4Y1EwTmQyUTQ1ZFJIczdTdFlNUmI3M3JCK2FlY2pYUWpuWmlzVC9SNVZZdzVMZ09ZRG15dWE1dXNST21iaEhwM0xQdS9SL1ZxTmxyN2NPbll1SXpmOFY2cld4UHN1Z2dtTlBGVXJTczh2QXFCcmdlT1VTUE5POC9Hbm95eHZ0SGk5eDBYdW12ZFQ2a3VMRGxkbExTSjMzbnZIcXVaMFN1ai9BanhkVEg5eTlFeEs1ZUt0VXRwa2d2Y1ptSjEzMjdrTnJZdlhHMUFIK2Mvd0Q1VVhjN0gwOUdUWjBOdWo5Qmc4WGo3cFVnNkdYQTFKcEQrWngvdFJkM1NLN2M0TVpidHpIZ0M1MGVKMEFIZVZvOE1zcXBhRFhMUzdlR2docmU2U2RUM3BhdElhWXFqSzRMME1KZUhWaUN3ZlJiUGFQZVNCcDgxdktGcUdBQUFBRGtuNW1zQ0dYMkxnY1Z6WFRmTE91SVVyZ3ZYRndBZ0dKNHVHOFVKeExHdUFNeXF0dmg3cW5hcWtnZTd4OCtTeWxzMVdwRXAxSDEzeUpEUVpKR25rRWFZd2Fjb1hVNmJRSUFBRWFBSndWVWt1RGt1blhabCtrVkVkY0JBSFliOHlqditsVVA5dW42QkJzV0UzSUgyQjhmOHJUR24zSi9RcHNMdCtyV2ppWmp1SC9ZUzRsY0ZveWdTUVB6NHBMMXdhNWp1VWhNdXFacWF0ZUJ5TVRyNUhaVFIzWStnZGhOKzJvL3NtWkJKQjNhUVFJUHFpRjdWalZCK2pGa2FkZXFIanRFQ0R3TXVKTUhpTmtaeFNnUzVrYkJ3TGh1UzNrMGN6cDhVVXVUVzBrUHdyRDJ5T3RZV1pobkxqbGtEaG05MUYrb3Nkc2pTNkpsekRKSFBNUnNvTVJ4QWtqTkRuRFpnMVpUKzE3ei9nRUlxMVNTU1RKTzVLdHdjZTJ4TVN0cURqMktZMDQ2eDVBcXFZYm9ORjFlNEFRVzlyaHhocEpkdEFTNkJzbnVzU2d3SlhXalh2SUlHaWt3L0IvcFZEcnlsRXpXYTNSb0NGVWwwTktaUGJVQTBhcXlMaENIM1hNcDFHNEJPaG43dkZjejdMS1Fyb2VTaHJNRzBEMFZWOXhDclY4UWhiWXl4bHNOWTNnQjhFTnZzVnk2Q0VLeExGNDRySzRqalJNZ0xUdWgzcUVITVF4MHh1czVlWXNUc1VNcTFpN2NwalFyVGlTSVZtYjZMRk81Y0hCdzNCbjBXOXBHUjNFQS9lc3RoWFJlOHJ0RDZOdlVldzdPR1VOTUdEcTRoYkt3Nkg0cEFCcDAyZ0FEdHZaL1pLTk5mWlBUWkN3S1NORm9MUG9QZG45NCtnUHNsNS90UlZuUWMvU3EramZ4S1R6bjdNb3BuazE2MmJzZmJwL0pxMC9WbnZXdVoranUzNnpyWFZLcm5TREFMUUpBajNaNGMwVkhSUzMrdi9WL2hCNXBHK0doMktVYVZGaGE4TmZVSTAwR1ZwNEdPS3p3NlJ0b0VaN1dnK1RIWmJsUHJyOGtaNlRWbTFLblpFZ0dKNEUrUEpaKzRwZzhBdWpYMEtxK3piWVBqVmhVak5UYlNkOWRyWW51ZC8wbWRJY1hwTm1uUjZ1ZnBWT3pEZTV2TTkvQllGN1ZVcTB5czJMMkhhOWRnL2lOL3FFb1ZjM3dtR3VhQjRpVC9oRG4wMUdhU203K2hraUxFcnR4bVhORGVKSk9uZkRScXBiREZMYWsyV2x6M0hkMlV5ZkNZQUNHNHpUL0FHVC9BQUt5Vk80YzNRRXFrcDBqTnBQazNWMTBsZTdSbFBUdlA0S2dMKzRlZFhCZytxME9QeGNGbnFPSnVHNnNNeFg4eXB1S1JlYXhodXBidWZwbWZ3N1JkSG8wRDd5cmxwYWxvZ0dmRkNMVEV5N1FSOTZLL3JvcHRsM3RIUnJScTV4NUFLTjc2MFdUbExleTJ4eEExT25lVUh4SEdHZ2RtWFJ4QTA5Vm9jT3dDcFhnMW13RHFLUVBwbVBFclcyUFEyZ0IycVlIYzBrRDRGYyswbit3cnZmUjRWZDNMbm5YYmtxM1ZsZStYUDZOcktwcmtldzgyUGo0RUVGRHEzNklLQjlpNHFqN1RXT0h3RFYweitSak9hcHA5bmluVkp6V0wxVzYvUTVYL2gzTkozSU9ZOW54QmNoTngraW5FVzdNcFA4QXNWUi9lR3FxelEvWW5pelEvbzV4TTBhTkpydjNibTYvVkpKMS9GZWxqVVNGNGZoZlcyVmI5VHVnR0VnT1oybXV5bDh3Q1draUNRZE9maUY2ZDBYeFgrQzgvWUo1Y2x4Mm1tenFocG8welVxWU9Ta0NVWWpjeEpyM0tVcHVWRUovLzlrPVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuIEhlcmUgaXMgdGhlIHRleHQgdG8gcmVhZC4gSG9wZWZ1bGx5IHRoZXJlIHdpbGwgYmUgbW9yZSB0byBzYXkgaGVyZSBidXQgdGhpcyBpcyBjdXJyZW50bHkganVzdCBmaWxsZXIsIGFuZCBhIHRlc3QuSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC4gSGVyZSBpcyB0aGUgdGV4dCB0byByZWFkLiBIb3BlZnVsbHkgdGhlcmUgd2lsbCBiZSBtb3JlIHRvIHNheSBoZXJlIGJ1dCB0aGlzIGlzIGN1cnJlbnRseSBqdXN0IGZpbGxlciwgYW5kIGEgdGVzdC48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFydGljbGVzSW50cm8ubWFwKChhcnRpY2xlLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0RpdlwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9ibG9nJywgcXVlcnk6IHsgVUlEOiBhcnRpY2xlLnVpZCB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1RvQXJ0aWNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2UxLnVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUuZGF0YS5hcnRpY2xldGl0bGVbMF0udGV4dH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID57YFxuICAgICAgICAgICAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1haW5JbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9uYXR1cmUtcGxhbnQtbGVhZi1sZWF2ZXMtNjU4My5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tYmlnRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVybyBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1tYWluRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tbWlkU2l6ZUZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41JSA1JSAwJSAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6c29saWQgcmVkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsTWlkRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tbWFpbkZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1kYXJrR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo4MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJldmlld0RpdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tc21hbGxGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWJsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4pO1xuXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50KVxuICAgIC50aGVuKChhcGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdWVyeShcIlwiKTsgLy8gQW4gZW1wdHkgcXVlcnkgd2lsbCByZXR1cm4gYWxsIHRoZSBkb2N1bWVudHNcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzSW50cm86cmVzLnJlc3VsdHMucmV2ZXJzZSgpLnNsaWNlKDAsMylcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiYXBpRW5kcG9pbnQiLCJmZXRjaCIsIkxpbmsiLCJMYXlvdXQiLCJJbmRleCIsInByb3BzIiwiYXJ0aWNsZXNJbnRybyIsIm1hcCIsImFydGljbGUiLCJrZXkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVUlEIiwidWlkIiwiZGF0YSIsImltYWdlMSIsInVybCIsImFydGljbGV0aXRsZSIsInRleHQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBcGkiLCJ0aGVuIiwiYXBpIiwicmVzIiwicmVzdWx0cyIsInJldmVyc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQUpuQixJQUFJLFVBQUosQUFBSSxBQUFVO0FBQ2QsSUFBSSxjQUFKLEFBQWtCOzs7QUFLbEIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDsyQkFDRixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esb0NBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEosQUFDQSxBQUVJLEFBRUosa0RBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSx3RkFBSyxLQUFMLEFBQVMsc3ZSQUFUOztzQkFBQTt3QkFGSixBQUVJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSSixBQUtBLEFBR0ksQUFFSixnc0JBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7c0JBQW5CO3dCQUFBLEFBRUs7QUFGTDtBQUFBLGFBRUssQUFBTSxjQUFOLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxLQUFNLEFBQ3JDOytCQUNnQixjQUFBLFNBQTRCLEtBQTVCLEFBQWlDLHlDQUFqQyxBQUFlOzswQkFBZjs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLGdDQUFLLE1BQU0sRUFBRSxVQUFGLEFBQVksU0FBUyxPQUFPLEVBQUUsS0FBSyxRQUEvQyxBQUFZLEFBQTRCLEFBQWU7MEJBQXZEOzRCQUFBLEFBQ0k7QUFESjsyQkFDSSxjQUFBO2dEQUFBLEFBQWE7OzBCQUFiOzRCQUFBLEFBQ0k7QUFESjtBQUFBLGtEQUNTLEtBQUssUUFBQSxBQUFRLEtBQVIsQUFBYSxPQUF2QixBQUE4QixnQkFBOUI7OzBCQUFBOzRCQURKLEFBQ0ksQUFDQTtBQURBOzRCQUNBLGNBQUE7dUJBQUE7OzBCQUFBOzRCQUFBLEFBQUs7QUFBTDtBQUFBLG1CQUFLLEFBQVEsS0FBUixBQUFhLGFBQWIsQUFBMEIsR0FMM0QsQUFDZ0IsQUFDSSxBQUNJLEFBRUksQUFBa0MsQUFLakU7QUF4QlQsQUFDSSxBQVVBLEFBRUs7aUJBYlQ7YUFERSxBQUNGO0FBQUE7QUFEWjs7QUFzRkEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtRQUFBO2tFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBO21DQUNGLEFBQVEsT0FBUixBQUFlLGFBQWYsQUFDakIsS0FBSyxVQUFBLEFBQUM7K0JBQ0ksSUFBQSxBQUFJLE1BREEsQUFDWCxBQUFPLEFBQVUsSUFETixBQUNYLENBQXNCLEFBQ3pCO0FBSm1CLEFBQ0YscUJBQUE7O3FCQUFaO0FBRGMsbUNBQUE7O3VDQU1GLElBQUEsQUFBSSxRQUFKLEFBQVksVUFBWixBQUFzQixNQUF0QixBQUE0QixHQU4xQixBQUtiLEFBQ1csQUFBOEI7QUFEekMsQUFDSDs7cUJBTmdCO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQXhCLEFBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9