// @flow
import React, { Component, PropTypes } from 'react';
import type { DriveActionCreator } from './actions';

type ComponentProps = {
  drive: DriveActionCreator
};

export default class MyComponent extends Component {
  props: ComponentProps;

  render() {
    return (
      <div>
        <button onClick={ this.driveForward }>Drive!</button>
        <button onClick={ this.stopDriving }>Brake!</button>
      </div>
    );
  }

  driveForward = () => {
    this.props.drive(true, true, 'none', false);
  }

  stopDriving = () => {
    this.props.drive(false, true, 'none', false);
  }
}
