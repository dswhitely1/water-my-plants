const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodeToken) => {
      if (err) {
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        req.user = decodeToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
