import React from 'react';
import Text from './components/text';
import Form from './components/form';
import './styles/main.scss';

function App() {
	return (
		<div>
			<div className="title">BMI Calculator</div>
			<div className="container">
				<Form />
				<Text />
			</div>
		</div>
	);
}

export default App;
