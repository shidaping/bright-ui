import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showAlert } from 'modules/example/actions/alert';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import classnames from 'classnames';

class PageAlert extends React.Component {
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
          <button
            className="btn btn-orange btn-full"
            onClick={() => {
              this.props.showAlert({
                children: '请遵守当地法律',
              });
            }}
          >
            show alert
          </button>
        </div>
      </div>
    );
  }
}
PageAlert.propTypes = {
  showAlert: PropTypes.func,
};
export default connect(
  state => ({ dataNewsList: state.newsList.dataNewsList }),
  dispatch => ({
    showAlert: (requestData) => {
      showAlert(dispatch, requestData);
    },
  })
)(PageAlert);
