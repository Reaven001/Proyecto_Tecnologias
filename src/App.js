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


  const texasig1 = (
    <div>
      <p>

      </p>
    </div>
  );

  const texasig2 = (
    <div>
      <p>

      </p>
    </div>
  );

  const texasig3 = (
    <div>
      <p>

      </p>
    </div>
  );

  const texasig4 = (
    <div>
      <p>
      En la clase de Render se busca crear imágenes digitales a partir de escenarios 3D realizados en Maya, con apariencia realistas desde cualquier perspectiva, para lograr estas imágenes se necesita realizar diferentes procesos de técnicas de distribución, texturizado de materiales, iluminación y efectos ópticos que se asemeje a un espacio específico real. Al finalizar el curso los estudiantes deben estar en la capacidad de realizar todo el proceso creativo, a partir de una idea, pasar a la composición y diseño, después texturizar e iluminar para finalmente, producir una imagen o imágenes en secuencia. 
      </p>
    </div>
  );

  const texasig5 = (
    <div>
      <p>
      La electiva en “Multimedia Educativa” promueve el desarrollo de competencias necesarias para proponer, diseñar e implementar productos interactivos que medien procesos de aprendizaje, aplicando en forma efectiva tecnologías digitales en combinación con las teorías educativas apropiadas, logrando así una manera más entretenida de cómo aprende el ser humano. Como parte de las tecnologías multimedia que el estudiante puede aplicar, están: la realidad aumentada, entornos virtuales inmersivos, objetos virtuales de aprendizaje, aulas virtuales o cursos e-learning, videojuegos, libros electrónicos (ebooks), entre otros. Con la aplicación de estos entornos educativos interactivos, se pretende que el estudiante abandone su actitud pasiva frente al aprendizaje, y adopte un rol activo y entretenido en su acceso al conocimiento, generando aprendizajes significativos.
      </p>
    </div>
  );

  const texasig6 = (
    <div>
      <p>
      La asignatura de Inteligencia Artificial se centra en aportar a la formación fundamental de futuros ingenieros multimedia en la experiencia teórica y práctica con la programación de agentes inteligentes, como algoritmos de búsqueda, juegos y problemas lógicos. El objetivo es adquirir conocimientos y habilidades sobre métodos de formalización de conocimiento, razonamiento, técnicas de aprendizaje automático y aplicaciones prácticas de la IA. 
      </p>
    </div>
  );

  const texasig7 = (
    <div>
      <p>
      En la clase de Render se busca crear imágenes digitales a partir de escenarios 3D realizados en Maya, con apariencia realistas desde cualquier perspectiva, para lograr estas imágenes se necesita realizar diferentes procesos de técnicas de distribución, texturizado de materiales, iluminación y efectos ópticos que se asemeje a un espacio específico real. Al finalizar el curso los estudiantes deben estar en la capacidad de realizar todo el proceso creativo, a partir de una idea, pasar a la composición y diseño, después texturizar e iluminar para finalmente, producir una imagen o imágenes en secuencia. 
      </p>
    </div>
  );

  const texasig8 = (
    <div>
      <p>

      </p>
    </div>
  );

  const texasig9 = (
    <div>
      <p>
      La clase de Integración Multimedia, proporciona a los estudiantes diferentes conceptos y herramientas para la creación de productos innovadores en el mercado, pensando en el usuario final que recibirá la marca, estrategias y diseño. Los estudiantes deben realizar un proyecto multimedia que solucione un problema específico en los usuarios, implementando el diseño, desarrollo, producción, estrategia de medios y distribución del mismo.
      </p>
    </div>
  );

  const texasig10 = (
    <div>
      <p>

      </p>
    </div>
  );

  const texasig11 = (
    <div>
      <p>

      </p>
    </div>
  );

  const texasig12 = (
    <div>
      <p>

      </p>
    </div>
  );

  

  const area1 = {
    titulo: "Transformación Digital",
    mat1: "Tecnologias de internet",
    mat2: "Multimedia educativa",
    mat3: "Integración Multimedia",
    modelasig1: "html",
    modelasig2: "libro",
    modelasig3: "html",
  };

  const area2 = {
    titulo: "Procesamiento de análisis de información multimedia",
    mat1: "Procesamiento de imagenes",
    mat2: "Inteligencia artificial",
    mat3: "Procesamiento de señales",
    modelasig1: "imagenes",
    modelasig2: "cerebro",
    modelasig3: "imagenes",
  };

  const area3 = {
    titulo: "Sistemas Interactivos",
    mat1: "Diseño",
    mat2: "Diseño de interfaces",
    mat3: "Guiones",
    modelasig1: "diseño",
    modelasig2: "inter",
    modelasig3: "diseño",
  };
  const area4 = {
    titulo: "Producción Multimedia",
    mat1: "Render",
    mat2: "Animación 3D",
    mat3: "Modelado 3D",
    modelasig1: "render",
    modelasig2: "tetera",
    modelasig3: "tetera",
  };
  const asig1 = {
    titulo: "Tecnologias de Internet",
    descripcion: texasig1,
    profesores: "Karen Linares, .... etc etc",
    modelasig: "html",
  };
  const asig2 = {
    titulo: "Procesamiento de imagenes",
    descripcion: texasig2,
    profesores: "Marcela Iregui, .... etc etc",
    modelasig: "imagenes",
  };
  const asig3 = {
    titulo: "Diseño",
    descripcion: texasig3,
    profesores: "German Garnica, .... etc etc",
    modelasig: "diseño",
  };
  const asig4 = {
    titulo: "Render",
    descripcion: texasig4,
    profesores: "Karen Linares, .... etc etc",
    modelasig: "render",
  };
  const asig5 = {
    titulo: "Multimedia Educativa",
    descripcion: texasig5,
    profesores: "Jorge Jaramillo, .... etc etc",
    modelasig: "libro",
  };
  const asig6 = {
    titulo: "Inteligencia Artificial",
    descripcion: texasig6,
    profesores: "Helioth Sanchez, .... etc etc",
    modelasig: "cerebro",
  };
  const asig7 = {
    titulo: "Diseño de Interfaces",
    descripcion: texasig7,
    profesores: "Karen Linares, .... etc etc",
    modelasig: "inter",
  };
  const asig8 = {
    titulo: "Animación 3D",
    descripcion: texasig8,
    profesores: "Carlos Rocha, .... etc etc",
    modelasig: "tetera",
  };
  const asig9 = {
    titulo: "Integración Multimedia",
    descripcion: texasig9,
    profesores: "Profesor X, .... etc etc",
    modelasig: "tetera",
  };
  const asig10 = {
    titulo: "Procesamiento de señales",
    descripcion: texasig10,
    profesores: "Ricardo, .... etc etc",
    modelasig: "imagenes",
  };
  const asig11 = {
    titulo: "Guiones",
    descripcion: texasig11,
    profesores: "Profesor X, .... etc etc",
    modelasig: "tetera",
  };
  const asig12 = {
    titulo: "Modelado 3D",
    descripcion: texasig12,
    profesores: "Carlos Rocha, .... etc etc",
    modelasig: "tetera",
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
