import React from 'react';
import Contact from '../Contact/Contact.js';

const ContactList = (props) => (
	<ul className='list-group'>
		<li className='list-group-header'>
			<input className='form-control' type='text' placeholder='Search..' />
		</li>
		{props.data.map(contact => <Contact key={contact._id} firstName={contact.firstName} surname={contact.surname} phone={contact.phone}/> )}
	</ul>
);

export default ContactList;
