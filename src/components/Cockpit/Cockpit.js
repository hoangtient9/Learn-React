import React from "react";
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const assignedClass = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClass.push(classes.red)
  }

  if (props.persons.length <= 1) {
    assignedClass.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am Tien</h1>
      <p className={assignedClass.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>Toogle Button</button>
    </div>
  );
};

export default Cockpit