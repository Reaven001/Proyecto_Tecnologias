// import ReactDOM from "react-dom";

import "../css/mods.css";
import React, { Fragment, Suspense } from "react";
// import './mods.css';
// import './card.css';
import { Canvas } from "react-three-fiber";
import Titulo from "./modelos/titulo_01";
import { Environment, OrbitControls } from "@react-three/drei";
import Tableta from "./modelos/tableta_01";
import Mando from "./modelos/mando_01";
import Claqueta from "./modelos/claqueta_01";
import Camara from "./modelos/camara_01";

export default class Inicio extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <div className="Nada">
      <p>Hola mundo</p>
    </div> */}
        {/* <div className="tarjeta"> */}
        {/* <div className="hexagon">
          <div className="hexagon-shape"> */}
        {/* <img alt="img1" src="https://i.blogs.es/59915d/valorant/1366_2000.jpeg" /> */}
        <div className="Home_">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 25], fov: 50 }}
          >
            <ambientLight intensity={0.4} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Suspense fallback={null}>
              <Environment preset="city"></Environment>
              <Tableta></Tableta>
              <Titulo></Titulo>
              <Mando></Mando>
              <Claqueta></Claqueta>
              <Camara></Camara>
            </Suspense>
            <OrbitControls></OrbitControls>
          </Canvas>
        </div>

        {/* </div>
        </div> */}
        {/* <div className="materia">

          <h4>Prueba</h4>

        </div> */}

        {/* </div> */}
      </Fragment>
    );
  }
}
