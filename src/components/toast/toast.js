import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

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
  static show(children) {
    let dom = document.getElementById('buiToast');
    if (dom) {
      document.body.removeChild(dom);
    }
    dom = document.createElement('div');
    dom.id = 'buiToast';
    document.body.appendChild(dom);
    let apiToast;
    ReactDOM.render(
      <Toast
        api={(api) => {
          apiToast = api;
        }}
      >
        {children}
      </Toast>,
      dom);
    apiToast.apiShow(children);
  }
  static hide() {
    let dom = document.getElementById('bmuiLoading');
    if (dom) {
      dom.parentElement.removeChild(dom);
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
