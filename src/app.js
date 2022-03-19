import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", productRouter);
app.use("/api", categoryRouter);

mongoose
  .connect("mongodb://localhost:27017/demo-node")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
