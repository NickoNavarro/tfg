const {Schema,model} = require("mongoose")


const incendioSchema = Schema({


    total:String,
    nivel:String,
    city:String,
    media:String,
    totalcity:String
    
})



module.exports= model("incendios", incendioSchema)