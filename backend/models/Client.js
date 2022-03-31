import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Client = db.define("clients", {
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    last_name_2: {
        type: DataTypes.STRING
    },
    date_of_birth: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM("pending", "in process", "completed"),
        defaultValue: "pending"
    },
    asigned_analyst: {
        type: DataTypes.STRING
    },
    card_number: {
        type: DataTypes.STRING
    },
    card_provider: {
        type: DataTypes.STRING
    },
    card_cvv: {
        type: DataTypes.STRING
    },
    card_pin: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Client;