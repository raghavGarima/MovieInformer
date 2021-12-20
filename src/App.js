import "./App.css";
import React, { Component } from "react";
import Main from "./components/main/Main";
import MovieInfoComponent from "./components/MovieInfoComponent/MovieInfoComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            {console.log("loader", this.props.isLoader)}
            {this.props.isLoader ? (
              <div className="loading">
                {/* <img src={process.env.PUBLIC_URL + "./loader.png"}></img> */}
                <h1>Loading...</h1>
              </div>
            ) : null}
            <Route exact path="/" component={Main}></Route>
            <Route
              exact
              path="/movieInfo/:id"
              component={MovieInfoComponent}
            ></Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoader: state.loader,
    DetailsOfMovie: state.infoList,
  };
};

export default connect(mapStateToProps, null)(App);
