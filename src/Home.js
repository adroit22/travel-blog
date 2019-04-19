import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Maldives from "./Maldives";
import Bhutan from "./Bhutan";
import Bali from "./Bali";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';

 
class Home extends Component {
  render() {
    return (
      <div className="travel">

<CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'} }>
  <Card style={{flex: '1', padding: '10px', textAlign: 'center'}} >
   <Card.Img variant="top" src="Images/maldives.jpg" height="200px" width="360px" border= "3px solid #ccc"/>
   
    <Card.Body>
      <Card.Title><NavLink exact to="/Maldives"><h1>MALDIVES: Earth's Paradise</h1></NavLink></Card.Title>
      <Card.Text>
        One of the most beautiful places in the world, Maldives is famous destination. It offers gorgeous views of the ocean on island resorts that are mini paradises on their own. A combination of pristine blue beaches, sandy lagoons, majestic palm trees, and underwater reefs makes Maldives a dream destination.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Updated on: Dec 19, 2018</small>
    </Card.Footer>
  </Card>
  <Card style={{flex: '1', padding: '10px', textAlign: 'center'}}>
    <Card.Img variant="top" src="Images/bali.jpg" height="200px" width="360px" border= "3px solid #ccc"  />
    <Card.Body>
      <Card.Title><NavLink to="/Bali"><h1>BALI: The island of deities</h1></NavLink></Card.Title>
      <Card.Text>
        Whether your idea of luxury is reclining in a hammock in a jungle bungalow or sipping cocktails in your private beachfront villa— Bali can offer it all at knock-out rates. The vibe tends to be that of beach parties or Zen-like retreats, depending on which part of the island you go to. If you’re looking for beaches and fresh seafood, head to Seminyak, Canggu or Uluwatu!.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Updated on: Nov 22, 2018</small>
    </Card.Footer>
  </Card>
  <Card style={{flex: '1', padding: '10px', textAlign: 'center'}}>
    <Card.Img variant="top" src="Images/bhutan1.jpg" height="200px" width="360px" border= "3px solid #ccc" />
    <Card.Body>
      <Card.Title><NavLink to="/Bhutan"><h1>BHUTAN: The kingdom of the thunder dragon</h1></NavLink></Card.Title>
      <Card.Text>
        Perched high in the Himalayas, Bhutan is a small dreamy paradise. Bhutan is the world’s last remaining Buddhist Kingdom. A visit here will bring you face to face with ancient monasteries, fortresses (called Dzongs), ancient temples with prayer flags fluttering high and the warmth of its people.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Updated on: Oct 5, 2018</small>
    </Card.Footer>
  </Card>
</CardDeck>


</div>	
    );
  }
}
 
export default Home;