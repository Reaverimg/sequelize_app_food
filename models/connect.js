// chuỗi kết nối

import { Sequelize } from "sequelize";
import config from "../config/config.js";

const sequelize = new Sequelize("db_movie", "root", 123456, {
  host: "localhost",
  port: mysql,
});

export default sequelize;
