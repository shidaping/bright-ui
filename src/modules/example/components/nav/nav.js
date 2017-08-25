import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import 'modules/example/components/iconfont/iconfont.less';
import './nav.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav">
        <div className="logo">BUI</div>
        <div className="nav-link-list">
          {/*
            <button onClick={this.props.increase}>increase</button>
            <button onClick={this.props.decrease}>decrease</button>
          */}
        </div>

      </div>
    );
  }
}
Home.propTypes = {
  // number: PropTypes.number,
  // increase: PropTypes.func,
  // decrease: PropTypes.func,
};
// export default connect(
//   state => ({ number: state.count.number }),
//   { increase, decrease }
// )(Home);
export default Home;
