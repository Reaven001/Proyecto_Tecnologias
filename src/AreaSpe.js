import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import cubo from "./assets/cubo.png";
import Docentes from "./components/Docentes.js";
import "./css/areas.css";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

export default class AreaSpe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="areaspe">
        <ReactFullpage
          sectionsColor={["#e8910c"]}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section">
                  <Container>
                    <Row className="justify-content-between">
                      <Col>
                        <h2 className="text-center tituloarea">
                          Transformación Digital
                        </h2>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col lg={4} md={12} sm={12}>
                        <Row className="justify-content-center">
                          <img
                            width={200}
                            height={200}
                            src={cubo}
                            alt="Model 3D"
                            className="modelo"
                          />
                        </Row>
                        <Row className="justify-content-center">
                          <h3 className="text-center asig">
                            Tecnologias de internet
                          </h3>
                        </Row>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <Row className="justify-content-center">
                          <img
                            width={200}
                            height={200}
                            src={cubo}
                            alt="Model 3D"
                            className="modelo"
                          />
                        </Row>
                        <Row className="justify-content-center">
                          <h3 className="text-center asig">
                            Multimedia educativa
                          </h3>
                        </Row>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <Row className="justify-content-center">
                          <img
                            width={200}
                            height={200}
                            src={cubo}
                            alt="Model 3D"
                            className="modelo"
                          />
                        </Row>
                        <Row className="justify-content-center">
                          <h3 className="text-center asig">Materia X</h3>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Button
                        style={{
                          color: "#E1FF00",
                          background: "#620CE8",
                          border: "#0DBFFF",
                        }}
                        href="/Docentes"
                      >
                        Docentes
                      </Button>{" "}
                    </Row>
                  </Container>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
