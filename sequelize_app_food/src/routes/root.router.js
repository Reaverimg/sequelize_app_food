import express from "express";
import {
  getLikeByRes,
  getLikeByUser,
  postUserLike,
  postUserUnLike,
} from "../controllers/like.controller.js";
import {
  getRateByRes,
  getRateByUser,
  postRate,
} from "../controllers/rate.controller.js";
import { postOrder } from "../controllers/order.controller.js";

const rootRouter = express.Router();

rootRouter.post("/like", postUserLike);

rootRouter.post("/unlike", postUserUnLike);

rootRouter.get("/like-by-user/:userId", getLikeByUser);

rootRouter.get("/like-by-res/:resId", getLikeByRes);

rootRouter.post("/rate", postRate);

rootRouter.get("/rate-by-user/:userId", getRateByUser);

rootRouter.get("/rate-by-res/:resId", getRateByRes);

rootRouter.post("/order", postOrder);

export default rootRouter;
