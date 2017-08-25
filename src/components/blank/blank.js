import { Children } from 'react';
import PropTypes from 'prop-types';
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
const Blank = function(props) {
  return props.children ? Children.only(props.children) : null;
};
Blank.propTypes = {
  children: PropTypes.element,
};
export default Blank;
