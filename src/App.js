import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Tien', age: 22},
      {name: 'Luis', age: 30},
      {name: 'Max', age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        {name: name, age: 22},
        {name: 'Luis', age: 30},
        {name: 'Max', age: 27}
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Tien', age: 22},
        {name: event.target.value, age: 30},
        {name: 'Max', age: 27}
      ]
    })
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      font: 'inherit'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = ( 
        <div>
          {
            this.state.persons.map((person, idx) => {
              return <Person name={person.name} age={person.age} key={idx}/>
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi Tien</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.tooglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
  
      // React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m Tien'))
    );
  }
}

export default App;
