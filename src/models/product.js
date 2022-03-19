import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
