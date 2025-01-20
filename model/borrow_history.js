import {DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import Book from "./book.model.js";
import Member from "./member.model.js";

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


// BorrowHistory.belongsTo(Member, { foreignKey: 'member_id' });
// BorrowHistory.belongsTo(Book, { foreignKey: 'book_id' });

// Sync the models with the database
// sequelize.sync()
//   .then(() => console.log('Tables have been created (if they didn\'t exist).'))
//   .catch(err => console.error('Error syncing models:', err));

  export default BorrowHistory;