import Category from "../models/category";
import product from "../models/product";

export const list = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    res.json(categories);
  } catch (error) {
    res.status(400).json({
      message: "Cannot get any categories",
    });
  }
};
export const read = async (req, res) => {
  const target = { _id: req.params.id };
  try {
    const category = await Category.findOne(target).exec();
    const products = await product.find({ category: category._id }).exec();
    res.status(200).json({ category, products });
  } catch (error) {
    res.status(400).json({
      message: "Cannot get any categories",
    });
  }
};
export const remove = async (req, res) => {
  const target = { _id: req.params.id };
  try {
    const category = await Category.findOneAndDelete(target).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      message: "Cannot delete this category",
    });
  }
};
export const update = async (req, res) => {
  const target = { _id: req.params.id };
  const message = req.body;
  const options = { new: true };
  try {
    const category = await Category.findOneAndUpdate(
      target,
      message,
      options
    ).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      message: "Cannot update this category",
    });
  }
};
export const create = async (req, res) => {
  try {
    const category = await new Category(req.body).save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      message: "Cannot add new Category",
    });
  }
};
