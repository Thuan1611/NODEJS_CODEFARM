import createError from './createError.js';

const handleAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => createError(res, 401, 'Lỗi',err));
    };
};
export default handleAsync;
