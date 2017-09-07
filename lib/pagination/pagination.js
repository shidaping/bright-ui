'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('components/style/btn.less');

require('components/style/form.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.state = {
      current: props.current,
      total: props.total,
      formData: {
        goTo: ''
      }
    };
    _this.goTo = _this.goTo.bind(_this);
    _this.handleValueChange = _this.handleValueChange.bind(_this);
    _this.jump = _this.jump.bind(_this);
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.current !== this.state.current || nextProps.total !== nextProps.total) {
        this.setState({
          current: nextProps.current,
          total: nextProps.total
        });
      }
    }
  }, {
    key: 'goTo',
    value: function goTo(page) {
      this.setState({
        current: page,
        formData: {
          goTo: ''
        }
      });
      this.props.onChange(page);
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(name, formName) {
      var _this2 = this;

      return function (e) {
        if (formName) {
          var change = _this2.state[formName];
          change[name] = e.target.value;
          _this2.setState(_defineProperty({}, formName, change));
        } else {
          _this2.setState(_defineProperty({}, name, e.target.value));
        }
      };
    }
  }, {
    key: 'jump',
    value: function jump() {
      var page = parseInt(this.state.formData.goTo, 10) || 1;
      if (page > this.state.total || page < 1) {
        return;
      }
      this.goTo(page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'pagination text-center' },
        _react2.default.createElement(
          'span',
          { className: 'btn-list clearfix' },
          _react2.default.createElement(
            'button',
            {
              disabled: this.state.current === 1,
              onClick: function onClick() {
                _this3.goTo(1);
              }
            },
            '\u9996\u9875'
          ),
          _react2.default.createElement(
            'button',
            {
              disabled: this.state.current < 2,
              onClick: function onClick() {
                _this3.goTo(_this3.state.current - 1);
              }
            },
            '\u4E0A\u4E00\u9875'
          ),
          _react2.default.createElement(
            'button',
            {
              disabled: this.state.current >= this.state.total,
              onClick: function onClick() {
                _this3.goTo(_this3.state.current + 1);
              }
            },
            '\u4E0B\u4E00\u9875'
          ),
          _react2.default.createElement(
            'button',
            {
              disabled: this.state.current === this.state.total,
              onClick: function onClick() {
                _this3.goTo(_this3.state.total);
              }
            },
            '\u672B\u9875'
          )
        ),
        '\u5F53\u524D\u7B2C',
        this.state.current,
        '\u9875(\u5171',
        this.state.total,
        '\u9875)\xA0 \u8DF3\u81F3\u7B2C',
        _react2.default.createElement('input', { className: 'form-control', value: this.state.formData.goTo, onChange: this.handleValueChange('goTo', 'formData'), type: 'number' }),
        '\u9875\xA0',
        _react2.default.createElement(
          'button',
          { className: 'btn btn-blue margin-left-10', onClick: this.jump },
          '\u8DF3\u8F6C'
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  current: _propTypes2.default.number.isRequired,
  total: _propTypes2.default.number.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onError: _propTypes2.default.func
};
exports.default = Pagination;