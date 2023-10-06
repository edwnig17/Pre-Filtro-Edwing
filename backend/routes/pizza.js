const router = require("express").Router();
const controller = require("../controllers/pizzas.controller");

router.post("/new", controller.createPizza);
router.get("/", controller.getPizzas);
router.get("/:id", controller.getOnePizza);
router.put("/update/:id", controller.updatePizza);
router.delete("/delete/:id", controller.deletePizza);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Pizzas
 *   description: Operaciones relacionadas con las pizzas
 */

/**
 * @swagger
 * /api/pizzas/new:
 *   post:
 *     summary: Crea una nueva pizza.
 *     description: Crea una nueva pizza en la base de datos.
 *     tags: [Pizzas]
 *     requestBody:
 *       description: Datos de la pizza que se va a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PizzaInput'
 *     responses:
 *       201:
 *         description: Éxito. Se ha creado una nueva pizza.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/pizzas:
 *   get:
 *     summary: Obtiene la lista de todas las pizzas.
 *     description: Obtiene la lista de todas las pizzas registradas en la base de datos.
 *     tags: [Pizzas]
 *     responses:
 *       200:
 *         description: Éxito. Se ha obtenido la lista de pizzas.
 *       500:
 *         description: Error en el servidor.
 */

/**
 * @swagger
 * /api/pizzas/{id}:
 *   get:
 *     summary: Obtiene una pizza por su ID.
 *     description: Obtiene los detalles de una pizza específica según su ID.
 *     tags: [Pizzas]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la pizza que se va a obtener.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito. Se ha obtenido la pizza.
 *       404:
 *         description: Pizza no encontrada.
 *       500:
 *         description: Error en el servidor.
 */
/**
 * @swagger
 * /api/pizzas/update/{id}:
 *   put:
 *     summary: Actualiza una pizza por ID.
 *     description: Actualiza una pizza específica según su ID.
 *     tags: [Pizzas]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la pizza que se va a actualizar.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PizzaInput'
 *     responses:
 *       200:
 *         description: Pizza actualizada con éxito.
 *       400:
 *         description: Solicitud incorrecta o datos de entrada inválidos.
 *       404:
 *         description: Pizza no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PizzaInput:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Pizza de Tocino"
 *         size:
 *           type: string
 *           example: "Large"
 *         mass:
 *           type: string
 *           example: "Pan Crust"
 *         products:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - "651e32deaa59c54135eb34fa"
 *             - "651e32deaa59c54135eb34fb"
 *             - "651e32deaa59c54135eb34fc"
 *         sauce:
 *           type: string
 *           example: "BBQ Sauce"
 *         price:
 *           type: string
 *           example: "16.99"
 *         cheese:
 *           type: string
 *           example: "Cheddar"
 *       example:
 *         title: "Pizza de Tocino"
 *         size: "Large"
 *         mass: "Pan Crust"
 *         products:
 *           - "651e32deaa59c54135eb34fa"
 *           - "651e32deaa59c54135eb34fb"
 *           - "651e32deaa59c54135eb34fc"
 *         sauce: "BBQ Sauce"
 *         price: "16.99"
 *         cheese: "Cheddar"
 */

/**
 * @swagger
 * /api/pizzas/delete/{id}:
 *   delete:
 *     summary: Elimina una pizza por su ID.
 *     description: Elimina una pizza específica según su ID.
 *     tags: [Pizzas]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la pizza que se va a eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito. Se ha eliminado la pizza.
 *       404:
 *         description: Pizza no encontrada.
 *       500:
 *         description: Error en el servidor.
 */

module.exports = router;