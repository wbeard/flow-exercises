// @flow
import * as Immutable from 'immutable';

type Fruits = Immutable.Map<string, string | void>;

const getApple = (fruits: Fruits): string =>
  fruits.get('apple')
