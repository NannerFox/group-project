import React from "react";
import './index.css';
import './login.css';
import { Form, FormControl, FormGroup, Col, Button } from 'react-bootstrap';

class Login extends React.Component {

  render() {
    return(
      <div className="Login">
        <h1>Login</h1>
        <Form horizontal action="/login" method="post">
          <FormGroup controlId="formHorizontalUser">
          <Col sm={2}>
          Username:
          </Col>
          <Col sm={10}>
          <FormControl type="text" name="username" />
          </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
          Password:
          </Col>
          <Col sm={10}>
          <FormControl type="password" name="password" />
          </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
          <Button bsStyle="info" type="submit">Submit</Button>
          </Col>
          </FormGroup>
        </Form>
        <Col sm={12}>
        <p>Don't have an account yet? <a href="#signup">Sign up here</a></p>
        </Col>
      </div>
    );
  }
}

export default Login;
