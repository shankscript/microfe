import * as React from 'react';
import PropTypes from 'prop-types';
import { ChildComponent } from './ChildComponent.js';

export class ExampleComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    onHelloEvt: PropTypes.func
  }

  static defaultProps = {
    name: "default"
  }

  render() {
    const { name, onHelloEvt } = this.props;
    return (
      <div className="exampleComponent">
        <img src="./images/react.png" alt="React Logo" className="logo" />
        <p>Hello <strong>{name}</strong> from your friendly React component.</p>
        <button type="submit" className="btn btn-secondary" onClick={onHelloEvt}>Say hello!</button>
        <ChildComponent name={name}/>
      </div>
    )
  }
}