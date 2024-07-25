import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const postRate = async (req, res) => {
  try {
    const { userId, resId, amount } = req.body;
    const newRating = await model.rate_res.create({
      amount,
      date_res: new Date(),
      user_id: userId,
      res_id: resId,
    });
    if (!newRating) {
      return;
    }
    res.status(200).send(newRating);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error rating the restaurant");
  }
};

const getRateByRes = async (req, res) => {
  try {
    const { resId } = req.params;
    const ratingsByRes = await model.rate_res.findAll({
      where: { res_id: resId },
      include: ["re"],
    });
    if (!ratingsByRes) {
      return;
    }
    res.status(200).send(ratingsByRes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error get ratings by restaurant");
  }
};

const getRateByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const ratingsByUser = await model.rate_res.findAll({
      where: { user_id: userId },
      include: ["user"],
    });
    if (!ratingsByUser) {
      return;
    }
    res.status(200).send(ratingsByUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error get ratings by user");
  }
};

export { postRate, getRateByRes, getRateByUser };
