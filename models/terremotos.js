const {Schema,model} = require("mongoose")


const terremotosSchema = Schema({


    total:String,
    nivel:String,
    city:String,
    media:String,
    totalcity:String
    
})



module.exports= model("terremotos", terremotosSchema)