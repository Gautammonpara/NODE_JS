const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    console.log("inside server...!!!");
});

app.listen(3900,()=>{
    console.log("server run on....");
})
