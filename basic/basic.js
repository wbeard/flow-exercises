// @flow
import React, { Component } from 'react';

type Possession = {
  name: string,
  value: number
};
type Props = {
  alive: boolean,
  age: number,
  name: string,
  love?: any,
  friends: Array<Person> | null,
  possessions: Array<Possession>,
  homePlanet: 'Earth' | 'Mars'
};

export default class Person extends Component {
  props: Props;
  
  render() {
    return (
      <div>
        { this.props.name }
      </div>
    );
  }
};
