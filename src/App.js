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
    return (
      <div className="App">
        <h1>Hi Tien</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.tooglePersonsHandler}>Switch Name</button>
        {this.state.showPersons ? <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Hoa')} change={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null
        }
      </div>
  
      // React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m Tien'))
    );
  }
}

export default App;
