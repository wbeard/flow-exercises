// @flow
import React, { Component, PropTypes } from 'react';
import { drive } from './actions';

type ComponentProps = {
  dispatch: Function
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
    this.props.dispatch(drive(true, true, 'none', false));
  }

  stopDriving = () => {
    this.props.dispatch(drive(false, true, 'none', false));
  }
}
