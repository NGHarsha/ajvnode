function validateRequest(resumeValidate) {
  return (req, res, next) => {
    const valid = resumeValidate(req.body);
    if (!valid) {
      const errors = resumeValidate.errors;
      return res.status(400).json(errors);
    }
    next();
  };
}

module.exports = validateRequest;
