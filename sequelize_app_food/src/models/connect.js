// chuỗi kết nối

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bt_3_app_food", "root", "123456", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

export default sequelize;
