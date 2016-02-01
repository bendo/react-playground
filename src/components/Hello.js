import React from 'react';
import World from './World';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {model: props.store.getState()};
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  onChange() {
    this.setState({model: this.props.store.getState()});
  }

  componentDidMount() {
    this.props.store.addListener(this.onChange);
  }

  componentWillUnmount() {
    this.props.store.removeListener(this.onChange);
  }

  render() {
    return (<div>
      <span>Hello world!</span>
      <World model={this.state.model} dispatch={this.props.dispatch}/>
    </div>);
  }
}
