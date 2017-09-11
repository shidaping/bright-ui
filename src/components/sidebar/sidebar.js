import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import Item from './item';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar">
        {this.props.data.map((item, i) => (
          <Item data={item} key={i} />
        ))}
      </div>
    );
  }
}
Sidebar.propTypes = {
  // number: PropTypes.number,
  // increase: PropTypes.func,
  // decrease: PropTypes.func,
  data: PropTypes.array,
};
// export default connect(
//   state => ({ number: state.count.number }),
//   { increase, decrease }
// )(Home);
export default Sidebar;
