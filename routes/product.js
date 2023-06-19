const express=require("express");

const productRouter=express.Router();



productRouter.get("/p",(req,res)=>res.send("im a new product"))





module.exports=productRouter;