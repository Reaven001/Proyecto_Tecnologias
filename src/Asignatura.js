import React from "react";
import firebase from "firebase";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import amarillo from "./assets/amarillo.png";

import "./css/Asignatura.css";
import Hexagoncard2 from "./components/Hexagono/Hexagono2";

export default class Asignatura extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
    };
  }
  componentWillMount() {
    var referencia = null;
    switch (this.props.info.titulo) {
      case "Tecnologías de Internet":
        referencia = "proyectos/tecnologias";
        break;
      case "Procesamiento de imágenes":
        referencia = "proyectos/proImage";
        break;
      case "Diseño":
        referencia = "proyectos/design";
        break;
      case "Render":
        referencia = "proyectos/render";
        break;
      case "Multimedia Educativa":
        referencia = "proyectos/multimediaEd";
        break;
      case "Inteligencia Artificial":
        referencia = "proyectos/inteArt";
        break;
      case "Diseño de Interfaces":
        referencia = "proyectos/designInter";
        break;
      case "Animación 3D":
        referencia = "proyectos/animacion3d";
        break;
      case "Integración Multimedia":
        referencia = "proyectos/integracionMul";
        break;
      case "Procesamiento de señales":
        referencia = "proyectos/proSignal";
        break;
      case "Guiones":
        referencia = "proyectos/guiones";
        break;
      case "Modelado 3D":
        referencia = "proyectos/modelado3d";
        break;
    }
    firebase
      .database()
      .ref(referencia)
      .on("child_added", (snapshot) => {
        this.setState({
          pictures: this.state.pictures.concat(snapshot.val()),
        });
      });
    console.log("Referencia: " + referencia);
    console.log(this.state.pictures);
  }
  render() {
    return (
      <div className="contentAsig">
        <Container>
          <Row className="justify-content-between py-5">
            <Col lg={8} sm={12}>
              <h2 className="tituloAsig"> {this.props.info.titulo} </h2>
              <p className="parrAsig">{this.props.info.descripcion}</p>
              <div className="partDoc">
                <h3 className="tituloAsig2">Docentes</h3>
                <p className="parrafoD">{this.props.info.profesores}</p>
              </div>
            </Col>
            <Col lg={4} sm={12} className="align-self-center">
              <Row className="justify-content-center">
                <Hexagoncard2
                  logo={amarillo}
                  envio={"lobby"}
                  namemodel={this.props.info.modelasig}
                ></Hexagoncard2>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <div className="img-grid">
              {this.state.pictures
                .map((picture) => (
                  <div className="img-wrap">
                    <img
                      src={picture.image}
                      width="500"
                      style={{ borderRadius: "20px" }}
                    />
                    <br />
                    <span>{picture.email}</span>
                    <br />
                    <p>{picture.descripcion}</p>
                  </div>
                ))
                .reverse()}
            </div>
          </Row>
          <Row className="justify-content-center py-5 btnShare">
            <Button
              style={{
                color: "#620CE8",
                backgroundColor: "#E8910C",
                border: "#0DBFFF",
                borderRadius: "20px",
                padding: "15px",
                fontSize: "15px",
              }}
              href="/SubirArchivos"
            >
              Comparte tus proyectos
            </Button>
          </Row>
          <Row>
            <h3 className="tituloComent"> Comentarios </h3>
          </Row>
          <Row>
            <h4 className="NameUser">Esteban Cuervo</h4>
            <p className="comentario">
              Ut eget ornare nulla. Nulla tincidunt placerat dictum. Vivamus
              turpis ex, vestibulum sit amet pulvinar ut, viverra quis felis.
              Curabitur aliquet ex orci, vel tempus nisi pretium eget.
              Suspendisse quam dolor, efficitur non felis eu, tincidunt gravida
              velit.
            </p>
            <h4 className="NameUser">Santiago Farias</h4>
            <p className="comentario">
              Ut eget ornare nulla. Nulla tincidunt placerat dictum. Vivamus
              turpis ex, vestibulum sit amet pulvinar ut, viverra quis felis.
              Curabitur aliquet ex orci, vel tempus nisi pretium eget.
              Suspendisse quam dolor, efficitur non felis eu, tincidunt gravida
              velit.
            </p>
            <h4 className="NameUser">Jhon Martinez</h4>
            <p className="comentario">
              Ut eget ornare nulla. Nulla tincidunt placerat dictum. Vivamus
              turpis ex, vestibulum sit amet pulvinar ut, viverra quis felis.
              Curabitur aliquet ex orci, vel tempus nisi pretium eget.
              Suspendisse quam dolor, efficitur non felis eu, tincidunt gravida
              velit.
            </p>
          </Row>
          <Row>
            <h3 className="tituloComent">
              <u>Comparte tus ideas</u>
            </h3>
          </Row>
          <Row>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="¿Qué te parecieron estos proyectos?"
              style={{
                backgroundColor: "#0DBFFF",
                color: "#E1FF00",
                borderRadius: "20px",
              }}
            />
          </Row>
          <Row className="justify-content-center py-5 btnShare">
            <Button
              style={{
                color: "#FF0000",
                backgroundColor: "transparent",
                border: "3px solid #FF0000",
                borderRadius: "20px",
                fontSize: "15px",
              }}
              as="input"
              type="submit"
              value="PUBLICAR"
            ></Button>
            {""}
          </Row>
        </Container>
      </div>
    );
  }
}
