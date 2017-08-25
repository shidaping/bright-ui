import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      children: null,
    };
    this.apiShow = this.apiShow.bind(this);
    if (this.props.api) {
      this.props.api({
        apiShow: this.apiShow,
        apiHide: this.apiHide,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show,
      });
    }
  }
  apiShow() {
    this.setState({
      show: true,
    });
  }
  apiHide() {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div
        className="bui-loading-mask mask"
        style={{
          display: this.state.show ? 'block' : 'none',
        }}
      >
        <div
          className="bui-loading"
        >
          <span className="bui-loading__spiner" /><br />
          {this.props.children}
        </div>
      </div>
    );
  }
}
Loading.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  api: PropTypes.func,
};
export default Loading;
