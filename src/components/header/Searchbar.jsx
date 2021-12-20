import React, { Component } from "react";
import "./Component.css";
import { Col, Container, Form, Row } from "react-bootstrap";

class Searchbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="heading">Hello, here the Movie Information is</div>
        <div className="">
          <Container>
            <Row>
              <Col xs="6">
                {" "}
                <div className="search heading">You can search here</div>
              </Col>
              <Col xs="6" className="seachBar">
                <Form.Control
                  size="sm"
                  placeholder="Type to search..."
                  value={this.props.searchtext.search}
                  onChange={(event) => this.props.handleChange(event)}
                  type="text"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Searchbar;
