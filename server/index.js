import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import UserRouter from "./routes/User.js"; // Ensure the correct path and file extension
import ProductsRoutes from "./routes/Products.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something Went Wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    });
});

app.get("/", async (req, res) => {
    res.status(200).json({ message: "Hello Developer" });
});

app.use("/api/user/", UserRouter);
app.use("/api/products/",ProductsRoutes);
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_DB).then(
        () => { console.log("Connected to Database") }
    ).catch((err) => {
        console.log(err);
    });
}

const startServer = async () => {
    connectDB();
    try {
        app.listen(8080, () => { console.log("Server started on 8080") });
    } catch (error) {
        console.log(error);
    }
}

startServer();
