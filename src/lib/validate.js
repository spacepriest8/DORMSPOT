// validate.js

/**
 * Validates a payload against a given schema.
 *
 * @param {Object} schema - The validation schema (e.g., Joi schema).
 * @param {Object} payload - The data object to validate.
 * @returns {Object} An object containing:
 *   - isValid: {boolean} Whether the payload is valid.
 *   - errors: {string[]} Array of error messages (if invalid).
 *   - value: {Object} The validated value (if valid).
 */
export const validate = (schema, payload) => {
  // Validate the payload using the provided schema, collecting all errors
  const { error, value } = schema.validate(payload, { abortEarly: false });

  if (error) {
    // Map validation errors to an array of messages
    const errors = error.details.map((detail) => detail.message);
    return { isValid: false, errors };
  }

  // Return the validated value if no errors
  return { isValid: true, value };
};
