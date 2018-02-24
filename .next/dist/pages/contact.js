'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Loading = require('../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/francis/Code/JenniW/pages/contact.js?entry';


var Contact = function (_React$Component) {
    (0, _inherits3.default)(Contact, _React$Component);

    function Contact(props) {
        (0, _classCallCheck3.default)(this, Contact);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).call(this, props));

        _this.state = {
            name: '',
            email: '',
            organisation: '',
            message: '',
            sending: false,
            sent: false

        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleNameChange = _this.handleNameChange.bind(_this);
        _this.handleEmailChange = _this.handleEmailChange.bind(_this);
        _this.handleOrganisationChange = _this.handleOrganisationChange.bind(_this);
        _this.handleMessageChange = _this.handleMessageChange.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Contact, [{
        key: 'handleNameChange',
        value: function handleNameChange(e) {
            e.preventDefault();
            this.setState({
                name: e.target.value
            });
        }
    }, {
        key: 'handleEmailChange',
        value: function handleEmailChange(e) {
            e.preventDefault();
            this.setState({
                email: e.target.value
            });
        }
    }, {
        key: 'handleOrganisationChange',
        value: function handleOrganisationChange(e) {
            e.preventDefault();
            this.setState({
                organisation: e.target.value
            });
        }
    }, {
        key: 'handleMessageChange',
        value: function handleMessageChange(e) {
            e.preventDefault();
            this.setState({
                message: e.target.value
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var data = {
                name: this.state.name,
                email: this.state.email,
                organisation: this.state.organisation,
                message: this.state.message
            };
            this.setState({
                name: '',
                email: '',
                organisation: '',
                message: '',
                sending: true
            });
            console.log(data);
            return fetch('https://script.google.com/macros/s/AKfycbwmGJL-nB3GWSzDy7hXGjNJzNQ5VOspTrc90Skim-2iRJeNiEs/exec', {
                method: 'post',
                body: (0, _stringify2.default)(data),
                mode: 'no-cors',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(function (res) {
                _this2.setState({
                    sending: false,
                    sent: true
                });
            }).catch(console.log);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'Contact - Jenni Whitehead ')), _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2838191849' + ' ' + 'contact',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, !this.state.sent && _react2.default.createElement('main', {
                className: 'jsx-2838191849' + ' ' + 'content',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, this.state.sending && _react2.default.createElement(_Loading2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }), _react2.default.createElement('h1', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Contact page'), _react2.default.createElement('p', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'You can contact Jenni at....'), _react2.default.createElement('a', { href: 'genni@postmaster.co.uk', className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, 'genni@postmaster.co.uk'), _react2.default.createElement('form', { id: 'contactForm', onSubmit: this.handleSubmit, className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement('p', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, 'Name: '), _react2.default.createElement('input', { type: 'text', placeholder: 'name', name: 'name', id: 'name', onChange: this.handleNameChange, className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }), _react2.default.createElement('br', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }), _react2.default.createElement('p', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, 'Email: '), _react2.default.createElement('input', { type: 'text', placeholder: 'email', name: 'email', id: 'email', onChange: this.handleEmailChange, className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }), _react2.default.createElement('br', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }), _react2.default.createElement('p', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Organisation: '), _react2.default.createElement('input', { type: 'text', placeholder: 'organisation', name: 'organisation', id: 'organisation', onChange: this.handleOrganisationChange, className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement('br', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement('p', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, 'Message: '), _react2.default.createElement('textarea', { placeholder: 'message', name: 'message', id: 'messageInput', maxLength: '500', onChange: this.handleMessageChange, className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }), _react2.default.createElement('input', { type: 'submit', className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }))), this.state.sent && _react2.default.createElement('main', {
                className: 'jsx-2838191849' + ' ' + 'content',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('h2', {
                className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, 'Your message was sent to Jenni Whitehead.'), _react2.default.createElement(_link2.default, { to: '/', as: '/', passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('a', { href: '#', className: 'jsx-2838191849',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, 'Home'))))), _react2.default.createElement(_style2.default, {
                styleId: '2838191849',
                css: '.contact.jsx-2838191849{padding:0 15% 0 15%;}.content.jsx-2838191849{font-family:var(--thickFont);border:solid 3px var(--midGrey);background-color:var(--midGrey);padding-left:10%;padding-right:10%;height:100vh;}.contact.jsx-2838191849 .content.jsx-2838191849 h1.jsx-2838191849{font-family:var(--thickFont);font-size:var(--midSizeFont);}.contact.jsx-2838191849 .content.jsx-2838191849 p.jsx-2838191849{font-family:var(--thickFont);font-size:var(--smallFont);}#contactForm.jsx-2838191849{padding:4px;}#contactForm.jsx-2838191849 input.jsx-2838191849{border:3px solid #cccccc;border-radius:5px;padding:5px;font-family:var(--thickFont);font-color:black;font-size:var(--referenceSize);width:80%;min-height:20px;}#messageInput.jsx-2838191849{resize:none;overflow:auto;height:auto;width:80%;min-height:80px;border:3px solid #cccccc;border-radius:5px;padding:5px;font-size:var(--referenceSize);font-family:var(--thickFont);font-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUhxQixBQUc0QyxBQUdTLEFBUUEsQUFJQSxBQUlqQixBQUljLEFBVWIsWUFaaEIsQUFha0IsUUFqQ2xCLEtBdUJxQixDQVdMLEdBL0JvQixBQVFKLEFBSUYsU0FvQmpCLEtBWEcsS0FZQyxPQVhnQixDQVRqQyxFQUpBLEdBUm1DLEdBaUNOLG9CQVhULEtBWUMsSUFqQ0QsUUFzQmMsTUFZbEIsR0FoQ1osU0FpQzhCLFNBakNsQixJQXFCSCxTQXBCYixDQXFCaUIsUUFZZ0IsUUFYakMscUJBWW9CLGlCQUNwQiIsImZpbGUiOiJwYWdlcy9jb250YWN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZyYW5jaXMvQ29kZS9KZW5uaVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcblxuXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgbmFtZTonJyxcbiAgICAgICAgICAgIGVtYWlsOicnLFxuICAgICAgICAgICAgb3JnYW5pc2F0aW9uOicnLFxuICAgICAgICAgICAgbWVzc2FnZTonJyxcbiAgICAgICAgICAgIHNlbmRpbmc6ZmFsc2UsXG4gICAgICAgICAgICBzZW50OmZhbHNlXG5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPcmdhbmlzYXRpb25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9yZ2FuaXNhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlTmFtZUNoYW5nZSAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTplLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVFbWFpbENoYW5nZSAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1haWw6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlT3JnYW5pc2F0aW9uQ2hhbmdlIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcmdhbmlzYXRpb246ZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlTWVzc2FnZUNoYW5nZSAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTplLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6dGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgZW1haWw6dGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgIG9yZ2FuaXNhdGlvbjp0aGlzLnN0YXRlLm9yZ2FuaXNhdGlvbixcbiAgICAgICAgICAgIG1lc3NhZ2U6dGhpcy5zdGF0ZS5tZXNzYWdlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOicnLFxuICAgICAgICAgICAgZW1haWw6JycsXG4gICAgICAgICAgICBvcmdhbmlzYXRpb246JycsXG4gICAgICAgICAgICBtZXNzYWdlOicnLFxuICAgICAgICAgICAgc2VuZGluZzp0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHJldHVybiBmZXRjaCAoJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNid21HSkwtbkIzR1dTekR5N2hYR2pOSnpOUTVWT3NwVHJjOTBTa2ltLTJpUkplTmlFcy9leGVjJywge1xuICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBcbiAgICAgICAgICAgIG1vZGU6ICduby1jb3JzJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KVxuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZW5kaW5nOmZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbnQ6dHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Q29udGFjdCAtIEplbm5pIFdoaXRlaGVhZCA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnNlbnQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbmRpbmcgJiYgPExvYWRpbmcgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNvbnRhY3QgcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBjb250YWN0IEplbm5pIGF0Li4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZ2VubmlAcG9zdG1hc3Rlci5jby51a1wiPmdlbm5pQHBvc3RtYXN0ZXIuY28udWs8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJjb250YWN0Rm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5hbWU6IDwvcD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiA8L3A+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9yZ2FuaXNhdGlvbjogPC9wPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwib3JnYW5pc2F0aW9uXCIgbmFtZT1cIm9yZ2FuaXNhdGlvblwiIGlkPVwib3JnYW5pc2F0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3JnYW5pc2F0aW9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NZXNzYWdlOiA8L3A+PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJtZXNzYWdlSW5wdXRcIiBtYXhMZW5ndGg9XCI1MDBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVNZXNzYWdlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbnQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPllvdXIgbWVzc2FnZSB3YXMgc2VudCB0byBKZW5uaSBXaGl0ZWhlYWQuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy8nfSBhcz17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj59XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWlkR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1pZEdyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTAlXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QgLmNvbnRlbnQgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QgLmNvbnRlbnQgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2NvbnRhY3RGb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2NvbnRhY3RGb3JtIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1jb2xvcjpibGFjazsgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0tcmVmZXJlbmNlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XG5cdCAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI21lc3NhZ2VJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XG5cdCAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1yZWZlcmVuY2VTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1jb2xvcjpibGFjazsgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdfQ== */\n/*@ sourceURL=pages/contact.js?entry */'
            }));
        }
    }]);

    return Contact;
}(_react2.default.Component);

exports.default = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiSGVhZCIsIlJlYWN0IiwiTGluayIsIkxvYWRpbmciLCJDb250YWN0IiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJlbWFpbCIsIm9yZ2FuaXNhdGlvbiIsIm1lc3NhZ2UiLCJzZW5kaW5nIiwic2VudCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVPcmdhbmlzYXRpb25DaGFuZ2UiLCJoYW5kbGVNZXNzYWdlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwibW9kZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwidGhlbiIsInJlcyIsImNhdGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFHZDtxQ0FDRjs7cUJBQUEsQUFBWSxPQUFPOzRDQUFBOzs0SUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztrQkFBTSxBQUNGLEFBQ0w7bUJBRk8sQUFFRCxBQUNOOzBCQUhPLEFBR00sQUFDYjtxQkFKTyxBQUlDLEFBQ1I7cUJBTE8sQUFLQyxBQUNSO2tCQU5KLEFBQVcsQUFNRixBQUdUOztBQVRXLEFBQ1A7Y0FRSixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtjQUFBLEFBQUssbUJBQW1CLE1BQUEsQUFBSyxpQkFBTCxBQUFzQixLQUE5QyxBQUNBO2NBQUEsQUFBSyxvQkFBb0IsTUFBQSxBQUFLLGtCQUFMLEFBQXVCLEtBQWhELEFBQ0E7Y0FBQSxB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QUFDSSxBQUFhLG9EQUFPLE1BQVAsQUFBWSxRQUFPLGFBQW5CLEFBQStCLFFBQU8sTUFBdEMsQUFBMkMsUUFBTyxJQUFsRCxBQUFxRCxRQUFPLFVBQVUsS0FBdEUsQUFBMkUsNkJBQTNFOzs4QkFBQTtnQ0FEakIsQUFDaUIsQUFDYjtBQURhOzsyQkFDYjs7OEJBQUE7Z0NBRkosQUFFSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQWMscURBQU8sTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0IsU0FBUSxNQUF2QyxBQUE0QyxTQUFRLElBQXBELEFBQXVELFNBQVEsVUFBVSxLQUF6RSxBQUE4RSw4QkFBOUU7OzhCQUFBO2dDQUhsQixBQUdrQixBQUNkO0FBRGM7OzJCQUNkOzs4QkFBQTtnQ0FKSixBQUlJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFBcUIsNERBQU8sTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0IsZ0JBQWUsTUFBOUMsQUFBbUQsZ0JBQWUsSUFBbEUsQUFBcUUsZ0JBQWUsVUFBVSxLQUE5RixBQUFtRyxxQ0FBbkc7OzhCQUFBO2dDQUx6QixBQUt5QixBQUNyQjtBQURxQjs7MkJBQ3JCOzs4QkFBQTtnQ0FOSixBQU1JLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVBKLEFBT0ksQUFBZ0IsMERBQVUsYUFBVixBQUFzQixXQUFVLE1BQWhDLEFBQXFDLFdBQVUsSUFBL0MsQUFBa0QsZ0JBQWUsV0FBakUsQUFBMkUsT0FBTSxVQUFVLEtBQTNGLEFBQWdHLGdDQUFoRzs7OEJBQUE7Z0NBUHBCLEFBT29CLEFBQ2hCO0FBRGdCO3lEQUNULE1BQVAsQUFBWSxxQkFBWjs7OEJBQUE7Z0NBZlosQUFFSSxBQUtJLEFBUUksQUFJWDtBQUpXO3VCQUlYLEFBQUssTUFBTCxBQUFXLHdCQUNSLGNBQUE7b0RBQUEsQUFBZ0I7OzhCQUFoQjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4REFBQSxBQUFDLGdDQUFLLElBQU4sQUFBVSxLQUFLLElBQWYsQUFBbUIsS0FBSyxVQUF4Qjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxnQkFBUjs7OEJBQUE7Z0NBQUE7QUFBQTtlQTVCcEIsQUFJSSxBQUNJLEFBb0JJLEFBRUksQUFDSTt5QkE1QnBCO3FCQURKLEFBQ0ksQUF1RlA7QUF2Rk87Ozs7O0VBN0VVLGdCQUFNLEEsQUEwSzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRhY3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZnJhbmNpcy9Db2RlL0plbm5pVyJ9