const router = require("express").Router();
const fiestaController = require("../controllers/fiesta.controller");

router.post('/create', fiestaController.create);
router.get('/confirm/:id', fiestaController.confirm);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Fiestas
 *   description: Endpoints relacionados con la gestión de fiestas.
 */
/**
 * @swagger
 * /api/fiesta/create:
 *   post:
 *     summary: Crea una nueva fiesta.
 *     description: Crea un nuevo registro de fiesta en la base de datos.
 *     tags: [Fiestas]
 *     requestBody:
 *       description: Datos de la fiesta que se va a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date-time
 *               confirmada:
 *                 type: boolean
 *               personas:
 *                 type: integer
 *               cliente:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               fecha: "2023-10-07T20:45:18.000+00:00"
 *               confirmada: false
 *               personas: 50
 *               cliente: "juanito20@gmail.com"
 *               nombre: "Juan"
 *               apellido: "Andres"
 *               email: "juanito20@gmail.com"
 *     responses:
 *       201:
 *         description: Éxito. Se ha creado una nueva fiesta.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/fiesta/confirm/{id}:
 *   get:
 *     summary: Confirma una fiesta.
 *     description: Marca una fiesta como confirmada en la base de datos.
 *     tags: [Fiestas]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la fiesta que se va a confirmar.
 *         required: true
 *         schema:
 *           type: string
 *           example: 65200e71bd5418a5813e3179
 *     responses:
 *       200:
 *         description: Éxito. La fiesta ha sido confirmada.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       404:
 *         description: Fiesta no encontrada.
 *       500:
 *         description: Error en el servidor.
 */
