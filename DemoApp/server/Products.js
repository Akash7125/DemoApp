const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
})

const ProductModel = new mongoose.model("Products", productSchema,"Products")
module.exports = ProductModel