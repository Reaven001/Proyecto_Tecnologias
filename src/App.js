import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Home from "./Home.js";
import Areas from "./components/Areas.js";
import Docentes from "./components/DocentesxArea/Docentes.js";
import Docentes2 from "./components/DocentesxArea/Docentes2.js";
import Docentes3 from "./components/DocentesxArea/Docentes3.js";
import Docentes4 from "./components/DocentesxArea/Docentes4.js";
import AreaSpe from "./components/Areas Espe/AreaSpe.js";
import Inicio from "./Inicio.js";
import Menu from "./components/Menu.js";
import Asignatura from "./Asignatura.js";
import Login from "./Login.js";
import Upload from "./Upload";
import Register from "./components/Register";

function App() {
  const area1 = {
    titulo: "Transformación Digital",
    mat1: "Tecnologias de internet",
    mat2: "Multimedia educativa",
    mat3: "Integración Multimedia",
    modelasig1: "html",
    modelasig2: "libro",
    modelasig3: "integra",
  };

  const area2 = {
    titulo: "Procesamiento de análisis de información multimedia",
    mat1: "Procesamiento de imagenes",
    mat2: "Inteligencia artificial",
    mat3: "Procesamiento de señales",
    modelasig1: "imagenes",
    modelasig2: "cerebro",
    modelasig3: "señales",
  };

  const area3 = {
    titulo: "Sistemas Interactivos",
    mat1: "Diseño",
    mat2: "Diseño de interfaces",
    mat3: "Guiones",
    modelasig1: "diseño",
    modelasig2: "inter",
    modelasig3: "guiones",
  };
  const area4 = {
    titulo: "Producción Multimedia",
    mat1: "Render",
    mat2: "Animación 3D",
    mat3: "Modelado 3D",
    modelasig1: "render",
    modelasig2: "tetera",
    modelasig3: "modelado",
  };
  const asig1 = {
    titulo: "Tecnologias de Internet",
    descripcion: "Esta sera la descripcion de Tecnologias de Internet",
    profesores: "Karen Linares, .... etc etc",
    modelasig: "html",
  };
  const asig2 = {
    titulo: "Procesamiento de imagenes",
    descripcion: "Esta sera la descripcion de Procesamiento de imagenes",
    profesores: "Marcela Iregui, .... etc etc",
    modelasig: "imagenes",
  };
  const asig3 = {
    titulo: "Diseño",
    descripcion: "Esta sera la descripcion de Diseño",
    profesores: "German Garnica, .... etc etc",
    modelasig: "diseño",
  };
  const asig4 = {
    titulo: "Render",
    descripcion: "Esta sera la descripcion de Render",
    profesores: "Karen Linares, .... etc etc",
    modelasig: "render",
  };
  const asig5 = {
    titulo: "Multimedia Educativa",
    descripcion: "Esta sera la descripcion de Multimedia Educativa",
    profesores: "Jorge Jaramillo, .... etc etc",
    modelasig: "libro",
  };
  const asig6 = {
    titulo: "Inteligencia Artificial",
    descripcion: "Esta sera la descripcion de Inteligencia Artificial",
    profesores: "Helioth Sanchez, .... etc etc",
    modelasig: "cerebro",
  };
  const asig7 = {
    titulo: "Diseño de Interfaces",
    descripcion: "Esta sera la descripcion de Diseño de Interfaces",
    profesores: "Karen Linares, .... etc etc",
    modelasig: "inter",
  };
  const asig8 = {
    titulo: "Animación 3D",
    descripcion: "Esta sera la descripcion de Animación 3D",
    profesores: "Carlos Rocha, .... etc etc",
    modelasig: "tetera",
  };
  const asig9 = {
    titulo: "Integración Multimedia",
    descripcion: "Esta sera la descripcion de Integracion Multimedia",
    profesores: "Profesor X, .... etc etc",
    modelasig: "integra",
  };
  const asig10 = {
    titulo: "Procesamiento de señales",
    descripcion: "Esta sera la descripcion de Procesamiento de señales",
    profesores: "Ricardo, .... etc etc",
    modelasig: "señales",
  };
  const asig11 = {
    titulo: "Guiones",
    descripcion: "Esta sera la descripcion de Guiones",
    profesores: "Profesor X, .... etc etc",
    modelasig: "guiones",
  };
  const asig12 = {
    titulo: "Modelado 3D",
    descripcion: "Esta sera la descripcion de Modelado 3D",
    profesores: "Carlos Rocha, .... etc etc",
    modelasig: "modelado",
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Inicio} exact />
          <Route path="/Inicio" component={Inicio} exact />
          <Route path="/Areas" component={Areas} exact />
          <Route path="/IniciarSesion" component={Login} exact />
          <Route path="/SubirArchivos" component={Upload} />
          <Route path="/Registrarse" component={Register} />
          <Route path="/TransformacionDigital">
            <AreaSpe info={area1} />
          </Route>
          <Route path="/Procesamientodeanalisisdeinformacionmultimedia">
            <AreaSpe info={area2} />
          </Route>
          <Route path="/Sistemasinteractivos">
            <AreaSpe info={area3} />
          </Route>
          <Route path="/Produccionmultimedia">
            <AreaSpe info={area4} />
          </Route>
          <Route path="/DocentesTD">
            <Docentes />
          </Route>
          <Route path="/DocentesAIM">
            <Docentes2 />
          </Route>
          <Route path="/DocentesSI">
            <Docentes3 />
          </Route>
          <Route path="/DocentesPM">
            <Docentes4 />
          </Route>
          <Route path="/TecnologiasdeInternet">
            <Asignatura info={asig1} />
          </Route>
          <Route path="/ProcesamientodeImagenes">
            <Asignatura info={asig2} />
          </Route>
          <Route path="/Diseno">
            <Asignatura info={asig3} />
          </Route>
          <Route path="/Render">
            <Asignatura info={asig4} />
          </Route>
          <Route path="/MultimediaEducativa">
            <Asignatura info={asig5} />
          </Route>
          <Route path="/InteligenciaArtificial">
            <Asignatura info={asig6} />
          </Route>
          <Route path="/DisenodeInterfaces">
            <Asignatura info={asig7} />
          </Route>
          <Route path="/Animacion3D">
            <Asignatura info={asig8} />
          </Route>
          <Route path="/IntegracionMultimedia">
            <Asignatura info={asig9} />
          </Route>
          <Route path="/ProcesamientodeSeñales">
            <Asignatura info={asig10} />
          </Route>
          <Route path="/Guiones">
            <Asignatura info={asig11} />
          </Route>
          <Route path="/Modelado3D">
            <Asignatura info={asig12} />
          </Route>
        </Switch>
      </div>
      <Menu />
    </Router>
  );
}

//hola
//Este cambio para Farias||
export default App;
