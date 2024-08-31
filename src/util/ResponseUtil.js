function responseUtil(message, status, data = null) {
    return {
        message,
        status,
        data
    };
}

module.exports = responseUtil;