import React from "react";


class Signup extends React.Component {

  render() {
    return(
      <div>
        <h1>Signup</h1>
        <form action="/register" method="post">
          Username:
          <input type="text" name="username"></input>
          Password:
          <input type="password" name="password"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Signup;
