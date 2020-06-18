  
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 5, max: 1000 })) {
      errors.text = "Posts must be between 5 and 1000 characters long.";
  }

  if (Validator.isEmpty(data.text)) {
      errors.text = "You cannot submit an empty post.";
  }

  return {
      errors,
      isValid: Object.keys(errors).length === 0
  }
}