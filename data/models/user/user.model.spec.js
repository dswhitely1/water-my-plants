const Users = require('./user.model');

describe('users.model.js', () => {
  describe('find', () => {
    it('Should have 3 Users in the Test Database', async () => {
      const users = await Users.find();
      expect(users.length).toEqual(3);
    });
  });
  describe('findBy', () => {
    it('should return the User with an username of "iloveflowers"', async () => {
      const adminUser = await Users.findBy({ username: 'iloveflowers' });
      expect(adminUser[0].firstName).toEqual('Plant');
    });
  });
  describe('add', () => {
    it('Should add the Test User to the Database', async () => {
      const addUser = await Users.add({
        firstName: 'Test',
        lastName: 'User',
        username: 'test@test.com',
        password: 'password',
        phoneNumber: '8007854367',
      });
      expect(addUser[0].username).toEqual('test@test.com');
    });
    it('Should now have 4 Users in the Database', async () => {
      const users = await Users.find();
      expect(users.length).toBe(4);
    });
  });
  describe('update', () => {
    it('Should return the updated firstName of the Test User', async () => {
      const foundTestUser = await Users.findBy({ username: 'test@test.com' });
      const updatedTestUser = await Users.update(foundTestUser[0].id, {
        firstName: 'Updated',
      });
      expect(updatedTestUser[0].firstName).toEqual('Updated');
    });
  });
  describe('remove', () => {
    it('Should delete the new Test User', async () => {
      const foundTestUser = await Users.findBy({ username: 'test@test.com' });
      const removedTestUser = await Users.remove(foundTestUser[0].id);
      expect(removedTestUser).toBe(1);
    });
    it('Should now have 3 Users in the Database', async () => {
      const users = await Users.find();
      expect(users.length).toBe(3);
    });
  });
});
