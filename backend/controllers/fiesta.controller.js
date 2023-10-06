const { Fiesta } = require("../models/Fiesta");
const { Cliente } = require("../models/Cliente");
const { transporter } = require("../config/nodemailerConnect");

const create = async (req, res) => {
    try {
        const { fecha, personas, name, lastName, email } = req.body;
        if (fecha < new Date()) return res.status(500).json({ response: "Error", message: "Can't reserve past times" });

        let cliente = await Cliente.findOne({ email: email });
        if (!cliente) {
            cliente = await Cliente({ nombre: name, apellido: lastName, email: email });
            await cliente.save();
        }

        const fiesta = await Fiesta({
            fecha: fecha, confirmada: false, personas: personas, cliente: email });

        await fiesta.save();
        console.log(fiesta);
        const fechaEmail = new Date(fecha);
     
        //enviar correo
        await transporter.sendMail({
            from: '"Pizza House Master" <Edwingstiven2023@gmail.com>', 
            to: email, 
            subject: "Solicitud de reserva para fiesta", 
            text: `Haz hecho una solicitud de reserva para fiesta para el ${fechaEmail.toLocaleDateString()}, te contactaremos a la brevedad` 
        });
        res.status(201).json({ response: "OK", fiesta: fiesta });
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err })
    }
};
const confirm = async (req, res) => {
    try {
        const fiestaId = req.params.id; 
        if (!fiestaId) return res.status(400).json({ response: "Error", message: "Fiesta ID is required" });

        const fiesta = await Fiesta.findById(fiestaId);
        if (!fiesta) return res.status(404).json({ response: "Error", message: "Fiesta not found" });

        fiesta.confirmada = true;
        await fiesta.save();
        res.status(200).json({ response: "OK", message: "Reservation confirmed" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err })
    }
};

module.exports = { create, confirm };
