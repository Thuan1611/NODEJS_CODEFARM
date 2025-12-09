import mongoose from "mongoose";

const connectDB = () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log('Connected Database successfully'))
        .catch(() => console.log('Error failed'));
};
export default connectDB;
