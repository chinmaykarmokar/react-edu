import React from 'react';
import Quiz from './Quiz';

const quizrender = (props) => props.mcq.map((data,i) => {
	return <Quiz 
	    question = {data.question}
	    optionone = {data.optionone}
	    optiontwo = {data.optiontwo}
	    optionthree = {data.optionthree}
	    optionfour = {data.optionfour}/>
	})

export default quizrender;