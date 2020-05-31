import React from "react";
// import './Person.css';
import styled from 'styled-components';

const person = (props) => {

  const Stylediv = styled.div`
    padding: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    width: 60%;
    margin: auto;
    margin-top: 16px;

    @media (min-width: 500px) {
      width: 450px
    }
  `;

  return (
    // <div className='Person' style={style}>
    <Stylediv>
      <p onClick={props.click}>
        I am a {props.name}, I am {props.age} old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </Stylediv>

    // </div>
  );
};

export default person;
