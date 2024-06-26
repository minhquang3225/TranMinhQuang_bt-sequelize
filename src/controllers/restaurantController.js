import { Sequelize } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { responseSend } from "../config/response.js";

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

export {
    getLike
};