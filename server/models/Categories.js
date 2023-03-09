const mongoose = require("mongoose");

const CatgSchema = new mongoose.Schema({
    id: {
        type:Number,
        required:true,
    },
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    }   
});

const Categorie =mongoose.model("Categorie",CatgSchema)
module.exports =Categorie
