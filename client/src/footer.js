import React, { Component } from 'react';
import './index.css';


class Footer extends Component {
  render() {
    return (
      <div>
    <footer>
					<div id="footer">
							Powered by React<img className="footerLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Scoops" height= {20} />
          </div>
				</footer>
      </div>
    );
  }
}

export default Footer;
