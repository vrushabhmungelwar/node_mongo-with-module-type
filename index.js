import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { createConnection } from "./connection.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
export const client = await createConnection();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 8000, () =>
  console.log(`Listening on port 8000...`)
);
