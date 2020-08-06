import React, { Component } from 'react';
import Quizrender from './components/Quiz/Quizrender';
import Register from './components/Forms/Register/Register';
import Login from './components/Forms/Login/Login';
import './App.css';

class App extends Component{

        state = {
            mcq : [
                {
                  question: "What is the capital of India?",
                  optionone: "Mumbai",
                  optiontwo: "Delhi",
                  optionthree: "Kolkata",
                  optionfour: "Hyderabad"
                },
                {
                  question: "Who is the PM of India?",
                  optionone: "Narendra Modi",
                  optiontwo: "Rahul Gandhi",
                  optionthree: "Arvind Kejrival",
                  optionfour: "Amit Shah"
                }
            ]
        }

    render(){
        return(
           <div>
              {/*<Quizrender mcq = {this.state.mcq}/>*/}
              <Login/>
              {/*<Register/>*/}
           </div>
        )
    }
}

export default App;
