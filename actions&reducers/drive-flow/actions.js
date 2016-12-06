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

export const drive = (
  accelerating: boolean, braking: boolean, turnDirection: Direction, inReverse: boolean
): DriveAction => {
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
