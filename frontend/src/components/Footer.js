import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="mt-auto text-secondary bg-dark text-center">
      <Container fluid className="py-5">
        <Row>
          <Col>
            <p fontSize={32} className="text-primary fs-3">
            Km 4, Anillo Vial, Bucaramanga, Santander
            </p>
            <p className="text-primary fs-4">+57 3167069665</p>
          </Col>
          <Col>
            <p  fontSize={32} className="text-primary fs-3">
             <a href="https://w.app/E0MIaH"> Estamos Abiertos: </a>
            </p>
            <p className="text-primary fs-4">
              Lunes - Domingo: 12:00 PM - 02:00 AM
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid className="py-1">
        <Row className="py-3">
          <Col>
            <a
              href="https://w.app/E0MIaH"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp fontSize={36} className="mx-3" />
            </a>

            <a
              href="https://www.facebook.com/edwingstiven.saenz.1//"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF fontSize={36} className="mx-3" />
            </a>

            <a
              href="https://www.instagram.com/edwingmejia/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram fontSize={36} className="mx-3" />
            </a>
          </Col>
        </Row>
        <Row>
          <p>Copyright © {today.getFullYear()} - Pizza house master 2023</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
