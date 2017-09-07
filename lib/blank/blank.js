'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// class Blank extends Component {
//   render() {
//     // return this.props.children ? Children.only(this.props.children) : null;
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     );
//   }
// }
var Blank = function Blank(props) {
  return props.children ? _react.Children.only(props.children) : null;
};
Blank.propTypes = {
  children: _propTypes2.default.element
};
exports.default = Blank;