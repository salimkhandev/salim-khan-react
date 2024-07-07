const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().min(3).max(5).required(),
});

module.exports = userSchema;
