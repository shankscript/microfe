import * as React from 'react';
import PropTypes from 'prop-types';

import {util} from '../../shared/util';
console.log();

let store = util.getStore();

export class ChildComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    onHelloEvt: PropTypes.func
  }

  static defaultProps = {
    name: "default"
  }

 constructor(props) {
    super(props);
    this.state = {storeVal: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      storeVal: store.getVal('key')
    }));
  }

  render() {
    const { name, onHelloEvt } = this.props;

    return (
      <div className="childComponent" onClick={this.handleClick}>
       
        <p>In child store value is : <strong>{this.state.storeVal}</strong> </p>
       
      </div>
    )
  }
}