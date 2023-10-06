const router = require("express").Router();
const emailController = require("../controllers/email.controller");

router.post('/sendEmail', emailController.sendEmail);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Email
 *   description: Endpoints relacionados con el envío de correos electrónicos , es la ruta que se maneja para acceder al tunel de gmail cuando se hace el pedido , es decir en el postman siempre va a arrojar error porque no tiene ni em email ni la contraseña del .env
 */

/**
 * @swagger
 * /api/email/sendEmail:
 *   post:
 *     summary: Envía un correo electrónico.
 *     description: Envía un correo electrónico utilizando los datos proporcionados en la solicitud.
 *     tags: [Email]
 *     requestBody:
 *       description: Datos necesarios para enviar el correo electrónico.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destinatario:
 *                 type: string
 *               asunto:
 *                 type: string
 *               mensaje:
 *                 type: string
 *             example:
 *               destinatario: ejemplo@gmail.com
 *               asunto: Asunto del correo
 *               mensaje: Contenido del correo
 *     responses:
 *       200:
 *         description: Éxito. El correo electrónico se ha enviado correctamente.
 *       400:
 *         description: Solicitud incorrecta. Verifica que los datos sean válidos.
 *       500:
 *         description: Error en el servidor al intentar enviar el correo electrónico.
 */
