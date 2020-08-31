const createTable = `CREATE TABLE IF NOT EXISTS NG_tech_companies (
  id SERIAL PRIMARY KEY NOT NULL, 
  name VARCHAR(200) UNIQUE NOT NULL, 
  location VARCHAR(300)  UNIQUE NOT NULL, 
  name_of_ceo TEXT NOT NULL,
  year_founded integer,
  email VARCHAR,
  website VARCHAR
)`;

const getAll = 'SELECT * FROM ng_tech_companies ORDER BY id ASC';

const getOne = 'SELECT * FROM ng_tech_companies WHERE id = $1';

const createNewText = 'INSERT INTO ng_tech_companies (name, location, name_of_ceo, year_founded, website, email ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

const updateOne = 'UPDATE ng_tech_companies SET name = $1, location = $2, name_of_ceo = $3, year_founded = $4, email = $5, website = $6 WHERE id = $7 RETURNING *';

const deleteQuery = 'DELETE FROM ng_tech_companies WHERE id = $1';

export {
  createTable,
  getAll,
  getOne,
  createNewText,
  updateOne,
  deleteQuery,
};
