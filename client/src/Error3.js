import React from "react";

class Error3 extends React.Component {
    render() {
      return(
      <div>
        <h1>Login Error</h1>
        <h4>There was a problem Logging In. This most likely is due to an incorrect Username or Password entry.
        <br /><a classname="errorLink" href="#login">Head back to the Login Page</a></h4>
      </div>
    );
  }
}

export default Error3;
