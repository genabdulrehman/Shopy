const { getAllProducts, createProduct } = require("../controller/ProductController")


const express = require("express");

const router = express.Router()
router.route("/product/new").post(createProduct);
router.route("/products").get(getAllProducts);
module.exports = router
