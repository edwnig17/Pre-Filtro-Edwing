import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Cover = () => {
  return (
    <div className="bg-dark text-light cover">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">¡Descubre nuestras deliciosas pizzas!</h1>
        <p className="col-md-8 fs-4">
          Te ofrecemos la mejor variedad de sabores para ti.
        </p>
        <div className="col-6 col-md-2 d-grid gap-2">
          <Button
            as={Link}
            to={"/order"}
            variant="primary"
            className="rounded-pill"
          >
            Realizar Pedido
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Cover;
