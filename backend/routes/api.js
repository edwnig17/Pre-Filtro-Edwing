const router = require('express').Router();

router.use('/reserva', require('./reserva'));
router.use('/email', require('./email'));
router.use('/turno', require('./turno'));
router.use('/pizzas', require('./pizza'));
router.use('/products', require('./product'));
router.use('/fiesta', require('./fiesta'));
router.use('/pedido', require('./pedido'));
router.use('/tragos', require('./tragos'));
router.use('/contacto', require('./contacto'));


module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Endpoints
 *   description: Sólo es para demostrar todas las que tengo 
 */

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene una lista de clientes.
 *     description: Devuelve una lista de todos los clientes registrados.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de clientes.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/fiestas:
 *   get:
 *     summary: Obtiene una lista de fiestas y eventos especiales.
 *     description: Devuelve una lista de todas las fiestas y eventos especiales programados.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de fiestas y eventos.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/mesas:
 *   get:
 *     summary: Obtiene una lista de mesas disponibles.
 *     description: Devuelve una lista de todas las mesas disponibles para reserva.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de mesas disponibles.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Obtiene una lista de pedidos.
 *     description: Devuelve una lista de todos los pedidos realizados.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de pedidos.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/pizzas:
 *   get:
 *     summary: Obtiene una lista de pizzas en el menú.
 *     description: Devuelve una lista de todas las pizzas disponibles en el menú.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de pizzas.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene una lista de productos disponibles.
 *     description: Devuelve una lista de todos los productos disponibles, como bebidas y complementos.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de productos.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtiene una lista de reservas.
 *     description: Devuelve una lista de todas las reservas realizadas.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de reservas.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/tragos:
 *   get:
 *     summary: Obtiene una lista de tragos y bebidas disponibles.
 *     description: Devuelve una lista de todas las bebidas disponibles en el menú.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de bebidas.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/turnos:
 *   get:
 *     summary: Obtiene una lista de turnos disponibles.
 *     description: Devuelve una lista de todos los turnos y horarios disponibles.
 *     tags: [Endpoints]
 *     responses:
 *       200:
 *         description: Éxito. Devuelve una lista de turnos disponibles.
 *       500:
 *         description: Error en el servidor.
 */


