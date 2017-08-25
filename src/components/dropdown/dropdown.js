import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      children: null,
    };
  }
  render() {
    return (
      <div className="bui-dropdown-container">
        <button
          onBlur={() => {
            this.setState({
              boolShowContent: false,
            });
          }}
          onFocus={() => {
            this.setState({
              boolShowContent: true,
            });
          }}
        >
          {this.props.text || '下拉菜单'}
          <i
            className={classnames(this.props.icon, {
              active: this.boolShowContent,
              hide: !this.props.icon,
            })}
          />
        </button>
        <div
          className={classnames('bui-dropdown-content', {
            hide: !this.state.boolShowContent,
          })}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
Dropdown.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
  icon: PropTypes.string,
};
export default Dropdown;
