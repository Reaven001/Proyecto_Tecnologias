import React from "react";
import { Link } from "react-router-dom";

import "../css/menu.css";

class Nav extends React.Component {
  render() {
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
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Inicio
              </Link>
            </li>
            <li className="list">
              <Link
                to="/Docentes"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Docentes
              </Link>
            </li>
            <li className="list">
              <Link to="" style={{ textDecoration: "none", color: "#000000" }}>
                Subir Archivos
              </Link>
            </li>
            <li className="list">
              <Link to="" style={{ textDecoration: "none", color: "#000000" }}>
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
