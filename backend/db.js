const mongoose = require('mongoose');


const mongoURl = "mongodb://localhost:27017"

const connectToMongo = ()=>{
    mongoose.connect(mongoURl, ()=>{
        console.log("Conneted to mongo Successfully");
    })
}

module.exports = connectToMongo;