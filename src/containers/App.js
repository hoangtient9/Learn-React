import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons} 
            changed={this.nameChangedHandler} 
            deleted={this.deletePersonHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit clicked={this.tooglePersonsHandler} showPersons={this.state.showPersons} persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

export default App;
