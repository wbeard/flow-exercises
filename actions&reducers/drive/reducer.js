import * as Immutable from 'immutable';

const initialState = Immutable.Map({
  accelerating: false,
  braking: false,
  turnDirection: null,
  inReverse: false,
  speed: 0,
  attributes: {
    color: 'green',
    wheelCount: 4,
    hasMotor: false,
    kind: 'bicycle',
    owners: null
  }
});

export const app = (state = initialState, action) => {
  switch(action.type) {
    case 'DRIVE':
      return state.merge({
        accelerating: action.acceleration,
        braking: action.braking,
        turnDirection: action.turnDirection,
        inReverse: action.inReverse,
        speed: (action.accelerating ? 1 : action.braking ? -1 : 0) + state.get('speed')
      });
    default:
      return state;
  }
}

export const getAttributes = (state) => state.get('attributes');
export const getColor = (state) => getAttributes(state).get('color');
export const getWheelCount = (state) => getAttributes(state).get('wheelCount');
export const getHasMotor = (state) => getAttributes(state).get('hasMotor');
export const getKind = (state) => getAttributes.get('kind');
export const getOwners = (state) => getAttributes.get('owners');
