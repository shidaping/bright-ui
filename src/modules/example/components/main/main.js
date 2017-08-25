import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';
import { Toast, Loading, Alert, Sidebar } from 'components';
import { connect } from 'react-redux';
import 'components/style/index.less';
import 'components/toast/toast.less';
import 'components/loading/loading.less';
import 'components/sidebar/sidebar.less';
import 'highlight.js/styles/idea.css';
import { showToast } from '../../actions/toast';
import { showLoading } from '../../actions/loading';
import Nav from '../nav';
// import { showAlert } from '../../actions/alert';
import './main.less';
// class Main extends Component {
//   render() {
//     // return this.props.children ? Children.only(this.props.children) : null;
//     return (
//       <div>
//         <ul className="nav">
//           <li><Link to={'/'} onlyActiveOnIndex activeClassName="active">home</Link></li>
//           <li><Link to={'/news-list'} activeClassName="active">news list</Link></li>
//         </ul>
//         <div>
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// }
// Main.propTypes = {
//   children: PropTypes.any,
// };
// export default Main;
const data = [
  {
    text: '基础样式',
    level: 1,
    link: '/',
  },
  {
    text: '组件',
    level: 1,
    showChildren: true,
    children: [
      {
        text: 'button按钮',
        level: 2,
        link: '/button',
      },
      {
        text: 'table表格',
        level: 2,
        link: '/table',
      },
      {
        text: 'form表单',
        level: 2,
        link: '/form',
      },
      {
        text: 'toast提示',
        level: 2,
        link: '/toast',
      },
      {
        text: 'loading加载中',
        level: 2,
        link: '/loading',
      },
      {
        text: 'alert警告',
        level: 2,
        link: '/alert',
      },
      {
        text: 'pagination分页',
        level: 2,
        link: '/pagination',
      },
      {
        text: 'modal模态框',
        level: 2,
        link: '/modal',
      },
      {
        text: 'modal模态框',
        level: 2,
        link: '/modal',
      },
    ],
  },
];
const Main = function(props) {
  return (
    <div className="main">
      <Nav />
      <Sidebar data={data} />
      <div>
        {props.children}
      </div>
      <Toast show={props.toast.boolShow}>
        {props.toast.children}
      </Toast>
      <Loading show={props.loading.boolShow}>
        {props.loading.children}
      </Loading>
      <Alert show={props.alert.boolShow}>
        {props.alert.children}
      </Alert>
    </div>
  );
};
Main.propTypes = {
  children: PropTypes.element, // eslint-disable-line
  toast: PropTypes.any, // eslint-disable-line
  loading: PropTypes.any, // eslint-disable-line
  alert: PropTypes.any, // eslint-disable-line
};
export default connect(
  state => ({ toast: state.toast, loading: state.loading, alert: state.alert }),
  dispatch => ({
    showToast: () => {
      showToast(dispatch);
    },
    showLoading: () => {
      showLoading(dispatch);
    },
  })
)(Main);
