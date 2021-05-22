import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import doc1 from "../../assets/Docentes/Aranzazu.jpeg";
import doc2 from "../../assets/Docentes/Jaramillo.png";
import doc3 from "../../assets/Docentes/Martha.jpeg";
import doc4 from "../../assets/Docentes/Adriana.png";
import doc5 from "../../assets/Docentes/Rocha.jpg";
import doc6 from "../../assets/Docentes/Ceron.jpg";
import doc7 from "../../assets/Docentes/Karen.jpg";
import doc8 from "../../assets/Docentes/Wilson.png";
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
                DOCENTES: Área de Producción Multimedia
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
                    <Card.Title style={styleCard}>Jorge Augusto Jaramillo</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniero de sistemas de la Universidad Autónoma de Colombia. Magister en Educación de la Universidad Militar. Máster en Desarrollo de Aplicaciones Multimedia para WEB de la UOC España. Especialización en Gerencia de Tecnología de la Universidad EAN. Experto universitario en la implementación de proyectos e-learning UTN Argentina. Diplomado en ambientes virtuales de aprendizaje con la FUCN Colombia. Diplomado en Uso y apropiación de las TIC – UMNG Colombia.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc3} />
                  <Card.Body>
                    <Card.Title style={styleCard}>María Martha Gama</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Licenciada en Bellas Artes de la Universidad de La Sabana, Altos estudios en animación de La Escuela Internacional de Cine y Tv de San Antonio de Los Baños-Cuba y Magister en Comunicación-Educación de la Universidad Distrital Francisco José de Caldas.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc4} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Adriana Martínez Herrán</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Realizadora de Cine y TV de la Universidad Nacional de Colombia, Especialista y Magister en docencia e investigación. Socia fundadora y productora creativa en Producciones Vista Previa SAS. Asesora en numerosos proyectos audiovisuales y de formación audiovisual.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc5} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Carlos Alberto Rocha</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniero en Multimedia, especialista en Creación Multimedia y Magíster en Dirección de Marketing.  Altos conocimientos y dominio en el desarrollo y comunicación de productos multimedia, diseño y desarrollo de aplicaciones interactivas con énfasis en procesos de narración multimedia orientados a productos de marketing Transmedia.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc6} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Alexander Cerón Correa</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                     Ingeniero, Magister y Doctor en Ingeniería de Sistemas.  Experiencia en Docencia e Investigación relacionada con Computación Gráfica, Procesamiento de Señales e Imágenes, Simulación y Visión por Computador.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc7} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Karen Linares Luque</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Ingeniera en Multimedia egresada de la Universidad Militar Nueva Granada, con estudios de posgrado en Alta gerencia, y Maestría en Gestión de Organizaciones de la Universidad Militar Nueva Granada. experiencia en el sector empresa  manejando equipos y proyectos digitales desempeñándose como Project Manager, y Product Owner de emprendimientos digitales.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc8} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Wilson Sarmiento</Card.Title>
                    <Card.Text style={{ color: "#620CE8", textAlign: 'justify' }}>
                      Graduado de Ingeniero de Sistemas de la Universidad Nacional de Colombia en el año 2000. Durante los años 2001 al 2005 se desempeñó como desarrollador, investigador y consultor en procesamiento y adquisición de imágenes digitales para el ITEC-Telecom y el Centro de Telemedicina de la Universidad Nacional de Colombia. Magíster en Ingeniería Computación. Doctorado en Ciencias de la Electrónica (área computación).
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
