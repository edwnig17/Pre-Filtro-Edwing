const router = require("express").Router();
const controller = require("../controllers/tragos.controller");

/**
 * @swagger
 * /api/tragos:
 *   get:
 *     summary: Obtiene una lista de tragos.
 *     description: Obtiene una lista de tragos.
 *     tags: [Tragos]
 *     responses:
 *       200:
 *         description: Éxito. Se ha obtenido una lista de tragos.
 *       500:
 *         description: Error en el servidor.
 */
router.get("/", controller.getTragos);
/**
 * @swagger
 * /api/tragos/new:
 *   post:
 *     summary: Crea un nuevo trago.
 *     description: Crea un nuevo trago en la base de datos.
 *     tags: [Tragos]
 *     requestBody:
 *       description: Datos del trago que se va a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trago'
 *           example:
 *             title: "Mojito"
 *             size: "Mediano"
 *             price: 7.99
 *     responses:
 *       201:
 *         description: Éxito. Se ha creado un nuevo trago.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Trago:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: El título del trago.
 *         size:
 *           type: string
 *           description: El tamaño del trago.
 *         price:
 *           type: number
 *           description: El precio del trago.
 *       example:
 *         title: "Mojito"
 *         size: "Mediano"
 *         price: 7.99
 */

 
router.post("/new", controller.createTrago);

module.exports = router;
