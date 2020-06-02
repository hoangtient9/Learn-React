import React, {useEffect, useRef} from "react";
import classes from './Cockpit.css';
import AuthContext from '../../containers/context/auth-context';

const Cockpit = (props) => {

  const toogleBtnRef = useRef(null);

  useEffect(() => {
    console.log(`[Cockpit.js] useEffect`)
    toogleBtnRef.current.click()
    return () => {
      console.log(`[Cockpit.js] will unmount`)
    }
  }, [])

  useEffect(() => {
    console.log(`[Cockpit.js] 2nd useEffect`)
    return () => {
      console.log(`[Cockpit.js] 2nd will unmount`)
    }
  })

  const assignedClass = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClass.push(classes.red)
  }

  if (props.personsLength <= 1) {
    assignedClass.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClass.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked} ref={toogleBtnRef} >Toogle Button</button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit)