import { Sequelize } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { responseSend } from "../config/response.js";
import userRouter from "../routes/userRouter.js";

let model = initModels(sequelize);

const getLike = async (req, res) => {
    const res_id = req.params.resID
    const data = await model.like_res.count({
        where: {
            res_id: {
                [Sequelize.Op.eq]: res_id
            }
        }
    })
    const message = `res_id ${res_id} có ${data} like`
    res.send(message)
};
const getListUserLiked = async (req, res) => {
    const res_id = req.params.resID
    const data = await model.like_res.findAll({
        where: { res_id },
        include: [{
            model: model.user,
            as: 'user',
            attributes: ['full_name']
        }],
        attributes: ["user_id"],

        raw: true
    })


    res.status(200).send({ message: `danh sach user đã like resID ${res_id}`, data })
}
const addRating = async (req, res) => {
    const user_id = req.params.userID;
    const res_id = req.params.resID;
    const newRating = req.body.rating;
    let message = ''

    try {
        // Tìm kiếm đánh giá hiện tại
        const existingRating = await model.rate_res.findOne({
            where: {
                user_id,
                res_id,
            }
        });

        if (existingRating) {
            // Nếu tìm thấy, cập nhật giá trị đánh giá
            existingRating.amount = newRating;
            await existingRating.save();
            message = `UserID: ${user_id} đã cập nhật rating: ${newRating} cho resID: ${res_id}`
        } else {
            message = 'Không tìm thấy đánh giá để cập nhật.'
        }
        res.status(200).send({ message })

    } catch (error) {
        console.error('Lỗi khi cập nhật đánh giá:', error);
    }

}
const getListUserRating = async(req, res) => {
    const res_id = req.params.resID

    const {res_name} = await model.restaurant.findByPk(res_id);
    const data = await model.rate_res.findAll({
        where: { res_id },
        include: [{
            model: model.user,
            as: 'user',
            attributes: ['full_name']
        }],
        attributes: ['amount'],
        raw: true
    })

    res.status(200).send({ message: `danh sach user đã rating nha hang ${res_name}`, data })
}

export {
    getLike,
    getListUserLiked,
    addRating,
    getListUserRating,
};