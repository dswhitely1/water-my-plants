const testRouter = require('./test/test.routes');

module.exports = server => {
  server.use('/', testRouter);
};
