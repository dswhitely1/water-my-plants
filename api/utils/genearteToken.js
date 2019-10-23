const jwt = require('jsonwebtoken');

module.exports = user => {
  const payload = { id: user.id };
  const secret = process.env.SECRET;
  const options = { expiresIn: '1d' };
  return jwt.sign(payload, secret, options);
};
