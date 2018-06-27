import React from "react";
import { Media } from 'react-bootstrap';
import './index.css';
import './about.css';


class About extends React.Component {

  render() {
    return(
      <div className="About">
        <h1>About the Devs</h1>
        <Media>
    <Media.Left>
      <img width={200} height={200} src="/mvlogopng.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Alan Wilson aka NannerFox</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>
  <br />
  <Media>
    <Media.Body>
      <Media.Heading>Andrew Pacheco aka checkawrz</Media.Heading>
      <p>
        Andrew is a 28 year old beginning developer from California.
        He is studying javascript and hopes to one day be as good at React
        as Alan. His hobbies include Hearthstone, being groovy, and the occasional
        craft beer.
      </p>
    </Media.Body>
    <Media.Right>
      <img width={250} height={250} src="/aboutAndrew.jpg" alt="thumbnail" />
    </Media.Right>
  </Media>
        </div>
    );
  }
}

export default About;
