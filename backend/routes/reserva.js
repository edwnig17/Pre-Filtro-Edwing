const router = require("express").Router();
const reservaController = require("../controllers/reserva.controller");

router.post('/create', reservaController.create);
router.post('/check', reservaController.check);
router.get('/confirm/:id', reservaController.confirm);
router.get("/disponibles", reservaController.getReservasDisponibles);

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       properties:
 *         turnoId:
 *           type: string
 *         personas:
 *           type: integer
 *         name:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *
 *     ReservaCheck:
 *       type: object
 *       properties:
 *         turnoId:
 *           type: string
 *         personas:
 *           type: integer
 */

/**
 * @swagger
 * /api/reserva/create:
 *   post:
 *     summary: Crea una nueva reserva.
 *     description: Crea una nueva reserva en la base de datos.
 *     tags: [Reservas]
 *     requestBody:
 *       description: Datos de la reserva que se va a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *           example:
 *             turnoId: "100000000002"
 *             personas: 4
 *             name: "Juan"
 *             lastName: "Pérez"
 *             email: "juan@example.com"
 *     responses:
 *       201:
 *         description: Éxito. Se ha creado una nueva reserva.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 *
 * /api/reserva/check:
 *   post:
 *     summary: Verifica la disponibilidad de una reserva.
 *     description: Verifica si una reserva está disponible.
 *     tags: [Reservas]
 *     requestBody:
 *       description: Datos de la reserva que se va a verificar.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReservaCheck'
 *           example:
 *             turnoId: "100000000001"
 *             personas: 4
 *     responses:
 *       200:
 *         description: Éxito. La reserva está disponible.
 *       404:
 *         description: Reserva no disponible.
 *       500:
 *         description: Error en el servidor.
 *
 * /api/reserva/confirm/{id}:
 *   get:
 *     summary: Confirma una reserva por su ID.
 *     description: Confirma una reserva específica según su ID.
 *     tags: [Reservas]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la reserva que se va a confirmar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito. La reserva ha sido confirmada.
 *       404:
 *         description: Reserva no encontrada.
 *       500:
 *         description: Error en el servidor.
 *
 * /api/reserva/disponibles:
 *   get:
 *     summary: Obtiene la lista de reservas disponibles.
 *     description: Obtiene la lista de reservas disponibles en la base de datos.
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Éxito. Se ha obtenido la lista de reservas disponibles.
 *       500:
 *         description: Error en el servidor.
 */

module.exports = router;
