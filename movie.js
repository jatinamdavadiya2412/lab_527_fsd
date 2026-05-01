var express=require("express")
var app= express()

var cp=require("cookie-parser")
app.use(cp())
// for js to static file
app.use(express.static(__dirname,{index:"movie.html"}))
app.use (express.urlencoded())

app.post("/book",(req,res)=>           // get hoy to req.query
{
    var{uname,mname,tt,num}=req.body
    var movie={uname,mname,tt,num}
    res.cookie("movie",movie,{maxAge:15000})
    res.send(`<h1> your cookie has been confirmed </h1> <a href="/details" > view details </a> `)
})
app.get("/details",(req,res)=>
{
    var m=req.cookies.movie
    if(m)
    {
        res.send(`<h2> user name: ${m.uname} <br> movie name: ${m.mname} <br> tickettype: ${m.tt} <br> number of tickets: ${m.num} <br> </h2> <br>  <a href="/"> back </a> `)
    }
    else
    {
        res.send(`<h1> sorry!!  no data available </h1><br>`)
    }

})

app.listen(7001)