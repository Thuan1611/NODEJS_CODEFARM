import express from 'express';
import mongoose, { Schema } from 'mongoose';
import connectDB from './src/configs/connectDB.js';
import Product from './src/model/Product.js';
import router from './src/routers/index.js';
import notFoundRequest from './src/middlewares/notFoundRequest.js';
const port = 3000;
const host = 'http://localhost:';
const app = express();
app.use(express.json());

connectDB();
app.use("/",router)
app.use(notFoundRequest)
app.listen(port, () => {
    console.log(`Example app listening on port ${host}${port}`);
});
