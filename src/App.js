import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Tien', age: 22},
      {name: 'Luis', age: 30},
      {name: 'Max', age: 25}
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Hoang', age: 22},
        {name: 'Luis', age: 30},
        {name: 'Max', age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Tien</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
  
      // React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m Tien'))
    );
  }
}

export default App;
