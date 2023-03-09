const express=require("express")
const bcrypt = require('bcrypt');
const cors=require("cors")
const mongoose=require("mongoose")
const User=require("./models/User");
const jwt=require("jsonwebtoken");
const Admin = require("./models/Admin");
const catg = require("./models/Categories");
const Produit = require("./models/Products");
const Categorie = require("./models/Categories");
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.connect("mongodb+srv://ziedgandouzi:zied2023@crud.fnq534g.mongodb.net/lepneumatique?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})
//Admin Signin
app.post("/admin", (req, res)=> {
    const {email, password} = req.body
    Admin.findOne({ email: email}, (err, user) => {
        if(user){
            const decrypt = bcrypt.compareSync(password, user.password);
            if(decrypt ) {
                res.send({message: "Login Successfull",user: user})
                
            } else {
                res.send({ message: "Password didn't match",user:false})
            }
        } else {
            res.send({message: "User not registered",user:false})
        }
    })
}) 
//return all users list
app.post("/users",async(req,res) =>{
    try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        next(err);
      }
})
//User SignIn 
app.post("/signin", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            const decrypt = bcrypt.compareSync(password, user.password);
            if(decrypt ) {
                res.send({message: "Login Successfull",user: user})
                
            } else {
                res.send({ message: "Password didn't match",user:false})
            }
        } else {
            res.send({message: "User not registered",user:false})
        }
    })
}) 
//User SignUp
app.post("/signup", (req, res)=> {
    const {firstname,lastname, email, password} = req.body
    const hash = bcrypt.hashSync(password, 10);
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                firstname,
                lastname,
                email,
                password:hash
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
//add categorie
app.post("/add", (req, res)=> {
    const {id,name, description} = req.body
    catg.findOne({id: id}, (err, categ) => {
        if(categ){
            res.send({message: "categorie already registerd"})
        } else {
            const categorie = new catg({
                id,
                name,
                description,
            })
            categorie.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully add" ,categorie})
                }
            })
        }
    })
    
}) 
//add product
app.post("/addproduit", (req, res)=> {
    const { id, name, description, price, image, categorie } = req.body;
    Produit.findOne({ name:name}, (err, prod) => {
        if(prod){
            res.send({message: "categorie already registerd"})
        } else {
            const produit = new Produit({
                id,
                name,
                description,
                price,
                image,
                categorie,
            })
            produit.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully add" ,produit})
                }
            })
        }
    })
    
})
//return all products list
app.post("/products", async (req, res) => {
    const name = req.body.name;
    if (name) {
        try {
            const categorie = await Categorie.findOne({ name: name });
            const produits = await Produit.find({ categorie: categorie.id });
            res.json(produits);
        } catch (err) {
            res.send(err);
        }
    }
    else {
        try {
            const produits = await Produit.find();
            res.json(produits);
        } catch (err) {
            res.send(err);
        }    
    }
})
app.listen(3001,() => {
    console.log("BE started at port 3001")
})