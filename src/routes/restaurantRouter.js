import express from "express";
import { addRating, getLike, getListUserLiked, getListUserRating } from "../controllers/restaurantController.js";


const restaurantRouter = express.Router();

// API chức năng
restaurantRouter.get("/get-like/:resID/", getLike);
// restaurantRouter.get("/get-unlike", getUnlike);
restaurantRouter.get("/get-list-user-liked/:resID", getListUserLiked
);

restaurantRouter.put("/add-rating/:resID/:userID", addRating);
restaurantRouter.get("/get-list-user-rating/:resID", getListUserRating);








// API get video-type
// restaurantRouter.get("/get-video-type", getVideoType)

// // API get video with type
// restaurantRouter.get("/get-video-with-type/:typeId", getVideoWithType)

// // API get video page
// restaurantRouter.get("/get-video-page/:page", getVideoPage)

// // API get video by id
// restaurantRouter.get("/get-video-by-id/:videoId", getVideoById)



export default restaurantRouter