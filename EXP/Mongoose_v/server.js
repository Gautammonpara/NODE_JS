const express = require('express');
const cors=require("cors");
const mongoose=require("mongoose");

const data=require("./data");
const user=require("./userModel");
const User = require('./userModel');

const app = express();
const port = 3300;
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect("mongodb+srv://admin:admin@cluster0.ajb714p.mongodb.net/today?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("Connected..!!"))
.catch((err)=>{
    console.log(err);
})
app.post("/insert_records",(req,res)=>{
    console.log(data.users);
    const result=User.insertMany(data.users);
    res.send(result)
    console.log("Done...")
})

app.get("/select_records",(req,res)=>{
    console.log(data.users);
    const result=User.find({},(err,re)=>{
        if(err)
            console.log(err);
        else 
            
            res.json(re);
            // res.send("success");
            console.log("success");
    });
})

app.put("/update_records",(req,res)=>{
    console.log(data.users);
    const result=User.updateOne({"name":req.body.name},{$set:{"email":req.body.email}},(err,re)=>{
        if(err)
            console.log(err);
        else 
            
            res.json(re);
            // res.send("success");
            console.log("success");
    });
})

app.delete("/delete_records",(req,res)=>{
    console.log(data.users);
    const result=User.deleteMany({"name":req.body.name},(err,re)=>{
        if(err)
            console.log(err);
        else 
            
            res.json(re);
            // res.send("success");
            console.log("success");
    });
})

app.listen(port, () => {
    console.log(`Server listening Port : ${port}`);
});
