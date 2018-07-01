import React from 'react';
import FullFetch from './FullFetch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import listReducer from './reducers/listReducer';
import Ratings from './Ratings';

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

  render() {
    return(
      <div>{this.state.list.map((item, index) => <div key={index}>
            <div id={item.id}>
              <h1>{item.name}'s List</h1>
              <Ratings username={item.name}/>
              <h1>1</h1>
              <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.one.pic}`} alt="58008" />
              <h2>{item.movie.one.name}</h2>
              <h1>2</h1>
              <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.two.pic}`} alt="58008" />
              <h2>{item.movie.two.name}</h2>
              <h1>3</h1>
              <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.three.pic}`} alt="58008" />
              <h2>{item.movie.three.name}</h2>
              <h1>4</h1>
              <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.four.pic}`} alt="58008" />
              <h2>{item.movie.four.name}</h2>
              <h1>5</h1>
              <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.movie.five.pic}`} alt="58008" />
              <h2>{item.movie.five.name}</h2>
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
