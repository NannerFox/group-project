import React from "react";
import { Button } from 'react-bootstrap';
import './index.css';
import './landing.css';
import Video from './Video';

class Landing extends React.Component {

  render() {
    return(
      <div className="Landing">
        <img className="landingLogo" height={300} src="mvlogopng.png" alt="wtf" />
        <h1>MovieFive</h1>
        <p> Welcome to our app, MovieFive! Get started here.</p>
          <Button bsStyle="info" href="#login">Log In</Button>
          <p></p>
        <p>Or, check out our video tutorial on how-to use our app!</p>
        <p>
          <div class="embed-responsive embed-responsive-16by9">
            <Video />
          </div>
        </p>
      </div>
    );
  }
}

export default Landing;
