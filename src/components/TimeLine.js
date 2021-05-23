import React from "react";
import ReactDOM from "react-dom";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img2000 from "../assets/Timeline/2000.PNG";
import img2001 from "../assets/Timeline/2001.png";
import img2002 from "../assets/Timeline/2002.PNG";
import img2005 from "../assets/Timeline/2005.PNG";
import img2006 from "../assets/Timeline/2006.jpg";
import img2009 from "../assets/Timeline/2009.jpg";
import img2011 from "../assets/Timeline/2011.PNG";
import img2012 from "../assets/Timeline/2012.PNG";
import img2012_1 from "../assets/Timeline/2012.1.PNG";
import img2012_2 from "../assets/Timeline/2012.2.png";
import img2013 from "../assets/Timeline/2013.PNG";
import img2014 from "../assets/Timeline/2014.jpg";
import img2018 from "../assets/Timeline/2018.png";
import img2019 from "../assets/Timeline/2019.jpg";
import img2020 from "../assets/Timeline/2020.jpg";
import img2021 from "../assets/Timeline/2021.png";

import Year from "./Years";
import "../css/timeline.css";

export default class TimeLine extends React.Component {
  render() {
    const txt2000 = (
      <div>
        <p>
         El programa de Ingeniería en Multimedia se incorpora al Sistema Nacional de Información de la Educación Superior (SNIES) el 27 de noviembre de 2000, lo que da autorización para abrir el primer programa de formación profesional en Colombia en el área de Multimedia con una duración de nueve semestres.
        </p>
      </div>
    );

    const txt2001 = (
      <div>
        <p>
         En 18 de enero del año 2001 con el Acuerdo No. 003, se da inicio a las actividades académicas en primer semestre, se crea oficialmente el programa, bajo el nombre de Ingeniería Digital, Diseño y Arte Tridimensional, adscrito a la Facultad de Ingeniería.
        </p>
        <p>
          Se da inicio a actividades académicas en el periodo 2 de 2001, para el primer semestre de la carrera inician clases 29 estudiantes inscritos.
        </p>
      </div>
    );

    const txt2002 = (
      <div>
        <p>
          Creación del grupo de investigación GIM.
        </p>
      </div>
    );

    const txt2005 = (
      <div>
        <p>
          La denominación del programa fue cambiada a Ingeniería en Multimedia en el año 2005. El Programa obtiene su Registro Calificado el 1 de abril de 2005, con la Resolución 1090 del Ministerio de Educación Nacional, por 7 años.
        </p>
      </div>
    );

    const txt2006 = (
      <div>
        <p>
          Primera cohorte de graduados (20  graduados).
        </p>
      </div>
    );
    
    const txt2009 = (
      <div>
        <p>
          Primer congreso internacional de multimedia.
        </p>
      </div>
    );

    const txt2011 = (
      <div>
        <p>
          Creación del grupo de investigación LA TRAMOYA.
        </p>
      </div>
    );

    const txt2012 = (
      <div>
        <p>
        Resolución de la Universidad Militar  Nueva Granada Número 2347 de 02 Octubre de 2012 por el cual se realizan modificaciones  al plan de estudios vigente , se trasladan algunas asignaturas, se eliminan prerrequisitos, se elimina la asignatura opción de grado y se adicionan dos electivas de énfasis en el programa de Ingeniería en Multimedia. 
        </p>
      </div>
    );

    const txt2012_2 = (
      <div>
        <p>
          Se realiza ajuste del plan de estudios y se pasa de 9 a 10 semestres.
        </p>
      </div>
    );

    const txt2012_1 = (
      <div>
        <p>
          Creación del grupo de investigación ACCEDER.
        </p>
      </div>
    );

    const txt2013 = (
      <div>
        <p>
          El programa obtiene la autorización para la ampliación del lugar de desarrollo, del programa de Ingeniería en Multimedia, al municipio de Cajicá – Cundinamarca, según resolución 6358 del MEN, de mayo de 2013.
        </p>
      </div>
    );

    const txt2014 = (
      <div>
        <p>
          Apertura del programa de Ingeniería en Multimedia en la Sede Campus Nueva Granada.
        </p>
      </div>
    );

    const txt2018 = (
      <div>
        <p>
          Primera cohorte de egresados del programa en sede Cajicá.
        </p>
      </div>
    );

    const txt2019 = (
      <div>
        <p>
          El programa obtiene la acreditación de alta calidad por el Acta de Acreditación de Alta Calidad Ingeniería en Multimedia mediante Resolución No. 009724de 11 Septiembre 2019 del Ministerio de Educación Nacional.
        </p>
      </div>
    );

    const txt2020 = (
      <div>
        <p>
          Se recibe de la UMNG la Medalla Luis López de Mesa, marzo 12 de 2020.
        </p>
      </div>
    );

    const txt2021 = (
      <div>
        <p>
          El programa cumple 20 años desde su creación.
        </p>
        <p>
          En los años de experiencia acumulados, el Programa de Ingeniería en Multimedia ha logrado distinguirse por la interdisciplinariedad de su currículo y preparación profesional con miras a formar ingenieros innovadores desde la conceptualización e implementación de productos y servicios desde el campo de la Multimedia.
        </p>
      </div>
    );

    

    const year1 = {
      year: "2000",
      description: txt2000,
      img: img2000,
    };

    const year2 = {
      year: "2001",
      description: txt2001,
      img: img2001,
    };

    const year3 = {
      year: "2002",
      description: txt2002,
      img: img2002,
    };

    const year4 = {
      year: "2005",
      description: txt2005,
      img: img2005,
    };

    const year5 = {
      year: "2006",
      description: txt2006,
      img: img2006,
    };

    const year6 = {
      year: "2009",
      description: txt2009,
      img: img2009,
    };

    const year7 = {
      year: "2011",
      description: txt2011,
      img: img2011,
    };

    const year8 = {
      year: "2012",
      description: txt2012,
      img: img2012,
    };

    const year9 = {
      year: "2012",
      description: txt2012_2,
      img: img2012_2,
    };
    
    const year10 = {
      year: "2012",
      description: txt2012_1,
      img: img2012_1,
    };

    const year11 = {
      year: "2013",
      description: txt2013,
      img: img2013,
    };

    const year12 = {
      year: "2014",
      description: txt2014,
      img: img2014,
    };

    const year13 = {
      year: "2018",
      description: txt2018,
      img: img2018,
    };

    const year14 = {
      year: "2019",
      description: txt2019,
      img: img2019,
    };

    const year15 = {
      year: "2020",
      description: txt2020,
      img: img2020,
    };

    const year16 = {
      year: "2021",
      description: txt2021,
      img: img2021,
    };



    return (
      <div className="timeline">
        <Carousel controls={false} interval={null} control-width>
          <Carousel.Item>
            <Container>
              <Row className="text-center justify-content-center slide1">
                <Col lg={4}>
                  <h1>20 AÑOS DE MUCHAS HISTORIAS</h1>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year1} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year2} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year3} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year4} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year5} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year6} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year7} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year8} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year9} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year10} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year11} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year12} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year13} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year14} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year15} />
          </Carousel.Item>
          <Carousel.Item>
            <Year info={year16} />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
