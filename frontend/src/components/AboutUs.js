import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="text-primary text-center aboutus">
      <Row>
        <Col md={6} className="aboutus-cover"></Col>
        <Col md={6}>
        <Container fluid className="py-5 px-5 aboutus-text">
          <h1>¿Quienes Somos?</h1>
          <p className="text-light">
            Somos una Pizzeria inspirada en la cocina para desgustar los paladares de nuestros clientes, contamos
            actualmente con un local con aforo para 80 personas ubicado en{" "}
            <span className="text-info">Km 4, Anillo Vial, Bucaramanga, Santander</span>Y si
            deseas probar nuestras Pizzas desde la comodidad de tu casa, tambien
            contamos con un servicio{" "}
            <Link className="text-info" to="/order">
              delivery.
            </Link>
            <br />
            Ante cualquier pregunta no dudes en enviarnosla a nuestras redes sociales, no dudes en escribir !! .
          </p>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
