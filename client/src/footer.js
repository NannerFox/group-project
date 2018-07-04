import React, { Component } from 'react';
import './index.css';
import axios from 'axios';


class Footer extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }

    axios.get('/auth').then(response => {
       console.log(response.data)
       if (!!response.data.user) {
           console.log('FOOTER DETECTED USER')
           this.setState({
             loggedIn: true,
             user: response.data.user
           })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }
  
  loginCheck () {
    if (this.state.user != null) {
    return (
      <div>
        <footer>
					<div id="footer">
						Powered by React
            <img className="footerLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Scoops" height= {20} />
            Logged in as:  {this.state.user}
            <a className="logout" href="/logout">   Log Out</a>
          </div>
				</footer>
      </div>
    )
  }
  else {
    return (
      <div>
        <footer>
					<div id="footer">
							Powered by React
              <img className="footerLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Scoops" height= {20} />
          </div>
				</footer>
      </div>
    )
  }
  }

  render() {
    return (
      <div>
        {this.loginCheck()}
      </div>
    );
  }
}

export default Footer;
