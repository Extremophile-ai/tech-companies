import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
// import controllers from '../controllers/controllers';

// assertion style
should = chai.should();
chai.use(chaiHttp);

describe('Server.js should return all endpoints', () => {
  describe('Get /company', () => {
    it('it should get all companies', (done) => {
      const res = chai
        .request(server)
        .get('/company');
      res.should.have.status(200);
      (res.body).should.be.a('object');
      done();
    });
  });
});
