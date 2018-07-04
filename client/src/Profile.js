import React from "react";
import axios from 'axios';
import './index.css';
import './profile.css';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

import { Button, Media, Col, Row, Glyphicon } from 'react-bootstrap';

class IsLoggedIn extends React.Component {
  constructor() {
      super()
      this.state = {
        user: null,
        movies: {
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
      this.movieDisplay = this.movieDisplay.bind(this);
    }
componentDidMount() {
  this.setState({ user: this.props.user });
  var currentUser = this.props.user;
  axios.get(`/userprofile/?name=${currentUser}`)
    .then((response) => {
      console.log(response.data.movie);
      this.setState({ movies: response.data.movie });
    })
    .catch((error)=>{
      console.log(error);
    });
  }
movieDisplay() {
  return (
    <div className="Profile">
      <Media>
        <Row className="show-grid">
          <h2>Movie One</h2>
          <Col xs={6} sm={6} md={6} smPush={1} mdPush={2}>
            <Media.Left align="middle">
              <div className="profileBorder">
                <img className="profilePic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.one.pic}`} alt="58008" />
              </div>
            </Media.Left>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Media.Body>
              <Media.Heading>
                <h2>{this.state.movies.one.name}</h2>
              </Media.Heading>
              <p>
                <form action="/onetwo" method="post" name="onetwo">
                  <input type="hidden" name="name" value={this.state.user}/>
                  <input type="hidden" name="onemov" value={this.state.movies.one.name}/>
                  <input type="hidden" name="onepic" value={this.state.movies.one.pic}/>
                  <input type="hidden" name="twomov" value={this.state.movies.two.name}/>
                  <input type="hidden" name="twopic" value={this.state.movies.two.pic}/>
                  <Button bsStyle="info" type="submit">
                    Move Down
                    <Glyphicon glyph="arrow-down" />
                  </Button>
                </form>
                <br />
                <form action="/delone" method="post" name="delone">
                <input type="hidden" name="name" value={this.state.user}/>
                <Button className="deleteButton" bsStyle="info" type="submit">
                  Delete Movie
                  <Glyphicon glyph="remove" />
                </Button>
                </form>
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
      <Media>
        <Row>
          <h2>Movie Two</h2>
          <Col xs={6} sm={6} md={6} smPush={1} mdPush={2}>
            <Media.Left>
              <div className="profileBorder">
                <img className="profilePic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.two.pic}`} alt="58008" />
              </div>
            </Media.Left>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Media.Body>
              <Media.Heading>
                <h2>{this.state.movies.two.name}</h2>
              </Media.Heading>
              <p>
                <form action="/twothree" method="post" name="twothree">
                  <input type="hidden" name="name" value={this.state.user}/>
                  <input type="hidden" name="threemov" value={this.state.movies.three.name}/>
                  <input type="hidden" name="threepic" value={this.state.movies.three.pic}/>
                  <input type="hidden" name="twomov" value={this.state.movies.two.name}/>
                  <input type="hidden" name="twopic" value={this.state.movies.two.pic}/>
                  <Button bsStyle="info" type="submit">
                    Move Down
                    <Glyphicon glyph="arrow-down" />
                  </Button>
                </form>
                <br />
                <form action="/deltwo" method="post" name="deltwo">
                <input type="hidden" name="name" value={this.state.user}/>
                <Button className="deleteButton" bsStyle="info" type="submit">
                  Delete Movie
                  <Glyphicon glyph="remove" />
                </Button>
                </form>
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
      <Media>
        <Row>
          <h2>Movie Three</h2>
          <Col xs={6} sm={6} md={6} smPush={1} mdPush={2}>
            <Media.Left>
                <div className="profileBorder">
                  <img className="profilePic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.three.pic}`} alt="58008" />
                </div>
            </Media.Left>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Media.Body>
              <Media.Heading>
                <h2>{this.state.movies.three.name}</h2>
              </Media.Heading>
              <p>
                <form action="/threefour" method="post" name="threefour">
                  <input type="hidden" name="name" value={this.state.user}/>
                  <input type="hidden" name="threemov" value={this.state.movies.three.name}/>
                  <input type="hidden" name="threepic" value={this.state.movies.three.pic}/>
                  <input type="hidden" name="fourmov" value={this.state.movies.four.name}/>
                  <input type="hidden" name="fourpic" value={this.state.movies.four.pic}/>
                  <Button bsStyle="info" type="submit">
                    Move Down
                    <Glyphicon glyph="arrow-down" />
                  </Button>
                </form>
                <br />
                <form action="/delthree" method="post" name="delthree">
                <input type="hidden" name="name" value={this.state.user}/>
                <Button className="deleteButton" bsStyle="info" type="submit">
                  Delete Movie
                  <Glyphicon glyph="remove" />
                </Button>
                </form>
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
      <Media>
        <Row>
          <h2>Movie Four</h2>
          <Col xs={6} sm={6} md={6} smPush={1} mdPush={2}>
            <Media.Left>
              <div className="profileBorder">
                <img className="profilePic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.four.pic}`} alt="58008" />
              </div>
            </Media.Left>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Media.Body>
              <Media.Heading>
                <h2>{this.state.movies.four.name}</h2>
              </Media.Heading>
              <p>
                <form action="/fourfive" method="post" name="fourfive">
                  <input type="hidden" name="name" value={this.state.user}/>
                  <input type="hidden" name="fivemov" value={this.state.movies.five.name}/>
                  <input type="hidden" name="fivepic" value={this.state.movies.five.pic}/>
                  <input type="hidden" name="fourmov" value={this.state.movies.four.name}/>
                  <input type="hidden" name="fourpic" value={this.state.movies.four.pic}/>
                  <Button bsStyle="info" type="submit">
                    Move Down
                    <Glyphicon glyph="arrow-down" />
                  </Button>
                </form>
                <br />
                <form action="/delfour" method="post" name="delfour">
                <input type="hidden" name="name" value={this.state.user}/>
                <Button className="deleteButton" bsStyle="info" type="submit">
                  Delete Movie
                  <Glyphicon glyph="remove" />
                </Button>
                </form>
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
      <Media>
        <Row>
          <h2>Movie Five</h2>
          <Col xs={6} sm={6} md={6} smPush={1} mdPush={2}>
            <Media.Left>
              <div className="profileBorder">
                <img className="profilePic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.five.pic}`} alt="58008" />
              </div>
            </Media.Left>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Media.Body>
              <Media.Heading>
                <h2>{this.state.movies.five.name}</h2>
              </Media.Heading>
              <p>
                <form>
                </form>
                <br />
                <form action="/delfive" method="post" name="delfive">
                <input type="hidden" name="name" value={this.state.user}/>
                <Button className="deleteButton" bsStyle="info" type="submit">
                  Delete Movie
                  <Glyphicon glyph="remove" />
                </Button>
                </form>
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
    </div>
  )
}
  render() {
    return(
      <div>
        <h1>Welcome, {this.state.user}!</h1>
        <h4>Share Your List on Social Media</h4>
          <Row>
            <Col xs={2} sm={4} />
            <Col xs={2} sm={1}>
          <FacebookShareButton className="mediaShare" url={`http://moviefive.herokuapp.com/?${this.state.user}#user`} quote="Check Out My Top 5 Movies on MovieFive!">
            <FacebookIcon className="mediaStyle" size={32} round={false}/>
          </FacebookShareButton>
          </Col>
          <Col xs={2} sm={1}>
          <EmailShareButton className="mediaShare" url={`http://moviefive.herokuapp.com/?${this.state.user}#user`} subject="Check Out My Top 5 Movies on MovieFive!">
            <EmailIcon className="mediaStyle" size={32} round={false}/>
          </EmailShareButton>
          </Col>
          <Col xs={2} sm={1}>
          <RedditShareButton className="mediaShare" url={`http://moviefive.herokuapp.com/?${this.state.user}#user`} Title="Check Out My Top 5 Movies on MovieFive!">
            <RedditIcon className="mediaStyle" size={32} round={false}/>
          </RedditShareButton>
          </Col>
          <Col xs={2} sm={1}>
          <TwitterShareButton className="mediaShare" url={`http://moviefive.herokuapp.com/?${this.state.user}#user`} Title="MovieFive Top 5 List">
            <TwitterIcon className="mediaStyle" size={32} round={false}/>
          </TwitterShareButton>
          </Col>
          <Col xs={2} sm={4} />
          </Row>
        
        <h4>Or Copy this URL: <br />http://moviefive.herokuapp.com/?{this.state.user}#user</h4>
        {this.movieDisplay()}
      </div>
    );
  }
}

class Profile extends React.Component {
  constructor() {
      super()
      this.state = {
        user: null,
        movies: []
      }
      axios.get('/auth').then(response => {
         console.log(response.data);
         if (!!response.data.user) {
             console.log('PROFILE DETECTED USER');
             this.setState({ user: response.data.user });
        } else {
          this.setState({
            user: null
          })
        }
      })
    }
    loginCheckLogin () {
      if (this.state.user == null) {
        return (
          <div>
            <h2>You have to be logged in to see this page</h2>
          </div>
        )
      }
      else {
        return (
          <div>
            <IsLoggedIn user={this.state.user}/>
          </div>
        )
      }
    }


  render () {
    return(
      <div>
        <h1>Profile</h1>
        {this.loginCheckLogin()}
      </div>
    )
  }
}

export default Profile;
