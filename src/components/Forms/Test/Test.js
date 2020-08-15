// Import Modules:

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Card from '@material-ui/core/Card';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

// Component Definition:

class Test extends Component{

    // const [value, setValue] = React.useState(0);

    // handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

	state = {
        details: "",
        customerId: "",
        noMandatoryQuestions: 0,
        schedule: "",
        startTime: "",
        endTime: "",
        qna: [],
        //     {
        //         question: "",
        //         options": [
        //             2",
        //             3",
        //             4",
        //             5"
        //         ],
        //         answer: "",
        //     }
        // ],
        duration: 0,
        showTestDetails: false,
        showTestQuestions: false
    }

    // handleTestDetails = () => {
	// 	if (this.state.showTestQuestions) {
	// 		this.setState({showTestQuestions:false});
	// 	}
	// 	this.setState({showTestDetails:true})
	// }

	// handleTestQuestions = () => {
	// 	if (this.state.showTestDetails) {
	// 		this.setState({showTestDetails:false});
	// 	}
	// 	this.setState({showTestQuestions:true})
    // }
    
    componentDidMount() {
		this.setState({showTestDetails:true})
	}

    render(){
        return(
            <div className = "ParentDiv">
                <Tabs
                    // value={value}
                    // onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
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
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        }} 
                        onClick = {this.handleTestDetails}
                    >
                        TEST DETAILS
                    </button>
                </Tabs>
                <br/>
                <div>
                    {this.state.showTestDetails ?
                        <div>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <div className = "CardLayout">
                                        <div>
                                            <h3>Create New Test</h3>
                                            <hr className = "Line"/>
                                        </div>
                                        <div>
                                            <TextField 
                                                className = "Field" 
                                                id="standard-basic" 
                                                label="Details"
                                                value={this.state.details} 
                                                onChange={(event) => this.setState({details: event.target.value})}  
                                            />
                                        </div>
                                        <br/>
                                        <div>
                                            <TextField 
                                                className = "Field" 
                                                id="standard-basic" 
                                                label="Customer Id"
                                                value={this.state.customerId} 
                                                onChange={(event) => this.setState({customerId: event.target.value})}  
                                            />
                                        </div>
                                        <br/>
                                        <div>
                                            <TextField 
                                                className = "Field" 
                                                id="standard-basic" 
                                                label="No of Mandatory Questions"
                                                type="number"
                                                value={this.state.noMandatoryQuestions} 
                                                onChange={(event) => this.setState({noMandatoryQuestions: event.target.value})}  
                                            />
                                        </div>
                                        <br/>
                                        <div>
                                            <TextField
                                                className = "Field" 
                                                id="datetime-local"
                                                label="Schedule"
                                                type="datetime-local"
                                                className = "Field" 
                                                defaultValue="2017-05-24T10:30"
                                                /*value={this.state.schedule}*/ 
                                                onChange={(event) => this.setState({schedule: event.target.value})}
                                            />
                                        </div>
                                        <br/>
                                        <div>
                                            <TextField
                                                className = "Field" 
                                                id="datetime-local"
                                                label="Start Time"
                                                type="datetime-local"
                                                defaultValue="2017-05-24T10:30"
                                                /*value={this.state.startTime}*/ 
                                                onChange={(event) => this.setState({startTime: event.target.value})}
                                            />
                                        </div>
                                        <br/>
                                        <div>
                                            <TextField
                                                className = "Field" 
                                                id="datetime-local"
                                                label="End Time"
                                                defaultValue="2017-05-24T10:30"
                                                onChange={(event) => this.setState({endTime: event.target.value})}
                                            />
                                        </div>
                                        <br/>
                                        <div>
                                            <TextField 
                                                className = "Field" 
                                                id="standard-basic" 
                                                label="Duration"
                                                type="number"
                                                value={this.state.noMandatoryQuestions} 
                                                onChange={(event) => this.setState({noMandatoryQuestions: event.target.value})}  
                                            />
                                        </div>
                                        <br/>
                                        <div className = "BtnAlign">
                                            <button className = "SubmitData" onClick = {this.postDataHandler}>Submit Test Details</button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div> :
                        null
                    }
                    
				</div>
            </div>    
        )
    }
}

export default Test;