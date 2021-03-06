import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Hexagoncard from "./Hexagono/Hexagono";

import "../css/areas.css";


import morado from "../assets/morado.png";

export default class Areas extends React.Component {
  render() {
    return (
      <div className="areas">
        <Container>
          <Row className="justify-content-between">
            <Col lg={4} className="align-self-center">
              <div className="vertical">
              <h2 className="titleArea" style={{ width: "1em" }}>
                ÁREAS
              </h2>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                <Col>
                  <Row>
                    <Hexagoncard
                      logo={morado}
                      envio={"warehouse"}
                      namemodel={"digital"}

                    >
                      
                    </Hexagoncard>
                    <Link
                      to="/TransformacionDigital"
                      style={{
                        textDecoration: "none",
                        fontSize: "12pt",
                        textAlign: "center",
                      }}
                      className="subarea"
                    >
                      Transformación Digital
                    </Link>
                  </Row>
                </Col>
                <Col>
                  <Hexagoncard esmodel='camara' logo={morado} envio={"park"} namemodel={"lupa"}></Hexagoncard>
                  <Link
                    to="/Procesamientodeanalisisdeinformacionmultimedia"
                    style={{ textDecoration: "none", fontSize: "10pt" }}
                    className="text-center subarea"
                  >
                    Procesamiento de análisis de información multimedia
                  </Link>
                </Col>
              </Row>
              <Row className="justify-content-between">
                <Col>
                  <Hexagoncard logo={morado} envio={"sunset"} namemodel={"bombillo"}></Hexagoncard>
                  <Link
                    to="/Sistemasinteractivos"
                    style={{
                      textDecoration: "none",
                      fontSize: "12pt",
                      textAlign: "center",
                    }}
                    className="subarea"
                  >
                    Sistemas Interactivos
                  </Link>
                </Col>
                <Col>
                  <Hexagoncard logo={morado} envio={"lobby"} namemodel={"audios"}> </Hexagoncard>
                  <Link
                    to="/Produccionmultimedia"
                    style={{
                      textDecoration: "none",
                      fontSize: "12pt",
                      textAlign: "center",
                    }}
                    className="text-center subarea"
                  >
                    Producción Multimedia
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
