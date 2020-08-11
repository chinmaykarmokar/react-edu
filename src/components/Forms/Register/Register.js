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
		/*institute_one : "School",
		institute_two : "Junior College",
		institute_three : "Degree College",*/
		institute_type : "Select your institute type",
		institute_name: "",
		institute: ""
	}

	changeSelectHandler = (event) => {
		this.setState({institute_type: event.target.value})
	}

	postDataHandler = () => {
		const headers = {
			'Content-Type': 'application/json'
		}

	    const post = {
	        name: this.state.name,
	        phone_no: this.state.phone_no,
	        username: this.state.username,
	        password: this.state.password,
	        email_id: this.state.email,
			institute_type: this.state.institute_type.toLowerCase(),
			institute_name: this.state.institute_name
	    }

	    axios.post('http://localhost:5000/edu/v1/users/teacher/add-user', post, {headers: headers})
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error.response);

			if(error.response['status'] == 401) {
				window.alert('Failed Login');
			}
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
					    	onChange={(event) => this.setState({password: event.target.value})}  
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
					        	onChange={this.changeSelectHandler}
					        	placeholder="Select a person"
					        	id="demo-simple-select"
					        	className = "SelectField"
					        	defaultValue={this.state.institute_type}
					    	>
					    		<MenuItem 
									value={"School"}
					    			
					    		>School</MenuItem>
					    		<MenuItem 
									value={"Junior College"}
					    			
					    		>Junior College</MenuItem>
					    		<MenuItem 
									value={"Degree College"}
					    			
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
							value={this.state.institute_name} 
					    	onChange={(event) => this.setState({institute_name: event.target.value})} 
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