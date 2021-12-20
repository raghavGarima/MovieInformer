import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./movieInfoComponent.css";
import { Container, Table, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovieDetailById } from "../../action/homeAction";

class MovieInfoComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    debugger;

    if (Object.keys(this.props.DetailsOfMovie).length === 0) {
      // let MovieId = window.localStorage.getItem("MovieId");
      // if (MovieId) {

      this.props.getMovieDetailById(this.props.match.params.id);
      // }
    }
  };

  render() {
    return (
      <div className="topDiv">
        {/* {detail=this.state.detail} */}
        <div className="heading">Hello, here the Movie Information is</div>

        <Link to="/" className="goBack">
          <p>Click here Go Back To Home</p>
        </Link>
        <Container>
          <Row className="containerDiv">
            {Object.keys(this.props.DetailsOfMovie).length > 0 ? (
              <>
                <Col xs={12} sm={6}>
                  <Card className="detailCard">
                    <div className="img">
                      <img
                        src={this.props.DetailsOfMovie.Poster}
                        alt="doc"
                        className="img-fluid"
                      />
                    </div>
                  </Card>
                </Col>
                <Col xs={12} sm={6}>
                  <p className="titleDiv"> {this.props.DetailsOfMovie.Title}</p>
                  <Row>
                    <Table responsive bordered>
                      <thead>
                        <tr className="tableDiv">
                          <th> YEAR</th>
                          <th> {this.props.DetailsOfMovie.Year}</th>
                        </tr>
                      </thead>

                      <thead>
                        <tr className="tableDiv">
                          <th> Genre</th>
                          <th> {this.props.DetailsOfMovie.Genre}</th>
                        </tr>
                      </thead>
                      <thead>
                        <tr className="tableDiv">
                          <th> Actors</th>
                          <th> {this.props.DetailsOfMovie.Actors}</th>
                        </tr>
                      </thead>
                      <thead>
                        <tr className="tableDiv">
                          <th> Director</th>
                          <th> {this.props.DetailsOfMovie.Director}</th>
                        </tr>
                      </thead>
                      <thead>
                        <tr className="tableDiv">
                          <th> Released</th>
                          <th> {this.props.DetailsOfMovie.Released}</th>
                        </tr>
                      </thead>
                      <thead>
                        <tr className="tableDiv">
                          <th> Language</th>
                          <th> {this.props.DetailsOfMovie.Language}</th>
                        </tr>
                      </thead>
                      <thead>
                        <tr className="tableDiv">
                          <th colspan="2">
                            ==============-----------------Rating
                            Section-----------------==============
                          </th>
                        </tr>
                      </thead>
                      <thead>
                        {this.props.DetailsOfMovie.Ratings.map((rate) => (
                          <tr className="tableDiv">
                            <th> {rate.Source}</th>
                            <th> {rate.Value}</th>
                          </tr>
                        ))}
                      </thead>
                    </Table>
                  </Row>
                </Col>
              </>
            ) : (
              ""
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("store", state);
  return {
    DetailsOfMovie: state.infoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getMovieDetailById,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieInfoComponent);
