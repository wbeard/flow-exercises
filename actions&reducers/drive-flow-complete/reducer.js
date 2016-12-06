// @flow
import * as Immutable from 'immutable';
import type { DriveAction } from './actions';

export type AppState = Immutable.Map<string, any>;

const initialState = Immutable.Map({
  accelerating: false,
  braking: false,
  turnDirection: null,
  inReverse: false,
  speed: 0,
  attributes: Immutable.Map({
    color: 'green',
    wheelCount: 4,
    hasMotor: false,
    kind: 'bicycle',
    owners: []
  })
});

export const app = (state = initialState, { type, payload }: DriveAction) => {
  switch(type) {
    case 'DRIVE':
      return state.merge({
        accelerating: payload.accelerating,
        braking: payload.braking,
        turnDirection: payload.turnDirection,
        inReverse: payload.inReverse,
        speed: (payload.accelerating ? 1 : payload.braking ? -1 : 0) + state.get('velocity')
      });
    default:
      return state;
  }
}

export const getAttributes = (state: AppState): Immutable.Map<string, any> => state.get('attributes', initialState.get('attributes'));
export const getColor = (state: AppState): string => getAttributes(state).get('color');
export const getWheelCount = (state: AppState): number => getAttributes(state).get('wheelCount');
export const getHasMotor = (state: AppState): boolean => getAttributes(state).get('hasMotor');
export const getKind = (state: AppState): string => getAttributes.get('kind');
export const getOwners = (state: AppState): Array<string> => getAttributes.get('owners');
