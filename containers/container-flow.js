// @flow
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
} from '../actions&reducers/drive-flow/reducer';

import type { AppState } from '../actions&reducers/drive-flow-complete/reducer';
import type { driveFn } from '../actions&reducers/drive-flow-complete/actions';

type StateProps = {
  color: string,
  wheelCount: number,
  hasMotor: boolean,
  kind: string,
  owners: Array<string>,
}

type DispatchProps = {
  drive: driveFn,
};

type InnerProps = StateProps & DispatchProps;

export class VechicleContainer extends Component<void, InnerProps, void> {
  render() {
    return (
      <Vechicle { ...this.props } />
    );
  }

  //add an onDrive handler
}

export const mapStateToProps = (state: AppState): StateProps => ({
  color: getColor(state),
  wheelCount: getWheelCount(state),
  hasMotor: getHasMotor(state),
  kind: getKind(state),
});

export const mapDispatchToProps: DispatchProps = {
  drive,
};

export default connect(mapStateToProps, mapDispatchToProps)(VechicleContainer);
