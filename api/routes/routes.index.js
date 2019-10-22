const testRouter = require('./test/test.routes');
const authRouter = require('./auth/auth.routes');

module.exports = server => {
  server.use('/', testRouter);
  server.use('/api/auth', authRouter);
};
