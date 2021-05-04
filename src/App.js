import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    mat3: "Materia X",
  };

  const area2 = {
    titulo: "Procesamiento de análisis de información multimedia",
    mat1: "Procesamiento de imagenes",
    mat2: "Inteligencia artificial ",
    mat3: "Materia X",
  };

  const area3 = {
    titulo: "Sistemas Interactivos",
    mat1: "Diseño",
    mat2: "Diseño de interfaces",
    mat3: "Materia X",
  };
  const area4 = {
    titulo: "Producción Multimedia",
    mat1: "Render",
    mat2: "Animación 3d",
    mat3: "Materia X",
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/Inicio"} component={Inicio}></Route>
          <Route path={"/Areas"} component={Areas}></Route>
          <Route path={"/Asignatura"} component={Asignatura}></Route>
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
        </Switch>
      </div>
      <Menu />
    </Router>
  );
}

//hola
export default App;
