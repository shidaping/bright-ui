import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.checked,
    });
    this.props.onChange({
      target: {
        value: e.target.checked,
      },
    });
  }
  render() {
    return (
      <input
        className="bui-switch"
        checked={this.state.value}
        onChange={this.handleChange}
        disabled={this.props.disabled}
        type="checkbox"
      />
    );
  }
}
Switch.propTypes = {
  placeholder: PropTypes.any,
  // api: PropTypes.func,
  // timeout: PropTypes.number,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
// Toast.defaultProps = {
//   timeout: 3000,
// };

export default Switch;
