import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Tien', age: 22},
      {name: 'Luis', age: 30},
      {name: 'Max', age: 25}
    ],
    otherState: 'some other value'
  });

  console.log(personsState);

  const switchNameHandler = (name) => {
    setPersonsState({
      persons: [
        {name: name, age: 22},
        {name: 'Luis', age: 30},
        {name: 'Max', age: 27}
      ],
      otherState: 'some other value'
    })
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Tien', age: 22},
        {name: event.target.value, age: 30},
        {name: 'Max', age: 27}
      ],
      otherState: 'some other value'
    })
  }

  return (
    <div className="App">
      <h1>Hi Tien</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Hoang')}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, 'Hoa')} change={nameChangedHandler}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>

    // React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m Tien'))
  );
}

export default App;
