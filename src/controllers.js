import pool from './db/db';

import {
  getAll,
  getOne,
  createNewText,
  updateOne,
  deleteQuery
} from './query/index';


const getAllNgTechCompanies = (req, res) => {
    pool.query(
      getAll, 
      (err, results) => {
      res.status(200).json(results.rows);
    })
}

const getNgTechCompanyById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query( 
      getOne, 
      [id], 
      (err, results)=>{
        res.status(200).json(results.rows);
        if(err) {
          throw err
      }
    })
}


const createNewTechCompany =(req, res) =>{
  const {name, location, name_of_ceo, year_founded, email, website} = req.body;
  const Values =  [name, location, name_of_ceo, year_founded, website, email];
  pool.query(createNewText, Values , (err, results) => {
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
    const Values =  [name, location, name_of_ceo, year_founded, website, email];
    pool.query(updateOne,Values,
    (err, res) => {
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
    pool.query(deleteQuery, [id], (error, results) => {
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