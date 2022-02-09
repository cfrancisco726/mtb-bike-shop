import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    model: { type: String, require: true },
    build: { type: String, require: true },
    year: { type: String, require: true },
    slug: { type: String, require: true },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    countInStock: { type: Number, require: true },
    image: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
