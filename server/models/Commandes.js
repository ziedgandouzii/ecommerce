const mongoose = require("mongoose");

const CommandeSchema = new mongoose.Schema({
    produit: {
        type:String,
        required:true,
    },
    quantite: {
        type:String,
        required:true,
    },
    panier: {
        type:String,
        required:true,
    },
    total: {
        type:Number,
        required:true,
    },
    
});

const Commande =mongoose.model("Commande",CommandeSchema)
module.exports =Commande
