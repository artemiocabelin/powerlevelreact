import React, { Component } from 'react';
import { connect } from 'react-redux';

class SaiyanRenderer extends Component {
  renderMessage(power) {
      if(power === 50000) {
          return (<p>"The One"</p>);
      } else if(power > 20000) {
          return (<p>"Superlative!"</p>);
      } else if(power > 9000) {
          return (<p>"Over 9000!"</p>);
      }
  }
    
  render() { 
    const powerLevel = this.props.saiyanPower * this.props.multiplier;

    return (
      <div className="saiyan-box text-center">
        <h3>{this.props.label}</h3>
        <p>Power Level: {powerLevel}</p>
        {this.renderMessage(powerLevel)}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { saiyanPower: state.power };
}

export default connect(mapStateToProps)(SaiyanRenderer);