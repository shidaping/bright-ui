import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showToast } from 'modules/example/actions/toast.js';
// import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/switch/switch.less';
import './page-switch.less';

class PageSwitch extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {

  }
  onChange(e){
    if (e.target.checked) {
      this.props.showToast({
        children: '接收消息',
      });
    } else {
      this.props.showToast({
        children: '不接收消息',
      });     
    }
  }
  render() {
    return (
      <div>
        <ul className="page-switch__form-ul">
          <li>
            <span>接收消息</span>
            <input type="checkbox" className="bui-switch" onChange={this.onChange} />
          </li>
        </ul>
      </div>
    );
  }
}
PageSwitch.propTypes = {
  showToast: PropTypes.func,
  hideLoading: PropTypes.func,
};
export default connect(
  null,
  dispatch => ({
    showToast: (requestData) => {
      showToast(dispatch, requestData);
    },
  })
)(PageSwitch);
