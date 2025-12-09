import Product from '../model/Product.js';

export const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        return res.status(200).json({
            data: product,
            message: 'Lấy danh sách thành công',
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(401).json({
                message: 'Không tìm thấy sản phẩm chi tiết',
            });
        }

        return res.status(200).json({
            data: product,
            message: 'Lấy danh sách thành công theo id',
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { params, body } = req;

        const product = await Product.findByIdAndUpdate(params.id, body, { new: true });
        if (!product) {
            res.status(401).json({
                message: 'Sửa thất bại',
            });
        }
        return res.status(200).json({
            data: product,
            message: 'Sửa thành công',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Lỗi',
        });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).json({
            data: product,
            message: 'Thêm thành công kk',
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(401).json({
                message: 'Không có sản phẩm để xóa',
            });
        }
        return res.status(200).json({
            data: product,
            message: 'Xóa thành công',
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
