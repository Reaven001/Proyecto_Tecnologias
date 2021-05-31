import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Image from "react-bootstrap/Image";
import { firebasedb } from "../index";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../css/menu.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      useradmin: true,
      Admos: [],
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  peticionadmins = () => {
    firebasedb.child("Administra").on("value", (email) => {
      if (email.val() !== null) {
        this.setState({ ...this.state.Admos, Admos: email.val() });
      } else {
        this.setState({ Admos: [] });
      }
    });
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user });
    });
    this.peticionadmins();
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then((result) => console.log(`${result.user.email} ha cerrado sesión`))
      .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderUserLogin() {
    if (this.state.user) {
      //Si el usuario esta logueado:
      return (
        <React.Fragment>
          <input type="checkbox" className="checkbox" id="check" />
          <label className="menu" htmlFor="check">
            <div className="ray">|||</div>
          </label>
          <div className="left-panel">
            <ul>
              <div style={{ textAlign: "center" }}>
                <p>{this.state.user.email}</p>
                <Image
                  src={this.state.user.photoURL}
                  alt={this.state.user.displayName}
                  style={{
                    paddingBottom: "10px",
                    width: "150px",
                    height: "150px",
                  }}
                  roundedCircle
                />
              </div>
              {Object.keys(this.state.Admos).map((x) => {
                return (
                  <div key={x}>
                    {this.state.user.email == this.state.Admos[x].email && (
                      <div>
                        <li className="list">
                          <Link
                            to="/Admins"
                            style={{ textDecoration: "none", color: "#e1ff00" }}
                          >
                            Admins
                          </Link>
                        </li>
                      </div>
                    )}
                  </div>
                );
              })}
              <li className="list">
                <Link
                  to="/Inicio"
                  style={{ textDecoration: "none", color: "#e1ff00" }}
                >
                  Inicio
                </Link>
              </li>

              <li className="list">
                <Accordion>
                  <Card
                    style={{
                      background: "#0d6eff",
                      border: "0px",
                    }}
                  >
                    <Card.Header
                      style={{
                        background: "#0d6eff",
                      }}
                    >
                      <Accordion.Toggle
                        eventKey="0"
                        style={{
                          border: "0px",
                          background: "#0d6eff",
                          color: "#e1ff00",
                        }}
                      >
                        Áreas
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <ul>
                          <li className="list">
                            <Link
                              to="/TransformacionDigital"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Transformación Digital
                            </Link>
                          </li>
                          <li className="list">
                            <Link
                              to="/Procesamientodeanalisisdeinformacionmultimedia"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Procesamiento de análisis de información
                              multimedia
                            </Link>
                          </li>

                          <li className="list">
                            <Link
                              to="/Sistemasinteractivos"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Sistemas Interactivos
                            </Link>
                          </li>
                          <li className="list">
                            <Link
                              to="/Produccionmultimedia"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Producción Multimedia
                            </Link>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </li>

              <li className="list">
                <Link
                  to="/SubirArchivos"
                  style={{ textDecoration: "none", color: "#e1ff00" }}
                >
                  Subir Archivos
                </Link>
              </li>
              <li className="list" onClick={this.handleLogout}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#e1ff00" }}
                >
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </React.Fragment>
      );
    } else {
      //Si no esta logueado:
      return (
        <React.Fragment>
          <input type="checkbox" className="checkbox" id="check" />
          <label className="menu" htmlFor="check">
            <div className="ray">|||</div>
          </label>
          <div className="left-panel">
            <ul>
              <li className="list">
                <Link
                  to="/Inicio"
                  style={{ textDecoration: "none", color: "#e1ff00" }}
                >
                  Inicio
                </Link>
              </li>
              <li className="list">
                <Accordion>
                  <Card
                    style={{
                      background: "#0d6eff",
                      border: "0px",
                    }}
                  >
                    <Card.Header
                      style={{
                        background: "#0d6eff",
                      }}
                    >
                      <Accordion.Toggle
                        eventKey="0"
                        style={{
                          border: "0px",
                          background: "#0d6eff",
                          color: "#e1ff00",
                        }}
                      >
                        Áreas
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <ul>
                          <li className="list">
                            <Link
                              to="/TransformacionDigital"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Transformación Digital
                            </Link>
                          </li>
                          <li className="list">
                            <Link
                              to="/Procesamientodeanalisisdeinformacionmultimedia"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Procesamiento de análisis de información
                              multimedia
                            </Link>
                          </li>

                          <li className="list">
                            <Link
                              to="/Sistemasinteractivos"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Sistemas Interactivos
                            </Link>
                          </li>
                          <li className="list">
                            <Link
                              to="/Produccionmultimedia"
                              style={{
                                textDecoration: "none",
                                color: "#e1ff00",
                              }}
                            >
                              Producción Multimedia
                            </Link>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </li>

              <li className="list">
                <Link
                  to="/SubirArchivos"
                  style={{ textDecoration: "none", color: "#e1ff00" }}
                >
                  Subir Archivos
                </Link>
              </li>
              <li className="list">
                <Link
                  to="/IniciarSesion"
                  style={{ textDecoration: "none", color: "#e1ff00" }}
                >
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return <div>{(this, this.renderUserLogin())}</div>;
  }
}

export default Nav;
