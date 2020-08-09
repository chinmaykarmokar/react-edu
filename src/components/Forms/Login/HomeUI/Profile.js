import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import "./Profile.css";

const profile = (props) => {
	return(
		<div>
			<Grid container spacing={3}>
				<Grid item xs={4} >hello</Grid>
			    <Grid item xs={4} >
			       <div className = "ProfilePicture"></div>
			    </Grid>
			    <Grid item xs={4} >hello</Grid>
			</Grid>
		</div>
	)
}

export default profile;