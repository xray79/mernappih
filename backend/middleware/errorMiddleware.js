const errorHandler = (err, req, res, next) => {
  //  error handler overrides default express error handler to send json message and status code when error occurs instead of html
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = { errorHandler };
