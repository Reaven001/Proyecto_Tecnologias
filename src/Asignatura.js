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
      user: null,
      uploadValue: 0,
      pictures: [],
      coments: [],
      comenttext: null,
      admins: [],
    };
    this.handleChangeTextA = this.handleChangeTextA.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user });
    });
    var referencia = null;
    var referenciacoment = null;
    switch (this.props.info.titulo) {
      case "Tecnologías de Internet":
        referencia = "proyectos/tecnologias";
        referenciacoment = "comentarios/tecnologias";
        break;
      case "Procesamiento de imágenes":
        referencia = "proyectos/proImage";
        referenciacoment = "comentarios/proImage";
        break;
      case "Diseño":
        referencia = "proyectos/design";
        referenciacoment = "comentarios/design";
        break;
      case "Render":
        referencia = "proyectos/render";
        referenciacoment = "comentarios/render";
        break;
      case "Multimedia Educativa":
        referencia = "proyectos/multimediaEd";
        referenciacoment = "comentarios/multimediaEd";
        break;
      case "Inteligencia Artificial":
        referencia = "proyectos/inteArt";
        referenciacoment = "comentarios/inteArt";
        break;
      case "Diseño de Interfaces":
        referencia = "proyectos/designInter";
        referenciacoment = "comentarios/designInter";
        break;
      case "Animación 3D":
        referencia = "proyectos/animacion3d";
        referenciacoment = "comentarios/animacion3d";
        break;
      case "Integración Multimedia":
        referencia = "proyectos/integracionMul";
        referenciacoment = "comentarios/integracionMul";
        break;
      case "Procesamiento de señales":
        referencia = "proyectos/proSignal";
        referenciacoment = "comentarios/proSignal";
        break;
      case "Guiones":
        referencia = "proyectos/guiones";
        referenciacoment = "comentarios/guiones";
        break;
      case "Modelado 3D":
        referencia = "proyectos/modelado3d";
        referenciacoment = "comentarios/modelado3d";
        break;
    }
    //Conectar con la base de datos de las imagenes
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

    //Conectar con la base de datos de comentarios
    firebase
      .database()
      .ref(referenciacoment)
      .on("child_added", (snapshot) => {
        this.setState({
          coments: this.state.coments.concat(snapshot.val()),
        });
      });
    console.log("Referencia: " + referenciacoment);
    console.log(this.state.coments);

    //Conectar con la base de datos de admins
    const dbRef = firebase.database().ref();
    dbRef
      .child("Admins")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          this.setState({
            admins: snapshot.val(),
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("ADministradores" + this.state.admins);
  }

  handleChangeTextA(event) {
    this.setState({
      comenttext: event.target.value,
    });
    console.log(this.state.coments);
  }

  handleUpload(event) {
    //Subida de archivos multiemdia
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/proyectos/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (error) => {
        console.log(error.message);
      },
      async () => {
        this.setState({
          comenttext: this.state.comenttext,
        });
      }
    );
  }

  handleSubmit(event) {
    const record = {
      correo: this.state.user.email,
      comentario: this.state.comenttext,
    };

    var dbRef = null;

    switch (this.props.info.titulo) {
      case "Tecnologías de Internet":
        dbRef = firebase.database().ref("comentarios/tecnologias");
        console.log("Se subio a tecnologias");
        break;
      case "Multimedia Educativa":
        dbRef = firebase.database().ref("comentarios/multimediaEd");
        console.log("Se subio a multimedia educativa");
        break;
      case "Integración Multimedia":
        dbRef = firebase.database().ref("comentarios/integracionMul");
        console.log("Se subio a integracion multimedia");
        break;
      case "Procesamiento de imágenes":
        dbRef = firebase.database().ref("comentarios/proImage");
        console.log("Se subio a procesamiento de imagenes");
        break;
      case "Inteligencia Artificial":
        dbRef = firebase.database().ref("comentarios/inteArt");
        console.log("Se subio a inteligenica artificial");
        break;
      case "Procesamiento de señales":
        dbRef = firebase.database().ref("comentarios/proSignal");
        console.log("Se subio a procesamiento de señales");
        break;
      case "Diseño":
        dbRef = firebase.database().ref("comentarios/design");
        console.log("Se subio a diseño");
        break;
      case "Diseño de Interfaces":
        dbRef = firebase.database().ref("comentarios/designInter");
        console.log("Se subio a diseño de interfaces");
        break;
      case "Guiones":
        dbRef = firebase.database().ref("comentarios/guiones");
        console.log("Se subio a guiones");
        break;
      case "Render":
        dbRef = firebase.database().ref("comentarios/render");
        console.log("Se subio a render");
        break;
      case "Animación 3D":
        dbRef = firebase.database().ref("comentarios/animacion3d");
        console.log("Se subio a animacion 3D");
        break;
      case "Modelado 3D":
        dbRef = firebase.database().ref("comentarios/modelado3d");
        console.log("Se subio a modelado 3D");
        break;
    }
    const newComent = dbRef.push();
    newComent.set(record);

    console.log(record);
    console.log(newComent);
    alert("Comentario publicado correctamente...");
    //window.location.href = window.location.href;
    event.preventDefault();
  }

  Asig() {
    if (this.state.user) {
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
              <Col lg={8} sm={12}>
                {this.state.coments
                  .map((coment) => (
                    <div>
                      <div>
                        <h4 className="NameUser">{coment.correo}</h4>
                      </div>
                      <p className="comentario">{coment.comentario}</p>
                    </div>
                  ))
                  .reverse()}
              </Col>
            </Row>
            <Row>
              <h3 className="tituloComent">
                <u>Comparte tus ideas</u>
              </h3>
            </Row>
            <Form className="formUpload" onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChangeTextA}
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
                  type="submit"
                >
                  PUBLICAR
                </Button>
              </Row>
            </Form>
          </Container>
        </div>
      );
    } else {
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
              <Col lg={8} sm={12}>
                {this.state.coments
                  .map((coment) => (
                    <div>
                      <div>
                        <h4 className="NameUser">{coment.correo}</h4>
                      </div>
                      <p className="comentario">{coment.comentario}</p>
                    </div>
                  ))
                  .reverse()}
              </Col>
            </Row>
            <Row>
              <h3 className="tituloComent">
                <u>Comparte tus ideas</u>
              </h3>
            </Row>
            <h1>Para comentar inicia sesion</h1>
          </Container>
        </div>
      );
    }
  }

  render() {
    return <div>{this.Asig()}</div>;
  }
}
