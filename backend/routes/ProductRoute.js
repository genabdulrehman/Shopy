const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require("../controller/ProductController")


const express = require("express");

const router = express.Router()
router.route("/product/new").post(createProduct);
router.route("/products").get(getAllProducts);
router.route("/product/:id").put(updateProduct)

router.route("/product/:id").delete(deleteProduct).get(getSingleProduct)
module.exports = router
