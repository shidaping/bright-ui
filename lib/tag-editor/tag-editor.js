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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagEditor = function (_Component) {
  _inherits(TagEditor, _Component);

  function TagEditor(props) {
    _classCallCheck(this, TagEditor);

    var _this = _possibleConstructorReturn(this, (TagEditor.__proto__ || Object.getPrototypeOf(TagEditor)).call(this, props));

    _this.state = {
      show: false,
      children: null,
      value: ['压下'],
      input: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(TagEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.show !== this.state.show && nextProps.show) {
      //   this.apiShow(nextProps.children);
      // } else {
      //   this.apiHide();
      // }
      if (!_lodash2.default.isEqual(nextProps.value, this.state.value)) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        input: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('clearfix bui-tag-editor ' + this.props.className, {
            focus: this.state.boolFocus
          })
        },
        this.state.value.map(function (item, i) {
          return _react2.default.createElement(
            'span',
            { className: 'tag pull-left', key: i },
            item,
            _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  var value = _this2.state.value;
                  value.splice(i, 1);
                  _this2.setState({
                    value: value
                  });
                }
              },
              'x'
            )
          );
        }),
        _react2.default.createElement('input', {
          onFocus: function onFocus() {
            _this2.setState({
              boolFocus: true
            });
          },
          onBlur: function onBlur() {
            _this2.setState({
              boolFocus: false
            });
          },
          onKeyDown: function onKeyDown(e) {
            if ((e.keyCode === 13 || e.keyCode === 32) && !!_this2.state.input.trim()) {
              var value = _this2.state.value;
              value.push(_this2.state.input.trim());
              _this2.setState({
                value: value,
                input: ''
              });
            }
            if (e.keyCode === 8 && !_this2.state.input) {
              var _value = _this2.state.value;
              _value.pop();
              _this2.setState({
                value: _value,
                input: ''
              });
            }
          },
          value: this.state.input,
          onChange: this.handleChange,
          placeholder: this.props.placeholder || '输入标签',
          className: 'pull-left'
        })
      );
    }
  }]);

  return TagEditor;
}(_react.Component);

TagEditor.propTypes = {
  placeholder: _propTypes2.default.any
  // api: PropTypes.func,
  // timeout: PropTypes.number,
  // show: PropTypes.bool,
};
// Toast.defaultProps = {
//   timeout: 3000,
// };
exports.default = TagEditor;