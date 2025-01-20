import { DB } from "../utils/db.js";


export const createBook = async (req, res) => {
	const { title, author_id, genre, availability } = req.body;
	const query =
		"INSERT INTO books (title, author_id, genre, availability) VALUES (?, ?, ?, ?)";
	DB.query(query, [title, author_id, genre, availability], (err, result) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(201).send({ book_id: result.insertId });
	});
};

export const getAllBooks = async (req, res) => {
	  const query = 'SELECT * FROM books';
	  DB.query(query, (err, results) => {
	    if (err) {
	      return res.status(500).send(err);
	    }
	    res.status(200).json(results);
	  });
};

export const findBookByAuthId = async(req,res)=>{
	const authId = req.params.author_id ;
	const query = `SELECT books.title FROM Books INNER JOIN authors ON books.author_id = ${authId}`;
	DB.query(query,(error , result)=>{
		if(error){
			return res.status(500).send(error);
		}
		else{
			res.status(200).send(result);
		}
	});
};
export const findBookByAuthName = async(req,res)=>{
	const author_name = req.params.author_name ;
	const query = `SELECT books.title, authors.name
FROM books
INNER JOIN authors ON books.author_id = authors.author_id
WHERE authors.name = ${author_name};`;
	DB.query(query,(error , result)=>{
		if(error){
			return res.status(500).send(error);
		}
		else{
			res.status(200).send(result);
		}
	});
};

export const countBooksByGenre = async(req,res)=>{
	const genre_type = req.params.genre_type ;
	const query = `SELECT count(title) as "No of Books" from books where books.genre =  ${genre_type };`;
	DB.query(query,(error , result)=>{
		if(error){
			return res.status(500).send(error);
		}
		else{
			res.status(200).send(result);
		}
	});
};

export const search = async(req,res)=>{  //y title, author, or genre
	const title = req.query.title;
	const author = req.query.author;
	const genre = req.query.genre;

	let query ="SELECT books.title from books inner join authors on books.author_id =authors.author_id where " ;//WHERE 1=1 is used to simplify adding conditions
	const queryParams = [];

	if (title) {
		query += `books.title ="${title}"`;
	  }
	  if (author ) {
		if(title) query+=" or "
		query += `authors.name="${author}"`;
	  }
	  if (genre) {
		if(title || author) query+=" or "
		query += `books.genre ="${genre}"`;
	  }

	  DB.execute(query, (err, results) => {
		if (err) {
		  console.error(err);
		  return res.status(500).json({ success: false, message: 'Server error' });
		}
	
		if (results.length > 0) {
		  return res.status(200).json({ success: true, books: results });
		} else {
		  return res.status(404).json({ success: false, message: 'No books found matching your criteria.' });
		}
	  });
}

