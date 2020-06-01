import React, {Component} from "react";
import classes from './Person.css';

class person extends Component {
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
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am a {this.props.name}, I am {this.props.age} old!
        </p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.change} value={this.props.name}></input>
      </div>
    )
  }
};

export default person;
