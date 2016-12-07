// @flow
import React, { Component } from 'react';

type Props = {
  color?: string,
  wheelCount: number,
  hasMotor: bool,
  kind: 'car' | 'truck' | '18-wheeler' | 'bicycle' | 'motorcycle',
  onDrive: Function,
  owners?: Array<string>
}

export default class Vehicle extends Component {
  props: Props;

  render() {
    return (
      <div className={ `vehicle-${this.props.kind}` }>
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
        <button onClick={ this.props.onDrive }>Drive!</button>
      </div>
    );
  }

  _renderOwners = () =>
    <ul>
      { this.props.owners.map((owner) => <li>owner</li>) }
    </ul>
}
