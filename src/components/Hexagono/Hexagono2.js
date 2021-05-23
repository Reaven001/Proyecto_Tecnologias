import React, { Fragment, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import "../../css/hexagon2.css";
import Camara from "../modelos/camara_01";
import Audios from "../modelos/Area_prodmultimedia_01";
import Tetera from "../modelos/Asig_modelado3d_01";
import Bombillo from "../modelos/Area_interactive_01";
import Lupa from "../modelos/Area_procdeanalisis_01";
import Digital from "../modelos/Area_transdigital_01";
import Libro from "../modelos/Asig_muleducativa_01";
import Html5 from "../modelos/Asig_tecinternet_01";
import Cerebro from "../modelos/Asig_inteligencia_01";
import Imagenes from "../modelos/Asig_imagenes_01";
import Diseño from "../modelos/O_01";
import Interfa from "../modelos/Asig_intefaz_01";
import Render from "../modelos/Asig_render_01";
import Integra from "../modelos/Asig_integra";
import Señales from "../modelos/Ales";
import Guion from "../modelos/Asig_guiones";
import Modelado from "../modelos/Asig_model3d";
import Mul from "../modelos/Mul_01";



function Modelomos(props) {
  const isLoggedIn = props.medio;
  if (isLoggedIn == "audios") {
    return <Audios />;
  }
  if (isLoggedIn == "camara") {
    return <Camara />;
  }
 
  if (isLoggedIn == "bombillo") {
    return <Bombillo />;
  }
  if (isLoggedIn == "lupa") {
    return <Lupa />;
  }
  if (isLoggedIn == "digital") {
    return <Digital />;
  }

  // asignaturas trasnformacion digital
  if (isLoggedIn == "libro") {
    return <Libro />;
  }
  if (isLoggedIn == "html") {
    return <Html5 />;
  }
  if (isLoggedIn == "integra") {
    return <Integra />;
  }


  // asignaturas procesamiento analisis multimedia
  if (isLoggedIn == "cerebro") {
    return <Cerebro />;
  }
  if (isLoggedIn == "imagenes") {
    return <Imagenes />;
  }
  if (isLoggedIn == "señales") {
    return <Señales />;
  }

  // asignaturas sistemas interactivos
  if (isLoggedIn == "diseño") {
    return <Diseño />;
  }
  if (isLoggedIn == "inter") {
    return <Interfa />;
  }
  if (isLoggedIn == "guiones") {
    return <Guion />;
  }
  

  //Produccion multimedia
  if (isLoggedIn == "render") {
    return <Render />;
  }
  if (isLoggedIn == "tetera") {
    return <Tetera />;
  }
  if (isLoggedIn == "modelado") {
    return <Modelado />;
  }

  if (isLoggedIn == "mul") {
    return <Mul />;
  }
}

const Hexagoncard = (props) => {
 
 console.log(props.namemodel);
  return (
    <Fragment>
      <div className="tarjeta">
        <div className="hexagon_">
          <div className="hexagon-shape_">
            <img src={props.logo} alt="logo" />
            <div className="Home_">
              <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 75, position: [-10, 10, 10] }}
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

                  
                  <Modelomos medio={props.namemodel}/>

                </Suspense>
                {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}></OrbitControls> */}
                <OrbitControls  minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/3 } enableZoom={false} enablePan={false}></OrbitControls>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hexagoncard;
