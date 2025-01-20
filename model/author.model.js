import {DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import Book from "./book.model.js";
// import Book from "./model/book.model.js";

const Author = sequelize.define('Author', {
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'authors',
    timestamps: false // No timestamps are required for this table
  });
  

  // Book.belongsTo(Author, { foreignKey: 'author_id' });
  // Author.hasMany(Book, { foreignKey: 'author_id' });
  
export default Author;