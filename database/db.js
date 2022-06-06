const mongoose = require("mongoose")



const db = async()=>{

    try{
        await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        })

        console.log("conectado a la db")

    }catch(err){

        if(err){

            console.log(err)
            throw new error("esto no va")
            
        }
    } 
}


module.exports = db


