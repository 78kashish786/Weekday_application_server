const jsonServer = require('json-server');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Export the handler for Vercel to use
module.exports = (req, res) => {
  const server = jsonServer.create();
  server.use(middlewares);
  server.use(router);
  server(req, res);
};
