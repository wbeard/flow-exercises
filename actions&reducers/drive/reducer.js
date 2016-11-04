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
        speed: (accelerating ? 1 : braking ? -1 : 0) + state.get('velocity');
      });
    default:
      return state;
  }
}

export getAttributes = (state) => state.get('attributes');
export getColor = (state) => getAttributes(state).get('color');
export getWheelCount = (state) => getAttributes(state).get('wheelCount');
export getHasMotor = (state) => getAttributes(state).get('hasMotor');
export getKind = (state) => getAttributes.get('kind');
export getOwners = (state) => getAttributes.get('owners');
