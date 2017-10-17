import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
class TagEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      children: null,
      value: ['压下'],
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.show !== this.state.show && nextProps.show) {
    //   this.apiShow(nextProps.children);
    // } else {
    //   this.apiHide();
    // }
    if (!_.isEqual(nextProps.value, this.state.value)) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  render() {
    return (
      <div
        className={classnames(`clearfix bui-tag-editor ${this.props.className}`, {
          focus: this.state.boolFocus,
        })}
      >
        {this.state.value.map((item, i) => (
          <span className="tag pull-left" key={i}>
            {item}
            <button
              onClick={() => {
                let value = this.state.value;
                value.splice(i, 1);
                this.setState({
                  value,
                });
              }}
            >
              x
            </button>
          </span>
        ))}
        <input
          onFocus={() => {
            this.setState({
              boolFocus: true,
            });
          }}
          onBlur={() => {
            this.setState({
              boolFocus: false,
            });
          }}
          onKeyDown={(e) => {
            if ((e.keyCode === 13 || e.keyCode === 32) && !!this.state.input.trim()) {
              let value = this.state.value;
              value.push(this.state.input.trim());
              this.setState({
                value,
                input: '',
              });
              this.props.onChange({
                target: {
                  value: value,
                },
              });
            }
            if (e.keyCode === 8 && !this.state.input) {
              let value = this.state.value;
              value.pop();
              this.setState({
                value,
                input: '',
              });
              this.props.onChange({
                target: {
                  value: value,
                },
              });
            }
          }}
          value={this.state.input}
          onChange={this.handleChange}
          placeholder={this.props.placeholder || '输入标签'}
          className="pull-left"
        />
      </div>
    );
  }
}
TagEditor.propTypes = {
  placeholder: PropTypes.any,
  // api: PropTypes.func,
  // timeout: PropTypes.number,
  // show: PropTypes.bool,
  onChange: PropTypes.func,
};
// Toast.defaultProps = {
//   timeout: 3000,
// };
export default TagEditor;
