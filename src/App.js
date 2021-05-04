import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home.js";
import Areas from "./components/Areas.js";
import Docentes from "./components/Docentes.js";
import AreaSpe from "./AreaSpe.js";
import Inicio from "./Inicio.js";
import Menu from "./components/Menu.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/Inicio"} component={Inicio}></Route>
          <Route path={"/Areas"} component={Areas}></Route>
          <Route path={"/Docentes"} component={Docentes}></Route>
          <Route path={"/TransformacionDigital"} component={AreaSpe}></Route>
        </Switch>
      </div>
      <Menu />
    </Router>
  );
}

//hola
export default App;
