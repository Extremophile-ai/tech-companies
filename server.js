import express from 'express';
import bodyParser from 'body-parser';
import {
    getAllNgTechCompanies,  
    getNgTechCompanyById, 
    createNewTechCompany, 
    updateTechCompanyInfo, 
    deleteTechCompany
} from './queries';


const app = express();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


  
app.get('/', (req, res)=>{
res.send('Top Tech companies in Nigeria!')
  
});

// GET ALL NIGERIAN TECH COMPANIES IN THE DB
app.get('/company', getAllNgTechCompanies );

// GET ONE TECH COMPANY
app.get('/company/:id', getNgTechCompanyById); 



// CREATE NEW COMPANY AND ADD TO THE DB
app.post('/company/create', createNewTechCompany );

// UPDATE TECH COMPANY INFO
app.put('/company/:id', updateTechCompanyInfo);

// DELETE TECH COMPANY
app.delete('/company/:id', deleteTechCompany);




app.listen(process.env.PORT, () => {
  console.log('Connected') 
});

// app.listen(3003, ()=> { 
//     console.log('Server started!!') 
// });