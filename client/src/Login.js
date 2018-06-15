import React from "react";


class Login extends React.Component {

  render() {
    return(
      <div>
        <h1>Login</h1>
        <form action="/login" method="post">
          Username:
          <input type="text" name="username"></input>
          Password:
          <input type="text" name="password"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Login;
