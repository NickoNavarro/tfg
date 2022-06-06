const {Schema,model} = require("mongoose")


const blogSchema = Schema({


    titulo:String,
    descripcion:String,
    minidescripcion:String,
    imagen:String,
    fecha:String

})



module.exports= model("blog", blogSchema)