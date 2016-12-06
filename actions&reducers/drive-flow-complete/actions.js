// @flow
type Direction = 'left' | 'right' | null;
export type DriveAction = {
  type: 'DRIVE',
  payload: {
    accelerating: boolean,
    braking: boolean,
    turnDirection: Direction,
    inReverse: boolean
  }
};

export type driveFn = (
  accelerating: boolean, braking: boolean, turnDirection: Direction, inReverse: boolean
) => DriveAction;

export const drive: driveFn = (
  accelerating: boolean, braking: boolean, turnDirection: Direction, inReverse: boolean
) => {
  return {
    type: 'DRIVE',
    payload: {
      accelerating,
      braking,
      turnDirection,
      inReverse
    }
  };
};
