// @flow
import React, { Component, PropTypes } from 'react';
import VehicleFlow from './VehicleFlow';

type Owners = Array<string>;
type VehicleKinds = 'car' | 'truck' | '18-wheeler' | 'bicycle' | 'motorcycle';
type DefaultVehicleProps = {
  owners: []
};
type VehicleProps = {
  color?: string,
  wheelCount: number,
  hasMotor: boolean,
  kind: VehicleKinds,
  onDrive: Function,
  // explain why it's not a maybe type due to a value being provided in defaultProps
  owners: Owners
};

export default class Vehicle extends Component<DefaultVehicleProps, VehicleProps, void> {
  static defaultProps = {
    owners: []
  };

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
      { this.props.owners && this.props.owners.map((owner) => <li>owner</li>) }
    </ul>
}
