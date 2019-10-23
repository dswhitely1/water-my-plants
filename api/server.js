const express = require('express');

const server = express();
require('./middleware/middleware')(server);
require('./routes/routes.index')(server);

module.exports = server;
