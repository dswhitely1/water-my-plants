const bcrypt = require('bcryptjs');

module.exports = data => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(data, salt);
};
