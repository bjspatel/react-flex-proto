import React from 'react';
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class';

export const Row = createReactClass({
  propTypes : {
    align : PropTypes.string, // left or right
  },

  getDefaultProps() {
    return {
      align : 'left',
    };
  },

  render() {
    return (
      <div className={this.props.align === 'left' ? 'flexbox' : 'flexbox-right'}>
        {this.props.children}
      </div>
    );
  },
});
