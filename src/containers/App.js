import React, {Component} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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
    let btnClass = '';
    let persons = null;
    if (this.state.showPersons) {
      persons = ( 
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name} 
                age={person.age} 
                click={() => this.deletePersonHandler(index)} 
                change={(event) => this.nameChangedHandler(event, person.id)} 
              />   
            })
          }
        </div>
      )

      btnClass = classes.Red;
    }

    const assignedClass = [];
    if (this.state.persons.length <= 2) {
      assignedClass.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClass.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi Tien</h1>
        <p className={assignedClass.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.tooglePersonsHandler}>Toogle Button</button>
        {persons}
      </div>
      // React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m Tien'))
    );
  }
}

export default App;
