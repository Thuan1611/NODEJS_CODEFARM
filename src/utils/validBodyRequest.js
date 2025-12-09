import z from 'zod';
import createError from './createError.js';

const validBodyRequest = (schema) => async (req, res, next) => {
    try {
        await schema.parse(req.body);
        next();
    } catch (error) {
        const errors = error.issues.map((item) => `${item.path}: ${item.message}`);
        if (error instanceof z.ZodError) {
            return createError(res, 400, 'Bad request', errors);
        }
    }
};
export default validBodyRequest