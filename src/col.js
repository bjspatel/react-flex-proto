import React from 'react';
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class';

export const Col = createReactClass({
  propTypes : {
    grow : PropTypes.bool.isRequired,
    shrink : PropTypes.bool.isRequired,
    basis : PropTypes.string.isRequired,
    padding : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    align : PropTypes.string.isRequired,
  },

  getDefaultProps() {
    return {
      grow : true,
      shrink : true,
      basis : 'auto', // also accepts '100px', '10%', etc.
      align : 'left',
      padding : 10,
    };
  },

  render() {
    const styles = {
      flex : (this.props.grow ? '1 ' : '0 ') + (this.props.shrink ? '1 ' : '0 ') + this.props.basis,
      textAlign : this.props.align,
      padding : this.props.padding,
    };

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  },
});
