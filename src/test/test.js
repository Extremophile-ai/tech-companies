import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import {
  getAllNgTechCompanies,
  getNgTechCompanyById,
  createNewTechCompany,
  updateTechCompanyInfo,
  deleteTechCompany,
} from '../controllers/controllers';

// assertion style
chai.should();
chai.use(chaiHttp);
const url = '/company';

describe('Server.js should return all endpoints', async () => {
  describe('Test for Create a company', () => {
    it('it should create a company successfully', async () => {
      const res = await chai
        .request(server)
        .post(`${url}/create`)
        .send(createNewTechCompany);
      (res).should.have.status(200);
      // (res).should.be.a('string');
      // done();
    });
  });

  // describe('Get /company', () => {
  //   it('it should get all companies', (done) => {
  //     const res = chai
  //       .request(server)
  //       .get('/company');
  //     res.should.have.status(200);
  //     (res.body).should.be.a('object');
  //     done();
  //   });
  // });
});
