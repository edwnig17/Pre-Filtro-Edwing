const { Reserva, ReservaSchema } = require("../models/Reserva");
const { Mesa } = require("../models/Mesa");
const { Cliente } = require("../models/Cliente");
const { Turno } = require("../models/Turno");
const { transporter } = require("../config/nodemailerConnect");

const create = async (req, res) => {
  try {
    const { turnoId, personas, name, lastName, email } = req.body;
    const turno = await Turno.findOne({ uuid: turnoId });
    if (!turno || turno.fecha < new Date()) {
      return res.status(500).json({ response: "Error", message: "Can't reserve past times" });
    }

    let mesas = await Mesa.find({ personas: { $gte: personas } });
    let cliente = await Cliente.findOne({ email: email });

    if (!cliente) {
      cliente = await Cliente({ nombre: name, apellido: lastName, email: email });
      await cliente.save();
    }

    if (turno.reservas) {
      mesas = mesas.filter(mesa => !turno.reservas.some(el => el.mesa === mesa.numero));
    }

    if (mesas.length === 0) {
      return res.status(500).json({ response: "Error", message: "No available tables" });
    }

    const reserva = await Reserva.create({
      fecha: turno.fecha,
      confirmada: false,
      personas: personas,
      mesa: mesas[0].numero,
      cliente: cliente.email,
      turno_uuid: turno.uuid
    });

    if (!turno.reservas) {
      turno.reservas = [];
    }

    turno.reservas.push(reserva);
    await turno.save();

    const fechaMail = new Date(turno.fecha);

    await transporter.sendMail({
      from: '"Pizza House Master" <Edwingstiven2023@gmail.com>',
      to: email,
      subject: "Verificación de reserva",
      text: `Has hecho una reserva para el ${fechaMail.toLocaleString()}, por favor verifica tu reserva en el siguiente link: http://localhost:8000/api/reserva/confirm/${reserva._id}`
    });

    res.status(201).json({ response: "OK", reserva: reserva });
  } catch (err) {
    console.error(err);
    res.status(500).json({ response: "Error", message: err });
  }
};

const check = async (req, res) => {
  try {
    const { turnoId, personas } = req.body;
    const turno = await Turno.findOne({ uuid: turnoId });

    if (!turno) {
      return res.status(404).json({ response: "Error", message: "Turno no encontrado" });
    }

    if (turno.fecha < new Date()) {
      return res.status(500).json({ response: "Error", message: "No se pueden reservar horarios pasados" });
    }

    let mesasDisponibles = await Mesa.find({ personas: { $gte: personas } });

    if (turno.reservas) {
      mesasDisponibles = mesasDisponibles.filter(mesa =>
        !turno.reservas.some(el => el.mesa === mesa.numero)
      );
    }

    if (mesasDisponibles.length > 0) {
      res.status(200).json({ response: "OK", available: true, mesas: mesasDisponibles, reservas: turno.reservas });
    } else {
      res.status(200).json({ response: "OK", available: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ response: "Error", message: err, available: false });
  }
};

const confirm = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) return res.status(404).json({ response: "Error", message: "Not found" });
    reserva.confirmada = true;
    await reserva.save();
    res.status(200).json({ response: "OK", message: "Reservation confirmed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ response: "Error", message: err });
  }
};

const getReservasDisponibles = async (req, res) => {
  try {
    const reservasDisponibles = await Reserva.find({ confirmada: false });
    res.status(200).json(reservasDisponibles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las reservas disponibles" });
  }
};

module.exports = { create, check, confirm, getReservasDisponibles };
