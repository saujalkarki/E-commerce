exports.asyncErrorHandler = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => {
      return res.status(400).json({
        status: "Error",
        message: err.message,
        fullError: err,
        data: null,
      });
    });
  };
};
