import React from 'react';
import './Quiz.css'

const quiz = (props) => {
	return(
		<div className = "Quizdiv">
			<h1>{props.question}</h1>
			<div className = "lists">
				<input type="radio" id="1" name="options" value="option1"/>
				<label>{props.optionone}</label>
				<br/>
				<br/>
				<input type="radio" id="2" name="options" value="option2"/>
				<label>{props.optiontwo}</label>
				<br/>
				<br/>
				<input type="radio" id="3" name="options" value="option3"/>
				<label>{props.optionthree}</label>
				<br/>
				<br/>
				<input type="radio" id="4" name="options" value="option4"/>
				<label>{props.optionfour}</label>
			</div>
		</div>
	)
}

export default quiz;