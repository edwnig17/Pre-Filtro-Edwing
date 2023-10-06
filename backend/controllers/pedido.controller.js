const { Cliente } = require("../models/Cliente");
const { Pedido } = require("../models/Pedido");
const { transporter } = require("../config/nodemailerConnect");

const create = async (req, res) => {
    try {
        const { productos, name, lastName, email, canal, comuna, direccion, total } = req.body;

        let cliente = await Cliente.findOne({ email: email });
        if(!cliente){
            cliente = await Cliente({ nombre: name, apellido: lastName, email:email });
            await cliente.save();
        } 

        const pedido = await Pedido({
            fecha: new Date(), productos: productos, canal: canal,
            comuna: comuna, direccion:direccion, cliente: email,
            total:total
        });

        await pedido.save();
        console.log(pedido)

        let text = "";
        let prods = [];

        for(let i =0;i<productos.ids.length;i++){
            prods.push(`${productos.cantidades[i]}x ${productos.nombres[i]}`)
        }

        if(canal==="delivery") text=`Haz hecho un pedido el ${new Date().toLocaleString()} de ${prods.join(" ")} con delivery para ${direccion}, ${comuna} por $${total}`
        else text=`Haz hecho un pedido el ${new Date().toLocaleString()} de ${prods.join(" ")} con retiro en local por $${total}`
        //enviar correo
        await transporter.sendMail({
            from: '"Pizza House Master" <edwingstiven2023@gmail.com>', 
            to: email, 
            subject: "Tu  pedido en Restaurante Edwing cheese", 
            text: text 
          });
        res.status(201).json({ response: "OK", pedido: pedido });
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err })
    }
};

module.exports = { create };