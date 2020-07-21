This is an API for top Nigerian based Tech companies.


An  'esm' package was used to enable the use of the es6 import syntax.

To start, run  'nodemon -r esm'



To create a Nigerian Tech company,
POST (URL)

{
    "name": "name",
    "location": "address of company",
    "name_of_ceo": "name of company's ceo",
    "year_founded": year founded,
    "website": "company's website",
    "email": "company's email address"
}


To Edit a company's info, 
PUT (URL)

{
    "name": "new name",
    "location": "Updated location",
    "name_of_ceo": "new ceo",
    "year_founded": year founded,
    "website": "new website",
    "email": "current working email"
}

