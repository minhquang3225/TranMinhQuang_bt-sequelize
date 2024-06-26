import express from "express";
import { getLike } from "../controllers/restaurantController.js";


const restaurantRouter = express.Router();

// API chức năng
restaurantRouter.get("/get-like/:resID/", getLike);
// restaurantRouter.get("/get-unlike", getUnlike);
// restaurantRouter.get("/get-list-user-liked". getListUserLiked);

// restaurant.post("/add-feedback", feedback);
// restaurant.get("/get-list-user-feedback", getListUserFeedback);








// API get video-type
// restaurantRouter.get("/get-video-type", getVideoType)

// // API get video with type
// restaurantRouter.get("/get-video-with-type/:typeId", getVideoWithType)

// // API get video page
// restaurantRouter.get("/get-video-page/:page", getVideoPage)

// // API get video by id
// restaurantRouter.get("/get-video-by-id/:videoId", getVideoById)



export default restaurantRouter