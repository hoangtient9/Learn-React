import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I am a {props.name}, I am {props.age} old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
