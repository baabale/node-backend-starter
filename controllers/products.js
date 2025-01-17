const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
    try {

        const products = await Product.find({});

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });

    } catch (error) {
        next(error);
    }
}

exports.createProduct = async (req, res, next) => {
    try {

        const product = await Product.create(req.body);

        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: product
        });

    } catch (error) {
        next(error);
    }
}

exports.updateProduct = async (req, res, next) => {
    try {

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });

    } catch (error) {
        next(error);
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        });

    } catch (error) {
        next(error);
    }
}