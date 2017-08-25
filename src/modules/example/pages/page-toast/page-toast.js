import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showToast } from 'modules/example/actions/toast.js';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/style/btn.less';

class PageToast extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="padding-10">
        <h1>toast提示</h1>
        <button
          className="btn btn-orange"
          onClick={() => {
            this.props.showToast({
              children: 'hello, world',
            });
          }}
        >
          show toast
        </button>
      </div>
    );
  }
}
PageToast.propTypes = {
  showToast: PropTypes.func,
};
export default connect(
  null,
  { showToast }
)(PageToast);
