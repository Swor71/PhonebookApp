import React from 'react';

const Contact = (props) => (
	<li className='list-group-item'>
		<img className='img-circle media-object pull-left' src={props.picture} alt='avatar' width='32' height='32' />
		<div className='media-body contact-info'>
			<strong>Name: <span className='not-bold'>{props.firstName}</span></strong>
			<strong>Surname: <span className='not-bold'>{props.surname}</span></strong>
			<strong>Phone number: <span className='not-bold'>{props.phone}</span></strong>
		</div>
	</li>
);

export default Contact;