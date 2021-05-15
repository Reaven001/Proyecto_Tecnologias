import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import cubo from "./assets/cubo.png";
import "./css/upload.css";

export default class Upload extends React.Component {
  render() {
    return (
      <div className="SubirArchivos">
        <Container>
          <Row className="justify-content-center py-5">
            <Col sm={12} lg={8}>
              <h1 className="tituloUpload">Comparte tus proyectos</h1>
              <div className="ParrUpload">
                <p>
                  Aquí podrás dar a conocer tus diferentes trabajos realizados a
                  lo largo de la carrera.
                </p>
                <p>
                  Selecciona fotos o videos de tus proyectos que desees
                  compartir con la comunidad, luego realiza una breve
                  descripción y pulsa en COMPARTIR.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} className="align-self-center">
              <Row className="justify-content-center">
                <img
                  width={200}
                  height={200}
                  src={cubo}
                  alt="Model 3D"
                  className="modelo"
                />
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center py-5">
            <Col lg={6} className="align-self-center">
              <Form className="formUpload">
                <Form.Group>
                  <Form.File id="controlFormFile" />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={6} className="align-self-center">
              <Form className="formUpload">
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>¿De que asignatura es tu proyecto?</Form.Label>
                  <Form.Control as="select">
                    <option>Tecnologias de internet</option>
                    <option>Multimedia educativa</option>
                    <option>Museos</option>
                    <option>Procesamiento de imagenes</option>
                    <option>Inteligencia artificial</option>
                    <option>Procesamiento de señales</option>
                    <option>Diseño </option>
                    <option>Diseño de Interfaces</option>
                    <option>Guiones</option>
                    <option>Render</option>
                    <option>Animación 3D</option>
                    <option>Modelado 3D</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={12}>
              <Form>
                <Form.Group>
                  <Form.Label className="titleDes">Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Danos una descripción de tu proyecto, quien lo hizo, como se hizo..."
                    style={{
                      backgroundColor: "#620CE8",
                      color: "#E1FF00",
                      borderRadius: "20px",
                      border: "1px solid #620ce8",
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="btn-upload">
            <Button
              style={{
                borderRadius: "10px",
                border: "1px solid #E8910C",
                backgroundColor: "#E8910C",
                color: "#620CE8",
                fontSize: "15px",
                width: "auto",
                paddingRight: "50px",
                paddingLeft: "50px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontWeight: "bold",
              }}
              as="input"
              type="submit"
              value="COMPARTIR"
            ></Button>
          </Row>
        </Container>
      </div>
    );
  }
}
