import React from 'react';

import ContactList from '../components/ContactList/ContactList.js';
import ContactDetails from '../components/ContactDetails/ContactDetails.js';

class PhoneApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	componentWillMount() {
		fetch('http://localhost:3004/contacts')
			.then(data => data.json())
			.then(data => this.setState({ data }));
	}

	render() {
		return (
			<div>
				<ContactList data={this.state.data} />
				<ContactDetails />
			</div>
		);
	}
}

export default PhoneApp;
