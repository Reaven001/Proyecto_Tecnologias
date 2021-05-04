import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import cubo from "../../assets/cubo.png";
import Docentes from "../DocentesxArea/Docentes.js";
import Asignatura1 from "../../Asignatura";
import "../../css/areas.css";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

export default class AreaSpe extends React.Component {
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
                          {this.props.info.titulo}
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
                          {this.props.info.mat1 ==
                            "Tecnologias de internet" && (
                            <Link
                              to="/TecnologiasdeInternet"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat1}
                            </Link>
                          )}
                          {this.props.info.mat1 ==
                            "Procesamiento de imagenes" && (
                            <Link
                              to="/ProcesamientodeImagenes"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat1}
                            </Link>
                          )}
                          {this.props.info.mat1 == "Diseño" && (
                            <Link
                              to="/Diseno"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat1}
                            </Link>
                          )}
                          {this.props.info.mat1 == "Render" && (
                            <Link
                              to="/Render"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat1}
                            </Link>
                          )}
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
                          {this.props.info.mat2 == "Multimedia educativa" && (
                            <Link
                              to="/MultimediaEducativa"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat2}
                            </Link>
                          )}
                          {this.props.info.mat2 ==
                            "Inteligencia artificial" && (
                            <Link
                              to="/InteligenciaArtificial"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat2}
                            </Link>
                          )}
                          {this.props.info.mat2 == "Diseño de interfaces" && (
                            <Link
                              to="/DisenodeInterfaces"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat2}
                            </Link>
                          )}
                          {this.props.info.mat2 == "Animación 3D" && (
                            <Link
                              to="/Animacion3D"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat2}
                            </Link>
                          )}
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
                          {this.props.info.mat3 == "Materia X1" && (
                            <Link
                              to="/Materiax1"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat3}
                            </Link>
                          )}
                          {this.props.info.mat3 == "Materia X2" && (
                            <Link
                              to="/Materiax2"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat3}
                            </Link>
                          )}
                          {this.props.info.mat3 == "Materia X3" && (
                            <Link
                              to="/Materiax3"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat3}
                            </Link>
                          )}
                          {this.props.info.mat3 == "Materia X4" && (
                            <Link
                              to="/Materiax4"
                              style={{ textDecoration: "none" }}
                              className="text-center asig"
                            >
                              {this.props.info.mat3}
                            </Link>
                          )}
                        </Row>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      {this.props.info.titulo == "Transformación Digital" && (
                        <Button
                          style={{
                            color: "#E1FF00",
                            background: "#620CE8",
                            border: "#0DBFFF",
                          }}
                          href="/DocentesTD"
                        >
                          Docentes Transformacion Digital
                        </Button>
                      )}
                      {this.props.info.titulo ==
                        "Procesamiento de análisis de información multimedia" && (
                        <Button
                          style={{
                            color: "#E1FF00",
                            background: "#620CE8",
                            border: "#0DBFFF",
                          }}
                          href="/DocentesAIM"
                        >
                          Docentes Procesamiento de análisis
                        </Button>
                      )}
                      {this.props.info.titulo == "Sistemas Interactivos" && (
                        <Button
                          style={{
                            color: "#E1FF00",
                            background: "#620CE8",
                            border: "#0DBFFF",
                          }}
                          href="DocentesSI"
                        >
                          Docentes Sistemas interactivos
                        </Button>
                      )}
                      {this.props.info.titulo == "Producción Multimedia" && (
                        <Button
                          style={{
                            color: "#E1FF00",
                            background: "#620CE8",
                            border: "#0DBFFF",
                          }}
                          href="/DocentesPM"
                        >
                          Docentes Producción Multimedia
                        </Button>
                      )}
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
