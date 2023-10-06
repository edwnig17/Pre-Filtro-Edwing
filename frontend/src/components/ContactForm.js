import React, { useState } from "react";
import axios from "axios";
import validation from "./actions/validation";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../styles/css/estilos.css";

const ContactForm = () => {
  const [nameValidation, setNameValidation] = useState({
    valid: false,
    text: null,
  });
  const [lastNameValidation, setLastNameValidation] = useState({
    valid: false,
    text: null,
  });
  const [emailValidation, setEmailValidation] = useState({
    valid: false,
    text: null,
  });

  const validate = (e) => {
    switch (e.target.name) {
      case "name":
        setNameValidation(validation(e.target.name, e.target.value));
        break;
      case "lastName":
        setLastNameValidation(validation(e.target.name, e.target.value));
        break;
      case "email":
        setEmailValidation(validation(e.target.name, e.target.value));
        break;
      default:
        return null;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value; 

    try {
      const response = await axios.post("/api/contacto/contactos", {
        name,
        lastName,
        email,
        mensaje,
      });

      if (response.status === 201) {
        
        console.log("Contacto guardado exitosamente");
     
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al guardar el contacto", error);
     
    }
  };

  return (
    <div className="bg-dark text-primary contact">
      <Row>
        <Col className="col-md-3"></Col>

        <Col className="col-md-5">
          <Row className="text-center">
            <h1 className="fs-1 fila">Contact us</h1>
          </Row>
          <Row className="text-center fs-5 text-secondary">
            <p>
              Si deseas puedes enviarnos un correo a{" "}
              <span className="text-light fs-4">edwingstiven2023@gmail.com</span>
            </p>
          </Row>
        </Col>
        <Col className="col-md-3"></Col>
      </Row>
      <Row>
        <Col className="col-md-3"></Col>
        <Col className="col-md-2 fs-1">Contact Us</Col>
        <Col>
          <Form className="register bg-dark text-center" onSubmit={onSubmit}>
            <Row className="fila">
              <Col className="col-md-4">
                <Form.Control
                  placeholder="Nombre"
                  type="text"
                  name="name"
                  onChange={validate}
                />
                {nameValidation.text}
              </Col>

              <Col className="col-md-4">
                <Form.Control
                  placeholder="Apellido"
                  type="text"
                  name="lastName"
                  onChange={validate}
                />
                {lastNameValidation.text}
              </Col>
            </Row>
            <Row className="fila">
              <Col className="col-md-4">
                <Form.Control
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={validate}
                />
                {emailValidation.text}
              </Col>
              <Col className="col-md-4">
                <Form.Control
                  placeholder="Numero"
                  type="text"
                  name="mensaje" 
                  onChange={validate}
                />
              </Col>
            </Row> 
            <Row className="fila">
              <Col className="col-md-8">
                <Form.Control
                  placeholder="Mensaje"
                  as="textarea"
                  type="text"
                  name="mensaje" 
                  onChange={validate}
                />
              </Col>
            </Row>
            <Row className="fila">
              <Col className="col-md-2"></Col>
              <Col>
                <Button variant="outline-primary col-md-2" type="submit">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
