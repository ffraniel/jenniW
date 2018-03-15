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
                className: 'jsx-2471316217',
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
                className: 'jsx-2471316217',
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
                className: 'jsx-2471316217' + ' ' + 'contact',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, !this.state.sent && _react2.default.createElement('main', {
                className: 'jsx-2471316217' + ' ' + 'content',
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
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Contact page'), _react2.default.createElement('p', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'If you would like to get in touch with Jenni please use the form below.'), _react2.default.createElement('form', { id: 'contactForm', onSubmit: this.handleSubmit, className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('p', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'Name: '), _react2.default.createElement('input', { type: 'text', placeholder: 'name', name: 'name', id: 'name', onChange: this.handleNameChange, className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }), _react2.default.createElement('br', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }), _react2.default.createElement('p', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Email: '), _react2.default.createElement('input', { type: 'text', placeholder: 'email', name: 'email', id: 'email', onChange: this.handleEmailChange, className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }), _react2.default.createElement('br', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }), _react2.default.createElement('p', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, 'Organisation: '), _react2.default.createElement('input', { type: 'text', placeholder: 'organisation', name: 'organisation', id: 'organisation', onChange: this.handleOrganisationChange, className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }), _react2.default.createElement('br', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement('p', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, 'Message: '), _react2.default.createElement('textarea', { placeholder: 'message', name: 'message', id: 'messageInput', maxLength: '500', onChange: this.handleMessageChange, className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement('input', { id: 'submitButton', type: 'submit', className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }))), this.state.sent && _react2.default.createElement('main', {
                className: 'jsx-2471316217' + ' ' + 'content',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement('h2', {
                className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, 'Your message was sent to Jenni Whitehead.'), _react2.default.createElement(_link2.default, { to: '/', as: '/', passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('a', { href: '#', className: 'jsx-2471316217',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, 'Home'))))), _react2.default.createElement(_style2.default, {
                styleId: '2471316217',
                css: '.contact.jsx-2471316217{padding:0 15% 0 15%;}.content.jsx-2471316217{font-family:var(--thickFont);border:solid 3px var(--midGrey);background-color:var(--midGrey);padding-left:10%;padding-right:10%;height:100vh;}.contact.jsx-2471316217 .content.jsx-2471316217 h1.jsx-2471316217{font-family:var(--thickFont);font-size:var(--midSizeFont);}.contact.jsx-2471316217 .content.jsx-2471316217 p.jsx-2471316217{font-family:var(--thickFont);font-size:var(--smallFont);}#contactForm.jsx-2471316217{padding:4px;}#contactForm.jsx-2471316217 input.jsx-2471316217{border:3px solid #cccccc;border-radius:5px;padding:5px;font-family:var(--thickFont);font-color:black;font-size:var(--referenceSize);width:90%;min-height:20px;position:relative;}#messageInput.jsx-2471316217{resize:none;overflow:auto;height:auto;width:90%;min-height:80px;border:3px solid #cccccc;border-radius:5px;padding:5px;font-size:var(--referenceSize);font-family:var(--thickFont);font-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hxQixBQUc0QyxBQUdTLEFBUUEsQUFJQSxBQUlqQixBQUdjLEFBV2IsWUFiaEIsQUFja0IsUUFqQ2xCLEtBc0JxQixDQVlMLEdBL0JvQixBQVFKLEFBSUYsU0FvQmpCLEtBWkcsS0FhQyxPQVpnQixDQVJqQyxFQUpBLEdBUm1DLEdBaUNOLG9CQVpULEtBYUMsSUFqQ0QsUUFxQmMsTUFhbEIsR0FoQ1osU0FpQzhCLFNBakNsQixJQW9CSCxTQW5CYixDQW9Cb0IsUUFhYSxRQVpaLGtCQUNyQixHQVlvQixpQkFDcEIiLCJmaWxlIjoicGFnZXMvY29udGFjdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XG5cblxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIG5hbWU6JycsXG4gICAgICAgICAgICBlbWFpbDonJyxcbiAgICAgICAgICAgIG9yZ2FuaXNhdGlvbjonJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6JycsXG4gICAgICAgICAgICBzZW5kaW5nOmZhbHNlLFxuICAgICAgICAgICAgc2VudDpmYWxzZVxuXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UgPSB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3JnYW5pc2F0aW9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPcmdhbmlzYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVNZXNzYWdlQ2hhbmdlID0gdGhpcy5oYW5kbGVNZXNzYWdlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZU5hbWVDaGFuZ2UgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlRW1haWxDaGFuZ2UgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtYWlsOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZU9yZ2FuaXNhdGlvbkNoYW5nZSAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3JnYW5pc2F0aW9uOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhhbmRsZU1lc3NhZ2VDaGFuZ2UgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlU3VibWl0IChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOnRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOnRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICBvcmdhbmlzYXRpb246dGhpcy5zdGF0ZS5vcmdhbmlzYXRpb24sXG4gICAgICAgICAgICBtZXNzYWdlOnRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTonJyxcbiAgICAgICAgICAgIGVtYWlsOicnLFxuICAgICAgICAgICAgb3JnYW5pc2F0aW9uOicnLFxuICAgICAgICAgICAgbWVzc2FnZTonJyxcbiAgICAgICAgICAgIHNlbmRpbmc6dHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICByZXR1cm4gZmV0Y2ggKCdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYndtR0pMLW5CM0dXU3pEeTdoWEdqTkp6TlE1Vk9zcFRyYzkwU2tpbS0yaVJKZU5pRXMvZXhlYycsIHtcbiAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSlcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VuZGluZzpmYWxzZSxcbiAgICAgICAgICAgICAgICBzZW50OnRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkNvbnRhY3QgLSBKZW5uaSBXaGl0ZWhlYWQgPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5zZW50ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZW5kaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Db250YWN0IHBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSB3b3VsZCBsaWtlIHRvIGdldCBpbiB0b3VjaCB3aXRoIEplbm5pIHBsZWFzZSB1c2UgdGhlIGZvcm0gYmVsb3cuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiY29udGFjdEZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OYW1lOiA8L3A+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbDogPC9wPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PcmdhbmlzYXRpb246IDwvcD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm9yZ2FuaXNhdGlvblwiIG5hbWU9XCJvcmdhbmlzYXRpb25cIiBpZD1cIm9yZ2FuaXNhdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9yZ2FuaXNhdGlvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWVzc2FnZTogPC9wPjx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIGlkPVwibWVzc2FnZUlucHV0XCIgbWF4TGVuZ3RoPVwiNTAwXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTWVzc2FnZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbnQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPllvdXIgbWVzc2FnZSB3YXMgc2VudCB0byBKZW5uaSBXaGl0ZWhlYWQuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy8nfSBhcz17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj59XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDE1JSAwIDE1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tbWlkR3JleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1pZEdyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTAlXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QgLmNvbnRlbnQgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1taWRTaXplRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QgLmNvbnRlbnQgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS10aGlja0ZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXNtYWxsRm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2NvbnRhY3RGb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNjb250YWN0Rm9ybSBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhpY2tGb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtY29sb3I6YmxhY2s7IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXJlZmVyZW5jZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZUlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcblx0ICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLXJlZmVyZW5jZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoaWNrRm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWNvbG9yOmJsYWNrOyAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7Il19 */\n/*@ sourceURL=pages/contact.js?entry */'
            }));
        }
    }]);

    return Contact;
}(_react2.default.Component);

exports.default = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiSGVhZCIsIlJlYWN0IiwiTGluayIsIkxvYWRpbmciLCJDb250YWN0IiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJlbWFpbCIsIm9yZ2FuaXNhdGlvbiIsIm1lc3NhZ2UiLCJzZW5kaW5nIiwic2VudCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVPcmdhbmlzYXRpb25DaGFuZ2UiLCJoYW5kbGVNZXNzYWdlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwibW9kZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwidGhlbiIsInJlcyIsImNhdGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFHZDtxQ0FDRjs7cUJBQUEsQUFBWSxPQUFPOzRDQUFBOzs0SUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztrQkFBTSxBQUNGLEFBQ0w7bUJBRk8sQUFFRCxBQUNOOzBCQUhPLEFBR00sQUFDYjtxQkFKTyxBQUlDLEFBQ1I7cUJBTE8sQUFLQyxBQUNSO2tCQU5KLEFBQVcsQUFNRixBQUdUOztBQVRXLEFBQ1A7Y0FRSixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtjQUFBLEFBQUssbUJBQW1CLE1BQUEsQUFBSyxpQkFBTCxBQUFzQixLQUE5QyxBQUNBO2NBQUEsQUFBSyxvQkFBb0IsTUFBQSxBQUFLLGtCQUFMLEFBQXVCLEtBQWhELEFBQ0E7Y0FBQSxB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SUFBbEQsQUFBcUQsUUFBTyxVQUFVLEtBQXRFLEFBQTJFLDZCQUEzRTs7OEJBQUE7Z0NBRGpCLEFBQ2lCLEFBQ2I7QUFEYTs7MkJBQ2I7OzhCQUFBO2dDQUZKLEFBRUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUFjLHFEQUFPLE1BQVAsQUFBWSxRQUFPLGFBQW5CLEFBQStCLFNBQVEsTUFBdkMsQUFBNEMsU0FBUSxJQUFwRCxBQUF1RCxTQUFRLFVBQVUsS0FBekUsQUFBOEUsOEJBQTlFOzs4QkFBQTtnQ0FIbEIsQUFHa0IsQUFDZDtBQURjOzsyQkFDZDs7OEJBQUE7Z0NBSkosQUFJSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFMSixBQUtJLEFBQXFCLDREQUFPLE1BQVAsQUFBWSxRQUFPLGFBQW5CLEFBQStCLGdCQUFlLE1BQTlDLEFBQW1ELGdCQUFlLElBQWxFLEFBQXFFLGdCQUFlLFVBQVUsS0FBOUYsQUFBbUcscUNBQW5HOzs4QkFBQTtnQ0FMekIsQUFLeUIsQUFDckI7QUFEcUI7OzJCQUNyQjs7OEJBQUE7Z0NBTkosQUFNSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFQSixBQU9JLEFBQWdCLDBEQUFVLGFBQVYsQUFBc0IsV0FBVSxNQUFoQyxBQUFxQyxXQUFVLElBQS9DLEFBQWtELGdCQUFlLFdBQWpFLEFBQTJFLE9BQU0sVUFBVSxLQUEzRixBQUFnRyxnQ0FBaEc7OzhCQUFBO2dDQVBwQixBQU9vQixBQUNoQjtBQURnQjt5REFDVCxJQUFQLEFBQVUsZ0JBQWUsTUFBekIsQUFBOEIscUJBQTlCOzs4QkFBQTtnQ0FkWixBQUVJLEFBSUksQUFRSSxBQUlYO0FBSlc7dUJBSVgsQUFBSyxNQUFMLEFBQVcsd0JBQ1IsY0FBQTtvREFBQSxBQUFnQjs7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhEQUFBLEFBQUMsZ0NBQUssSUFBTixBQUFVLEtBQUssSUFBZixBQUFtQixLQUFLLFVBQXhCOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsTUFBSCxBQUFRLGdCQUFSOzs4QkFBQTtnQ0FBQTtBQUFBO2VBM0JwQixBQUlJLEFBQ0ksQUFtQkksQUFFSSxBQUNJO3lCQTNCcEI7cUJBREosQUFDSSxBQXNGUDtBQXRGTzs7Ozs7RUE3RVUsZ0JBQU0sQSxBQXlLNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY29udGFjdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2lzL0NvZGUvSmVubmlXIn0=