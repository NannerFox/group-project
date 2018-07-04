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
        <Navbar className="navContainer" collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand className="navChild">
              <a href="#home">
                <img id="brand-image" src="mvlogopng.png" alt="MVistheMVP" height={40}/>
                  MovieFive
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className="navChild" eventKey={4} href="#list">
                Lists
              </NavItem>
              <NavItem className="navChild" eventKey={1} href="#profile">
                Profile
              </NavItem>
              <NavItem className="navChild" eventKey={3} href="#login">
                Login
              </NavItem>
              <NavItem className="navChild" eventKey={2} href="#about">
                About
              </NavItem>
            </Nav>
            <Navbar.Form className="navChild" pullRight>
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
