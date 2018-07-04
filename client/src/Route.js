import React from "react";
import About from './About';
import Landing from './Landing';
import Login from './Login';
import Profile from './Profile';
import Result from './Result';
import Signup from './Signup';
import List from './List';
import User from './User';
import Error6 from './Error6';
import Error1 from './Error1';

class Route extends React.Component {

constructor(props){
  super(props);
  this.state = {
    page: this.renderSwitch(window.location.hash)
  };
  this.renderSwitch = this.renderSwitch.bind(this);
  this.routeSwitch = this.routeSwitch.bind(this);
}

componentDidMount() {
    window.addEventListener("hashchange", this.routeSwitch);
    this.setState({user: this.props.user})
}

routeSwitch() {
  this.setState({
    page: this.renderSwitch(window.location.hash)
    });
}

  renderSwitch(pathname) {
    switch(pathname) {
      case "#about":
        return <About />;
      case "#home":
        return <Landing />;
      case "#login":
        return <Login />;
      case "#profile":
        return <Profile />;
      case "#result":
        return <Result />;
      case "#signup":
        return <Signup />;
      case "#list":
        return <List />;
      case "#user":
        return <User />;
      case "#error6":
        return <Error6 />;
      case "#error1":
        return <Error1 />;
      default:
        return <Landing />;
    }
  }

  render() {
    return(
      <div>
      {this.state.page}
      </div>
    )
  }
}

export default Route;
