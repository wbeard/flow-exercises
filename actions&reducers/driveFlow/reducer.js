// @flow
import * as Immutable from 'immutable';
import type { DriveAction } from './actions';

const initialState = Immutable.Map({
  accelerating: false,
  braking: false,
  turnDirection: null,
  inReverse: false,
  speed: 0
});

export const app = (state = initialState, action: DriveAction) => {
  switch(action.type) {
    case 'DRIVE':
      return state.merge({
        accelerating: action.acceleration,
        braking: action.braking,
        turnDirection: action.turnDirection,
        inReverse: action.inReverse,
        speed: (action.accelerating ? 1 : action.braking ? -1 : 0) + state.get('velocity')
      });
    default:
      return state;
  }
}
