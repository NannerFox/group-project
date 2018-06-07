import React from 'react';
import { createStore } from 'redux';
import reduce from "./reducers/reduce";

export const store = createStore(reduce);

class Result extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    store.subscribe(() => {
      // Force Re-Render when the state changes
      // By passing store back to state

      this.setState({
        movies: store.getState().results
      });
    });
  }

  render() {
    return(
    <div>
      {this.state.movies.map((movie, index) => <div key={index}>
        <div id={movie.id}>
          <div className="pic"><img className="moviepic" alt={movie.poster_path} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} /></div>
          <div className="moviename">{movie.title}</div>
          <div className="description">({movie.release_date})</div>
        </div>
      </div> )}
    </div>
  );
  }
  }

  export default Result;
