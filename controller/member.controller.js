import { DB } from "../utils/db.js";

export const createMember = async(req,res)=>{
    const { name, contact_info } = req.body;
    const query =
        "INSERT INTO members (name, contact_info) VALUES (?, ?)";
    DB.query(query, [name, contact_info], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ author_id: result.insertId });
    });
}

export const getAllMembers = async(req,res)=>{
    const query =
        "SELECT * from members";
    DB.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ result });
    });
}

export const getBooksByAuthor = async(req,res)=>{

}