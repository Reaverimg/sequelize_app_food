import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const postUserLike = async (req, res) => {
  try {
    const { resId, userId } = req.body;
    const likeResByUser = await model.like_res.create({
      date_like: new Date(),
      res_id: resId,
      user_id: userId,
    });
    if (!likeResByUser) {
      return;
    }
    res.status(200).send(likeResByUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error like the restaurant");
  }
};

const postUserUnLike = async (req, res) => {
  try {
    const { resId, userId } = req.body;
    const unLikeResByUser = await model.like_res.destroy({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    if (unLikeResByUser) {
      res.status(200).send("Unlike successfully");
    } else {
      res.status(404).send("Like not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error unlike the restaurant");
  }
};

const getLikeByRes = async (req, res) => {
  try {
    const { resId } = req.params;
    const likesOfRes = await model.like_res.findAll({
      where: {
        res_id: resId,
      },
      include: ["user"],
    });
    if (!likesOfRes) {
      return;
    }
    res.status(200).send(likesOfRes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error get like by restaurant");
  }
};

const getLikeByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const likesOfUser = await model.like_res.findAll({
      where: { user_id: userId },
      include: ["re"],
    });
    if (!likesOfUser) {
      return;
    }
    res.status(200).send(likesOfUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error get likes by user");
  }
};

export { postUserLike, postUserUnLike, getLikeByRes, getLikeByUser };
