import mysql from "mysql2";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

// Connect to MySQL
export const DB = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

export const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:3306/${process.env.DB_NAME}`);


const DBConnect = async ()=>{
    DB.connect((error) => {
        if (error) {
            console.log("Error connecting to MySql" + error);
        } else {
            console.log("Connected to MySql" );
        }
    });
}



export default DBConnect;