import React, { Component, PropTypes } from 'react';

export default class Vehicle extends Component {
  static propTypes = {
    color: PropTypes.string,
    wheelCount: PropTypes.number.isRequired,
    hasMotor: PropTypes.bool.isRequired,
    kind: PropTypes.oneOf(['car', 'truck', '18-wheeler', 'bicycle', 'motorcycle']).isRequired,
    onDrive: PropTypes.func.isRequired,
    owners: PropTypes.arrayOf(PropTypes.string)
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
      { this.props.owners.map((owner) => <li>owner</li>) }
    </ul>
}
