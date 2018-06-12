import React, { Component } from 'react';
import './index.css';


class Footer extends Component {
  render() {
    return (
      <div>
    <footer className="navbar-fixed-bottom">
					<div id="footer">
							<strong>Powered by React<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Scoops" height= {20} /></strong>
          </div>
				</footer>
      </div>
    );
  }
}

export default Footer;