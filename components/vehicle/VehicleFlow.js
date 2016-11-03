// @flow
import React, { Component, PropTypes } from 'react';

export default class Vehicle extends Component {
  render() {
    <div className={`vehicle-${this.props.kind}`}>
      <div>
        <span>Color: { this.props.color }</span>
      </div>
      <div>
        <span>Number of wheels: { this.props.wheelCount }</span>
      </div>
      <div>
        <span>Motor: { this.props.hasMotor ? 'Yes' : 'No' }</span>
      </div>
      <div>
        <span>Kind of vehicle: { this.props.kind }</span>
      </div>
      <div>
        <span>Vehicle owners: </span>
        { this._renderOwners() }
      </div>
    </div>
  }

  _renderOwners = () =>
    <ul>
      { this.props.owners.map((owner) => <li>owner</li>) }
    </ul>
}
