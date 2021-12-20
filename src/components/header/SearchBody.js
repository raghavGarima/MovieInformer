import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMovieDetailById } from "../../action/homeAction";

class SearchBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mappedList: [],
    };
  }

  togetId = (movieId) => {
    this.props.getMovieDetailById(movieId, this.props.history);
  };

  render() {
    return (
      <div className="">
        {console.log("insearchBody", this.props)}
        <Container className="mt-5">
          <Row>
            {this.props.ListOfMovies != undefined &&
            this.props.ListOfMovies.length > 0 ? (
              <>
                {this.props.ListOfMovies.map((movie) => {
                  return (
                    <Col sm={4} md={3} className="mb-5">
                      <Card border="light" className="cardHead">
                        <div className="movieCard">
                          <div className="movieImageDiv">
                            <img
                              src={movie.Poster}
                              alt="doc"
                              className="img-fluid "
                            />
                          </div>
                          <div className="text">
                            <p className="movieTitle"> {movie.Title}</p>
                            <h6 className="movieYear"> Year : {movie.Year}</h6>
                            <button
                              type="button"
                              class="btn btn-warning "
                              onClick={() => {
                                this.togetId(movie.imdbID);
                              }}
                            >
                              Show More
                            </button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </>
            ) : (
              <>
                <p className="nodatafound">"No data found"</p>
              </>
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
    ListOfMovies: state.movieList,
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchBody);
