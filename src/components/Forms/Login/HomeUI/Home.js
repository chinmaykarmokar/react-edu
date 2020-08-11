import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import HomeCards from './HomeCards';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'react-simple-snackbar'
import Spinner from '../../../Spinner/Spinner';

class Home extends Component{

	state = {
		loading: true
	}

	componentDidMount() {
	    setTimeout(() => {
	          this.setState({loading: false})
	        }, 1000)
	}

	render(){
		return(
			this.state.loading ? <Spinner/> :
			<div>
				<Grid container spacing={3} index = {0}>
					<Grid item xs={1}></Grid>
				    <Grid item xs={5}>
				        <HomeCards className = "EventCard">
				        	<h3 className = "Header">Your Tests</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "30px"}}>
				        		<FaBookOpen style = {{color: "navy"}}/>
				        	</div>	
				        </HomeCards>
				    </Grid>
				    <Grid item xs={5}>
				        <HomeCards>
				        	<h3 className = "Header">Your Scores</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "30px"}}>
				        		<FaChartBar style = {{color: "navy"}}/>
				        	</div>	
				        </HomeCards>
				    </Grid>
				    <Grid item xs={1}></Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={1}></Grid>
				    <Grid item xs={5}>
				        <HomeCards>
				        	<h3 className = "Header">Future Events</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "30px"}}>
				        		<FaCalendarPlus style = {{color: "navy"}}/>
				        	</div>
				        </HomeCards>
				    </Grid>
				    <Grid item xs={5}>
				        <HomeCards>
				        	<h3 className = "Header">Create event</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "30px"}}>
				        		<FaPlus style = {{color: "navy"}}/>
				        	</div>
				        </HomeCards>
				    </Grid>
				    <Grid item xs={1}></Grid>
				</Grid>    
			</div>
		)
	}
}

export default Home;