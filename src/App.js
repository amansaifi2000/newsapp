import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
export default class App extends Component {
  constructor(){
    super()
    this.state = {
        category : 'general'
    }
}

   handleCategory = (category) =>{
    this.setState({category})
  } 
  render() {
    return (
    <div>
<Router>
<Navbar handleCategory={(category)=>this.handleCategory(category)}/>
<Switch>
<Route  path="/"><News key= {this.state.category} pageSize={6} country='in' category={this.state.category}/></Route> 
</Switch>
</Router>
    </div>
    )
  }
}


