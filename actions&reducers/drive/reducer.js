import * as Immutable from 'immutable';

const initialState = Immutable.Map({
  accelerating: false,
  braking: false,
  turnDirection: null,
  inReverse: false,
  speed: 0
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
