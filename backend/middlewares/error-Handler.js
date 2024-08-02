const errorHandler = (err, req, res, next) => {
  const statusCode = err.status === 200 ? 500 : err.status;
  const message = err.message || "Backend error";
  console.log(message);

  return res.status(statusCode).json({
    message,
  });
};
module.exports = { errorHandler };
