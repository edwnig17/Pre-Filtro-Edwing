import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "../styles/css/estilos.css";
const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const { data } = await axios.get("/api/pizzas");
        return { success: true, data };
      } catch (err) {
        console.log(err);
      }
    };
    getPizzas().then(({ data }) => {
      setPizzas(data);
    });
  }, []);

  // Función para obtener los ingredientes de una pizza específica
  const getIngredientes = (pizza) => {
    if (pizza && pizza.cheese) {
      return pizza.cheese; 
    } else {
      return "No hay ingredientes disponibles.";
    }
  };

  return (
    <div className="menuview bg-dark text-center">
      <h3 className="text-primary text-center">Nuestras Pizzas:</h3>
      <Row className="fila">
        {pizzas.map(({ _id, title, price, sauce, mass, size, cheese }) => (
          <>
            <Row key={_id}>
              <Col className="col-lg-4"></Col>
              <Col className="text-primary">{title}</Col>
              <Col className="text-light">${price}</Col>
            </Row>
            <Row>
              <Col className="col-lg-4"></Col>
              <Col className="text-secondary fila col-lg-auto">
                (salsa: {sauce}, masa: {mass}, tamaño: {size}) <br />
                Ingredientes: {getIngredientes({ cheese })} {/* Ajusta la función */}
              </Col>
              <Col className="col-lg-4"></Col>
            </Row>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
