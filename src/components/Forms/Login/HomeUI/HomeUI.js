import React, { Component } from 'react';
import Home from './Home';
import Profile from './Profile';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { HashRouter, Switch, Route, Link } from "react-router-dom";

class HomeUI extends Component{

	state = {
		showHome: false,
		showProfile: false,
		showBilling: false
	}

	handleHome = () => {
		if (this.state.showProfile) {
			this.setState({showProfile:false});
		}
		if (this.state.showBilling) {
			this.setState({showBilling:false});
		}
		this.setState({showHome:true})
	}

	handleProfile = () => {
		if (this.state.showHome) {
			this.setState({showHome:false});
		}
		if (this.state.showBilling) {
			this.setState({showBilling:false});
		}
		this.setState({showProfile:true})
	}

	componentDidMount() {
		this.setState({showHome:true});
	}

	/*handleBilling = () => {
		this.setState({showBilling:true})
	}*/

	render(){
		return(
			
			    <div className = "Home">
			    
					<h3 className = "Header">Welcome, xyz</h3>
					<hr className = "LineStyleTop"/>
					<br/>
					<AppBar style = {{backgroundColor:"#fff", border:"none", boxShadow:"none"}} position="static">
					    <Tabs centered >
					    	<button 
					    		style = {{
					    			border:"none", 
					    			color:"#fff",
					    			width:"200px", 
					    			padding:"20px",
					    			fontSize:"15px",
					    			backgroundColor: "navy",
					    			boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
					    			borderTopLeftRadius: "50px",
					    			borderBottomLeftRadius: "50px",
					    		}} onClick = {this.handleHome}>Home</button>					    	
					    	<button 
					    		style = {{
					    			border:"none", 
					    			color:"#fff",
					    			width:"200px", 
					    			padding:"20px",
					    			backgroundColor: "navy",
					    			fontSize:"15px",
					    			boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
					    		}} onClick = {this.handleProfile}>Profile</button>
					    	<button 
					    		style = {{
					    			border:"none", 
					    			color:"#fff",
					    			width:"200px", 
					    			padding:"20px",
					    			backgroundColor: "navy",
					    			fontSize:"15px",
					    			boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
					    			borderTopRightRadius: "50px",
					    			borderBottomRightRadius: "50px",
					    		}} onClick = {this.handleBilling}>Billing</button>
					    				    	
					    </Tabs>        				    
					</AppBar>
					<br/>
					<div>
					{this.state.showHome ?
					 	<Home/> :
					 	null
					} 
					{this.state.showProfile ?
					    <Profile/> :
					   	null
					} 
					</div>			       
			    </div>
			
			
				
				 				    				      
				
		)
	}
}

export default HomeUI;