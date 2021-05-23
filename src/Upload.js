import React from "react";
import firebase from "firebase";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import cubo from "./assets/cubo.png";
import "./css/upload.css";

import Login from "./Login.js";
import morado from "./assets/morado.png";
import Hexagoncard from "./components/Hexagono/Hexagono2";

export default class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      uploadValue: 0,
      pictures: [],
      pictureUP: null,
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user });
    });

    firebase
      .database()
      .ref("pictures")
      .on("child_added", (snapshot) => {
        this.setState({
          pictures: this.state.pictures.concat(snapshot.val()),
        });
      });
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/Fotos/${file.name}`);
    const task = storageRef.put(file);
    var asignatura = "Asignatura";
    switch (asignatura) {
      case "Tecnologias de internet":
        console.log("La asignatura es Tecnologias de internet");
        break;
      case "Multimedia educativa":
        console.log("La asignatura es Multimedia educativa");
        break;
      case "Asignatura":
        alert("Elige una asignatura");
        break;
    }

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue: percentage,
        });
      },
      (error) => {
        console.log(error.message);
      },
      async () => {
        const url = await storageRef.getDownloadURL();

        this.setState({
          uploadValue: 100,
          pictureUP: url,
        });

        const record = {
          photoURL: this.state.user.photoURL,
          displayName: this.state.user.displayName,
          image: url,
        };

        const dbRef = firebase.database().ref("pictures");
        const newPicture = dbRef.push();
        newPicture.set(record);

        console.log(record);
        console.log(newPicture);
      }
    );
  }

  userLog() {
    if (this.state.user) {
      //Si esta logueado:
      return (
        <div className="SubirArchivos">
          <Container>
            <Row className="justify-content-center py-5">
              <Col sm={12} lg={8}>
                <h1 className="tituloUpload">Comparte tus proyectos</h1>
                <div className="ParrUpload">
                  <p>
                    Aquí podrás dar a conocer tus diferentes trabajos realizados
                    a lo largo de la carrera.
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
                  {/* <img
                    width={200}
                    height={200}
                    src={cubo}
                    alt="Model 3D"
                    className="modelo"
                  /> */}
                  <Hexagoncard esmodel='mul' logo={morado} envio={"park"} namemodel={"mul"}></Hexagoncard>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-center py-5">
              <Col lg={6} className="align-self-center">
                <Form className="formUpload">
                  <Form.Group>
                    <Form.File
                      id="controlFormFile"
                      onChange={this.handleUpload}
                    />
                    <div>
                      <img width="200" src={this.state.pictureUP} alt="" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "50px",
                      }}
                    >
                      <progress
                        value={this.state.uploadValue}
                        max="100"
                      ></progress>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
              <Col lg={6} className="align-self-center">
                <Form className="formUpload">
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>¿De que asignatura es tu proyecto?</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Asignatura"
                      name="asignatura"
                    >
                      <option>Asignatura...</option>
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
    } else {
      //Si no lo esta:
      return <Login />;
    }
  }

  render() {
    return <div>{this.userLog()}</div>;
  }
}
