const router = require("express").Router();
const turnoController = require("../controllers/turno.controller");

router.post('/get', turnoController.get);
// router.post('/getDates', turnoController.getDates);
/**
 * @swagger
 * /api/turno/get:
 *   post:
 *     summary: Obtener información de turno.
 *     description: Obtener información de turno a través de una solicitud POST.
 *     tags: [Turno]
 *     requestBody:
 *       description: Datos necesarios para obtener información de turno.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TurnoRequest'
 *           example:
 *             id: "100000000001"
 *     responses:
 *       200:
 *         description: Éxito. Se ha obtenido información del turno.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TurnoResponse'
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 */

module.exports = router;