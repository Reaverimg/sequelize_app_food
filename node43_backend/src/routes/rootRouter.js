// quản lý các đối tượng router

import express from "express";
import userRouter from "./user.router.js";
import videoRouter from "./video.router.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);

rootRouter.use("/video", videoRouter);

// rootRouter.use("/product",productRouter)

export default rootRouter;

// lcoalhost:8080/user/create-user
