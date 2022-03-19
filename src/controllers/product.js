import Product from "../models/product";

export const list = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: "Cannot get products",
    });
  }
};
export const create = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Cannot add new product",
    });
  }
};
export const read = async (req, res) => {
  const target = { _id: req.params.id };
  try {
    const product = await Product.findOne(target).exec();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Cannot get any product",
    });
  }
};
export const remove = async (req, res) => {
  const target = { _id: req.params.id };
  try {
    const product = await Product.findOneAndDelete(target).exec();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Cannot delete product",
    });
  }
};
export const update = async (req, res) => {
  const target = { _id: req.params.id };
  const message = req.body;
  const options = { new: true };
  try {
    const product = await Product.findOneAndUpdate(
      target,
      message,
      options
    ).exec();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Cannot update product",
    });
  }
};
