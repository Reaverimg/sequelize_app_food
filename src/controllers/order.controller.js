import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const postOrder = async (req, res) => {
  try {
    const { userId, amount, code, arrSubId } = req.body;
    const newOrder = await model.orders.create({
      amount,
      code,
      arr_sub_id: JSON.stringify(arrSubId),
      user_id: userId,
    });
    if (!newOrder) {
      return;
    }
    res.status(201).send(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error placing the order");
  }
};

export { postOrder };
