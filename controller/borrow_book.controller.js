import { DB } from "../utils/db.js";

export const createBorrowHistory = async (req, res) => {
	const { member_id, book_id } = req.body;
	const query =
		"INSERT INTO borrow_history (borrow_date,  return_deadline , return_status,book_id,member_id) VALUES (CURRENT_DATE, DATE_ADD(CURRENT_DATE, INTERVAL 15 DAY),false , ? ,?)";
	DB.query(query, [book_id, member_id], (err, result) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).json(result);
	});
};


export const getOverDueBooks = async(req,res) =>{
    const member_id=req.params.member_id;
    const query =`SELECT books.title from books inner join borrow_history on books.book_id = borrow_history.book_id where current_date()>return_deadline and return_status = false and member_id=${member_id} ;`
    DB.query(query,(error,result)=>{
        if(error){
            return res.status(500).send(error);
        }
        res.status(200).send(result);
    })
}

