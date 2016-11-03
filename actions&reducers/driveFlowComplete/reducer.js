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

export const app = (state = initialState, { type, payload }: DriveAction) => {
  switch(type) {
    case 'DRIVE':
      return state.merge({
        accelerating: payload.accelerate,
        braking: payload.braking,
        turnDirection: payload.turnDirection,
        inReverse: payload.inReverse,
        speed: (payload.accelerate ? 1 : payload.braking ? -1 : 0) + state.get('velocity')
      });
    default:
      return state;
  }
}
