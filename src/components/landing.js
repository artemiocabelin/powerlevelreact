import _ from 'lodash';
import React, { Component } from 'react';
import PowerController from './power_controls';
import SaiyanRenderer from './saiyan_renderer';

import { SAIYANS } from '../models/saiyan';

export default class Landing extends Component {
  renderSaiyans(saiyan) {
    return (
      <SaiyanRenderer 
        key={saiyan.type} 
        label={saiyan.label} 
        multiplier={saiyan.multiplier} />
    );
  }
  
  render() {
    return (
      <div className="main-component">
        <h2>Power Component</h2>
        <PowerController />
        {_.map(SAIYANS, this.renderSaiyans)}
      </div>
    );
  }
}
