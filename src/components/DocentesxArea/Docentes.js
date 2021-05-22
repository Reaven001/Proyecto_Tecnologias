import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import doc1 from "../../assets/Docentes/Aranzazu.jpeg";
import doc2 from "../../assets/Docentes/Helioth.jpg";
import doc3 from "../../assets/Docentes/Jaramillo.png";
import doc4 from "../../assets/Docentes/Karen.jpg";
import doc5 from "../../assets/Docentes/Marcela.png";

import "../../css/docentes.css";
import { CardColumns, CardDeck } from "react-bootstrap";

export default class Docentes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleCard = {
      color: "#620CE8",
      fontWeight: "bold",
      fontSize: 25,
    };
    return (
      <div className="docentes">
        <Container>
          <Row className="justify-content-center py-5">
            <Col lg={12} sm={12}>
              <h2 className="titleDoc">
                DOCENTES: Área de Transformación Digital
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center py-5">
            <div className="tarjetas">
              <CardColumns>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc1} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Carlos Aranzazu López</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Diseñador gráfico egresado de la Universidad Nacional de Colombia. Especialista en Docencia Universitaria, especialista en Diseño Multimedia y Magíster en Investigación en Diseño de la Universidad Nacional de Colombia.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc2} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Wilman Helioth Sanchez</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniero de Sistemas de la Universidad Nacional de Colombia. Magister en Educación y Especialista en Docencia Universitaria de la Universidad Militar Nueva Granada. Autor y Coautor del Proyecto Educativo del Programa Ingeniería en Multimedia desde su inicio hasta la actualidad.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc3} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Jorge Augusto Jaramillo</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniero de sistemas de la Universidad Autónoma de Colombia. Magister en Educación de la Universidad Militar. Máster en Desarrollo de Aplicaciones Multimedia para WEB de la UOC España. Especialización en Gerencia de Tecnología de la Universidad EAN. Experto universitario en la implementación de proyectos e-learning UTN Argentina. Diplomado en ambientes virtuales de aprendizaje con la FUCN Colombia. Diplomado en Uso y apropiación de las TIC – UMNG Colombia.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc4} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Karen Linares Luque</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniera en Multimedia egresada de la Universidad Militar Nueva Granada, con estudios de posgrado en Alta gerencia, y Maestría en Gestión de Organizaciones de la Universidad Militar Nueva Granada. experiencia en el sector empresa  manejando equipos y proyectos digitales desempeñándose como Project Manager, y Product Owner de emprendimientos digitales.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc5} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Hilda Marcela Iregui</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniera eléctrica de la Universidad de los Andes, con estudios de maestría y doctorado en ingeniería en la Universidad Católica de Lovaina en Bélgica. Docente e investigadora de la Universidad Militar Nueva Granada desde el 2010.  Además, tiene experiencia de más de 7 años en el sector privado en áreas de tecnologías digitales y desarrollo de software.
                    </Card.Text>
                  </Card.Body>
                </Card>
               
              </CardColumns>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
