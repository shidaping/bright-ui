import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showToast } from 'modules/example/actions/toast.js';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/style/table.less';

class PageTable extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="padding-10">
        <h1>table表格</h1>
        <h2>普通表格</h2>
        <table className="table table-hover table-line">
          <thead>
            <tr>
              <td>item1</td>
              <td>item2</td>
              <td>item3</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value1</td>
              <td>value2</td>
              <td>value3</td>
            </tr>
            <tr>
              <td>value1</td>
              <td>value2</td>
              <td>value3</td>
            </tr>
          </tbody>
        </table>
        <h2>有边线表格</h2>
        <table className="table table-border">
          <thead>
            <tr>
              <td>item1</td>
              <td>item2</td>
              <td>item3</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value1</td>
              <td>value2</td>
              <td>value3</td>
            </tr>
            <tr>
              <td>value1</td>
              <td>value2</td>
              <td>value3</td>
            </tr>
          </tbody>
        </table>
        <h2>条纹表格</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>item1</td>
              <td>item2</td>
              <td>item3</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value1</td>
              <td>value2</td>
              <td>value3</td>
            </tr>
            <tr>
              <td>value1</td>
              <td>value2</td>
              <td>value3</td>
            </tr>
          </tbody>
        </table>        
      </div>
    );
  }
}
PageTable.propTypes = {
  showToast: PropTypes.func,
};
export default connect(
  null,
  { showToast }
)(PageTable);
