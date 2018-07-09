import React from "react";
import { connect } from "react-redux";
import { saveMovies } from "./actions/AppActions";
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class Search extends React.Component {
  state = {
    search: ""
  };

searchMovies = () => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=c917eb71754e2d7a6123061c45f8b4a6&language=en-US&query=' + this.state.search + '&page=1&include_adult=false')
      .then(resp => resp.json())
      .then(respJson => {
        this.props.dispatch(saveMovies(respJson.results));
      })
    };

  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.search) {
      window.location.hash = "#error2";
    }
    else {
      window.location.hash = "#result";
      this.searchMovies();
    }
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
          <FormControl
            type="text"
            placeholder="Movie Search..."
            value={this.state.search}
            onChange={search => {
              this.setState({ search: search.target.value });
            }}
          />
        </FormGroup>{' '}
          <Button bsStyle="info" type="submit">Search</Button>
        </form>
    );
  }
}

const mapStateToProps = state => {
  return {results: state.results};
};

export default connect(mapStateToProps)(Search);
