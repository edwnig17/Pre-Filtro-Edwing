const router = require("express").Router();
const pedidoController = require("../controllers/pedido.controller");

router.post('/create', pedidoController.create);

module.exports = router;
/**
 * @swagger
 * /api/pedido/create:
 *   post:
 *     summary: Crea un nuevo pedido .
 *     description: Crea un nuevo pedido en la base de datos , ademàs envìa un correo electrónico con la información del pedido tipo factura.
 *     tags: [Pedidos]
 *     requestBody:
 *       description: Datos del pedido que se va a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productos:
 *                 type: object
 *                 properties:
 *                   ids:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["p1", "p2", "p3"]
 *                   nombres:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["Producto 1", "Producto 2", "Producto 3"]
 *                   cantidades:
 *                     type: array
 *                     items:
 *                       type: integer
 *                     example: [2, 1, 3]
 *               name:
 *                 type: string
 *                 example: "Juan"
 *               lastName:
 *                 type: string
 *                 example: "Pérez"
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               canal:
 *                 type: string
 *                 example: "Online"
 *               comuna:
 *                 type: string
 *                 example: "Santiago"
 *               direccion:
 *                 type: string
 *                 example: "Calle 123"
 *               total:
 *                 type: number
 *                 example: 150
 *             example:
 *               productos:
 *                 ids: ["p1", "p2", "p3"]
 *                 nombres: ["Producto 1", "Producto 2", "Producto 3"]
 *                 cantidades: [2, 1, 3]
 *               name: "Juan"
 *               lastName: "Pérez"
 *               email: "juan.perez@example.com"
 *               canal: "Online"
 *               comuna: "Santiago"
 *               direccion: "Calle 123"
 *               total: 150
 *     responses:
 *       201:
 *         description: Éxito. Se ha creado un nuevo pedido.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 */
