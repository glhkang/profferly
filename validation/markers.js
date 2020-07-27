const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMarkerInput(data) {
    let errors = {};
    data.title = validText(data.title) ? data.title : "";
    data.description = validText(data.description) ? data.description : "";

    if (!Validator.isLength(data.title, { min: 1, max: 80 })) {
        errors.title = "Your title must be shorter than 80 characters.";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "Your title cannot be empty.";
    }

    if (!Validator.isLength(data.description, { min: 1, max: 1000 })) {
        errors.description = "Yoru description is too long.";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Your description cannot be empty.";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};