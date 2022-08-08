const Product = require("../models/ProductModel")



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
