import {Pool} from 'pg';

const db = new Pool({
    host : '127.0.0.1',
    user : 'DevCareer',
    password : 'Power1050',
    database : 'DevCareer'
    
});

db.connect();


const getAllNgTechCompanies = (req, res) => {
    db.query(
      'SELECT * FROM ng_tech_companies ORDER BY id ASC', 
      (err, results) => {
      res.status(200).json(results.rows);
    })
}
 
const getNgTechCompanyById = (req, res) =>{
    const id = parseInt(req.params.id);
    db.query(
      'SELECT * FROM ng_tech_companies WHERE id = $1', 
      [id], 
      (err, results)=>{
        res.status(200).json(results.rows);
        if(err) {
          throw err
      }
    })
}


const createNewTechCompany =(req, res) =>{
  const text = 'INSERT INTO ng_tech_companies (name, location, name_of_ceo, year_founded, website, email ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [
    req.body.name, 
    req.body.location, 
    req.body.name_of_ceo, 
    req.body.year_founded, 
    req.body.website, 
    req.body.email]
  db.query(text, values, (err, results) => {
      if (err) {
        console.log(err.stack)
      } else {
        res.status(200).json(results.rows[0])
      }
    })
}


const updateTechCompanyInfo =(req, res) =>{
    const id = parseInt(req.params.id);
    const {name, location, name_of_ceo, year_founded, email, website} = req.body;
    db.query(`UPDATE ng_tech_companies SET name = $1, location = $2, name_of_ceo = $3, year_founded = $4, email = $5, website = $6 WHERE id = ${id}`,
    [name, location, name_of_ceo, year_founded, email, website],
    (err, results) => {
        if (err) {
            throw err
          }
          else{
            res.status(200).send(`Company Info modified with ID: ${id}`) 
          }
       
    });
}

const deleteTechCompany =(req, res) =>{
    const id = parseInt(req.params.id);
    db.query('DELETE FROM ng_tech_companies WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Company deleted with ID: ${id}`)
    });
}


export { 
    getAllNgTechCompanies,  
    getNgTechCompanyById, 
    createNewTechCompany, 
    updateTechCompanyInfo, 
    deleteTechCompany
};