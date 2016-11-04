import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Vechicle from '../components/vehicle/VehicleFlowComplete';
import { drive } from '../actions&reducers/drive-flow-complete/actions';
import {
  getColor,
  getWheelCount,
  getHasMotor,
  getKind,
  getOwners,
} from '../actions&reducers/drive-flow-complete/reducer';

export class VechicleContainer extends Component {
  static propTypes = {
    color: PropTypes.string,
    drive: PropTypes.func.isRequired,
    hasMotor: PropTypes.bool.isRequired,
    kind: PropTypes.oneOf(['car', 'truck', '18-wheeler', 'bicycle', 'motorcycle']).isRequired,
    owners: PropTypes.arrayOf(PropTypes.string),
    wheelCount: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Vechicle { ...this.props } />
    );
  }

  //add an onDrive handler
}

export const mapStateToProps = (state) => ({
  color: getColor(state),
  wheelCount: getWheelCount(state),
  hasMotor: getHasMotor(state),
  kind: getKind(state),
});

export const mapDispatchToProps = {
  drive,
};

export default connect(mapStateToProps, mapDispatchToProps)(VechicleContainer);
