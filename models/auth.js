const {Schema,model} = require("mongoose")


const authSchema = Schema({


    username:String,
    password:String,
    email:String,
    nombre:String
})



module.exports= model("users", authSchema)