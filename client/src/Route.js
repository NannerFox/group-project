import React from "react";
import About from './About';
import Landing from './Landing';
import Login from './Login';
import Profile from './Profile';
import Result from './Result';
import Signup from './Signup';

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
