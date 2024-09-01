const responseUtil = require('../util/responseUtil');

const handleRuntimeError = (err, req, res, next) => {
    const errorResponse = err.message || 'An unexpected error occurred';
    console.error(`\u001B[31m${errorResponse}\u001B[0m`);
    return res.status(500).json(responseUtil(errorResponse, 500));
};

module.exports = handleRuntimeError;