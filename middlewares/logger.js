const logger = function (req, res, next) {
  console.log(new Date().toLocaleDateString(), "==>", req.method, req.originalUrl);
  next();
};

module.exports = logger;
