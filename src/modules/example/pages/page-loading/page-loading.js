import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
import Loading from '../../../../components/loading/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';

class PageLoading extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div className="padding-10">
          <h1>loading加载中</h1>
          <button
            className="btn btn-orange"
            onClick={() => {
              this.props.showLoading({
                children: '',
              });
              setTimeout(() => {
                this.props.hideLoading();
              }, 2000);
            }}
          >
            show loading
          </button>
          <button
            className="btn btn-orange"
            style={{ marginLeft: 10 }}
            onClick={() => {
              Loading.show();
              setTimeout(() => {
                Loading.hide();
              }, 2000);
            }}
          >
            show static loading
          </button>
        </div>
      </div>
    );
  }
}
PageLoading.propTypes = {
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func,
};
export default connect(
  null,
  { showLoading, hideLoading }
)(PageLoading);
