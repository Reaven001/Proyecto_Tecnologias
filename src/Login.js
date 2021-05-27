import React from "react";
import firebase from "firebase";
import Inicio from "./Inicio.js";
import "./css/login.css";
import IconGoogle from "./assets/google-mas.png";

import { Link } from "react-router-dom";

import Register from "./components/Register.js";

class Login extends React.Component {
  //Para iniciar sesion ingresando datos:
  userCreate = React.createRef();
  passCreate = React.createRef();
  userName = React.createRef();
  passCount = React.createRef();

  constructor() {
    super();
    this.state = {
      user: null,
    };
    //Este enlace es necesario para hacer que this funcione en el callback
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  login(e) {
    e.preventDefault();
    var misusuario = this.userName.current.value;
    var micontraseña = this.passCount.current.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(misusuario, micontraseña)
      .then((u) => {})
      .catch(function (error) {
        console.log(error);
        alert(
          "Tuvimos problemas para validar los datos, revisa los campos correctamente"
        );
      });
  }

  signup(e) {
    e.preventDefault();
    var miusuario = this.userCreate.current.value;
    var micontraseña = this.passCreate.current.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(miusuario, micontraseña)
      .then((u) => {})
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log(`${result.user.email} ha iniciado sesión`))
      .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then((result) => console.log(`${result.user.email} ha cerrado sesión`))
      .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./scripts/scrLogin.js";
    document.body.appendChild(script);
  }

  renderLoguearse() {
    //Si el usuario esta logueado:
    if (this.state.user) {
      return <Inicio />;
    } else {
      //Si no esta logueado:
      return (
        <div className="Login">
          <div className="container-login" id="container-login">
            <div className="form-container sign-in-container">
              <form className="formLogin">
                <h1 className="titulosLogin">Inicia sesión</h1>
                <div className="social-container">
                  <Link onClick={this.handleAuth}>
                    <img
                      src={IconGoogle}
                      alt="Google"
                      style={{ width: "50px" }}
                    />
                  </Link>
                </div>
                <span className="spanLogin">Introduce tu cuenta</span>
                <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                  <input
                    type="email"
                    placeholder="Correo electronico"
                    name="email"
                    id="exampleInputEmail"
                    ref={this.userName}
                    className="inputLogin"
                  ></input>
                </div>
                <div style={{ paddingBottom: "10px" }}>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    id="exampleInputPassword"
                    ref={this.passCount}
                    className="inputLogin"
                  ></input>
                </div>
                <button type="submit" onClick={this.login} className="btnLogin">
                  Iniciar sesión
                </button>
              </form>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  <h1 className="titulosLogin">¡Hola!</h1>
                  <p className="parrLogin">
                    Para poder compartir con nosotros regístrate con tu
                    información personal
                  </p>
                  <Link to="/Registrarse">
                    <button className="ghost" id="signUp" href="/Registrarse">
                      Regístrate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderLoguearse()}</div>;
  }
}

export default Login;
