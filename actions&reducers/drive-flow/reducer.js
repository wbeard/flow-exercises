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

export const app = (state = initialState, action: DriveAction) => {
  switch(action.type) {
    case 'DRIVE':
      return state.merge({
        accelerating: action.accelerating,
        braking: action.braking,
        turnDirection: action.turnDirection,
        inReverse: action.inReverse,
        speed: (action.accelerating ? 1 : action.braking ? -1 : 0) + state.get('velocity')
      });
    default:
      return state;
  }
}

export const getAttributes = (state: AppState): Immutable.Map<string, any> => state.get('attributes');
export const getColor = (state: AppState): string => getAttributes(state).get('color');
export const getWheelCount = (state: AppState): number => getAttributes(state).get('wheelCount');
export const getHasMotor = (state: AppState): boolean => getAttributes(state).get('hasMotor');
export const getKind = (state: AppState): string => getAttributes.get('kind');
export const getOwners = (state: AppState): Array<string> => getAttributes.get('owners');
