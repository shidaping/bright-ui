import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      children: null,
    };
    this.apiShow = this.apiShow.bind(this);
    this.apiHide = this.apiHide.bind(this);
    if (this.props.api) {
      this.props.api({
        apiShow: this.apiShow,
        apiHide: this.apiHide,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.show !== this.state.show && nextProps.show) {
    //   this.apiShow(nextProps.children);
    // } else {
    //   this.apiHide();
    // }
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show,
      });
    }
  }
  apiHide() {
    this.setState({
      show: false,
    });
  }
  apiShow(children) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({
      show: true,
      children: children,
    });
    this.timeout = setTimeout(() => {
      this.setState({
        show: false,
      });
    }, this.props.timeout);
  }
  render() {
    return (
      <div
        className="bui-toast" style={{
          display: this.state.show ? 'block' : 'none',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
Toast.propTypes = {
  children: PropTypes.any,
  api: PropTypes.func,
  timeout: PropTypes.number,
  show: PropTypes.bool,
};
Toast.defaultProps = {
  timeout: 3000,
};
export default Toast;
