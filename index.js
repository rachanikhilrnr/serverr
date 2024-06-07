const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const postModel = require('./models/post')

const PORT = 5000;

const connect = mongoose.connect("mongodb+srv://21955a1206:nikhil1528@ecommerce.zoovig6.mongodb.net/EC?retryWrites=true&w=majority&appName=Ecommerce")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT,() => {
    console.log(`server is running in port number ${PORT}`);
})

app.get("",(req,res) => {
    res.json("YOU ARE AT THE ROOT PAGE");
})

app.get("/posts",(req,res) => {
    postModel.find({})
    .then((posts) => res.json(posts))
    .catch((err) => res.json(err));
})

app.post("/posts",(req,res) => {
    const post = req.body;
    const newPost = new postModel(post);
    const saved = newPost.save();
    if(saved){
        res.json("Data added successfully");
    }else{
        res.json("Unable to add");
    }
})

