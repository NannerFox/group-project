import React from 'react';
import axios from 'axios';

class User extends React.Component {
  constructor() {
      super()
      this.state = {
        searchedUser: window.location.search.substr(1),
        userlist: {
        "one": {
            "name": "one",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "two": {
            "name": "two",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "three": {
            "name": "three",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "four": {
            "name": "four",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "five": {
            "name": "five",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        }
      }
    }
}

  componentDidMount() {
      var currentUser = window.location.search.substr(1);
      axios.get(`/userprofile/?name=${currentUser}`)
        .then((response) => {
          console.log(response.data.movie);
          this.setState({ userlist: response.data.movie });
        })
        .catch((error)=>{
          console.log(error);
        });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="App-intro">{this.state.searchedUser}'s List</h1>
        </div>
        <div>
            <h1>1</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.userlist.one.pic}`} alt="58008" />
            <h2>{this.state.userlist.one.name}</h2>
            <h1>2</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.userlist.two.pic}`} alt="58008" />
            <h2>{this.state.userlist.two.name}</h2>
            <h1>3</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.userlist.three.pic}`} alt="58008" />
            <h2>{this.state.userlist.three.name}</h2>
            <h1>4</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.userlist.four.pic}`} alt="58008" />
            <h2>{this.state.userlist.four.name}</h2>
            <h1>5</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.userlist.five.pic}`} alt="58008" />
            <h2>{this.state.userlist.five.name}</h2>
          </div>
      </div>
    );
  }
}

export default User;
