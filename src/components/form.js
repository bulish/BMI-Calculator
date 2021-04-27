import React, { useState } from 'react';

const Form = () => {
	let [formHeight, setFormHeight] = useState('');
	let [formWeight, setFormWeight] = useState('');
    let [result, setResult] = useState('');

	const submitFunction = (e) => {
        e.preventDefault();
		setFormHeight = formHeight;
        setFormWeight = formWeight;
        result = setFormWeight/((setFormHeight/100)**2);
        result = result.toFixed(2);
        console.log(result);
        setResult([result]);
	}

    const heightHandler = (e) => {
        setFormHeight(e.target.value);
    }

    const weightHandler = (e) => {
        setFormWeight(e.target.value);
    }
	return (
			<form name="myForm" onSubmit={submitFunction}>
				<span>Height in cm:</span><input type="text" name="height" value={formHeight} onChange={heightHandler}/><br />
				<span>Weight in kg:</span><input type="text" name="weight" value={formWeight} onChange={weightHandler}/><br />
				<input type="submit" value="Calculate" name="submitBtn" className="submitBtn"/><br />
                <input type="text" readOnly value={result} className="inputResult"/>
			</form>
	);
}

export default Form;
