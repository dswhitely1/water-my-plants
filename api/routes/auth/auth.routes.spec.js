const request = require('supertest');
const server = require('../../server');
const Users = require('../../../data/models/user/user.model');

describe('auth.routes.js', () => {
  describe('Register Route', () => {
    it('returns 201 on successful create', async () => {
      const expectedStatus = 201;
      const response = await request(server)
        .post('/api/auth/register')
        .send({
          firstName: 'James',
          lastName: 'Starks',
          username: 'iwishiwastony',
          password: 'iamironman',
          phoneNumber: '8005551212',
        });
      expect(response.status).toEqual(expectedStatus);
    });
    it('returns 400 on duplicate submission', async () => {
      const expectedStatus = 400;
      const response = await request(server)
        .post('/api/auth/register')
        .send({
          firstName: 'James',
          lastName: 'Starks',
          username: 'iwishiwastony',
          password: 'iamironman',
          phoneNumber: '8005551212',
        });
      expect(response.status).toEqual(expectedStatus);
    });
  });
  describe('Login Route', () => {
    it('returns 404 on unknown User', async () => {
      const expectedStatus = 404;
      const response = await request(server)
        .post('/api/auth/login')
        .send({ username: 'NotHere', password: 'Test' });
      expect(response.status).toBe(expectedStatus);
    });
    it('returns 401 on Incorrect Password', async () => {
      const expectedStatus = 401;
      const response = await request(server)
        .post('/api/auth/login')
        .send({ username: 'iwishiwastony', password: 'BadPassword' });
      expect(response.status).toBe(expectedStatus);
    });
    it('returns 200 on Successful Login', async () => {
      const expectedStatus = 200;
      const response = await request(server)
        .post('/api/auth/login')
        .send({ username: 'iwishiwastony', password: 'iamironman' });
      expect(response.status).toBe(expectedStatus);
    });
  });
});
