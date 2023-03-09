const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true,
    },
    lastname: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    
});

const Admin =mongoose.model("Admin",AdminSchema)
module.exports =Admin
