import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
class Modal extends Component {
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
    this.setState({
      show: true,
      children: children,
    });
  }
  render() {
    return (
      <div
        className={classnames(`${this.props.className} mask-black`, {
          hide: !this.state.show,
        })}
      >
        <div className="modal">
          <div className="modal__head clearfix">
            <h1 className="pull-left">{this.props.title}</h1>
            <button
              className="btn-close pull-right"
              onClick={this.apiHide}
            >X</button>
          </div>
          <div className="modal__body">
            {this.props.children}
          </div>
          <div className="modal__foot clearfix">
            <button
              className="btn btn-blue pull-right"
              onClick={this.props.onOk}
            >确定</button>
            <button
              className="btn btn-grey pull-right margin-right-10"
              onClick={() => {
                if (typeof this.props.onCancel === 'function') {
                  this.props.onCancel();
                }
                this.apiHide();
              }}
            >{this.props.textCancel}</button>
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  children: PropTypes.any,
  api: PropTypes.func,
  show: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string,
  textOk: PropTypes.string,
  textCancel: PropTypes.string,
  className: PropTypes.any,
};
Modal.defaultProps = {
  textOk: '确定',
  textCancel: '取消',
};
export default Modal;
