import express from "express";
import {
  getVideo,
  getType,
  getVideoType,
  getVideoPage,
} from "../controllers/video.controller.js";

const videoRouter = express.Router();

videoRouter.get("/get-video", getVideo);

videoRouter.get("/get-type", getType);

videoRouter.get("/get-video-type/:typeId", getVideoType);

videoRouter.get("/get-video-page/:page", getVideoPage);

export default videoRouter;
