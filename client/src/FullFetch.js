import React from "react";
import { connect } from "react-redux";
import { saveList } from "./actions/AppActions";

class FullFetch extends React.Component {
  constructor(props) {
    super(props);
    this.fetchList()
    }

  fetchList = () => {
    fetch('/listall')
      .then(resp => resp.json())
      .then(respJson => {
        this.props.dispatch(saveList(respJson));
      })
    };


  render() {
    return(
      <h1>Master List</h1>
    )
  }
}

const mapStateToProps = state => {
  return {list: state};
};

export default connect(mapStateToProps)(FullFetch);
