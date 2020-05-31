import React from "react";
import './Person.css';
import Radium from 'radium';

const person = (props) => {

  const style = {
    '@media (min-width: 40rem)': {
      width: '450px',
    }
  }

  return (
    <div className='Person' style={style}>
      <p onClick={props.click}>
        I am a {props.name}, I am {props.age} old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default Radium(person);
