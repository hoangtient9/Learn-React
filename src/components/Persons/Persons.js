import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(`[Persons.js] shouldComponentUpdate` )
	// 	if (
	// 		nextProps.persons !== this.props.persons ||
	// 		nextProps.changed !== this.props.changed ||
	// 		nextProps.deleted !== this.props.deleted
	// 		) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(preProps, preState) {
		console.log(`[Persons.js] getSnapshotBeforeUpdate`)
		return {message: 'snapshot'};
	}

	componentDidUpdate(preProps, preState, snapshot) {
		console.log(`[Persons.js] componentDidUpdat`, snapshot)
	}

	render() {
		console.log(`[Persons.js] render`);

		return (
			this.props.persons.map((person, index) => {
				return (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						click={() => this.props.deleted(index)}
						change={(event) => this.props.changed(event, person.id)}
					/>
				);
			})
		);
	} 
}
export default Persons;
