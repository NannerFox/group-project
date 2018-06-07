import React, { Component } from 'react';
import './index.css';
import './App.css';
import Navibar from './navbar.js';
import Footer from './footer.js';
import Result from './Result';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navibar />
      <div className="AppContent"> Some Stuff </div>
      <Result />
      <Footer />
      </div>
    );
  }
}

export default App;
