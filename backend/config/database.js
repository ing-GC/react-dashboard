import { Sequelize } from "sequelize";
const db = new Sequelize("atrato", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;