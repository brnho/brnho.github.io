import React from 'react';
import Card from './Card.jsx';
import './css/Subject.css';

export default class Subject extends React.Component {
	render() {
		return (
			<div className="subject-box">
				<div className="subject-grid">
					<Card imageUrl='castle.jpg'/>
					<Card imageUrl='bubbles.jpg'/>
					<Card imageUrl='castle.jpg' />
					<Card imageUrl='castle.jpg' />
					<Card imageUrl='bubbles.jpg' />
				</div>
			</div>
		);
	}
}


