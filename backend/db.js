const mongoose = require('mongoose');
require('dotenv').config();


const mongoURl = "mongodb://localhost:27017/inotebook"
// const mongoURl = process.env.MONGODB_URI

const connectToMongo = ()=>{
    mongoose.connect(mongoURl, ()=>{
        console.log("Conneted to mongo Successfully");
    })
}


module.exports = connectToMongo;