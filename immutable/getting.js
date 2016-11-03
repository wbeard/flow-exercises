import * as Immutable from 'immutable';

const swapAppleAndOrange = (fruits) => {
  const apple = fruits.get('apple');
  const orange = fruits.get('orange');

  return fruits.merge({
    apple: orange,
    orange: apple,
  });
}
