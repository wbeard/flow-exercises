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
} from '../actions&reducers/drive-flow-complete/reducer';

import type { AppState } from '../actions&reducers/drive-flow-complete/reducer';
import type { DriveActionCreator } from '../actions&reducers/drive-flow-complete/actions';

type MapStateProps = {
  color: string,
  wheelCount: number,
  hasMotor: boolean,
  kind: string,
  owners: Array<string>,
}

type MapDispatchProps = {
  drive: DriveActionCreator,
};

type CombinedProps = MapStateProps & MapDispatchProps;

export class VechicleContainer extends Component {
  props: CombinedProps;

  render() {
    return (
      <Vechicle { ...this.props } onDrive={ this._onDrive } />
    );
  }

  _onDrive() {
    this.props.drive(true, true, null, false);
  }
}

export const mapStateToProps = (state: AppState): MapStateProps => ({
  color: getColor(state),
  wheelCount: getWheelCount(state),
  hasMotor: getHasMotor(state),
  kind: getKind(state),
  owners: getOwners(state),
});

export const mapDispatchToProps: MapDispatchProps = {
  drive,
};

export default connect(mapStateToProps, mapDispatchToProps)(VechicleContainer);
