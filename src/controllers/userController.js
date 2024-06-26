import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const order = async (req, res) => {
    const user_id = req.params.userID;
    const {foodID, amount} = req.body;
    const existRecord = await model.orders.findOne({
        //cố tới đây :(((, buồn ngủ quá Long ơi
    })
};

export {
    order
};