import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: '1', name: 'Tien', age: 22},
      {id: '2', name: 'Luis', age: 30},
      {id: '3', name: 'Max', age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
            this.state.persons.map((person, index) => {
              return <Person name={person.name} age={person.age} key={person.id} click={() => this.deletePersonHandler(index)} change={(event) => this.nameChangedHandler(event, person.id)} />
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
