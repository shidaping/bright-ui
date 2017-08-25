import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import Highlight from 'react-highlight';
import 'highlight.js/styles/default.css';
import './home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="padding-10 page-home">
        <section>
          <h1 id="reset">
            reset
          </h1>
          <p>
            重置浏览器默认样式
          </p>
          <Highlight language="less">
            {`
body {
  font-size: 14px;
  color: @color-body;
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
            `}
          </Highlight>
        </section>
        <section>
          <h1 id="reset">
            浮动
          </h1>
          <h2>clearfix: 清除浮动</h2>
          <h2>pull-left: 左浮动</h2>
          <h2>pull-right: 右浮动</h2>
          <div className="home-container">
            <div className="clearfix">
              <div className="pull-left">左浮动</div>
              <div className="pull-right">右浮动</div>
            </div>
          </div>
          <Highlight language="html">
            {`
<div className="clearfix">
  <div className="pull-left">左浮动</div>
  <div className="pull-right">右浮动</div>
</div>
            `}
          </Highlight>
        </section>
        <section>
          <h1 id="reset">
            显示
          </h1>
          <h2>hide: 隐藏</h2>
          <h2>show: 显示</h2>
          <h2>invisible: 不可见(隐藏但占位)</h2>
          <div className="home-container">
            <div className="hide">文本1</div>
            <div className="invisible">文本2</div>
            <div className="show">文本3</div>
          </div>
          <Highlight language="html">
            {`
<div className="hide">文本1</div>
<div className="invisible">文本2</div>
<div className="show">文本3</div>
            `}
          </Highlight>
        </section>
        <section>
          <h1 id="reset">
            text
          </h1>
          <h2>text-left: 文本居左</h2>
          <h2>text-center: 文本居中</h2>
          <h2>text-right: 文本居右</h2>
          <h2>text-ellipsis: 文本省略</h2>
          <div className="home-container">
            <div className="text-left">文本1</div>
            <div className="text-center">文本2</div>
            <div className="text-right">文本3</div>
            <div className="text-ellipsis">我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。</div>
          </div>
          <Highlight language="html">
            {`
<div className="text-left">文本1</div>
<div className="text-center">文本2</div>
<div className="text-right">文本3</div>
<div className="text-ellipsis">我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。</div>
            `}
          </Highlight>
          <h2>text-ellipsis-multi: 文本省略多行</h2>
          <p>
          默认为2行，修改-webkit-line-clamp属性来变更为其他行数。
          </p>
          <div className="home-container">
            <div className="text-ellipsis-multi" style={{ WebkitLineClamp: 3 }}>
              我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。
            </div>
          </div>
          <Highlight language="html">
            {`
<div className="text-ellipsis-multi" style={{ WebkitLineClamp: 3 }}>
  我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。我是一个前端开发者，我爱前端开发。
</div>
            `}
          </Highlight>
        </section>
        <section>
          <h1 id="reset">
            mask遮罩
          </h1>
          <h2>mask: 完全透明遮罩</h2>
          <h2>mask-black: 黑色半透明遮罩</h2>
          <Highlight language="html">
            {`
<div className="mask"></div>
<div className="mask-black"></div>
            `}
          </Highlight>
        </section>
        <section>
          <h1 id="reset">
            size字体大小
          </h1>
          <h2>size-12: 12px</h2>
          <h2>size-14: 14px</h2>
          <h2>size-16: 16px</h2>
          <h2>size-18: 18px</h2>
          <h2>size-20: 20px</h2>
          <h2>size-22: 22px</h2>
          <div className="home-container">
            <div className="size-12">中国</div>
            <div className="size-14">中国</div>
            <div className="size-16">中国</div>
            <div className="size-18">中国</div>
            <div className="size-20">中国</div>
            <div className="size-22">中国</div>
          </div>
          <Highlight language="html">
            {`
<div className="size-12">中国</div>
<div className="size-14">中国</div>
<div className="size-16">中国</div>
<div className="size-18">中国</div>
<div className="size-20">中国</div>
<div className="size-22">中国</div>
            `}
          </Highlight>
        </section>
        <section>
          <h1 id="reset">
            padding
          </h1>
          <p>支持5px, 10px, 15px, 20px,如 padding-10表示内边距为10</p>
          <h2>padding-5: 5px</h2>
          <h2>padding-left-5: 5px</h2>
          <h2>padding-right-5: 5px</h2>
          <h2>padding-top-5: 5px</h2>
          <h2>padding-bottom-5: 5px</h2>
          <div className="home-container">
            <div className="padding-5">中国</div>
            <div className="padding-left-5">中国</div>
            <div className="padding-right-5">中国</div>
            <div className="padding-top-5">中国</div>
            <div className="padding-bottom-5">中国</div>
          </div>
          <Highlight language="html">
            {`
<div className="padding-5">中国</div>
<div className="padding-left-5">中国</div>
<div className="padding-right-5">中国</div>
<div className="padding-top-5">中国</div>
<div className="padding-bottom-5">中国</div>
            `}
          </Highlight>
        </section>
        <section>
          <h1 id="reset">
            margin
          </h1>
          <p>支持5px, 10px, 15px, 20px,如 margin-10表示内边距为10</p>
          <h2>margin-5: 5px</h2>
          <h2>margin-left-5: 5px</h2>
          <h2>margin-right-5: 5px</h2>
          <h2>margin-top-5: 5px</h2>
          <h2>margin-bottom-5: 5px</h2>
          <div className="home-container">
            <div className="margin-5">中国</div>
            <div className="margin-left-5">中国</div>
            <div className="margin-right-5">中国</div>
            <div className="margin-top-5">中国</div>
            <div className="margin-bottom-5">中国</div>
          </div>
          <Highlight language="html">
            {`
<div className="margin-5">中国</div>
<div className="margin-left-5">中国</div>
<div className="margin-right-5">中国</div>
<div className="margin-top-5">中国</div>
<div className="margin-bottom-5">中国</div>
            `}
          </Highlight>
        </section>
        <div className="home-link-list">
          {/*
            <button onClick={this.props.increase}>increase</button>
            <button onClick={this.props.decrease}>decrease</button>
          */}
          {/*
          <Link to={'/toast'}>
            <span>Toast信息提示</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/loading'}>
            <span>Loading加载中</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/form'}>
            <span>Form表单</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/dropdown'}>
            <span>Dropdown下拉菜单</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/select'}>
            <span>Select选择</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/scroll'}>
            <span>Scroll滚动</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/switch'}>
            <span>Switch开关</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/alert'}>
            <span>Alert警告</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/dialog'}>
            <span>Dialog对话框</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/carousel'}>
            <span>Carousel图片轮播嚣</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
        */}
        </div>

      </div>
    );
  }
}
Home.propTypes = {
  // number: PropTypes.number,
  // increase: PropTypes.func,
  // decrease: PropTypes.func,
};
// export default connect(
//   state => ({ number: state.count.number }),
//   { increase, decrease }
// )(Home);
export default Home;
