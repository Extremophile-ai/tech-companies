import pool from '../db/db';

import {
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
        if (err) {
          throw res.status(404).json({
            status: 'error',
            message: 'Oops! An error occured while getting a single company',
            data: err.stack
          });
        } else {
          res.status(200).json({
            status: 'success',
            message: 'One company gottn',
            data: results.rows
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
      if (err) {
        return res.status(400).json({
          status: 'error',
          data: err.stack,
          message: 'Oops! An error occurred while creating a company.'
        });
      } else {
        return res.status(200).json({
          status: 'success',
          message: 'created company successfully',
          data: results.rows[0],
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
    const Values = [name, location, name_of_ceo, year_founded, website, email];
    pool.query(updateOne, Values,
      (err, res) => {
        if (err) {
          return res.status(404).json({
            status: 'error',
            message: 'Error! Company not found',
            data: err.stack
          });
        } else {
          return res.status(200).json({
            status: 'success',
            message: `Company Info modified with ID: ${id}`,
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

const deleteTechCompany = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(deleteQuery, [id], (error, results) => {
      if (error) {
        throw res.status(400).json({
          status: 'error',
          message: 'Error! Company not found',
          data: err.stack
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
