import React from "react";
import ReactDOM from "react-dom";

import "../css/inicio1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cubo from "../assets/cubo.png";

export default class Inicio extends React.Component {
  render() {
    return (
      <div className="inicio1">
        <Container>
          <div className="modelosUP">
            <Row className="justify-content-between">
              <Col>
                <Row className="justify-content-start">
                  <img
                    width={200}
                    height={200}
                    src={cubo}
                    alt="Model 3D"
                    className="modInicio"
                  />
                </Row>
              </Col>
              <Col>
                <Row className="justify-content-end">
                  <img
                    width={200}
                    height={200}
                    src={cubo}
                    alt="Model 3D"
                    className="modInicio"
                  />
                </Row>
              </Col>
            </Row>
          </div>
          <Row className="justify-content-center">
            <Col>
              <h1 className="text-center tituloPrin">INGENIERÍA</h1>
              <p className="text-center palabraen">en</p>
              <h1 className="text-center tituloPrin">MULTIMEDIA</h1>
            </Col>
          </Row>
          <div className="modelosDOWN">
            <Row className="justify-content-between">
              <Col>
                <Row className="justify-content-start">
                  <img
                    width={200}
                    height={200}
                    src={cubo}
                    alt="Model 3D"
                    className="modInicio"
                  />
                </Row>
              </Col>
              <Col>
                <Row className="justify-content-center">
                  <img
                    width={200}
                    height={200}
                    src={cubo}
                    alt="Model 3D"
                    className="modInicio"
                  />
                </Row>
              </Col>
              <Col>
                <Row className="justify-content-end">
                  <img
                    width={200}
                    height={200}
                    src={cubo}
                    alt="Model 3D"
                    className="modInicio"
                  />
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
