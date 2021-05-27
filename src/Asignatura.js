import React from "react";
import firebase from "firebase";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import amarillo from "./assets/amarillo.png";

import Modal from "react-bootstrap/Modal";

import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { firebasedb } from "./index"
import "./css/Asignatura.css";
import Hexagoncard2 from "./components/Hexagono/Hexagono2";

export default class Asignatura extends React.Component {
  constructor(props) {
    super(props);
    this.stateinit = {
      comenttext: "",
      comentario: "",
      descripcion: ""
    };
    this.state = {
      modalEditarimg: false,
      modalEditarcoment: false,
      data: [],
      user: null,
      uploadValue: 0,
      pictures: [],
      coments: [],
      comenttext: null,
      admins: [],
      show: false,
      setShow: false,
      selectedImg: null,
      selectedEmail: null,
      selectedDescrip: null,
      form: {
        comentario: '',
        correo: '',

      },
      data2: [],
      formpop: {
        descripcion: '',
        email: '',
        image: '',
      },
      id: "",
      id2: "",
      Admos: []
    };
    this.handleChangeTextA = this.handleChangeTextA.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeimg = this.handleChangeimg.bind(this);
  }





  peticionGetimg = () => {
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
    firebasedb.child(referencia).on("value", (descripcion) => {
      if (descripcion.val() !== null) {
        this.setState({ ...this.state.data2, data2: descripcion.val() });
      } else {
        this.setState({ data2: [] });
      }
    });
  };

  peticionadmins = () => {
    firebasedb.child("Administra").on("value", (email) => {
      if (email.val() !== null) {
        this.setState({ ...this.state.Admos, Admos: email.val() });
      } else {
        this.setState({ Admos: [] });
      }
    });

  }


  peticionDeleteimg = () => {
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


    if (window.confirm(`Estás seguro que deseas eliminar la publicacion ${this.state.formpop && this.state.formpop.descripcion}?`)) {
      firebasedb.child(`${referencia}/${this.state.id2}`).remove(
        error => {
          if (error) console.log(error)
        });
    }
    console.log("id2   " + this.state.id2);
  }

  seleccionarImg = async (descripcion, id2, caso) => {

    await this.setState({ formpop: descripcion, id2: id2 });

    (caso === "Editar") ? this.setState({ modalEditarimg: true }) :
      this.peticionDeleteimg()

  }

  peticionPutimg = () => {
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
    firebasedb.child(`${referencia}/${this.state.id2}`).set(
      this.state.formpop,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalEditar: false });
    this.state.formpop.descripcion = this.stateinit.descripciond

  }







  peticionGet = () => {

    var referenciacoment = null;
    switch (this.props.info.titulo) {
      case "Tecnologías de Internet":
        referenciacoment = "comentarios/tecnologias";
        break;
      case "Procesamiento de imágenes":

        referenciacoment = "comentarios/proImage";
        break;
      case "Diseño":

        referenciacoment = "comentarios/design";
        break;
      case "Render":

        referenciacoment = "comentarios/render";
        break;
      case "Multimedia Educativa":

        referenciacoment = "comentarios/multimediaEd";
        break;
      case "Inteligencia Artificial":

        referenciacoment = "comentarios/inteArt";
        break;
      case "Diseño de Interfaces":

        referenciacoment = "comentarios/designInter";
        break;
      case "Animación 3D":

        referenciacoment = "comentarios/animacion3d";
        break;
      case "Integración Multimedia":

        referenciacoment = "comentarios/integracionMul";
        break;
      case "Procesamiento de señales":

        referenciacoment = "comentarios/proSignal";
        break;
      case "Guiones":

        referenciacoment = "comentarios/guiones";
        break;
      case "Modelado 3D":

        referenciacoment = "comentarios/modelado3d";
        break;
    }
    firebasedb.child(referenciacoment).on("value", (comentario) => {
      if (comentario.val() !== null) {
        this.setState({ ...this.state.data, data: comentario.val() });
      } else {
        this.setState({ data: [] });
      }
    });
  };


  peticionPut = () => {
    var referenciacoment = null;
    switch (this.props.info.titulo) {
      case "Tecnologías de Internet":
        referenciacoment = "comentarios/tecnologias";
        break;
      case "Procesamiento de imágenes":

        referenciacoment = "comentarios/proImage";
        break;
      case "Diseño":

        referenciacoment = "comentarios/design";
        break;
      case "Render":

        referenciacoment = "comentarios/render";
        break;
      case "Multimedia Educativa":

        referenciacoment = "comentarios/multimediaEd";
        break;
      case "Inteligencia Artificial":

        referenciacoment = "comentarios/inteArt";
        break;
      case "Diseño de Interfaces":

        referenciacoment = "comentarios/designInter";
        break;
      case "Animación 3D":

        referenciacoment = "comentarios/animacion3d";
        break;
      case "Integración Multimedia":

        referenciacoment = "comentarios/integracionMul";
        break;
      case "Procesamiento de señales":

        referenciacoment = "comentarios/proSignal";
        break;
      case "Guiones":

        referenciacoment = "comentarios/guiones";
        break;
      case "Modelado 3D":

        referenciacoment = "comentarios/modelado3d";
        break;
    }
    firebasedb.child(`${referenciacoment}/${this.state.id}`).set(
      this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalEditar: false });
    this.state.form.comentario = this.stateinit.comentario;
  }

  peticionDelete = () => {

    var referenciacoment = null;
    switch (this.props.info.titulo) {
      case "Tecnologías de Internet":

        referenciacoment = "comentarios/tecnologias";
        break;
      case "Procesamiento de imágenes":

        referenciacoment = "comentarios/proImage";
        break;
      case "Diseño":

        referenciacoment = "comentarios/design";
        break;
      case "Render":

        referenciacoment = "comentarios/render";
        break;
      case "Multimedia Educativa":

        referenciacoment = "comentarios/multimediaEd";
        break;
      case "Inteligencia Artificial":

        referenciacoment = "comentarios/inteArt";
        break;
      case "Diseño de Interfaces":

        referenciacoment = "comentarios/designInter";
        break;
      case "Animación 3D":

        referenciacoment = "comentarios/animacion3d";
        break;
      case "Integración Multimedia":

        referenciacoment = "comentarios/integracionMul";
        break;
      case "Procesamiento de señales":

        referenciacoment = "comentarios/proSignal";
        break;
      case "Guiones":

        referenciacoment = "comentarios/guiones";
        break;
      case "Modelado 3D":

        referenciacoment = "comentarios/modelado3d";
        break;
    }
    if (window.confirm(`Estás seguro que deseas eliminar el comentario ${this.state.form.comentario}?`)) {
      firebasedb.child(`${referenciacoment}/${this.state.id}`).remove(
        error => {
          if (error) console.log(error)
        });
    }

    console.log("id   " + this.state.id);


  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form);
  }


  seleccionarCanal = async (comentario, id, caso) => {

    await this.setState({ form: comentario, id: id });

    (caso === "Editar") ? this.setState({ modalEditarcoment: true }) :
      this.peticionDelete()

  }

  handleChangeimg = e => {
    this.setState({
      formpop: {
        ...this.state.formpop,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.formpop);
  }







  componentDidMount() {
    this.peticionadmins();
    this.peticionGet();
    this.peticionGetimg();
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
    //Conectar con la base de datos de comentarios
    firebase
      .database()
      .ref(referenciacoment)
      .on("child_added", (snapshot) => {
        this.setState({
          coments: this.state.coments.concat(snapshot.val()),
        });
      });

    //Conectar con la base de datos de admins
    const dbRef = firebase.database().ref();
    dbRef
      .child("Admins")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("admins" + this.state.Admos);
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
    console.log("Imagen seleccionada" + this.state.selectedImg);

  }

  handleChangeTextA(event) {
    this.setState({
      comenttext: event.target.value,
    });
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
    this.state.comenttext = this.stateinit.comenttext;
  }

  handleClose() {
    this.setState({
      setShow: false,
    });
  }

  Asig() {
    const imageClick = (url, descrip, correo) => {
      console.log("Click en la imagen:  " + url);
      this.setState({
        selectedImg: url,
        setShow: true,
        selectedDescrip: descrip,
        selectedEmail: correo,
      });
      console.log("setShow: " + this.state.setShow);
    };
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

                {/* obtener id para las fotos */}
                {Object.keys(this.state.data2).map(i => {
                  console.log("i" + i);
                  return <div key={i}>
                    <div>
                      <div className="img-wrap">
                        <img
                          src={this.state.data2[i].image}
                          onClick={() =>
                            imageClick(
                              this.state.data2[i].image,
                              this.state.data2[i].descripcion,
                              this.state.data2[i].email

                            )
                          }
                        />
                        <br />
                        <span>{this.state.data2[i].email}</span>
                        <br />
                        <p>{this.state.data2[i].descripcion}</p>
                      </div>
                      {this.state.data2[i].email === this.state.user.email
                     &&
                    <div>
                      <Button
                              style={{
                                color: "#E1FF00",
                                backgroundColor: "transparent",
                                border: "3px solid #E1FF00",
                                borderRadius: "15px",
                                fontSize: "15px",
                              }}
                              onClick={() => this.seleccionarImg(this.state.data2[i], i, 'Editar')}
                            >
                              <FaPencilAlt />
                            </Button>
                            <Button
                              style={{
                                color: "#FF0000",
                                backgroundColor: "transparent",
                                border: "3px solid #FF0000",
                                borderRadius: "15px",
                                fontSize: "15px",
                              }}
                              onClick={() => this.seleccionarImg(this.state.data2[i], i, 'Eliminar')}
                            >
                              <FaTrashAlt />

                            </Button>
                     </div>
                  }

                    </div>

                    {/* usuario administrador */}
                    {Object.keys(this.state.Admos).map(x => {

                      return <div key={x}>


                        {console.log(this.state.Admos[x].email)}

                        {this.state.user.email == this.state.Admos[x].email &&
                          <div>

                            <Button
                              style={{
                                color: "#E1FF00",
                                backgroundColor: "transparent",
                                border: "3px solid #E1FF00",
                                borderRadius: "15px",
                                fontSize: "15px",
                              }}
                              onClick={() => this.seleccionarImg(this.state.data2[i], i, 'Editar')}
                            >
                              <FaPencilAlt />
                            </Button>
                            <Button
                              style={{
                                color: "#FF0000",
                                backgroundColor: "transparent",
                                border: "3px solid #FF0000",
                                borderRadius: "15px",
                                fontSize: "15px",
                              }}
                              onClick={() => this.seleccionarImg(this.state.data2[i], i, 'Eliminar')}
                            >
                              <FaTrashAlt />

                            </Button>

                          </div>
                        }

                      </div>


                    })}









                  </div>
                }).reverse()}
              </div>
              <Modal show={this.state.modalEditarimg}>

                <div className="form-group">
                  <label>Descripcion: </label>
                  <br />
                  <input type="text" className="form-control" name="descripcion" onChange={this.handleChangeimg} value={this.state.formpop.descripcion} />
                  <br />
                </div>


                <button className="btn btn-primary" onClick={() => this.peticionPutimg()} >Editar</button>
                <button className="btn btn-danger" onClick={() => this.setState({ modalEditarimg: false })}>Cerrar</button>
              </Modal>

              <div className="popUp">
                <Modal
                  show={this.state.setShow}
                  onHide={this.handleClose}
                  animation={false}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <div className="imgPop">
                    <img
                      src={this.state.selectedImg}
                      alt="image select Gallery"
                    />
                  </div>
                  <div onClick={this.handleClose} className="btnExit">
                    <p>X</p>
                  </div>
                  <div className="info">
                    <h4>{this.state.selectedEmail}</h4>
                    <p>{this.state.selectedDescrip}</p>

                  </div>
                </Modal>
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
            <Row className="justify-content-between py-5">

              {/* Obtenemos el id y pintamos los comentarios */}
              {Object.keys(this.state.data).map(i => {


                console.log("i" + i);
                return <tr key={i}>
                  <h4 className="NameUser">{this.state.data[i].correo}</h4>

                  <p className="comentario">{this.state.data[i].comentario}</p>
                  {/* usuario  registrado no admin */}
                  {this.state.data[i].correo === this.state.user.email
                  &&
                    <div>
                      <Button
                            style={{
                              color: "#E1FF00",
                              backgroundColor: "transparent",
                              border: "3px solid #E1FF00",
                              borderRadius: "15px",
                              fontSize: "15px",
                            }}
                            onClick={() => this.seleccionarCanal(this.state.data[i], i, 'Editar')}
                          >
                            <FaPencilAlt />
                          </Button>

                          <Button
                            style={{
                              color: "#FF0000",
                              backgroundColor: "transparent",
                              border: "3px solid #FF0000",
                              borderRadius: "15px",
                              fontSize: "15px",
                            }}
                            onClick={() => this.seleccionarCanal(this.state.data[i], i, 'Eliminar')}
                          >
                            <FaTrashAlt />

                          </Button>
                     </div>
                  }

                  




                  {/* usuario administrador */}
                  {Object.keys(this.state.Admos).map(x => {

                    return <div key={x}>

                      {this.state.user.email == this.state.Admos[x].email &&
                        <div>

                          <Button
                            style={{
                              color: "#E1FF00",
                              backgroundColor: "transparent",
                              border: "3px solid #E1FF00",
                              borderRadius: "15px",
                              fontSize: "15px",
                            }}
                            onClick={() => this.seleccionarCanal(this.state.data[i], i, 'Editar')}
                          >
                            <FaPencilAlt />
                          </Button>

                          <Button
                            style={{
                              color: "#FF0000",
                              backgroundColor: "transparent",
                              border: "3px solid #FF0000",
                              borderRadius: "15px",
                              fontSize: "15px",
                            }}
                            onClick={() => this.seleccionarCanal(this.state.data[i], i, 'Eliminar')}
                          >
                            <FaTrashAlt />

                          </Button>

                        </div>
                      }

                    </div>


                  })}




                </tr>


              })}
              <Modal show={this.state.modalEditarcoment}>

                <div className="form-group">
                  <label>Editar comentario: </label>
                  <br />
                  <input type="text" className="form-control" name="comentario" onChange={this.handleChange} value={this.state.form.comentario} />
                  <br />
                </div>


                <button className="btn btn-primary" onClick={() => this.peticionPut()}>Editar</button>
                <button className="btn btn-danger" onClick={() => this.setState({ modalEditarcoment: false })}>Cerrar</button>
              </Modal>


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
                  value={this.state.comenttext}
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


      // Cuando el usuario no inicia sesion
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
                    <div>
                      <div className="img-wrap">
                        <img
                          src={picture.image}
                          onClick={() =>
                            imageClick(
                              picture.image,
                              picture.descripcion,
                              picture.email
                            )
                          }
                        />
                        <br />
                        <span>{picture.email}</span>
                        <br />
                        <p>{picture.descripcion}</p>
                      </div>
                    </div>
                  ))
                  .reverse()}
              </div>
              <div className="popUp">
                <Modal
                  show={this.state.setShow}
                  onHide={this.handleClose}
                  animation={false}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <div className="imgPop">
                    <img
                      src={this.state.selectedImg}
                      alt="image select Gallery"
                    />
                  </div>
                  <div onClick={this.handleClose} className="btnExit">
                    <p>X</p>
                  </div>
                  <div className="info">
                    <h4>{this.state.selectedEmail}</h4>
                    <p>{this.state.selectedDescrip}</p>
                  </div>
                </Modal>
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


//para volver a esta version
