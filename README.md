
[![Build Status](https://travis-ci.org/Extremophile-ai/tech-companies.svg?branch=develop)](https://travis-ci.org/Extremophile-ai/tech-companies)

[![Coverage Status](https://coveralls.io/repos/github/Extremophile-ai/tech-companies/badge.svg?branch=develop)](https://coveralls.io/github/Extremophile-ai/tech-companies?branch=develop)

This is an API for top Nigerian based Tech companies.


An  'esm' package was used to enable the use of the es6 import syntax.

To start, run  'nodemon -r esm server.js'

Link to Heroku https://stark-reef-17608.herokuapp.com/

To get all Tech companies,
GET https://stark-reef-17608.herokuapp.com/company



To get a single Tech company,
GET https://stark-reef-17608.herokuapp.com/company/:id



To create a Nigerian Tech company,
POST https://stark-reef-17608.herokuapp.com/company/create

{
    "name": "name",
    "location": "address of company",
    "name_of_ceo": "name of company's ceo",
    "year_founded": year founded,
    "website": "company's website",
    "email": "company's email address"
}



To Edit a company's info, 
PUT https://stark-reef-17608.herokuapp.com/company/:id

{
    "name": "new name",
    "location": "Updated location",
    "name_of_ceo": "new ceo",
    "year_founded": year founded,
    "website": "new website",
    "email": "current working email"
}



To delete a company,
DELETE https://stark-reef-17608.herokuapp.com/company/:id
