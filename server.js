import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import database from "./config/db.js";
import userRoutes from "./routes/users.js";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
database();
dotenv.config();

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
