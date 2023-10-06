const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contacto.controller.js');

router.post('/contactos', contactoController.guardarContacto);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Contactos
 *   description: Endpoints relacionados con la gestión de contactos. No fue necesario realizar otras solicitudes (CRUDS) porque mi proyecto no lo requería.
 */

/**
 * @swagger
 * /api/contacto/contactos:
 *   post:
 *     summary: Crea un nuevo contacto.
 *     description: Crea un nuevo registro de contacto en la base de datos.
 *     tags: [Contactos]
 *     requestBody:
 *       description: Datos del contacto que se va a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: El nombre del contacto.
 *               direccion:
 *                 type: string
 *                 description: La dirección del contacto.
 *               telefono:
 *                 type: string
 *                 description: El número de teléfono del contacto.
 *               correoElectronico:
 *                 type: string
 *                 description: La dirección de correo electrónico del contacto.
 *             example:
 *               nombre: John Doe
 *               direccion: Calle 123
 *               telefono: 123-456-7890
 *               correoElectronico: john.doe@example.com
 *     responses:
 *       201:
 *         description: Éxito. Se ha creado un nuevo contacto.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor.
 */
