var express =require("express")
var app=express();
app.use(express.static(__dirname));
app.listen(7009);


// frontend floder mate
// app.use(express.static("frontend",{index:"1.html"}));