import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';

 
class Maldives extends Component {
  render() {
    return (
      <div className="Mal">
	  <h2>Maldives: The dream vacation!!</h2>
	  <p>One of the most beautiful places in the world, Maldives is famous destination. It offers gorgeous views of the ocean on island resorts that are mini paradises on their own. A combination of pristine blue beaches, sandy lagoons, majestic palm trees, and underwater reefs makes Maldives a dream destination.</p>
        <Image src="Images/maldives.jpg" style={{alignSelf: 'center', height: '30%', width: '50%', borderWidth: '3', borderRadius: '75' } }
  resizeMode="stretch" />
        <p>The Maldives are the perfect place for people looking for a luxury island vacation. This country of 1,000 islands has everything a person could want in a tropical island — clear water, white sand beaches, palm trees, warm sunny days, and lots of great diving. It’s as close to heaven as you can get. While the Maldives have always been thought of as an expensive, place to visit, it’s actually an incredible budget traveler destination.</p> 
		
		<p>Yeah, the resorts are expensive (even the ones on the cheaper end) but the country has opened up its tourism in recent years and now allows locals to start their own guesthouses and the ferry system is greatly improving. You can easily visit these countries on a budget and still get to experience that picture perfect beach vacation you came here for!.</p>
		
		<Image src="Images/Maldives1.jpg"  style={{alignSelf: 'center', height: '40%', width: '50%', borderWidth: '1', borderRadius: '75' }}
  resizeMode="stretch" />
  
    
  <p>The northern and southern islands of Maldives vary drastically, which means that each one of your traveling experiences will be different from the rest. There are a plethora of adventure activities that you can explore in Maldives such as snorkeling, diving, boating, and paddling, to name a few. Ideally, you only need 4 days in Maldives to see the country in its splendid glory. My experience in the 4 days stay in Bandos island is unparallel.</p>
 
        <p>Hop on board a local mechanised Dhoni and sail away across the North Malé Atoll to explore the different types of islands in the area. Snorkel, swim or take a nap while you top up that tan in our tropical paradise. You will discover a local island and see Maldivians at work and experience their island lifestyle. Visit a local souvenir shop where you can buy something to remember your trip. The full day tour includes a picnic lunch on the beach on of Bandos Maldives. Half day tours start after breakfast and we return to Bandos for lunch.</p>
		
		<Image src="Images/Maldives3.jpg"  style={{alignSelf: 'center', height: '40%', width: '50%', borderWidth: '1', borderRadius: '75' }}
  resizeMode="stretch" />
  
  <p> There is a protected marine area that is known internationally for its beauty and incredible diving and snorkeling. The numerous caves, overhangs, and dramatic cliff lines result in stunning photos with every shot you snap. The brilliant coral growth attracts a huge range of sea life, including grouper, barracuda, morays, jackfish, snapper, and more.</p>
  <p>The coral reefs in the Maldives are inhabited by diverse marine life and are teaming with colourful fish. Snorkelling is the easiest way to enjoy the beauty found beyond the lagoon. Reef snorkelling takes place directly from the boat and is therefore suitable for stronger swimmers.</p>
  
  <p>Ever snorkeled or dive with a Whale Shark one of the largest fish in the ocean? Well here’s your chance now. We have just started our very new Excursion that lets you seek out Whale Sharks in their natural habitats. Take this two-hour journey to the center of Maldives and seek out the Whale Sharks and jump in to get a closer peek. Don’t forget to bring your cameras!</p>
      </div>
    );
  }
}
 
export default Maldives;