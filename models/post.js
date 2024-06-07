const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    startdate:{
        type:String,
        required:true
    },
    enddate:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const postModel = mongoose.model('post',postSchema);

module.exports = postModel;