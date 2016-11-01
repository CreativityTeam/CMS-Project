var express = require('express');
var app = express();
var port = process.env.port || 4000;

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/cms'));

app.get('*',function(req,res){
    res.sendFile(__dirname + '/cms/default.html');
});

app.listen(port,function(err){
    if(err) throw err;
    console.log("Test is running at : " + port);
});