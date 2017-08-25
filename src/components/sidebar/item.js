import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import classnames from 'classnames';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShowChildren: props.data.showChildren,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.stopPropagation();
    this.setState({
      boolShowChildren: !this.state.boolShowChildren,
    });
    if (typeof this.props.data.onClick === 'function') {
      this.props.data.onClick(this.props.data);
    }
    if (this.props.data.link) {
      window.location.href = this.props.data.link;
    }
  }
  render() {
    return (
      <div
        className={`sidebar-item level-${this.props.data.level}`}
      >
        {this.props.data.link ? (
          <Link
            onClick={this.onClick}
            className="content"
            onlyActiveOnIndex
            activeClassName="active"
            to={this.props.data.link}
          >
            {this.props.data.text}
            <span
              className={classnames('triangle', {
                active: this.state.boolShowChildren,
                hide: !this.props.data.children,
              })}
            />
          </Link>
        ) : (
          <div
            onClick={this.onClick}
            className="content"
          >
            {this.props.data.text}
            <span
              className={classnames('triangle', {
                active: this.state.boolShowChildren,
                hide: !this.props.data.children,
              })}
            />
          </div>
        )}

        <div
          className={classnames('children', {
            hide: !this.state.boolShowChildren,
          })}
        >
        {this.props.data.children ? this.props.data.children.map((item, i) => (
          <Item data={item} key={i} />
        )) : null}
        </div>
      </div>
    );
  }
}
Item.propTypes = {
  // number: PropTypes.number,
  // increase: PropTypes.func,
  // decrease: PropTypes.func,
  data: PropTypes.object,
};
// export default connect(
//   state => ({ number: state.count.number }),
//   { increase, decrease }
// )(Home);
export default Item;
