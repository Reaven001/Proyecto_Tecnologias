import React from "react";
import ReactDOM from "react-dom";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cubo from "../assets/cubo.png";

import Year from "./Years";
import "../css/timeline.css";

export default class TimeLine extends React.Component {
  render() {
    const txt1 = (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum
          eveniet ipsum accusamus suscipit repellat sint odio, magni, nihil,
          saepe dolorem nam sit facilis aspernatur inventore dolores
          consequuntur tempore officia?
        </p>
      </div>
    );

    const year1 = {
      year: "2001",
      description: txt1,
      img: cubo,
    };

    const year2 = {
      year: "2011",
      description: txt1,
      img: cubo,
    };

    const year3 = {
      year: "2014",
      description: txt1,
      img: cubo,
    };

    const year4 = {
      year: "2018",
      description: txt1,
      img: cubo,
    };

    const year5 = {
      year: "2021",
      description: txt1,
      img: cubo,
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
        </Carousel>
      </div>
    );
  }
}
