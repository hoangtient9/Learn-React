import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi Tien</h1>
      <p>This is really working!</p>
      <Person />
    </div>

    // React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m Tien'))
  );
}

export default App;
