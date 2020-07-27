const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateCommentInput(data) {
  let errors = {};
  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 5, max: 200 })) {
    errors.text = "Comments must be between 5 and 200 characters long.";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "You cannot submit an empty comment.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
