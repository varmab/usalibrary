var express=require("express");
var app = express();

var books=require('./routes/books');
var users=require('./routes/users');

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const port=8000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Welcome to USA Library API Server")
})

app.use("/api/books",books);
app.use("/api/users",users);

app.listen(port,()=>{
    console.log(`USA Library Server is started at port ${port}`)
})