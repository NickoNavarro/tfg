const { validationResult } = require("express-validator")
const validator = require("express-validator")


const validarlogin = (req,res,next)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
         res.render("login",{errors:errors.array()})
    }else{
        next()
    }


   

}


module.exports = {
    validarlogin
}