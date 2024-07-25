import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import rootRouter from "./routes/root.router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(rootRouter);
app.listen(8080);

const connect = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3307",
  database: "bt_3_app_food",
});
