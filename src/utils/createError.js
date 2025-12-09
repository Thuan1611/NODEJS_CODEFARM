const createError = (res, status, message, err) => {
    return res.status(status || 400).json({
        message: message || 'Error',
        err,
    });
};
export default createError;
