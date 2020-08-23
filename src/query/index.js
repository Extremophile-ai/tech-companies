

const getAll = 'SELECT * FROM ng_tech_companies ORDER BY id ASC';

const getOne = 'SELECT * FROM ng_tech_companies WHERE id = $1';

const createNewText  = 'INSERT INTO ng_tech_companies (name, location, name_of_ceo, year_founded, website, email ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
 
const updateOne =`UPDATE ng_tech_companies SET name = $1, location = $2, name_of_ceo = $3, year_founded = $4, email = $5, website = $6 WHERE id = $1`
const deleteQuery = 'DELETE FROM ng_tech_companies WHERE id = $1';

export {
    getAll,
    getOne,
    createNewText,
    updateOne,
    deleteQuery
};