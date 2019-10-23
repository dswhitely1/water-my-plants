const testRouter = require('./test/test.routes');
const authRouter = require('./auth/auth.routes');
const plantRouter = require('./plants/plant.routes');

module.exports = server => {
  server.use('/', testRouter);
  server.use('/api/auth', authRouter);
  server.use('/api/plants', plantRouter);
};
