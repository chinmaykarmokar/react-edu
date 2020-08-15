import React, { Component } from 'react';
import Quizrender from './components/Quiz/Quizrender';
import Register from './components/Forms/Register/Register';
import Login from './components/Forms/Login/Login';
import Test from './components/Forms/Test/Test';
import HomeUI from './components/Forms/Login/HomeUI/HomeUI';
import Home from './components/Forms/Login/HomeUI/Home';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
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
          <HashRouter>
              <div>
              {/*<Quizrender mcq = {this.state.mcq}/>*/}
              {/*<Login/>*/}
              {/*<Register/>*/}
                  <Switch>
                      <Route path = "/login" exact component = {Login}>
                          <Login/>
                      </Route>
                      <Route path = "/quiz" component = {Quizrender}></Route>
                      <Route path = "/register" component = {Register}></Route>
                      <Route path = "/home" component = {HomeUI}></Route>
                      <Route path = "/homepage" component = {Home}></Route>
                      <Route path = "/test" component = {Test}></Route>
                  </Switch>
              </div>
          </HashRouter> 
        )
    }
}

export default App;
