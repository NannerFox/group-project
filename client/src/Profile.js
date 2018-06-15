import React from "react";
import axios from 'axios';


class Profile extends React.Component {
  constructor() {
      super()
      this.state = {
        loggedIn: false,
        user: null
      }
    }
  componentDidMount() {
    axios.get('/auth').then(response => {
       console.log(response.data)
       if (!!response.data.user) {
           console.log('THERE IS A USER')
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
  render() {
    return(
      <div><h1>Profile</h1>
      <h1>Welcome, {this.state.user}</h1>
      </div>
    );
  }
}

export default Profile;
