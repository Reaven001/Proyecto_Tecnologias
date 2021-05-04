import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import AreaSpe from "../AreaSpe.js";
import "../css/areas.css";

export default class Areas extends React.Component {
  render() {
    return (
      <div className="areas">
        <Container>
          <Row>
            <Col lg={4}>
              <h1 className="titleArea">Á</h1>
              <h1 className="titleArea">R</h1>
              <h1 className="titleArea">E</h1>
              <h1 className="titleArea">A</h1>
              <h1 className="titleArea">S</h1>
            </Col>
            <Col lg={8}>
              <Row className="justify-content-between py-5">
                <Col>
                  <Button href="/TransformacionDigital">
                    Transformación Digital
                  </Button>{" "}
                </Col>
                <Col>
                  <Button href="#">
                    Procesamiento de análisis de información multimedia
                  </Button>{" "}
                </Col>
              </Row>
              <Row className="justify-content-between py-5">
                <Col>
                  <Button href="#">Sistemas interactivos</Button>{" "}
                </Col>
                <Col>
                  <Button href="#">Producción multimedia</Button>{" "}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
