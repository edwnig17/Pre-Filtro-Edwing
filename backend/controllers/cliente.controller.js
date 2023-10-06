// controllers/cliente.controller.js

const Cliente = require('../models/Cliente.js');

exports.crearCliente = async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body;

    const clienteExistente = await Cliente.findOne({ email });

    if (clienteExistente) {
      return res.status(400).json({ error: 'El cliente ya existe' });
    }

    const nuevoCliente = new Cliente({ nombre, apellido, email });
    await nuevoCliente.save();

    res.status(201).json({ mensaje: 'Cliente creado con éxito', cliente: nuevoCliente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};



