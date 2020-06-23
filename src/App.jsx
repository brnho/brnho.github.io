import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Subject from './Subject.jsx';

function App() {
	return (
		<div>
			<Navbar />
			<Subject />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('content'));