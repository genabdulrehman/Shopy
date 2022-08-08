const Product = require("../models/ProductModel")
const ErrorHandler = require("../utils/errorHandler")



// Create Product
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({ success: true, product })
}

// Get All products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({ success: true, products })


}

// Update product
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not  found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.status(200).json({ success: true, message: "Product is updated successfully." })
}


// Delete a Product
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {

        return next(new ErrorHandler("Product not found", 404))
    }

    await product.remove();
    res.status(500).json({ success: true, message: "Product is deleted successfully." })
}
// Get product detials
exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {

        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({ success: true, product, })
}

