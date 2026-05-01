var cp=require("cookie-parser");
var express=require("express");
var app=express();
app.use(express.urlencoded())
app.use(cp());
app.use(express.static(__dirname,{index:"cookieex1.html"}))
app.post("/next1",(req,res)=>{
    var{uname,email,msg,rating}=req.body;
    var feedback={uname,email,msg,rating};
    res.cookie("feedback",feedback,{maxAge:10000});
    res.send(`<h1>Thank You!!</h1>
              <a href="/details">View Feedback</a>`)
})
app.get("/details",(req,res)=>{
    var fb=req.cookies.feedback;
    if(fb){
        res.send(`<h1>Hello ${fb.uname}</h1>
            <h2>Your message : ${fb.msg}</h2>
            <h2>Your rating :${fb.rating}</h2>
            <a href="/">Logout</a>`)
    }
    else{
        res.send(`No Feedback available <a href="/">Logout</a>`)
    }
})
app.listen(8001);

// Thank You!!
// View Feedback

// Hello vrushti
// Your message: hii
// Your rating :10
// Logout