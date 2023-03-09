const mongoose = require("mongoose");

const ProduitSchema = new mongoose.Schema({
    id: {
        type:Number,
        required:true,
    },
    
    name: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    categorie:{
        type:Number,
        required:true,
    },
    
});

const Produit =mongoose.model("Product",ProduitSchema)
module.exports =Produit
