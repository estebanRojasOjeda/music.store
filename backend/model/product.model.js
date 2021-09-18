const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    manufacturer: {
        required: true,
        type: String
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;