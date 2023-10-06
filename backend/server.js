require("dotenv").config();

const express = require("express");
const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const mongoConnect = require("./config/mongoConnect")();
const cors = require('cors'); // Importa el módulo CORS

// Configura CORS para permitir solicitudes desde http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pizza House Master',
      version: '1.0.0',
      description: 'Pizza House Master es una plataforma de gestión y reservas para un restaurante especializado en pizzas. He creado esta aplicación con el objetivo de ofrecer a los amantes de la pizza una experiencia única al explorar nuestro menú, realizar pedidos en línea y reservar mesas para disfrutar de una deliciosa comida.',
    },
  },
  apis: ['./routes/api.js', './routes/contacto.js', './routes/fiesta.js', './routes/product.js', './routes/reserva.js', './routes/turno.js', './routes/pizza.js', './routes/pedido.js', './routes/tragos.js','./routes/email.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
