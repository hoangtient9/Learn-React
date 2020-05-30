import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi Tien</h1>
      <p>This is really working!</p>
      <Person name='Tien' age='22'/>
      <Person name='Luis' age='30'>My Hobbies: Racing</Person>
      <Person name='Max' age='25'/>
    </div>

    // React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m Tien'))
  );
}

export default App;
