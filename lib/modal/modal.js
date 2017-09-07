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

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      show: false,
      children: null
    };
    _this.apiShow = _this.apiShow.bind(_this);
    _this.apiHide = _this.apiHide.bind(_this);
    if (_this.props.api) {
      _this.props.api({
        apiShow: _this.apiShow,
        apiHide: _this.apiHide
      });
    }
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show !== this.state.show) {
        this.setState({
          show: nextProps.show
        });
      }
    }
  }, {
    key: 'apiHide',
    value: function apiHide() {
      this.setState({
        show: false
      });
    }
  }, {
    key: 'apiShow',
    value: function apiShow(children) {
      this.setState({
        show: true,
        children: children
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('mask-black', {
            hide: !this.state.show
          })
        },
        _react2.default.createElement(
          'div',
          { className: 'modal' },
          _react2.default.createElement(
            'div',
            { className: 'modal__head clearfix' },
            _react2.default.createElement(
              'h1',
              { className: 'pull-left' },
              this.props.title
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn-close pull-right',
                onClick: this.apiHide
              },
              'X'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal__body' },
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal__foot clearfix' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-blue pull-right',
                onClick: this.props.onOk
              },
              '\u786E\u5B9A'
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-grey pull-right margin-right-10',
                onClick: function onClick() {
                  if (typeof _this2.props.onCancel === 'function') {
                    _this2.props.onCancel();
                  }
                  _this2.apiHide();
                }
              },
              this.props.textCancel
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _propTypes2.default.any,
  api: _propTypes2.default.func,
  show: _propTypes2.default.bool,
  onOk: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  title: _propTypes2.default.string,
  textOk: _propTypes2.default.string,
  textCancel: _propTypes2.default.string
};
Modal.defaultProps = {
  textOk: '确定',
  textCancel: '取消'
};
exports.default = Modal;