import mongoose, { Schema } from "mongoose";

//Tạo schema
const productSchema = new Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
});

//Tạo modal từ schema
const Product = mongoose.model('Product', productSchema);
export default Product;
