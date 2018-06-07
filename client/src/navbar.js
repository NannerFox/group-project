import React, { Component } from 'react';
import './index.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Search from './Search';
import { Provider } from 'react-redux';
import { store } from './Result';

class Navibar extends Component {
  render() {
    return (
      <div>
       <Navbar>
  <Navbar.Header className="navbarStyle">
    <Navbar.Brand>
      <a href="#home">MovieFive</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#profile">
      Profile
    </NavItem>
    <NavItem eventKey={2} href="#about">
      About
    </NavItem>
    <NavItem eventKey={3} href="#login">
      Login
    </NavItem>
  </Nav>
  <Navbar.Collapse>
    <Navbar.Form pullRight>
      <Provider store={store}>
        <Search />
      </Provider>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default Navibar;
