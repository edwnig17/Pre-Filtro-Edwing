import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col, Collapse } from "react-bootstrap";

const ReservaForm = () => {
  const [formData, setFormData] = useState({
    turno_uuid: "",
    personas: 0,
    cliente: "",
  });

  const [reservations, setReservations] = useState([]);
  const [showReservations, setShowReservations] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/reserva/create",
        formData
      );
      console.log(res);
      alert("Reserva exitosa!");
      // Puedes limpiar el formulario si lo deseas
      setFormData({
        turno_uuid: "",
        personas: 0,
        cliente: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error al realizar la reserva. Inténtalo de nuevo.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchReservations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/reserva/disponibles"
      );
      setReservations(res.data);
      setShowReservations(true);
    } catch (err) {
      console.error(err);
      alert("Error al obtener la lista de reservas.");
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="turno_uuid">
              <Form.Label>Turno UUID</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="turno_uuid"
                value={formData.turno_uuid}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="personas">
              <Form.Label>Personas</Form.Label>
              <Form.Control
                size="sm"
                type="number"
                name="personas"
                value={formData.personas}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="cliente">
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="cliente"
                value={formData.cliente}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Solicitar reserva
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
          <Button
            variant="secondary"
            onClick={() => setShowReservations(!showReservations)}
            block 
          >
            {showReservations ? "Ocultar Reservas" : "Mostrar Reservas"}
          </Button>
          <Collapse in={showReservations}>
            <div>
              <h2>Lista de reservas:</h2>
              <ul>
                {reservations.map((reservation) => (
                  <li key={reservation.turno_uuid}>{reservation.cliente}</li>
                ))}
              </ul>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default ReservaForm;
