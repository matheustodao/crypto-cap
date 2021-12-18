module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  response.setHeader('Access-Control-Max-Age', '8600');
  next();
};
