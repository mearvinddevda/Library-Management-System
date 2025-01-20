import {DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";


const BorrowHistory = sequelize.define('BorrowHistory', {
    borrow_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    borrow_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    return_deadline: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    return_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'borrow_history',
    timestamps: false
  });



  export default BorrowHistory;