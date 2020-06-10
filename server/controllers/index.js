const lorem = require("../utils/lorem");

exports.getHealth = (req, res, next) => {
  res.status(200).send({ online: true });
};

exports.getMessage = (req, res, next) => {
  res.status(200).send({ message: lorem.generateSentences(5) });
};
