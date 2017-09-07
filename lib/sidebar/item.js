'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { connect } from 'react-redux';


var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = {
      boolShowChildren: props.data.showChildren
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Item, [{
    key: 'onClick',
    value: function onClick(e) {
      e.stopPropagation();
      this.setState({
        boolShowChildren: !this.state.boolShowChildren
      });
      if (typeof this.props.data.onClick === 'function') {
        this.props.data.onClick(this.props.data);
      }
      if (this.props.data.link) {
        window.location.href = this.props.data.link;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'sidebar-item level-' + this.props.data.level
        },
        this.props.data.link ? _react2.default.createElement(
          _reactRouter.Link,
          {
            onClick: this.onClick,
            className: 'content',
            onlyActiveOnIndex: true,
            activeClassName: 'active',
            to: this.props.data.link
          },
          this.props.data.text,
          _react2.default.createElement('span', {
            className: (0, _classnames2.default)('triangle', {
              active: this.state.boolShowChildren,
              hide: !this.props.data.children
            })
          })
        ) : _react2.default.createElement(
          'div',
          {
            onClick: this.onClick,
            className: 'content'
          },
          this.props.data.text,
          _react2.default.createElement('span', {
            className: (0, _classnames2.default)('triangle', {
              active: this.state.boolShowChildren,
              hide: !this.props.data.children
            })
          })
        ),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('children', {
              hide: !this.state.boolShowChildren
            })
          },
          this.props.data.children ? this.props.data.children.map(function (item, i) {
            return _react2.default.createElement(Item, { data: item, key: i });
          }) : null
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

Item.propTypes = {
  // number: PropTypes.number,
  // increase: PropTypes.func,
  // decrease: PropTypes.func,
  data: _propTypes2.default.object
};
// export default connect(
//   state => ({ number: state.count.number }),
//   { increase, decrease }
// )(Home);
exports.default = Item;