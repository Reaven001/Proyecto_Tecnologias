import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Hexagoncard from "./Hexagono/Hexagono";
import "../css/areas.css";

export default class Areas extends React.Component {
  render() {
    return (
      <div className="areas">
        <Container>
          <Row>
            <Col lg={4} className="align-self-center">
              <h1 className="titleArea" style={{ width: "1em" }}>
                Á R E A S
              </h1>
            </Col>
            <Col lg={8}>
              <Row className="justify-content-between py-5">
                <Col>
                  <Hexagoncard
                    logo={
                      "https://dam.smashmexico.com.mx/wp-content/uploads/2017/11/aquaman-diferentes-versiones-dc-comics.jpg"
                    }
                    envio={"warehouse"}
                  ></Hexagoncard>
                  <Button href="/TransformacionDigital">
                    Transformación Digital
                  </Button>{" "}
                </Col>
                <Col>
                  <Hexagoncard
                    logo={
                      "https://dam.smashmexico.com.mx/wp-content/uploads/2017/11/aquaman-diferentes-versiones-dc-comics.jpg"
                    }
                    envio={"park"}
                  ></Hexagoncard>
                  {/* <Button href="/Procesamientodeanalisisdeinformacionmultimedia">
                    Procesamiento de análisis de información multimedia
                  </Button>{" "} */}
                </Col>
              </Row>
              <Row className="justify-content-between">
                <Col>
                  <Hexagoncard
                    logo={
                      "https://dam.smashmexico.com.mx/wp-content/uploads/2017/11/aquaman-diferentes-versiones-dc-comics.jpg"
                    }
                    envio={"lobby"}
                  ></Hexagoncard>
                  {/* <Button href="/Sistemasinteractivos">
                    Sistemas interactivos
                  </Button>{" "} */}
                </Col>
                <Col>
                  <Hexagoncard
                    logo={
                      "https://dam.smashmexico.com.mx/wp-content/uploads/2017/11/aquaman-diferentes-versiones-dc-comics.jpg"
                    }
                    envio={"sunset"}
                  ></Hexagoncard>
                  {/* <Button href="/Produccionmultimedia">
                    Producción multimedia
                  </Button>{" "} */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
