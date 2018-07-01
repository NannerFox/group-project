import React from "react";
import axios from 'axios';
import './ratings.css';

var Rating = require('react-rating');

class Ratings extends React.Component {
  constructor(){
    super();
    this.state = {
      rawdata: [{
    "_id": {
        "$oid": "abc123"
    },
    "name": "name",
    "rating": 5,
    "__v": 0
}],
      finalRate: 0,
      count: 0,
      total: 0
    }
    this.calculateRate = this.calculateRate.bind(this);
    this.changeRate = this.changeRate.bind(this);
  }
  componentDidMount() {
    var username = this.props.username;
    axios.get(`/rating/?name=${username}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ rawdata: response.data });
        this.calculateRate();
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  calculateRate() {
    this.state.rawdata.map(item => {
      var finalRating = 0;
      this.setState({ count : this.state.count + 1 });
      this.setState({ total : this.state.total += item.rating });
      finalRating = this.state.total / this.state.count;
      this.setState({ finalRate : finalRating });
    });
  };
  changeRate(rate) {
    var rating = rate;
    axios.post(`/rating/?name=${this.props.username}&rating=${rating}`);
    alert("You gave " + this.props.username + " a rating of " + rate);
  }
  render() {
    return (
      <div classname="rateStars">
        <h4>Rate My List:</h4>
        <Rating
          initialRating={this.state.finalRate}
          onChange={(rate) => this.changeRate(rate)}
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
        />
      </div>
  )}
}

export default Ratings;
