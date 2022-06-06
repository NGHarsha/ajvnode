const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajvInstance = new Ajv({ allErrors: true });

addFormats(ajvInstance);

const a = 10;
module.exports = ajvInstance;
