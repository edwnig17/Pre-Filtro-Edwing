const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Conexión exitosa a MongoDB");
  } catch (err) {
    console.error("Error de conexión a MongoDB:", err);
    process.exit(1);
  }
};

module.exports = mongoConnect;
