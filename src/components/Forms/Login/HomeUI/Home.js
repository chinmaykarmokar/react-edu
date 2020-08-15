import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import HomeCards from './HomeCards';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'react-simple-snackbar'
import Spinner from '../../../Spinner/Spinner';

class Home extends Component{

	state = {
		// loading: true
	}

	// componentDidMount() {
	//     setTimeout(() => {
	//           this.setState({loading: false})
	//         }, 1000)
	// }

	render(){
		return(
			// this.state.loading ? <Spinner/> :
			<div>
				<Grid container spacing={3} index = {0}>
					<Grid item xs={1}></Grid>
				    <Grid item xs={5}>
						<a href="/#/test/">
				        <HomeCards className = "EventCard">
				        	<h3 className = "Header">Tests</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "50px"}}>
				        		<FaBookOpen style = {{color: "navy"}}/>
				        	</div>	
				        </HomeCards>
						</a>
				    </Grid>
				    <Grid item xs={5}>
						<HomeCards>
				        	<h3 className = "Header">Events</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "50px"}}>
				        		<FaRegCalendarAlt style = {{color: "navy"}}/>
				        	</div>
				        </HomeCards>
				    </Grid>
				    <Grid item xs={1}></Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={1}></Grid>
				    <Grid item xs={5}>
						<HomeCards>
				        	<h3 className = "Header">Rooms</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "50px"}}>
				        		<FaUsers style = {{color: "navy"}}/>
				        	</div>
				        </HomeCards>
				    </Grid>
				    <Grid item xs={5}>
				        <HomeCards>
				        	<h3 className = "Header">Contacts</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "50px"}}>
				        		<FaGooglePlus style = {{color: "navy"}}/>
				        	</div>
				        </HomeCards>
				    </Grid>
				    <Grid item xs={1}></Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={1}></Grid>
				    <Grid item xs={5}>
						<HomeCards>
				        	<h3 className = "Header">Stats</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "50px"}}>
				        		<FaChartBar style = {{color: "navy"}}/>
				        	</div>	
				        </HomeCards>
				    </Grid>
				    <Grid item xs={5}>
				        <HomeCards>
				        	<h3 className = "Header">Settings</h3>
				        	<hr className = "LineStyle"/>
				        	<div style = {{textAlign:"center", fontSize: "50px"}}>
				        		<FaCogs style = {{color: "navy"}}/>
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