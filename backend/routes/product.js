const router = require("express").Router();
const controller = require("../controllers/products.controller");

router.post("/new", controller.createProduct);
router.get("/", controller.getProducts);
router.get("/:_id", controller.getOneProduct);
router.put("/update/:_id", controller.updateProduct);
router.delete("/delete/:_id", controller.deleteProduct);

module.exports = router;

/**
 * @swagger
 * /api/products/new:
 *   post:
 *     summary: Crea un nuevo producto.
 *     description: Crea un nuevo producto en la base de datos.
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *           example:
 *             title: "Producto Ejemplo"
 *             description: "Descripción del producto de ejemplo"
 *             stock: "En Stock"
 *             type: "Tipo de ejemplo"
 *             price: 19.99
 *     responses:
 *       201:
 *         description: Éxito. Se ha creado un nuevo producto.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 *
 * /api/products/update/{_id}:
 *   put:
 *     summary: Actualiza un producto por su ID.
 *     description: Actualiza un producto específico según su ID.
 *     tags: [Productos]
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID del producto que se va a actualizar.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *           example:
 *             title: "Producto Actualizado"
 *             description: "Nueva descripción del producto"
 *             stock: "Fuera de Stock"
 *             type: "Nuevo Tipo"
 *             price: 24.99
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito.
 *       400:
 *         description: Solicitud incorrecta o datos de entrada inválidos.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error en el servidor.
 *
 * /api/products:
 *   get:
 *     summary: Obtiene la lista de todos los productos.
 *     description: Obtiene la lista de todos los productos registrados en la base de datos.
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Éxito. Se ha obtenido la lista de productos.
 *       500:
 *         description: Error en el servidor.
 *
 * /api/products/{_id}:
 *   get:
 *     summary: Obtiene un producto por su ID.
 *     description: Obtiene los detalles de un producto específico según su ID.
 *     tags: [Productos]
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID del producto que se va a obtener.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito. Se ha obtenido el producto.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error en el servidor.
 *
 * /api/products/delete/{_id}:
 *   delete:
 *     summary: Elimina un producto por su ID.
 *     description: Elimina un producto específico según su ID.
 *     tags: [Productos]
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID del producto que se va a eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito. Se ha eliminado el producto.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error en el servidor.
 */

exports.productRoutes = router;