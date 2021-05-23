import React from "react";
import firebase from "firebase";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      asigselect: "tecnologiasdeinternet",
      descrip: null,
    };

    this.handleUpload = this.handleUpload.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeTextA = this.handleChangeTextA.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChangeSelect(event) {
    this.setState({
      asigselect: event.target.value,
    });
  }

  handleChangeTextA(event) {
    this.setState({
      descrip: event.target.value,
    });
  }

  handleSubmit(event) {
    const img = this.state.pictureUP;
    console.log(img);
    event.preventDefault();
  }

  handleUpload(event) {
    //Subide de archivos multiemdia
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/Fotos/${file.name}`);
    const task = storageRef.put(file);

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

        /*const record = {
          photoURL: this.state.user.photoURL,
          displayName: this.state.user.displayName,
          image: url,
        };

        const dbRef = firebase.database().ref("pictures");
        const newPicture = dbRef.push();
        newPicture.set(record);

        console.log(record);
        console.log(newPicture);*/
      }
    );
  }

  userLog() {
    const styleArchivos = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    if (this.state.user) {
      //Si esta logueado:
      return (
        <div className="SubirArchivos">
          <Container className="SubirArchivos">
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
                  <Hexagoncard
                    esmodel="mul"
                    logo={morado}
                    envio={"park"}
                    namemodel={"mul"}
                  ></Hexagoncard>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className="SubirArchivos">
            <Form className="formUpload" onSubmit={this.handleSubmit}>
              <Row className="justify-content-around">
                <Col lg={4} sm={5} className="align-self-center Form">
                  <div>
                    <div>
                      <Form.Group controlId="formArchivos">
                        <Form.File
                          id="controlFormFile"
                          onChange={this.handleUpload}
                        />
                      </Form.Group>
                    </div>
                    <div style={styleArchivos}>
                      <img width="200" src={this.state.pictureUP} alt="" />
                    </div>
                    <div style={styleArchivos}>
                      <progress
                        value={this.state.uploadValue}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={5} className="align-self-center Form">
                  <Row className="justify-content-center">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>
                        ¿De que asignatura es tu proyecto?
                      </Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="Asignatura"
                        name="asignatura"
                        value={this.state.asigselect}
                        onChange={this.handleChangeSelect}
                      >
                        <option>Asignatura...</option>
                        <option value="tecnologiasdeinternet">
                          Tecnologias de internet
                        </option>
                        <option value="multimediaeducativa">
                          Multimedia educativa
                        </option>
                        <option value="museos">Museos</option>
                        <option value="procesamientodeimagenes">
                          Procesamiento de imagenes
                        </option>
                        <option value="inteligenciaartificial">
                          Inteligencia artificial
                        </option>
                        <option value="procesamientodeseñales">
                          Procesamiento de señales
                        </option>
                        <option value="diseño">Diseño </option>
                        <option value="diseñodeinterfaces">
                          Diseño de Interfaces
                        </option>
                        <option value="guiones">Guiones</option>
                        <option value="render">Render</option>
                        <option value="animacion3d">Animación 3D</option>
                        <option value="modelado3d">Modelado 3D</option>
                      </Form.Control>
                    </Form.Group>
                  </Row>
                </Col>
              </Row>
              <Row className="py-5">
                <Col lg={12}>
                  <Form.Group>
                    <Form.Label className="titleDes">Descripción</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={8}
                      placeholder="Danos una descripción de tu proyecto, quien lo hizo, como se hizo..."
                      style={{
                        backgroundColor: "#620CE8",
                        color: "#E1FF00",
                        borderRadius: "20px",
                        border: "1px solid #620ce8",
                      }}
                      onChange={this.handleChangeTextA}
                    />
                  </Form.Group>
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
                  type="submit"
                >
                  COMPARTIR
                </Button>
              </Row>
            </Form>
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
