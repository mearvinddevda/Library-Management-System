import { sequelize } from "../utils/db.js";

export default (models) => {
  const { Author, Book, BorrowHistory, Member } = models;

  // Define associations

  // One-to-many association: An Author can have many Books
  Author.hasMany(Book, { foreignKey: "author_id" });
  Book.belongsTo(Author, { foreignKey: "author_id" });

  // One-to-many association: A Book can have many BorrowHistories
  Book.hasMany(BorrowHistory, { foreignKey: "book_id" });
  BorrowHistory.belongsTo(Book, { foreignKey: "book_id" });

  // One-to-many association: A Member can have many BorrowHistories
  Member.hasMany(BorrowHistory, { foreignKey: "member_id" });
  BorrowHistory.belongsTo(Member, { foreignKey: "member_id" });

  // Sync the database once after the associations are defined
  sequelize.sync({ force: false }).then(() => {
    console.log("Database & tables created!");
  });
};
