import React from "react";
import axios from 'axios';

class List extends React.Component {
  constructor() {
      super()
      this.state = {
        movies : [
        {
            "_id": {
                "$oid": "3474d1ck"
            },
            "movie": {
                "one": {
                    "name": "empty",
                    "pic": "/empty.jpg"
                },
                "two": {
                    "name": "empty",
                    "pic": "/empty.jpg"
                },
                "three": {
                    "name": "empty",
                    "pic": "/empty.jpg"
                },
                "four": {
                    "name": "empty",
                    "pic": "/empty.jpg"
                },
                "five": {
                    "name": "empty",
                    "pic": "/empty.jpg"
                }
            },
            "name": "empty",
            "__v": 0
        },
          {
    "_id": {
        "$oid": "000icu812"
    },
    "movie": {
        "one": {
            "name": "empty",
            "pic": "/empty.jpg"
        },
        "two": {
            "name": "empty",
            "pic": "/empty.jpg"
        },
        "three": {
            "name": "empty",
            "pic": "/empty.jpg"
        },
        "four": {
            "name": "empty",
            "pic": "/empty.jpg"
        },
        "five": {
            "name": "empty",
            "pic": "/empty.jpg"
        }
    },
    "name": "empty2",
    "__v": 0
}
] }

}

  componentDidMount() {
    this.setState({ user: this.props.user });
    var currentUser = this.props.user;
    axios.get('/listall')
      .then((response) => {
        console.log(response.data);
        this.setState({ movies: response.data });
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  render() {
    return (
      <div>
        <h1>List</h1>
        <div>{this.state.movies.map((movie, index) => <div key={index}>
          <div id={movie.id}>
            <h1>{movie.name}'s List:</h1>
            <h1>1</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.one.pic}`} alt="58008" />
            <h2>{movie.movie.one.name}</h2>
            <h1>2</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.two.pic}`} alt="58008" />
            <h2>{movie.movie.two.name}</h2>
            <h1>3</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.movie.pic}`} alt="58008" />
            <h2>{movie.movie.three.name}</h2>
            <h1>4</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.four.pic}`} alt="58008" />
            <h2>{movie.movie.four.name}</h2>
            <h1>5</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.five.pic}`} alt="58008" />
            <h2>{movie.movie.five.name}</h2>
          </div>
        </div>
        )
        }
      </div>
      </div>
    );
  }
}

export default List;
