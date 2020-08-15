import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ProfImg from '../../../../assets/vk.webp';
import "./Profile.css";

const profile = (props) => {

	return(
		<div>
			<Grid container spacing={3}>
				<Grid item xs={3}></Grid>
			    <Grid item xs={6} style = {{textAlign:"center"}}>
					<img src={ProfImg} className = "Profile"/>
					<br/>
					{/* <h3>{props.userName}</h3> */}
			    </Grid>
			    <Grid item xs={3}></Grid>
			</Grid>
			{/* <hr className = "ProfileLine"/> */}
			{/* <br/> */}
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<div className = "AboutCardOne">
						<h4>Institute Name: </h4>
						<h5>{props.instituteName}</h5>
					</div>
				</Grid>
			    <Grid item xs={4}>
			    	<div className = "AboutCardTwo">
			    		<h4>Institute Type: </h4>
						<h5>{props.instituteType}</h5>
			    	</div>
			    </Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<div className = "AboutCardOne" style = {{backgroundColor: "#009999", color: "#fff"}}>
						<h4>Trials Left: </h4>
						<h5>{props.noFreeTrial}</h5>
					</div>
				</Grid>
			    <Grid item xs={8}>
			    	<div className = "AboutCardTwo" style = {{backgroundColor: "#fff", color: "#000"}}>
			    		<h4>Email Id</h4>
						<h5>{props.emailId}</h5>
			    	</div>
			    </Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<div className = "AboutCardOne">
						<h4>Account Creation Date</h4>
						<h5>{props.createdDate}</h5>
					</div>
				</Grid>
			    <Grid item xs={4}>
			    	<div className = "AboutCardTwo">
						<h4>Contact: </h4>
						<h5>{props.phoneNo}</h5>
			    	</div>
			    </Grid>
			</Grid>
		</div>
	)
}

export default profile;