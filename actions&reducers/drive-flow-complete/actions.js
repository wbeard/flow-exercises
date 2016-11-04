// @flow
type Direction = 'left' | 'right' | null;
export type DriveAction = {
  type: 'DRIVE',
  payload: {
    accelerate: boolean,
    braking: boolean,
    turnDirection: Direction,
    inReverse: boolean
  }
};

export type driveFn = (
  accelerate: boolean, braking: boolean, turnDirection: Direction, inReverse: boolean
) => DriveAction;

export const drive: driveFn = (
  accelerate: boolean, braking: boolean, turnDirection: Direction, inReverse: boolean
): DriveAction => {
  return {
    type: 'DRIVE',
    payload: {
      accelerate,
      braking,
      turnDirection,
      inReverse
    }
  };
};
