import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import SchoolIcon from '@material-ui/icons/School';
import DomainIcon from '@material-ui/icons/Domain';
import Button from '@material-ui/core/Button';
import './Register.css';
import axios from 'axios';

class Register extends Component{

	state = {
		name : "",
		phone_no : "",
		username : "",
		password : "",
		email : "",
		institute_one : "School",
		institute_two : "Junior College",
		institute_three : "Degree College",
		institute : ""
	}

	postDataHandler = () => {
	    const post = {
	        name: this.state.name,
	        phone_no: this.state.phone_no,
	        username: this.state.username,
	        password: this.state.password,
	        email: this.state.email,
	        institute_type_one: this.state.institute_one,
	        institute_type_two: this.state.institute_two,
	        institute_type_three: this.state.institute_type_three, 
	        institute: this.state.institute
	    }
	    axios.post('http://192.168.0.107:5000/edu/v1/api/generate-token', post)
	        .then(response => {
	            console.log(response);
	        });
	}

	render(){
		return(
			<div className = "ParentDiv">
				<div className = "CardLayout">
					<div>
						<h3>Register with us</h3>
						<hr className = "Line"/>
					    <FaceIcon className = "FixedIcon"/>
					    <TextField 
					    	className = "Field" 
					    	id="input-with-icon-grid" 
					    	label="Name"
					    	value={this.state.name} 
					    	onChange={(event) => this.setState({name: event.target.value})} 
					    />	
					</div> 		
					<br/>
					<div>
					    <CallIcon className = "FixedIcon"/>
					    <TextField 
					    	className = "Field" 
					    	id="input-with-icon-grid" 
					    	label="Phone Number"
					    	value={this.state.phone_no} 
					    	onChange={(event) => this.setState({phone_no: event.target.value})}  
					    />	
					</div> 
					<br/>
					<div>
						<AccountCircleIcon className = "FixedIcon"/>
						<TextField 
							className = "Field" 
							id="standard-basic" 
							label="Username"
							value={this.state.username} 
							onChange={(event) => this.setState({username: event.target.value})}  
						/>
					</div>	
					<br/>
					<div>
						<VisibilityOffIcon className = "FixedIcon"/>
						<TextField 
							type = "password" 
							className = "Field" 
							id="standard-basic" 
							label="Password" 
					    	onChange={(event) => this.setState({name: event.target.password})}  
					    />
					</div>		
					<br/>
					<div>
						<EmailIcon className = "FixedIcon"/>
						<TextField 
							className = "Field" 
							id="standard-basic" 
							label="Email ID"
							value={this.state.email} 
					    	onChange={(event) => this.setState({email: event.target.value})}  
					    />
					</div>	
					<br/>
					<div>
						<SchoolIcon className = "FixedIcon"/><TextField className = "Field" label=" " id="standard-read-only-input" InputProps={{readOnly: true,}} defaultValue="Select Institute Type" />
						<br/>
					    	<Select
					        	labelId="demo-simple-select-label"
					        	id="demo-simple-select"
					        	className = "SelectField"
					    	>
					    		<MenuItem 
					    			value={this.state.institute_one}
					    			onChange={(event) => this.setState({institute_one: event.target.value})}
					    		>School</MenuItem>
					    		<MenuItem 
					    			value={this.state.institute_two}
					    			onChange={(event) => this.setState({institute_two: event.target.value})}
					    		>Junior College</MenuItem>
					    		<MenuItem 
					    			value={this.state.institute_three}
					    			onChange={(event) => this.setState({institute_three: event.target.value})}
					    		>Degree College</MenuItem>
					    	</Select>
					</div>   	
					<br/>
					<div>
						<DomainIcon className = "FixedIcon"/>
						<TextField 
							className = "Field" 
							id="standard-basic" 
							label="Institute Name" 
							value={this.state.institute} 
					    	onChange={(event) => this.setState({institute: event.target.value})} 
					    />
					</div>	
					<br/>
					<div className = "BtnAlign">
						<button className = "SubmitData" onClick = {this.postDataHandler}>Register</button>
					</div>
				</div>	
			</div>
		)
	}
}

export default Register;