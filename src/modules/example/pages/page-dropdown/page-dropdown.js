import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import classnames from 'classnames';
import Dropdown from 'components/dropdown';

class PageForm extends React.Component {
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
          <Dropdown
            text="我的下拉菜单"
            icon="bui-iconfont bui-icon-angle-down"
          >
            <ul className="bui-dropdown-content-list">
              <li
                onClick={() => {
                  
                }}
              ></li>
            </ul>
          </Dropdown>
        </div>
      </div>
    );
  }
}
// PageForm.propTypes = {
//   showLoading: PropTypes.func,
//   hideLoading: PropTypes.func,
// };
export default PageForm;
