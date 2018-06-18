import React from "react";
import { Media } from 'react-bootstrap';
import './index.css';
import './about.css';


class About extends React.Component {

  render() {
    return(
      <div>
        <h1>About</h1>
        <Media>
    <Media.Left>
      <img width={64} height={64} src="/mvlogopng.png" alt="thumbnail" />
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
  <Media>
    <Media.Body>
      <Media.Heading>Andrew Pacheco aka checkawrz</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
    <Media.Right>
      <img width={64} height={64} src="/mvlogopng.png" alt="thumbnail" />
    </Media.Right>
  </Media>
        </div>
    );
  }
}

export default About;
