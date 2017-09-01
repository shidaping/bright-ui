import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showToast } from 'modules/example/actions/toast.js';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import Pagination from 'components/pagination';
import 'components/pagination/pagination.less';

class PagePagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        page: 1,
      },
    };
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="padding-10">
        <h1>pagination分页</h1>
        <Pagination
          current={this.state.formData.page}
          total={10}
          onChange={(page) => {
            this.setState({
              formData: {
                page: page,
              },
            });
          }}
        />

      </div>
    );
  }
}
PagePagination.propTypes = {
  showToast: PropTypes.func,
};
export default connect(
  null,
  { showToast }
)(PagePagination);
