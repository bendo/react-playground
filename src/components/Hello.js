import React from 'react';
import World from './World';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <span>Hello world!</span>
    </div>);
  }
}
