import express from 'express'
import userRouter from './userRouter.js'
import restaurantRouter from './restaurantRouter.js'

const rootRouter = express.Router()

rootRouter.use("/restaurant",restaurantRouter)
rootRouter.use("/user",userRouter)

export default rootRouter

// localhost:8080/video/get-video

