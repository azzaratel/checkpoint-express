const express=require("express");

const userRouter=express.Router();



// userRouter.get("/",(req,res)=>res.send({userlist: users}))

  userRouter.get("/", (req,res)=>res.send("hello"))
userRouter.get("/store", (req,res)=>{try {
    const date=new Date();
    const hours=date.getHours();
    if(hours>8 && hours<18){
        res.render("openend")
    }else{
        res.render("closed")
    }

} catch (error) {
    console.log(error)
}
    
})






module.exports=userRouter;
