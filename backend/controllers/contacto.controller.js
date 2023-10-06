const Contacto = require('../models/Contacto.js');

const guardarContacto = async (req, res) => {
  try {
    const { name, lastName, email, mensaje } = req.body;

    const nuevoContacto = new Contacto({
      name,
      lastName,
      email,
      mensaje,
    });

    await nuevoContacto.save();

    res.status(201).json({ message: 'Contacto guardado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar el contacto' });
  }
};

module.exports = { guardarContacto };
