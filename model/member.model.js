import {DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import BorrowHistory from "./borrow_history.js";
// import BorrowHistory from "./borrow_history.js";

const Member = sequelize.define('Member', {
    member_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'members',
    timestamps: false
  });


  export default Member;