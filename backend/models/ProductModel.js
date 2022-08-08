const mongoose = require("mongoose");
const Pool = require("mysql/lib/Pool");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true
  },
  description: {
    type: String, required: [true, "Please Enter Description"]
  },
  price: {
    type: Number, required: [true, "Please Enter Product Price"], maxLength: [8, "Price cannot exceed 8 characters"]
  },
  rating: {
    type: Number, default: 0
  },
  images: [
    {
      public_id: {
        type: String, required: true
      },
      url: {
        type: String, required: true
      }
    }
  ],
  catagory: {
    type: String, required: [true, "Please Enter catagory of Product"]
  },
  stock: {
    type: String, required: [true, "Please enter stock of Product"], maxLength: [4, "Stock length cannot exceed 4 characters"], default: 1
  }, numOfReviews: {
    type: Number, default: 0
  },
  reviews: [{
    name: {
      type: String, required: true,
    },
    rating: {
      type: String, required: true,
    },
    comment: {
      type: String, required: true,
    }

  }]
  , createdAt: {
    type: String, defatult: Date.now
  }

})

module.exports = mongoose.model("Product", productSchema)
