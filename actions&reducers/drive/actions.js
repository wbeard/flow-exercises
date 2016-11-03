export const drive = (accelerate, braking, turnDirection, inReverse) => {
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
