import React, { Component } from 'react';
import './index.css';
import Navibar from './navbar.js';
import Footer from './footer.js';
import Route from './Route';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navibar />
          <div className="AppContent">
            <Route />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
