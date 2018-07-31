//var player = require("@dr/drc-media-player");
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { VideoPlayer } from '@dr/elements';

/* OnDemand Video Player */
class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    }
    this.playerCB = this.playerCB.bind(this);
  }

  // when provided as a cb value to the VideoPlayer component
  // this function is called as soon as videojs is instantiated.

  // the player reference is a videojs player object:
  // https://docs.videojs.com/docs/api/player.html

  // player.player_ returns a standard video element reference 
  // https://www.w3schools.com/tags/ref_av_dom.asp
  playerCB(player) {
    // Interact with player once it has started. 
    player.on('ready', ()=>{
      player.volume(0); // mute the player
    });

    // or make it available to your application via this.state.player
    this.setState({
      player: player
    });
  }
  componentDidUpdate() {
    if(this.state.player) {
      // Player can now be interacted with via state.
    }
  }
  render() {
    return (
      <div>
        <VideoPlayer 
          resource="urn:dr:mu:programcard:5a78b748a11f9f171cc3bfcb" 
          cb={this.playerCB} />
        This text should not jump when player is loaded
        </div>
    );
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('app')
);