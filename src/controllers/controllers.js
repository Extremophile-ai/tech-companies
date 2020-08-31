import pool from '../db/db';

import {
  createTable,
  getAll,
  getOne,
  createNewText,
  updateOne,
  deleteQuery,
} from '../query/index';

const getAllNgTechCompanies = (req, res) => {
  try {
    pool.query(
      getAll,
      (err, results) => {
        if (err) {
          return res.status(400).json({
            status: 'error',
            data: err.stack,
            message: 'Error. Could not get all companies'
          });
        } else {
          return res.status(200).json({
            status: 'success',
            message: 'All companies gotten',
            data: results.rows
          });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

const getNgTechCompanyById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(
      getOne,
      [id],
      (err, results) => {
        if (results.rows.length === 1) {
          res.status(200).json({
            status: 'success',
            message: 'One company gotten',
            data: results.rows
          });
        } else {
          return res.status(404).json({
            status: 'error',
            message: `Oops! company with ${id} not found`,
          });
        }
      },
    );
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

const createNewTechCompany = (req, res) => {
  try {
    const { name, location, name_of_ceo, year_founded, email, website } = req.body;
    const Values = [name, location, name_of_ceo, year_founded, email, website];
    pool.query(createNewText, Values, (err, results) => {
      if (results) {
        // console.log(results);
        return res.status(200).json({
          status: 'success',
          message: 'created company successfully',
          data: results.rows,
        });
      } else {
        return res.status(400).json({
          status: 'error',
          data: err.stack,
          message: 'Oops! An error occurred while creating a company.'
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

const updateTechCompanyInfo = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, location, name_of_ceo, year_founded, email, website } = req.body;
    const Value = [name, location, name_of_ceo, year_founded, email, website, id];
    pool.query(updateOne, Value, (err, results) => {
      if (results.rowCount === 1) {
        // console.log(results.rowCount);
        // console.log(results.rows);
        return res.status(200).json({
          status: 'success',
          message: `Company Info modified with id = ${id}`,
          data: results.rows
        });
      } else {
        return res.status(404).json({
          status: 'error',
          message: 'Error! Company not found',
          data: err
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

const deleteTechCompany = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(deleteQuery, [id], (error, results) => {
      if (error) {
        throw res.status(400).json({
          status: 'error',
          message: 'Error! Company not found',
          data: error.stack
        });
      } else {
        return res.status(200).json({
          status: 'success',
          message: `Company deleted with ID: ${id}`,
          data: results.rows
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

export {
  getAllNgTechCompanies,
  getNgTechCompanyById,
  createNewTechCompany,
  updateTechCompanyInfo,
  deleteTechCompany,
};
