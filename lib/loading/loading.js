'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading(props) {
    _classCallCheck(this, Loading);

    var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

    _this.state = {
      show: false,
      children: null
    };
    _this.apiShow = _this.apiShow.bind(_this);
    if (_this.props.api) {
      _this.props.api({
        apiShow: _this.apiShow,
        apiHide: _this.apiHide
      });
    }
    return _this;
  }

  _createClass(Loading, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show !== this.state.show) {
        this.setState({
          show: nextProps.show
        });
      }
    }
  }, {
    key: 'apiShow',
    value: function apiShow() {
      this.setState({
        show: true
      });
    }
  }, {
    key: 'apiHide',
    value: function apiHide() {
      this.setState({
        show: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'bui-loading-mask mask',
          style: {
            display: this.state.show ? 'block' : 'none'
          }
        },
        _react2.default.createElement(
          'div',
          {
            className: 'bui-loading'
          },
          _react2.default.createElement('span', { className: 'bui-loading__spiner' }),
          _react2.default.createElement('br', null),
          this.props.children
        )
      );
    }
  }], [{
    key: 'show',
    value: function show(children) {
      var dom = document.getElementById('buiLoading');
      if (dom) {
        document.body.removeChild(dom);
      }
      dom = document.createElement('div');
      dom.id = 'buiLoading';
      document.body.appendChild(dom);
      var apiLoading = void 0;
      _reactDom2.default.render(_react2.default.createElement(
        Loading,
        {
          api: function api(_api) {
            apiLoading = _api;
          }
        },
        children
      ), dom);
      apiLoading.apiShow(children);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var dom = document.getElementById('buiLoading');
      if (dom) {
        dom.parentElement.removeChild(dom);
      }
    }
  }]);

  return Loading;
}(_react.Component);

Loading.propTypes = {
  children: _propTypes2.default.any,
  show: _propTypes2.default.bool,
  api: _propTypes2.default.func
};
exports.default = Loading;