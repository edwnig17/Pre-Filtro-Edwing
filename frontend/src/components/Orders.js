import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Col, Row, Button, Form } from "react-bootstrap";
import "../styles/css/estilos.css";
import { Link } from "react-router-dom";
import DeliveryForm from "./DeliveryForm";
import PickupForm from "./PickupForm";

const Orders = () => {
  const [pizzas, setPizzas] = useState([]);
  const [productos, setProductos] = useState([]);
  const [deliverySelect, setDeliverySelect] = useState(false);
  const [pickupSelect, setPickupSelect] = useState(false);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pizzaResponse = await axios.get("/api/pizzas");
        const drinksResponse = await axios.get("/api/tragos");
        console.log("Pizzas:", pizzaResponse.data);
        console.log("Tragos:", drinksResponse.data);
        setPizzas(pizzaResponse.data);
        setDrinks(drinksResponse.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const itemCheck = (e) => {
    let prods = productos.slice();
    const idpizza = e.target.getAttribute("idpizza");
    const nombre = e.target.getAttribute("nombre");
    const precio = e.target.getAttribute("precio");
    if (e.target.checked) {
      console.table({ idpizza, nombre, precio });
      prods.push({
        idpizza,
        nombre,
        cantidad: 1,
        precioUnitario: precio,
        precioTotal: precio,
      });
      setProductos(prods);
    } else {
      prods = prods.filter((el) => el.idpizza !== idpizza);
      setProductos(prods);
    }
  };

  const getProductos = (pizza) => {
    if (pizza && pizza.cheese) {
      return pizza.cheese;
    } else {
      return "No hay productos disponibles";
    }
  };

  const restar = (e, i) => {
    e.preventDefault();
    let prods = productos.slice();
    if (prods[i].cantidad > 1) {
      prods[i].cantidad -= 1;
      prods[i].precioTotal = prods[i].cantidad * prods[i].precioUnitario;
    }
    setProductos(prods);
  };

  const sumar = (e, i) => {
    e.preventDefault();
    let prods = productos.slice();
    prods[i].cantidad += 1;
    prods[i].precioTotal = prods[i].cantidad * prods[i].precioUnitario;
    setProductos(prods);
  };

  const removeDrink = (drink) => {
    const updatedDrinks = selectedDrinks.filter((item) => item.id !== drink.id);
    setSelectedDrinks(updatedDrinks);
  };

  // Calcula el total
  let total = 0;
  productos.forEach((item) => (total += Number(item.precioTotal)));
  selectedDrinks.forEach((drink) => (total += Number(drink.price)));

  const delivery = (e) => {
    e.preventDefault();
    if (pickupSelect) setPickupSelect(false);
    setDeliverySelect(true);
  };

  const pickup = (e) => {
    e.preventDefault();
    if (deliverySelect) setDeliverySelect(false);
    setPickupSelect(true);
  };

  const addDrinkToCart = (drink) => {
    setSelectedDrinks([...selectedDrinks, drink]);
  };

  // Función para agregar los tragos seleccionados al carrito
  const addDrinksToCart = () => {
    const drinksToAdd = selectedDrinks.map((drink) => ({
      id: drink._id,
      nombre: drink.title,
      precioUnitario: drink.price,
      precioTotal: drink.price,
    }));
    setProductos([...productos, ...drinksToAdd]);
    setSelectedDrinks([]);
  };

  // Función para renderizar la lista de tragos seleccionados
  const renderDrinks = () => {
    return (
      <div>
        <h4>Tragos Disponibles:</h4>
        <Form.Group>
          {drinks.map((drink) => (
            <Form.Check
              key={drink._id}
              type="checkbox"
              id={`drink-${drink._id}`}
              label={`${drink.title || 'Nombre no disponible'} - $${drink.price}`}
              onChange={() => addDrinkToCart(drink)}
            />
          ))}
        </Form.Group>
        <Button
          variant="primary"
          className="rounded-pill"
          onClick={addDrinksToCart}
        >
          Agregar Tragos al Carrito
        </Button>
      </div>
    );
  };

  // Función para renderizar la lista de tragos seleccionados
  const renderDrinkItems = () => {
    return (
      <div>
        <h4>Tragos Seleccionados:</h4>
        <ul>
          {selectedDrinks.map((drink) => (
            <li key={drink.id}>
              {drink.nombre} - ${drink.precioTotal}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-primary text-center">Nuestras Pizzas:</h3>
      <Row className="fila">
        <Col>
          {pizzas.map(({ _id, title, price, sauce, mass, size, cheese }) => (
            <Fragment key={_id}>
              <Row>
                <Col className="text-primary" key={_id}>
                  {title}
                </Col>
                <Col className="text-light">${price}</Col>
                <Col className="col-lg-4">
                  <input
                    className="pointer"
                    type="checkbox"
                    onChange={itemCheck}
                    idpizza={_id}
                    nombre={title}
                    precio={price}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="col-lg-4"></Col>
                <Col className="text-secondary fila col-lg-auto">
                  (salsa: {sauce}, masa: {mass}, tamaño: {size}) <br></br>
                  Ingredientes: {getProductos({ cheese })}
                </Col>
                <Col className="col-lg-4"></Col>
              </Row>
            </Fragment>
          ))}
        </Col>
        <Col className="text-light">
          <Row>Carrito de compras</Row>
          <Row>
            <Col>Producto</Col>
            <Col>Cantidad</Col>
            <Col>$</Col>
          </Row>
          <Row>
            {productos.length
              ? productos.map((producto, i) => (
                  <Row key={i}>
                    <Col>{producto.nombre}</Col>
                    <Col>
                      <Row>
                        <Col>
                          <p className="pointer" onClick={(e) => restar(e, i)}>
                            -
                          </p>
                        </Col>
                        <Col>{producto.cantidad}</Col>
                        <Col>
                          <p className="pointer" onClick={(e) => sumar(e, i)}>
                            +
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col>{producto.precioTotal}</Col>
                  </Row>
                ))
              : null}
          </Row>
          {/* Agregar la sección de tragos seleccionados */}
          {selectedDrinks.length > 0 && renderDrinkItems()}
          <Row>
            <Col>Total: $ {total}</Col>
          </Row>
          <Button
            variant="primary"
            className="rounded-pill w-25"
            onClick={pickup}
          >
            Retiro en local
          </Button>
          <Button
            variant="primary"
            className="rounded-pill w-25 mx-auto"
            onClick={delivery}
          >
            Delivery
          </Button>
          <Button
            as={Link}
            to={"/"}
            variant="primary"
            className="rounded-pill w-25 mx-auto"
          >
            Volver
          </Button>
        </Col>
      </Row>
      {pickupSelect && <PickupForm products={productos} />}
      {deliverySelect && <DeliveryForm products={productos} />}
      {renderDrinks()}
    </div>
  );
};

export default Orders;
