import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import classnames from 'classnames';
import 'components/style/btn.less';

class PageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShowPassword: false,
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div className="padding-10">
          <h1>Button按钮</h1>
          <h2>普通</h2>
          <button className="btn btn-orange">橙色</button>&nbsp;&nbsp;
          <button className="btn btn-blue">蓝色</button>&nbsp;&nbsp;
          <button className="btn btn-green">绿色</button>&nbsp;&nbsp;
          <button className="btn btn-red">红色</button>&nbsp;&nbsp;
          <button className="btn btn-yellow">黄色</button>&nbsp;&nbsp;
          <h2>禁用</h2>
          <button className="btn btn-orange" disabled>橙色</button>&nbsp;&nbsp;
          <button className="btn btn-blue" disabled>蓝色</button>&nbsp;&nbsp;
          <button className="btn btn-green" disabled>绿色</button>&nbsp;&nbsp;
          <button className="btn btn-red" disabled>红色</button>&nbsp;&nbsp;
          <button className="btn btn-yellow" disabled>黄色</button>&nbsp;&nbsp;
          <h2>反转</h2>
          <button className="btn btn-orange--reversed">橙色</button>&nbsp;&nbsp;
          <button className="btn btn-blue--reversed">蓝色</button>&nbsp;&nbsp;
          <button className="btn btn-green--reversed">绿色</button>&nbsp;&nbsp;
          <button className="btn btn-red--reversed">红色</button>&nbsp;&nbsp;
          <button className="btn btn-yellow--reversed">黄色</button>&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}
// PageForm.propTypes = {
//   showLoading: PropTypes.func,
//   hideLoading: PropTypes.func,
// };
export default PageButton;
