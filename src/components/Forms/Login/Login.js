import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import './Login.css';
import axios from 'axios';

class Login extends Component{

	state = {
		username : "",
		password : ""
	}

	postDataHandler = () => {
		
		const headers = {
			'Content-Type': 'application/json'
		}

		const post = {
			username : this.state.username,
			password : this.state.password
		}

		console.log(post);
		axios.post('http://b98bb773937e.ngrok.io/edu/v1/api/login', post, {headers: headers})
			.then(response =>{
				console.log(response);
			});
	}

	render(){
		return(
			
			<div className = "LoginDiv">
				<div className = "LoginCardLayout">
					<div>
						<h3>Login</h3>
						<hr className = "LoginLine"/>
						<AccountCircleIcon className = "LoginFixedIcon"/>
						<TextField 
							className = "LoginField" 
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
							className = "LoginField" 
							id="standard-basic" 
							label="Password"
							 
					    	onChange={(event) => this.setState({password: event.target.value})}  
					    />
					</div>
					<br/>
					<div className = "BtnAlign">
						<button className = "SubmitData" onClick = {this.postDataHandler}>Log In</button>
					</div>	
				</div>
			</div>
			
		)
	}
}

export default Login;