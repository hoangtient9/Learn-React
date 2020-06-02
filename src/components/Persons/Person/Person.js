import React, {Component} from "react";
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../containers/hoc/withClass';
import Aux from '../../../containers/hoc/Auxiliary';
import AuthContext from '../../../containers/context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  shouldComponentUpdate(nextprops, nextState) {
    console.log(`[Person.js]  shouldComponentUpdate`)
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState, snapshot) {
    console.log(`[Person.js] getSnapshotBeforeUpdate`)
    return null;
  }

  componentDidUpdate() {
    console.log(`[Person.js] componentDidUpdate`)
  }

  render() {
    console.log(`[Person.js] render`)
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated </p> : <p>Please login</p>}
        <p onClick={this.props.click}>
          I am a {this.props.name}, I am {this.props.age} old!
        </p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.change} value={this.props.name} ref={this.inputElementRef}></input>
      </Aux>
    )
  }
};

Person.propTypes = {
  click: PropTypes.func,
  change: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}

export default withClass(Person, classes.Person);
