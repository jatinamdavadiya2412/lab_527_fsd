var express =require("express")
var app=express();
app.use(express.static(__dirname,{index:"calc.html"}))
app.get("/calc",(req,res,next)=>{
    if(req.query.n1<0){
        res.send("please enter number greater than 0");
    }
    else{
        next();
    }
},(req,res)=>{
    if(req.query.Operation==="square"){
        res.send(`square is ${req.query.n1*req.query.n1}`)
    }
    else if(req.query.Operation==="cube"){
        res.send(`cube is ${req.query.n1*req.query.n1*req.query.n1}`)
    }
    else{
        res.send("Not valid")
    }
})
app.listen(7001)

// number  select  submit
// square is 36