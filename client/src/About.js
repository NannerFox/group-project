import React from "react";
import { Media, Row, Col } from 'react-bootstrap';
import './index.css';
import './about.css';


class About extends React.Component {

  render() {
    return(
      <div className="About">
        <h1>About the Devs</h1>
        <Media>
          <Row>
            <Col sm={5}>
              <Media.Left align="middle">
                <img className="aboutPic" width={250} height={250} src="/aboutAlan.jpg" alt="r34c7w1z4rd" />
              </Media.Left>
            </Col>
            <Col sm={7}>
              <Media.Body>
                <Media.Heading><h3>Alan Wilson aka NannerFox</h3></Media.Heading>
                <p>
                  Alan is a 35 year old aspiring developer from Illinois. With a wife 
                  and 3 kids, he's a full time father and family man along side of his 
                  software development advances. He hopes one day to work with Artificial 
                  Intelligence. Alan's hobbies include Cars, Computers and Gaming, Music, 
                  and Craft Beer. <br /> 01000010 01000101 01000101 01010010
                </p>
              </Media.Body>
            </Col>
          </Row>
        </Media>
        <br />
        <Media>
          <Row>
            <Col sm={7}>
              <Media.Body>
                <Media.Heading><h3>Andrew Pacheco aka checkawrz</h3></Media.Heading>
                <p>
                  Andrew is a 28 year old beginning developer from California.
                  He is studying javascript and hopes to one day be as good at React
                  as Alan. His hobbies include Hearthstone, using his sous vide, being 
                  groovy, and the occasional craft beer.
                </p>
              </Media.Body>
            </Col>
            <Col sm={5}>
              <Media.Right>
                <img className="aboutPic" width={250} height={250} src="/aboutAndrew.jpg" alt="gr00vydr3w" />
              </Media.Right>
            </Col>
          </Row>
        </Media>
      </div>
    );
  }
}

export default About;
