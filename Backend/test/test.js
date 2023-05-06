const request = require('supertest');
const app = require('../index');
const chai = require('chai');
const expect = chai.expect;


describe('POST /api/user/login', () => {
  it('should return a token when login with correct credentials', (done) => {
    const user = { email: 'stianyu99@vt.edu', password: '123456' };
    request(app)
      .post('/api/user/login')
      .send(user)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const { success, token } = res.body;
        expect(success).to.equal(true);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('should return an error when login with incorrect credentials', (done) => {
    const user = { email: 'stianyu99@vt.edu', password: '123' };
    request(app)
      .post('/api/user/login')
      .send(user)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        const { error } = res.body;
        expect(res.body).to.equal('Wrong Password');
        done();
      });
  });
});
