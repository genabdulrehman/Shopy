const { getAllProdcuts, createProduct } = require("../controller/ProductController")


const express = require("express");

const router = express.Router()
router.route("/product/new").post(createProduct);
router.route("/products").get(() => getAllProdcuts);
module.exports = router
