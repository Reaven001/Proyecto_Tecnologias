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
import Admins from "./admins"

function App() {


  const texasig1 = (
    <div>
      <p>
        La clase de tecnologías de internet proporciona a los estudiantes conceptos y técnicas para la elaboración de diseño web, así como también estrategias para el trabajo en equipo y desarrollo de software colaborativo, pensando en entregar un producto final detallado que cumpla con los requerimientos dados por un cliente, implementando técnicas de producción, diseño, arte digital y programación web.
      </p>
    </div>
  );

  const texasig2 = (
    <div>
      <p>
       La asignatura de procesamiento de imágenes comprende algunos de los temas de procesamiento de señales pero ahora orientados a señales bidimensionales. El estudiante aprenderá conceptos sobre cómo tratar y transformar imágenes, desde agregar filtros en el dominio del espacio o la frecuencia, comprender cómo funcionan algoritmos de compresión de imágenes como jpg, png, JPEG2000 entre otros.
      </p>
    </div>
  );

  const texasig3 = (
    <div>
      <p>
       La asignatura de diseño se divide en tres etapas, en esta clase el estudiante obtiene los conocimientos para ser capaz de elaborar productos, estéticos, funcionales y útiles. Se realizan proyectos los cuales capacitan al estudiante para poder diseñar un producto desde cero, teniendo en cuenta todas las etapas requeridas para el desarrollo del mismo, desde el planteamiento de una idea hasta el desarrollo, producción, estrategia de medios y distribución del mismo.
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
        El diseño de interfaces multimedia es la técnica que hace posible usar productos multimedia mediante el uso de estrategias creativas, compositivas y narrativas en el diseño de productos interactivos. Mediante la combinación de técnicas específicas y conceptos de diseño gráfico, navegación, usabilidad e Ingeniería de software, el profesional de la multimedia puede elaborar productos efectivos, de impacto y que cumplan con los objetivos finales asignados al diseño de un producto digital. La asignatura busca entonces dotar a los estudiantes con los fundamentos teóricos y técnicas sobre el diseño de interfaces gráficas de usuario utilizando recursos tecnológicos para composición gráfica y programación, aplicando conceptos adquiridos en otras cátedras, tales como: elaboración de guiones, animación 2D, laboratorio de video, laboratorio de Sonido, talleres de animación, integración Multimedia, entre otras. 
      </p>
    </div>
  );

  const texasig8 = (
    <div>
      <p>
       La asignatura de animación 	3D y dinámicas se centra en aportar al estudiante los conceptos y herramientas para realizar animaciones elaboradas bien sea a personajes, objetos y partículas así como también emplear conceptos de simulación para realizar interacciones de partículas en una escena tridimensional. Al final del curso los estudiantes presentan un cortometraje 3D en el cual se incluyan técnicas de narración visual, principios de animación, storytellling, dinámica de partículas, texturizado de objetos 3D y producción audiovisual.
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
        El procesamiento de señales se refiere al tratamiento e interpretación de una señal, en esta asignatura se abordan conceptos para procesar señales unidimensionales, desde el muestreo, compresión, codificación y manipulación de una señal.
      </p>
    </div>
  );

  const texasig11 = (
    <div>
      <p>
        La asignatura de guiones capacitará al estudiante con conceptos y técnicas de narrativa, desarrollo de personajes, creación de un escenario literario y estructuras en un relato, así como también se aprenderán conocimientos y procesos necesarios para la producción de contenidos audiovisuales.
      </p>
    </div>
  );

  const texasig12 = (
    <div>
      <p>
        El modelado 3D es el proceso de desarrollo de una representación de un objeto tridimensional en un entorno de desarrollo digital, en la asignatura de Modelado 3D se obtienen los conocimientos necesarios para realizar un proceso de trabajo adecuado en esta área empleando técnicas y teniendo en cuenta los conceptos para realizar un modelado apropiadamente que sea optimizado y adecuado para exportar a otros software de modelado, animación  e interacción multimedia.
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
    titulo: "Tecnologías de Internet",
    descripcion: texasig1,
    profesores: "Karen Linares Luque, Carlos Aranzazu López.",
    modelasig: "html",
  };
  const asig2 = {
    titulo: "Procesamiento de imágenes",
    descripcion: texasig2,
    profesores: "Wilman Helioth Sanchez, Alexander Cerón Correa, Hilda Marcela Iregui, Ricardo Enrique Gutiérrez.",
    modelasig: "imagenes",
  };
  const asig3 = {
    titulo: "Diseño",
    descripcion: texasig3,
    profesores: "Germán Andrés Garnica.",
    modelasig: "diseño",
  };
  const asig4 = {
    titulo: "Render",
    descripcion: texasig4,
    profesores: "Karen Linares Luque.",
    modelasig: "render",
  };
  const asig5 = {
    titulo: "Multimedia Educativa",
    descripcion: texasig5,
    profesores: "Jorge Augusto Jaramillo.",
    modelasig: "libro",
  };
  const asig6 = {
    titulo: "Inteligencia Artificial",
    descripcion: texasig6,
    profesores: "Wilman Helioth Sanchez, Ricardo Enrique Gutiérrez.",
    modelasig: "cerebro",
  };
  const asig7 = {
    titulo: "Diseño de Interfaces",
    descripcion: texasig7,
    profesores: "Carlos Aranzazu López.",
    modelasig: "inter",
  };
  const asig8 = {
    titulo: "Animación 3D",
    descripcion: texasig8,
    profesores: "Carlos Alberto Rocha.",
    modelasig: "tetera",
  };
  const asig9 = {
    titulo: "Integración Multimedia",
    descripcion: texasig9,
    profesores: "Carlos Aranzazu López.",
    modelasig: "integra",
  };
  const asig10 = {
    titulo: "Procesamiento de señales",
    descripcion: texasig10,
    profesores: "Alexander Cerón Correa, Ricardo Enrique Gutiérrez, Hilda Marcela Iregui.",
    modelasig: "señales",
  };
  const asig11 = {
    titulo: "Guiones",
    descripcion: texasig11,
    profesores: "María Martha Gama, Adriana Martínez Herrán.",
    modelasig: "guiones",
  };
  const asig12 = {
    titulo: "Modelado 3D",
    descripcion: texasig12,
    profesores: "Carlos Alberto Rocha.",
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
          <Route path="/Admins" component={Admins} />
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
