const { transporter } = require("../config/nodemailerConnect");

const sendEmail = async (req, res) => {
    try {
        const { email } = req.body;
        await transporter.sendMail({
            from: '"Tú reservación Pizza house " <edwingstiven2023@gmail.com>', 
            to: email, 
            subject: "Hello ✔", 
            text: "Hello world?", 
            html: "<b>Hello world?</b>", 
          });
        res.status(200).json({response: "Ok"});
    } catch (err) {
        console.error(err);
        res.status(500).json({response: "Error", error: err});
    }
};



module.exports = { sendEmail };