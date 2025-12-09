import Product from '../model/Product.js';
import createError from '../utils/createError.js';
import createResponse from '../utils/createResponse.js';
import handleAsync from '../utils/handleAsync.js';

//Danh sách sản phẩm
export const getAllProduct = handleAsync(async (req, res) => {
    const product = await Product.find();
    return res.status(200).json({
        data: product,
        message: 'Lấy danh sách thành công',
    });
});

//Chi tiết sản phẩm
export const getProductById = handleAsync(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        return createError(res, 401, 'Không tìm thấy id');
    }
    return createResponse(res, 201, 'Lấy danh sách thành công theo id', product);
});

//Sửa sản phẩm
export const updateProduct = handleAsync(async (req, res) => {
    const { params, body } = req;

    const product = await Product.findByIdAndUpdate(params.id, body, { new: true });
    if (!product) {
        createError(res, 401, 'Không tìm thấy id');
    }
    return createResponse(res, 201, 'Sửa sản phẩm thành công', product);
});

//Thêm sản phẩm
export const createProduct = handleAsync(async (req, res) => {
    const product = await Product.create(req.body);
    return createResponse(res, 201, 'Thêm sản phẩm thành công', product);
});

//Xóa sản phẩm
export const deleteProducts = handleAsync(async (req, res) => {
    const id = req.params.id;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        createError(res, 401, 'Không tìm thấy id');
    }

    return createResponse(res, 201, 'Xóa sản phẩm thành công');
});
