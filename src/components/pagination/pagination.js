import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'components/style/btn.less';
import 'components/style/form.less';
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      total: props.total,
      formData: {
        goTo: '',
      },
    };
    this.goTo = this.goTo.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.jump = this.jump.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.current || nextProps.total !== nextProps.total) {
      this.setState({
        current: nextProps.current,
        total: nextProps.total,
      });
    }
  }
  goTo(page) {
    this.setState({
      current: page,
      formData: {
        goTo: '',
      },
    });
    this.props.onChange(page);
  }
  handleValueChange(name, formName) {
    return (e) => {
      if (formName) {
        let change = this.state[formName];
        change[name] = e.target.value;
        this.setState({
          [formName]: change,
        });
      } else {
        this.setState({
          [name]: e.target.value,
        });
      }
    };
  }
  jump() {
    const page = parseInt(this.state.formData.goTo, 10) || 1;
    if (page > this.state.total || page < 1) {
      return;
    }
    this.goTo(page);
  }
  render() {
    return (
      <div className="pagination text-center">
        <span className="btn-list clearfix">
          <button
            disabled={this.state.current === 1}
            onClick={() => {
              this.goTo(1);
            }}
          >首页</button>
          <button
            disabled={this.state.current < 2}
            onClick={() => {
              this.goTo(this.state.current - 1);
            }}
          >上一页</button>
          <button
            disabled={this.state.current >= this.state.total}
            onClick={() => {
              this.goTo(this.state.current + 1);
            }}
          >下一页</button>
          <button
            disabled={this.state.current === this.state.total}
            onClick={() => {
              this.goTo(this.state.total);
            }}
          >末页</button>
        </span>
        当前第{this.state.current}页(共{this.state.total}页)&nbsp;
        跳至第<input className="form-control" value={this.state.formData.goTo} onChange={this.handleValueChange('goTo', 'formData')} type="number" />页&nbsp;
        <button className="btn btn-blue margin-left-10" onClick={this.jump}>跳转</button>
      </div>
    );
  }
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func,
};
export default Pagination;
