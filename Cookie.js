var cp=require("cookie-parser");
var express=require("express");
var app=express();
app.use(cp());
app.get("/",(req,res)=>{
    res.cookie("fname","vrushti")
    res.cookie("lname","patel")
    res.cookie("subject","fsd-2",{maxAge:5000})
    res.cookie("email","abc@gmail.com",{expires:new Date(Date.now()+1000)});
    res.clearCookie("lname")
    res.send(req.cookies);
})
app.listen(7000);

// cookie client side thay
// session server side thay