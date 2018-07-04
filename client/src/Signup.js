import React from "react";
import './index.css';
//import '.signup.css';
import { Form, FormControl, FormGroup, Col, Button } from 'react-bootstrap';

class Signup extends React.Component {

  render() {
    return(
      <div className="Signup">
        <h1>Signup</h1>
        <Form horizontal action="/register" method="post">
          <FormGroup controlId="formHorizontalUser">
          <Col sm={2}>
          Choose a Username:
          </Col>
          <Col sm={10}>
          <FormControl type="text" name="username" />
          </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
          Choose a Password:
          </Col>
          <Col sm={10}>
          <FormControl type="text" name="password" />
          </Col>
          </FormGroup>
          <FormGroup>
          <Col sm={12}>
          <Button bsStyle="info" type="submit" value="Submit">Submit</Button>
          </Col>
          </FormGroup>
        </Form>
        <Col sm={12}>
        <p>Already have an account? <a className="signupLinkStyle" href="#login">Log in here</a></p>
        </Col>
      </div>
    );
  }
}

export default Signup;
