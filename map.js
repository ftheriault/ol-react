import React from 'react';
import {findDOMNode} from 'react-dom';
import ol from 'openlayers';
import OLComponent from './ol-component';
import * as interaction from './interaction';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = new ol.Map({
      interactions: [new interaction.DragPan(this.onDrag.bind(this))]
    });
  }

  onDrag(newCenter) {
    this.props.actions.onNavigation({
      center: newCenter
    });
  }
  
  componentDidMount() {
    this.map.setTarget(this.refs.us);
  }

  getChildContext() {
    return {
      map: this.map
    };
  }

  render() {
    return (
      <div>
        <div ref="us">
        </div>
        <div>
          {this.props.children}
          {this.props.view}
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  view: React.PropTypes.element.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  actions: React.PropTypes.object.isRequired
}

Map.childContextTypes = {
  map: React.PropTypes.instanceOf(ol.Map)
}
