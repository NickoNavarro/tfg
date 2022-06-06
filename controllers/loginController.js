const Usuario = require("../models/auth")

const bcryptjs = require("bcrypt")
const { generarJWT } = require("../helpers/generarjwt")

const http = require("http")

const login =(req,res)=>{

   
    res.render("login")

}

const loginController = async(req,res)=>{

    const {username,pass} = req.body

    console.log(username,pass)

    const user = await Usuario.findOne({username})
    

    if(!user){
         return res.render("login",{msg:"el usuario no existe"})
    }

    const validPassword = bcryptjs.compareSync( pass, user.pass );

    if ( !validPassword ) {
       
        return res.render("login",{msg: ' Password no son correctos '}) 
    }
    const token = await generarJWT(user.id)
    res.redirect("/home")
}


module.exports = {
    loginController,
    login
}