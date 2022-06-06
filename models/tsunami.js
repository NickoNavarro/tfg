const {Schema,model} = require("mongoose")


const tsunamiSchema = Schema({


    total:String,
    nivel:String,
    city:String,
    media:String,
    totalcity:String
    
})



module.exports= model("tsunami", tsunamiSchema)