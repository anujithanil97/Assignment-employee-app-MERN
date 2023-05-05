const Mongoose = require ('mongoose');
const Express = require('express');
const Cors= require('cors');
const BodyParser =require('body-parser');
const userModel = require("./models/users");
const adminModel =require("./models/admin");

const jwt = require('jsonwebtoken');
const bcrpt = require('bcrypt');

Mongoose.connect("mongodb+srv://anujithanil24:Anujitha@97@123.45.67.89:27017/employeeDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

const app = Express();
app.use(BodyParser.urlencoded({extended:true}))
app.use(BodyParser.json());
app.use(Cors());


app.post('/user',async(req,res)=>{
    let data = new userModel({ name: req.body.name, email: req.body.email, password: bcrpt.hashSync(req.body.password,10) }
)
    await data.save
    res.json({"Status":"Status","Data":data})
})
app.post('/admin',async(req,res)=>{
    const admindata = new adminModel({ name: req.body.name, email: req.body.email, password: bcrpt.hashSync(req.body.password,10) }
)
    await admindata.save
    res.json({"Status":"Status","Data":admindata})
})

app.listen(3001,()=>{
        console.log("APP RUNNING")
})