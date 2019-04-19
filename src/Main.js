import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Maldives from "./Maldives";
import Bhutan from "./Bhutan";
import Bali from "./Bali";
import News from "./News";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Badge from 'react-bootstrap/Badge'




 
class Main extends Component {
	
	
	
  render() {
    return (
      <HashRouter>
        <div>
		
          <div className = "topheader" >
		   <h1> TRAVEL DIARIES </h1>
		   </div>
		   <br/>
		   		  
		  <div className = "body">
		  
		  <div className = "leftcolumn" >
		  <div className="content">
            <Route exact path="/" component={Home}/>
			<Route path="/Maldives" component={Maldives}/>
			<Route path="/Bali" component={Bali}/>
			<Route path="/Bhutan" component={Bhutan}/>
			            
		  </div>
		  
		  <div className = "footer">
		    <h4>@Copyright 2019. All rights reserved.</h4>
		   </div>
		  </div>
		  
		  
		  
		  </div>
		    
		  <div className=" rightcolumn ">
          <ul className="header">
          <li><NavLink to="/"><h2>Home</h2></NavLink></li>
		  </ul>
		  
			  
		  <div className="Navigation">
			<h2>Top 10 News Today</h2>
			<News/>
		  </div>
		  </div>
		  
		  
		  
		   
		  
			
		 </div>
							
      </HashRouter>
    );
  }
}

export default Main;