import createError from '../utils/createError.js';

const notFoundRequest = (req, res) => {
    return createError(res, 404, 'Not Found');
};
export default notFoundRequest;
