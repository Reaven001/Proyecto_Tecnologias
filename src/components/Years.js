import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/timeline.css";

export default class Years extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="years">
        <Container>
          <Row className="justify-content-start">
            <h2 className="tituloyear">{this.props.info.year}</h2>
          </Row>
          <Row>
            <Col className="align-self-center" lg={6} sm={12}>
              <Row className="justify-content-center">
                <img
                  width={200}
                  height={200}
                  src={this.props.info.img}
                  alt="Model 3D"
                  className="imagenTL"
                />
              </Row>
            </Col>
            <Col lg={6} sm={12}>
              <p className="descrip">{this.props.info.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
