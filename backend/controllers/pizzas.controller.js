const { PizzasModel } = require("../models/Pizzas");
const { ProductsModel } = require("../models/Products");

const createPizza = async (req, res) => {
  try {
    const { title, size, mass, products, sauce, price, cheese } = req.body;
    const newPizza = await PizzasModel.create({
      title: title,
      size: size,
      mass: mass,
      products: products,
      sauce: sauce,
      price: price,
      cheese: cheese,
    });
    res.status(201).json({ msj: "Pizza created", newPizza });
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const getPizzas = async (req, res) => {
  try {
    const pizzas = await PizzasModel.find().populate("products");
    res.json(pizzas);
  } catch (err) {
    console.error({ err });
    res.status(500).json({ msj: "Internal server error" });
  }
};

const getOnePizza = async (req, res) => {
  try {
    const pizza = await PizzasModel.findOne({
      _id: req.params.id,
    });
    res.json(pizza);
  } catch (err) {
    console.error({ err });
    res.status(500).json({ msj: "Internal server error" });
  }
};

const updatePizza = async (req, res) => {
  try {
    const updatedPizza = await PizzasModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedPizza) {
      return res.status(404).json({ msj: "Pizza not found" });
    }
    res.json({ msj: "Pizza updated", updatedPizza });
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const deletePizza = async (req, res) => {
  try {
    const deletedPizza = await PizzasModel.deleteOne({
      _id: req.params.id,
    });
    if (deletedPizza.deletedCount === 0) {
      return res.status(404).json({ msj: "Pizza not found" });
    }
    res.json({ msj: "Pizza deleted", deletedPizza });
  } catch (err) {
    console.error({ err });
    res.status(500).json({ msj: "Internal server error" });
  }
};

module.exports = {
  createPizza,
  getPizzas,
  getOnePizza,
  updatePizza,
  deletePizza,
};
