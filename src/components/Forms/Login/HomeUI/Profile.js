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
			       <h3>Chinmay Karmokar</h3>
			    </Grid>
			    <Grid item xs={3}></Grid>
			</Grid>
			<hr className = "ProfileLine"/>
			<br/>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<div className = "AboutCardOne">
						<h4>Description</h4>
					</div>
				</Grid>
			    <Grid item xs={4}>
			    	<div className = "AboutCardTwo">
			    		<h4>Skills</h4>
			    	</div>
			    </Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<div className = "AboutCardOne" style = {{backgroundColor: "#009999", color: "#fff"}}>
						<h4>Education</h4>
					</div>
				</Grid>
			    <Grid item xs={8}>
			    	<div className = "AboutCardTwo" style = {{backgroundColor: "#fff", color: "#000"}}>
			    		<h4>Languages</h4>
			    	</div>
			    </Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<div className = "AboutCardOne">
						<h4>Contact</h4>
					</div>
				</Grid>
			    <Grid item xs={4}>
			    	<div className = "AboutCardTwo">
			    		<h4>Experiences</h4>
			    	</div>
			    </Grid>
			</Grid>
		</div>
	)
}

export default profile;