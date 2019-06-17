import * as React from 'react';
import PropTypes from 'prop-types';

export class ChildComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    onHelloEvt: PropTypes.func
  }

  static defaultProps = {
    name: "default"
  }

  render() {
    const { name, onHelloEvt } = this.props;
    const style =  {
      float: "right",
      border: "1px solid #42abd4",
      "borderRadius": "5px",
      padding: "10px",
      top: "-28px",
      position: "relative",
      background:" #c4ddf3",
  }
    return (
      <div className="childComponent" style={style}>
       
        <p>Child <strong>{name}</strong> </p>
       
      </div>
    )
  }
}