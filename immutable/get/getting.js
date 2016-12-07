import * as Immutable from 'immutable';

const hasEvenNumberOfApples = (fruits) => {
  const apples = fruits.get('apples');

  return apples.length % 2 === 0;
};
