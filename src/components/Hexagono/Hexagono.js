import React, { Fragment, Suspense } from 'react'
import { Canvas } from 'react-three-fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import '/tecfinal/src/css/hexagon.css'
import Camara from '../modelos/camara_01';
const Hexagoncard = (props) => {



    return (
        <Fragment>
            <div className="tarjeta">
                <div className="hexagon">
                    <div className="hexagon-shape">
                        <img src={props.logo} />
                        <div className="Home_">
                            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 15], fov: 50 }}>

                                <Suspense fallback={null}>
                                    <ambientLight intensity={0.4} />
                                    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                                    <Environment preset={props.envio}></Environment>
                                    <Camara></Camara>
                                </Suspense>
                                <OrbitControls></OrbitControls>
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Hexagoncard