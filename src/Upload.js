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
      asigselect: null,
      descrip: null,
    };
    this.stateinit = {
      user: null,
      uploadValue: 0,
      pictures: [],
      pictureUP: null,
      asigselect: "",
      descrip: "",
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

  handleUpload(event) {
    //Subida de archivos multiemdia
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/proyectos/${file.name}`);
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
      }
    );
  }

  handleSubmit(event) {
    const record = {
      email: this.state.user.email,
      descripcion: this.state.descrip,
      image: this.state.pictureUP,
    };

    var dbRef = null;

    switch (this.state.asigselect) {
      case "tecnologiasdeinternet":
        dbRef = firebase.database().ref("proyectos/tecnologias");
        console.log("Se subio a tecnologias");
        break;
      case "multimediaeducativa":
        dbRef = firebase.database().ref("proyectos/multimediaEd");
        console.log("Se subio a multimedia educativa");
        break;
      case "integracionmultimedia":
        dbRef = firebase.database().ref("proyectos/integracionMul");
        console.log("Se subio a integracion multimedia");
        break;
      case "procesamientodeimagenes":
        dbRef = firebase.database().ref("proyectos/proImage");
        console.log("Se subio a procesamiento de imagenes");
        break;
      case "inteligenciaartificial":
        dbRef = firebase.database().ref("proyectos/inteArt");
        console.log("Se subio a integracion multimedia");
        break;
      case "procesamientodese??ales":
        dbRef = firebase.database().ref("proyectos/proSignal");
        console.log("Se subio a procesamiento de se??ales");
        break;
      case "dise??o":
        dbRef = firebase.database().ref("proyectos/design");
        console.log("Se subio a dise??o");
        break;
      case "dise??odeinterfaces":
        dbRef = firebase.database().ref("proyectos/designInter");
        console.log("Se subio a dise??o de interfaces");
        break;
      case "guiones":
        dbRef = firebase.database().ref("proyectos/guiones");
        console.log("Se subio a guiones");
        break;
      case "render":
        dbRef = firebase.database().ref("proyectos/render");
        console.log("Se subio a render");
        break;
      case "animacion3d":
        dbRef = firebase.database().ref("proyectos/animacion3d");
        console.log("Se subio a animacion 3D");
        break;
      case "modelado3d":
        dbRef = firebase.database().ref("proyectos/modelado3d");
        console.log("Se subio a modelado 3D");
        break;
    }
    const newPicture = dbRef.push();
    newPicture.set(record);

    console.log(record);
    console.log(newPicture);
    alert("Archivos subidos correctamente...");
    //window.location.href = window.location.href;
    event.preventDefault();
    this.state.descrip=this.stateinit.descrip;
    this.state.asigselect=this.stateinit.asigselect;
    this.state.pictureUP=this.stateinit.pictureUP;
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
                    Aqu?? podr??s dar a conocer tus diferentes trabajos realizados
                    a lo largo de la carrera.
                  </p>
                  <p>
                    Selecciona fotos o videos de tus proyectos que desees
                    compartir con la comunidad, luego realiza una breve
                    descripci??n y pulsa en COMPARTIR.
                  </p>
                </div>
              </Col>
              <Col sm={12} lg={4} className="align-self-center">
                <Row className="justify-content-center">
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
                          velue={this.stateinit.pictureUP}

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
                        ??De que asignatura es tu proyecto?
                      </Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="Asignatura"
                        name="asignatura"
                        onChange={this.handleChangeSelect}
                        value={this.state.asigselect}
                      >
                        <option>Asignatura...</option>
                        <option value="tecnologiasdeinternet">
                          Tecnologias de internet
                        </option>
                        <option value="multimediaeducativa">
                          Multimedia educativa
                        </option>
                        <option value="integracionmultimedia">
                          Integracion Multimedia
                        </option>
                        <option value="procesamientodeimagenes">
                          Procesamiento de imagenes
                        </option>
                        <option value="inteligenciaartificial">
                          Inteligencia artificial
                        </option>
                        <option value="procesamientodese??ales">
                          Procesamiento de se??ales
                        </option>
                        <option value="dise??o">Dise??o</option>
                        <option value="dise??odeinterfaces">
                          Dise??o de Interfaces
                        </option>
                        <option value="guiones">Guiones</option>
                        <option value="render">Render</option>
                        <option value="animacion3d">Animaci??n 3D</option>
                        <option value="modelado3d">Modelado 3D</option>
                      </Form.Control>
                    </Form.Group>
                  </Row>
                </Col>
              </Row>
              <Row className="py-5">
                <Col lg={12}>
                  <Form.Group>
                    <Form.Label className="titleDes">Descripci??n</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={8}
                      placeholder="Danos una descripci??n de tu proyecto, quien lo hizo, como se hizo..."
                      style={{
                        backgroundColor: "#620CE8",
                        color: "#E1FF00",
                        borderRadius: "20px",
                        border: "1px solid #620ce8",
                      }}
                      onChange={this.handleChangeTextA}
                      value={this.state.descrip}
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
