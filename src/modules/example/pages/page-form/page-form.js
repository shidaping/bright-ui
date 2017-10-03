import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import TagEditor from 'components/tag-editor';
import classnames from 'classnames';
import 'components/style/form.less';
import 'components/tag-editor/tag-editor.less';


class PageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShowPassword: false,
      optionListEducation: [
        '小学',
        '初中',
        '高中',
        '专科',
        '本科',
        '硕士',
        '博士',
      ],
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div className="padding-10">
          <h1 className="h1">普通输入框</h1>
          <div className="clearfix">
            <div className="col-4 clearfix">
              <label className="form-control col-3"><span className="color-red">*</span>姓名</label>
              <input className="form-control col-9" placeholder="请输入" />
            </div>
            <div className="col-4 clearfix">
              <label className="form-control col-3"><span className="color-red">*</span>手机</label>
              <input className="form-control col-9" placeholder="请输入" />
            </div>
            <div className="col-4 clearfix">
              <label className="form-control col-3">邮箱</label>
              <input className="form-control col-9" placeholder="请输入" />
            </div>
          </div>
          <h1 className="h1">选择</h1>
          <div className="clearfix">
            <div className="col-4 clearfix">
              <label className="form-control col-3">学历</label>
              <select className="form-control col-9">
                {this.state.optionListEducation.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <h1 className="h1">文本域</h1>
          <div className="clearfix">
            <div className="pull-left" style={{ width: '8.3333%' }}>
              <label className="form-control col-12">描述</label>
            </div>
            <div className="pull-left" style={{ width: '91.6666%' }}>
              <textarea className="form-control col-12" rows="3" placeholder="请填写描述写内容"/>
            </div>
          </div>
          <h1 className="h1">标签编辑器</h1>
          <div className="clearfix">
            <div className="pull-left" style={{ width: '8.3333%' }}>
              <label className="form-control col-12">标签</label>
            </div>
            <div className="pull-left" style={{ width: '91.6666%' }}>
              <TagEditor placeholder="请填写描述写内容"/>
            </div>
          </div>

          <h1 className="page-form-h1">带左右图标输入框</h1>
          <div className="form-group-with-addon-left form-group-with-addon-right">
            <i className="bui-iconfont bui-icon-password addon-left" />
            <input className="form-control" placeholder="请输入" type={this.state.boolShowPassword ? 'text' : 'password'} />
            <i
              className={classnames('bui-iconfont bui-icon-eye addon-right', {
                'color-blue': this.state.boolShowPassword,
              })}
              onClick={() => {
                this.setState({
                  boolShowPassword: !this.state.boolShowPassword,
                });
              }}
            />
          </div>
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
