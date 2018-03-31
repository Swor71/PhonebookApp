import React from 'react';

const Contact = (props) => (
	<li className='list-group-item'>
		<img className='img-circle media-object pull-left' src={props.picture} width='32' height='32' />
		<div className='media-body'>
			<strong>Name: {props.name}</strong>
			<strong>Name: {props.surname}</strong>
			<span>Phone number: {props.phone}</span>
		</div>
	</li>
);

export default Contact;