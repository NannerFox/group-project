import React from "react";

class Error6 extends React.Component {
    render() {
      return(
      <div>
        <h1>Too Many Movies!</h1>
        <h3>(This is MovieFIVE, Not MovieSIX)</h3>
        <h4>You've attempted to add SIX movies to your MovieFIVE list. <a className="errorLink" href="#profile">Head back to your profile to check your list</a> and possibly delete a movie from your list!</h4>
      </div>
    );
  }
}

export default Error6;
