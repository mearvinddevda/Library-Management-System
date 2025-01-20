import { DB } from "../utils/db.js";

export const createAuthor = async(req,res)=>{
    const { name, bio } = req.body;
	const query =
		"INSERT INTO authors (name, bio) VALUES (?, ?)";
	DB.query(query, [name, bio], (err, result) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(201).send({ author_id: result.insertId });
	});
}

export const getBooksByAuthor = async(req,res)=>{

}