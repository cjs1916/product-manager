const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type:String,
        required: [true, "Title is required"],
        minlength: [3, "Title has to be more than 2 characters"]
    },
    price :{
        type: Number,
        required:[true,"Price is required"],
        max: [1000,"Price is too high."]
    },
    description : {
        type:String,
        required: [true, "Description is required"],
        minlength: [5, "Description has to be more than 4 characters"]
    }
},{timestamps:true})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;