import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showToast } from 'modules/example/actions/toast.js';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import Modal from 'components/modal';
import 'components/modal/modal.less';

class PageModal extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="padding-10">
        <h1>modal模态框</h1>
        <button
          className="btn btn-orange"
          onClick={() => {
            this.apiModal.apiShow();
          }}
        >
          show modal
        </button>
        <Modal
          api={(api) => {
            this.apiModal = api;
          }}
          title="my modal title"
        >
          body
        </Modal>
      </div>
    );
  }
}
PageModal.propTypes = {
  showToast: PropTypes.func,
};
export default connect(
  null,
  { showToast }
)(PageModal);
