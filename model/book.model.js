import {DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import Author from "./author.model.js";
// import Author from "./model/author.model.js";
import BorrowHistory from "./borrow_history.js";


const Book = sequelize.define('Book', {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    tableName: 'books',
    timestamps: false // No timestamps are required for this table
  });
  // sequelize.sync({ force: true }).then(() => {
  //   console.log('Database & tables created!');
  // });

  // Book.belongsTo(Author, { foreignKey: 'author_id' });
  // Book.hasMany(BorrowHistory, { foreignKey: 'book_id' });
export default Book;
