'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = {
      show: false,
      children: null
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'bui-dropdown-container' },
        _react2.default.createElement(
          'button',
          {
            onBlur: function onBlur() {
              _this2.setState({
                boolShowContent: false
              });
            },
            onFocus: function onFocus() {
              _this2.setState({
                boolShowContent: true
              });
            }
          },
          this.props.text || '下拉菜单',
          _react2.default.createElement('i', {
            className: (0, _classnames2.default)(this.props.icon, {
              active: this.boolShowContent,
              hide: !this.props.icon
            })
          })
        ),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('bui-dropdown-content', {
              hide: !this.state.boolShowContent
            })
          },
          this.props.children
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  children: _propTypes2.default.any,
  text: _propTypes2.default.string,
  icon: _propTypes2.default.string
};
exports.default = Dropdown;