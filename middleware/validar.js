const { validationResult } = require("express-validator")
const validator = require("express-validator")


const validar = (req,res,next)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
         res.render("register",{errors:errors.array()})
    }else{
        next()
    }


   

}


module.exports = {
    validar
}