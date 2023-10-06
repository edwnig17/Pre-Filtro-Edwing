const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  mensaje: String,
});

const Contacto = mongoose.model('Contactos', contactoSchema, 'Contactos');

module.exports = Contacto;
    