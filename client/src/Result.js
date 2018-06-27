import React from 'react';
import { createStore } from 'redux';
import reduce from "./reducers/reduce";
import './index.css';
import './result.css';
import axios from 'axios';

import { Button, Media, Col, Row } from 'react-bootstrap';

export const store = createStore(reduce);

class Result extends React.Component {

  state = {
    movies: [],
    loggedIn: false,
    user: null
  }

  componentDidMount() {
    axios.get('/auth').then(response => {
       console.log(response.data)
       if (!!response.data.user) {
           console.log('Result Detected User')
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
    });
    store.subscribe(() => {
      // Force Re-Render when the state changes
      // By passing store back to state

      this.setState({
        movies: store.getState().results
      });
    });
  }

  addDefaultSrc(ev){
    ev.target.src = './placeposter.jpg'
  }

  render() {
    return(
    <div className="Result">
    <h1>Results</h1>
      {this.state.movies.map((movie, index) => <div key={index}>
        <div id={movie.id}>
        <Media>
          <Row>
            <Col xs={5} sm={4} md={2}>
    <Media.Left>
    <div className="pic">
    <img onError={this.addDefaultSrc}  className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt="Not Found" />
    </div>
    </Media.Left>
    </Col>
    <Col xs={7} sm={8} md={10}>
    <Media.Body>
      <Media.Heading><div className="moviename">{movie.title}</div></Media.Heading>
      <div className="description">
      <h5>({movie.release_date})</h5>
      <p>{movie.overview}<br /></p>
      </div>
      <form action="/movie" method="post" name={movie.id}>
      <input type="hidden" name="name" value={this.state.user}/>
      <input type="hidden" name="moviename" value={movie.title}/>
      <input type="hidden" name="pic" value={movie.poster_path}/>
      <Button className="resultButton" bsStyle="info" type="submit">Add To My List!</Button>
      </form>
    </Media.Body>
    </Col>
    </Row>
  </Media>
  <br />
          {/*<div className="pic"><img className="moviepic" alt={movie.poster_path} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} /></div>
          <div className="moviename">{movie.title}</div>
          <div className="description">({movie.release_date})</div>

    <Button bsStyle="info" type="submit">Add To My List!</Button>*/}
        </div>
      </div> )}
    </div>

  );
  }
  }

  export default Result;
