import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import doc1 from "../../assets/iconoPersona.jpg";
import doc2 from "../../assets/urregoxd.png";
import doc3 from "../../assets/marcela.jpg";
import doc4 from "../../assets/Gfe.jpeg";
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
                DOCENTES: Area de Transformación Digital
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center py-5">
            <div className="tarjetas">
              <CardColumns>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc1} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Docente 1</Card.Title>
                    <Card.Text style={{ color: "#620CE8" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh elit, porta sit amet nisl faucibus, interdum
                      elementum neque. Duis id sapien sed quam viverra vulputate
                      a a felis. Praesent condimentum bibendum nulla, vitae
                      convallis arcu pulvinar ut. Pellentesque tempor euismod
                      orci, sit amet semper odio pellentesque at.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc2} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Docente 2</Card.Title>
                    <Card.Text style={{ color: "#620CE8" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh elit, porta sit amet nisl faucibus, interdum
                      elementum neque. Duis id sapien sed quam viverra vulputate
                      a a felis. Praesent condimentum bibendum nulla, vitae
                      convallis arcu pulvinar ut. Pellentesque tempor euismod
                      orci, sit amet semper odio pellentesque at.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc3} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Docente 3</Card.Title>
                    <Card.Text style={{ color: "#620CE8" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh elit, porta sit amet nisl faucibus, interdum
                      elementum neque. Duis id sapien sed quam viverra vulputate
                      a a felis. Praesent condimentum bibendum nulla, vitae
                      convallis arcu pulvinar ut. Pellentesque tempor euismod
                      orci, sit amet semper odio pellentesque at.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ background: "#0DBFFF" }}>
                  <Card.Img variant="top" src={doc4} />
                  <Card.Body>
                    <Card.Title style={styleCard}>Docente 4</Card.Title>
                    <Card.Text style={{ color: "#620CE8" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh elit, porta sit amet nisl faucibus, interdum
                      elementum neque. Duis id sapien sed quam viverra vulputate
                      a a felis. Praesent condimentum bibendum nulla, vitae
                      convallis arcu pulvinar ut. Pellentesque tempor euismod
                      orci, sit amet semper odio pellentesque at.
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
