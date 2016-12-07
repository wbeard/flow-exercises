// @flow
import React, { Component } from 'react';

type Animal = 'bird' | 'cat' | 'dog';
type Possession = {
  name: string,
  value: number
};
type Person = {
  name: string
};
type Props = {
  alive: boolean,
  age: number,
  name: string,
  love: any,
  friends: Array<Person | Animal>,
  possessions: Array<Possession>,
  homePlanet?: 'Earth' | 'Mars'
};

function PersonComponent(props: Props) {
  return (
    <div>
      <span>Is Alive: { props.alive }</span>
      <span>Age: { props.age }</span>
      <span>Name: { props.mane }</span>
      <span>Loves: { props.love }</span>
      <span>Friends: <ul>{ props.friends.map(friend => <li>friend</li>) }</ul></span>
      <span>Friends: <ul>{ props.possessions.map(pos => <li>pos.name</li>) }</ul></span>
      <span>Home Planet: { props.homePlanet ? props.homePlanet : 'None' }</span>
    </div>
  );
};
