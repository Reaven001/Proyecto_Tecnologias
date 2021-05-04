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

function App() {
  const area1 = {
    titulo: "Transformación Digital",
    mat1: "Tecnologias de internet",
    mat2: "Multimedia educativa",
    mat3: "Materia X1",
  };

  const area2 = {
    titulo: "Procesamiento de análisis de información multimedia",
    mat1: "Procesamiento de imagenes",
    mat2: "Inteligencia artificial",
    mat3: "Materia X2",
  };

  const area3 = {
    titulo: "Sistemas Interactivos",
    mat1: "Diseño",
    mat2: "Diseño de interfaces",
    mat3: "Materia X3",
  };
  const area4 = {
    titulo: "Producción Multimedia",
    mat1: "Render",
    mat2: "Animación 3D",
    mat3: "Materia X4",
  };
  const asig1 = {
    titulo: "Tecnologias de Internet",
    descripcion: "Esta sera la descripcion de Tecnologias de Internet",
    profesores: "Karen Linares, .... etc etc",
  };
  const asig2 = {
    titulo: "Procesamiento de imagenes",
    descripcion: "Esta sera la descripcion de Procesamiento de imagenes",
    profesores: "Marcela Iregui, .... etc etc",
  };
  const asig3 = {
    titulo: "Diseño",
    descripcion: "Esta sera la descripcion de Diseño",
    profesores: "German Garnica, .... etc etc",
  };
  const asig4 = {
    titulo: "Render",
    descripcion: "Esta sera la descripcion de Render",
    profesores: "Karen Linares, .... etc etc",
  };
  const asig5 = {
    titulo: "Multimedia Educativa",
    descripcion: "Esta sera la descripcion de Multimedia Educativa",
    profesores: "Jorge Jaramillo, .... etc etc",
  };
  const asig6 = {
    titulo: "Inteligencia Artificial",
    descripcion: "Esta sera la descripcion de Inteligencia Artificial",
    profesores: "Helioth Sanchez, .... etc etc",
  };
  const asig7 = {
    titulo: "Diseño de Interfaces",
    descripcion: "Esta sera la descripcion de Diseño de Interfaces",
    profesores: "Karen Linares, .... etc etc",
  };
  const asig8 = {
    titulo: "Animación 3D",
    descripcion: "Esta sera la descripcion de Animación 3D",
    profesores: "Carlos Rocha, .... etc etc",
  };
  const asig9 = {
    titulo: "Materia X 1",
    descripcion: "Esta sera la descripcion de Materia X1",
    profesores: "Profesor X, .... etc etc",
  };
  const asig10 = {
    titulo: "Materia X 2",
    descripcion: "Esta sera la descripcion de Materia X2",
    profesores: "Profesor X, .... etc etc",
  };
  const asig11 = {
    titulo: "Materia X 3",
    descripcion: "Esta sera la descripcion de Materia X3",
    profesores: "Profesor X, .... etc etc",
  };
  const asig12 = {
    titulo: "Materia X 4",
    descripcion: "Esta sera la descripcion de Materia X4",
    profesores: "Profesor X, .... etc etc",
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/Inicio"} component={Inicio}></Route>
          <Route path={"/Areas"} component={Areas}></Route>
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
          <Route path="/Materiax1">
            <Asignatura info={asig9} />
          </Route>
          <Route path="/Materiax2">
            <Asignatura info={asig10} />
          </Route>
          <Route path="/Materiax3">
            <Asignatura info={asig11} />
          </Route>
          <Route path="/Materiax4">
            <Asignatura info={asig12} />
          </Route>
        </Switch>
      </div>
      <Menu />
    </Router>
  );
}

//hola
export default App;
