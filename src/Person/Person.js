import React from "react";
import classes from './Person.css';

const person = (props) => {
  if (Math.random() >= 0.7) {
    throw new Error('Something went wrong!')
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am a {props.name}, I am {props.age} old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  )
};

export default person;
