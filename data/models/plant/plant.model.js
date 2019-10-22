const db = require('../../db.config');

function find() {
  return db('plants');
}

function findBy(filter) {
  return db('plants').where(filter);
}

function add(plant) {
  return db('plants')
    .insert(plant)
    .returning('*');
}

function update(id, plant) {
  return db('plants')
    .where({ id })
    .update(plant)
    .returning('*');
}

function remove(id) {
  return db('plants')
    .where({ id })
    .del();
}

module.exports = { find, findBy, add, update, remove };
