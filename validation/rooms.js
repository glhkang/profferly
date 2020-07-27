const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRoomInput(data) {
  let errors = {};
  data.name = validText(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Your name cannot be empty.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
