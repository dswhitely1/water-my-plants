const Plants = require('./plant.model');

describe('plant.model.js', () => {
  describe('find', () => {
    it('should find 6 plants', async () => {
      const results = await Plants.find();
      expect(results.length).toEqual(6);
    });
  });
  describe('findBy', () => {
    it('should find the plant with type "Oh Crap I Messed Up"', async () => {
      const result = await Plants.findBy({ type: 'Oh Crap I Messed Up' });
      expect(result[0].name).toEqual('Rose');
    });
  });
  describe('add', () => {
    it('should add a new plant', async () => {
      const result = await Plants.add({
        name: 'Dandelion',
        type: 'Weed',
        location: 'Yard',
        userId: 1,
        waterSchedule: 'Never',
      });
      expect(result[0].type).toEqual('Weed');
    });
    it('should now have 7 plants', async () => {
      const results = await Plants.find();
      expect(results.length).toEqual(7);
    });
  });
  describe('update', () => {
    it('should now be located in the "Trash"', async () => {
      const foundPlant = await Plants.findBy({ type: 'Weed' });
      const result = await Plants.update(foundPlant[0].id, {
        location: 'Trash',
      });
      expect(result[0].location).toEqual('Trash');
    });
  });
  describe('remove', () => {
    it('should remove the Weed Plant', async () => {
      const foundPlant = await Plants.findBy({ type: 'Weed' });
      const result = await Plants.remove(foundPlant[0].id);
      expect(result).toEqual(1);
    });
    it('should not have 6 plants', async () => {
      const results = await Plants.find();
      expect(results.length).toEqual(6);
    });
  });
});
