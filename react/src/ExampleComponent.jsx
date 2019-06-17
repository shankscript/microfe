import * as React from 'react';
import PropTypes from 'prop-types';
import { ChildComponent } from './ChildComponent.jsx';

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
      
        <div className="form-group">
          <p>Hello <strong>{name}</strong>!</p>
        </div>
        <button  className="btn btn-primary" onClick={onHelloEvt}>Hi to Angular!</button>

         <ChildComponent name={name}/>

      </div>
    )
  }
}