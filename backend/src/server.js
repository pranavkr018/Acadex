import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import "dotenv/config";



const app = express();

app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Acadex API is running"
    });
});


await connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started at port ${process.env.PORT}`);
})