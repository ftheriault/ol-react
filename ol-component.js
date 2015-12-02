import React from 'react';

export default class OLComponent extends React.Component {
  render() {
    return <div style={{display: 'none'}}>{this.props.children}</div>;;
  }
}

OLComponent.propTypes = {
  children: React.PropTypes.arrayOf(React.Component).isRequired,
}
