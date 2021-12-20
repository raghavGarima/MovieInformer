import React, { Component } from "react";
import Searchbar from "../header/Searchbar";
import SearchBody from "../header/SearchBody";
import { getMovieList } from "../../action/homeAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AwesomeDebouncePromise from "awesome-debounce-promise";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined,
      persons: [],
    };
  }
  componentDidMount = () => {
    if (this.props.movieName !== undefined) {
      this.setState({ search: this.props.movieName });
      this.props.getMovieList(this.props.movieName);
    } else {
      this.props.getMovieList("thor");
    }
  };
  searchText = AwesomeDebouncePromise((value) => {
    this.searchFunction(value);
  }, 1000);

  handleChange = (event) => {
    this.setState({ search: event.target.value });
    if (event.target.value.length > 3) {
      this.searchText(event.target.value);
    }
  };
  searchFunction = (value) => {
    this.props.getMovieList(value);
  };

  render() {
    return (
      <div>
        {console.log("Body", this.props)}
        <Searchbar searchtext={this.state} handleChange={this.handleChange} />
        <SearchBody history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieName: state.movieName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getMovieList,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
