var cp=require("cookie-parser");
var express=require("express");
var app=express();
app.use(express.urlencoded())
app.use(cp());
app.use(express.static(__dirname,{index:"cookieex.html"}))
app.post("/next",(req,res)=>{
    res.cookie("fn",req.body.fname)
    res.cookie("ln",req.body.lname)
    res.cookie("password",req.body.pass)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>{
    res.clearCookie("ln");
    res.send(`<h1>Welcome ${req.cookies.fn}${req.cookies.ln}</h1>
              <h2>password is:${req.cookies.password}</h2>`)
})
app.listen(7009)

// Welcome vrushtipatel
// password is:123
//  then refreshes
// Welcome vrushtiundefined
// password is:123