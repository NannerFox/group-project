import React from 'react';
import FullFetch from './FullFetch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import listReducer from './reducers/listReducer';
import Ratings from './Ratings';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import './list.css';

const listStore = createStore(listReducer);

class FinalList extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    listStore.subscribe(() => {
      //honey code
      console.log(listStore.getState().results);
      this.setState({
        list: listStore.getState().results
      });
    });
  }
  addDefaultSrc(ev){
    ev.target.src = './placeposter.jpg'
  }

  render() {
    return(
      <div>
        {this.state.list.map((item, index) => <div key={index}>
          <div id={item.id}>
            <h2>{item.name}'s List</h2>
            <br />
            <div className="list">
              <Row>
                <Col xs={1} smPush={1} sm={2}>
                  <h1>1</h1>
                </Col>
                <Col xs={4} sm={3}>
                  <img onError={this.addDefaultSrc} className="listPic" height={100} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.one.pic}`} alt="58008" />
                </Col>
                <Col xs={6} xsPull={1} sm={7}>
                  <h2>{item.movie.one.name}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={1} smPush={1} sm={2}>
                  <h1>2</h1>
                </Col>
                <Col xs={4} sm={3}>
                  <img onError={this.addDefaultSrc} className="listPic" height={100} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.two.pic}`} alt="58008" />
                </Col>
                <Col Col xs={6} xsPull={1} sm={7}>
                  <h2>{item.movie.two.name}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={1} smPush={1} sm={2}>
                  <h1>3</h1>
                </Col>
                <Col xs={4} sm={3}>
                  <img onError={this.addDefaultSrc} className="listPic" height={100} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.three.pic}`} alt="58008" />
                </Col>
                <Col xs={6} xsPull={1} sm={7}>
                  <h2>{item.movie.three.name}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={1} smPush={1} sm={2}>
                  <h1>4</h1>
                </Col>
                <Col xs={4} sm={3}>
                  <img onError={this.addDefaultSrc} className="listPic" height={100} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.four.pic}`} alt="58008" />
                </Col>
                <Col xs={6} xsPull={1} sm={7}>
                  <h2>{item.movie.four.name}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={1} smPush={1} sm={2}>
                  <h1>5</h1>
                </Col>
                <Col xs={4} sm={3}>
                  <img onError={this.addDefaultSrc} className="listPic" height={100} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.five.pic}`} alt="58008" />
                </Col>
                <Col xs={6} xsPull={1} sm={7}>
                  <h2>{item.movie.five.name}</h2>
                </Col>
              </Row>
            </div>
            <Ratings username={item.name}/>
            <hr width="75%"/>
          </div>
        </div>
          )}
      </div>
        
  );
  }
  }

class List extends React.Component {
  render() {
    return(
  <div>
    <Provider store={listStore}>
    <FullFetch />
    </Provider>
    <FinalList />
  </div>
);
}
}

export default List;
