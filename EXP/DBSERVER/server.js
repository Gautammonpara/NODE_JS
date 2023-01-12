const express=require("express");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"inside server get "});
});
const getData=require("./getData/getData");
app.use("/getdata",getData);

app.listen(5100,()=>{
    console.log("Server run on ....");
})