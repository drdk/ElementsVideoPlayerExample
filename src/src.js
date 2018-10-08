//var player = require("@dr/drc-media-player");
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { VideoPlayer } from '@dr/elements';

/* OnDemand Video Player */
class MyApp extends Component {
  constructor(props) {
    super(props);
    // make the ref available on the component object.
    this.videoPlayerRef = React.createRef();
    this.handleReadyEvent = this.handleReadyEvent.bind(this);
    this.handlePlayEvent = this.handlePlayEvent.bind(this);
  }

  handleReadyEvent() {
    // Once player ready has been called, 
    // the playerActions object will be available on the videoplayer ref.
    const playerActions = this.videoPlayerRef.current.playerActions;
    console.log("ready event", playerActions);
    // playerActions.seek(30) // seconds
    // playerActions.duration() // returns the length of the stream in seconds.
    // playeractions.currentTime() // returns how many seconds into the stream, the media has played.

  }
  handlePlayEvent() {
    let playerActions = this.videoPlayerRef.current.playerActions;
    // the play event is always triggered after ready, so playerActions should always be available here.
    console.log("play event triggered, pausing player");
    playerActions.pause();
  }
  
  render() {
    return (
      <div>
        <VideoPlayer
          resource="urn:dr:mu:programcard:5a78b748a11f9f171cc3bfcb"
          
          // ref allows you to access the playerActions object on the videoplayer reference.
          // these actions cant be called before the player ready event has been triggered.
          // actions include: play, pause, seek, duration, currentTime
          ref={this.videoPlayerRef}

          // event listeners are added directly on the component, 
          onReady={this.handleReadyEvent}
          onPlay={this.handlePlayEvent}
          // onPause={this.handlePauseEvent}
          // onTimeupdate={this.handleTimeupdatedEvent}
          // onEnded={this.handleEndedEvent}
          autoplay={true}
          // offset, sets amount of seconds into the program, a stream should start.
          offset={20}
          />
        This text should not jump when player is loaded
        </div>
    );
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('app')
);