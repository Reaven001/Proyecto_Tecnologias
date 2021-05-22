import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import doc1 from "../../assets/Docentes/Helioth.jpg";
import doc2 from "../../assets/Docentes/Ceron.jpg";
import doc3 from "../../assets/Docentes/Marcela.png";
import doc4 from "../../assets/Docentes/Ricardo.png";
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
                DOCENTES: Área de Procesamiento de Análisis de Información
                Multimedia
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center py-5">
            <div className="tarjetas">
              <CardColumns>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc1} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Wilman Helioth Sánchez</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniero de Sistemas de la Universidad Nacional de Colombia. Magister en Educación y Especialista en Docencia Universitaria de la Universidad Militar Nueva Granada. Autor y Coautor del Proyecto Educativo del Programa Ingeniería en Multimedia desde su inicio hasta la actualidad.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc2} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Alexander Cerón Correa</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniero, Magister y Doctor en Ingeniería de Sistemas.  Experiencia en Docencia e Investigación relacionada con Computación Gráfica, Procesamiento de Señales e Imágenes, Simulación y Visión por Computador.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc3} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Hilda Marcela Iregui</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniera eléctrica de la Universidad de los Andes, con estudios de maestría y doctorado en ingeniería en la Universidad Católica de Lovaina en Bélgica. Docente e investigadora de la Universidad Militar Nueva Granada desde el 2010.  Además, tiene experiencia de más de 7 años en el sector privado en áreas de tecnologías digitales y desarrollo de software.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc4} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Ricardo Enrique Gutiérrez</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniero en  Mecatrónica de la Universidad Militar Nueva Granada (Colombia-2005), Magíster en Ingeniería de Computación y Sistemas de la Universidad Nacional de Colombia (Colombia-2009) y Doctor en Ingeniería Mecánica de la Universidade Estadual de Campinas (Brasil-2011).
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
