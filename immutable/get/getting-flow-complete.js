// @flow
import * as Immutable from 'immutable';

type Fruits = Immutable.Map<string, Array<number> | void>;

const hasEvenNumberOfApples = (fruits: Fruits): boolean => {
  const apples = fruits.get('apples') || [];

  return apples.length % 2 === 0;
};
