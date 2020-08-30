import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import demoData from './postdata';

// assertion style
chai.should();

chai.use(chaiHttp);

describe('Server.js should return all endpoints', async () => {
  describe('/POST create company', () => {
    it('it should create a company successfully', (done) => {
      chai
        .request(server)
        .post('/company/create')
        .send(demoData.createNewTechCompany())
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status').eql('success');
          res.body.should.have.property('message').eql('created company successfully');
          res.body.should.have.property('data');
          done();
        });
    });
  });

  describe('/Get company', () => {
    it('it should get all companies', (done) => {
      chai
        .request(server)
        .get('/company')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.data.length.should.be.eql(1);
          done();
        });
    });
  });

  describe('/Get company/:id', () => {
    it('it should get one company by id', (done) => {
      chai
        .request(server)
        .get('/company/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.data.length.should.be.eql(1);
          done();
        });
    });
  });

  describe('/PUT update a company', () => {
    it('it should update a company successfully', (done) => {
      chai
        .request(server)
        .put('/company/1')
        .send(demoData.updateTechCompanyInfo())
        .end((err, results) => {
          results.should.have.status(200);
          results.body.should.have.property('message');
          done();
        });
    });

    it('it should NOT update a company successfully', (done) => {
      chai
        .request(server)
        .put('/company/100')
        .send(demoData.updateTechCompanyInfo())
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('message').eql('Error! Company not found');
          done();
        });
    });
  });

  describe('/DELETE delete a company with valid ID', () => {
    it('it should delete a company with a valid ID', (done) => {
      chai
        .request(server)
        .delete('/company/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message');
          done();
        });
    });
  });
});
