import React from "react";
import { Button, Media } from 'react-bootstrap';
import './index.css';
import './landing.css';

class Landing extends React.Component {

  render() {
    return(
      <div className="Landing">
        <img className="landingLogo" height={300} src="mvlogopng.png" alt="wtf" />
        <h1>MovieFive</h1>
        <p> Welcome to our app, MovieFive! Get started here.</p>
        <Button bsStyle="info" href="#login">Log In</Button>
      </div>
    );
  }
}

export default Landing;
