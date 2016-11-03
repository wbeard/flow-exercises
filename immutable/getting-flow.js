// @flow
import * as Immutable from 'immutable';

type Fruit = string;
type Fruits = Immutable.Map<string, Fruit>;

const swapAppleAndOrange = (fruits: Immutable.Map<string, any>): Fruits => {
  const apple = fruits.get('apple');
  const orange = fruits.get('orange');

  return fruits.merge(Immutable.Map({
    apple: orange,
    orange: apple
  }));
}
