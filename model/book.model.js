import {DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";



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

export default Book;
