const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMessageInput(data) {
  let errors = {};
  data.message = validText(data.message) ? data.message : "";

  if (Validator.isEmpty(data.message)) {
    errors.message = "Your message cannot be empty.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
