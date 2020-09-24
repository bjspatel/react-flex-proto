'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var Col = (0, _createReactClass2['default'])({
  propTypes: {
    grow: _propTypes2['default'].bool.isRequired,
    shrink: _propTypes2['default'].bool.isRequired,
    basis: _propTypes2['default'].string.isRequired,
    padding: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]).isRequired,
    align: _propTypes2['default'].string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      grow: true,
      shrink: true,
      basis: 'auto', // also accepts '100px', '10%', etc.
      align: 'left',
      padding: 10
    };
  },

  render: function render() {
    var styles = {
      flex: (this.props.grow ? '1 ' : '0 ') + (this.props.shrink ? '1 ' : '0 ') + this.props.basis,
      textAlign: this.props.align,
      padding: this.props.padding
    };

    return _react2['default'].createElement(
      'div',
      { style: styles },
      this.props.children
    );
  }
});
exports.Col = Col;