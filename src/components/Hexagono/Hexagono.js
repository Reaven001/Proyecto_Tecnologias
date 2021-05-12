import React, { Fragment, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import "../../css/hexagon.css";
import Camara from "../modelos/camara_01";
import Audios from "../modelos/Area_prodmultimedia_01";

const Hexagoncard = (props) => {
  return (
    <Fragment>
      <div className="tarjeta">
        <div className="hexagon">
          <div className="hexagon-shape">
            <img src={props.logo} />
            <div className="Home_">
              <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 15]}}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.4} />
                  <spotLight
                    intensity={0.5}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                  />
                  <Environment preset={props.envio}></Environment>
                  <Audios></Audios>
                </Suspense>
                <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}></OrbitControls>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hexagoncard;
