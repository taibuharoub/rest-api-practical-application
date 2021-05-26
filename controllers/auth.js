const { validationResult } = require("express-validator");

const User = require("../models/User");

exports.singup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array(); // will help give the original errors and pass them to the front end
    throw error;
  }
  const { email, name, password } = req.body;
  console.log(email, password, name);
};
