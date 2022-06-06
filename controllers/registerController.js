const users = require("../models/auth")
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
const async = require("hbs/lib/async")
const { find } = require("../models/auth")

const register =(req,res)=>{

    res.render("register")

}

const registerpost = async(req,res,next)=>{

    const {username,pass,email,nombre} = req.body

    
    const existeuser = await users.findOne({username})
    
    if(existeuser){

        return res.render("register",{msg:"el usuario ya existe"})
    }
    const existeemail = await users.findOne({email})

    if(existeemail){

        return res.render("register",{msg:"el correo ya esta registrado"})
    }

    const usuario = new users({username,pass,email,nombre})

    
   //encriptar
    const salt = bcrypt.genSaltSync()
    usuario.pass = bcrypt.hashSync(pass,salt)

    await usuario.save()
    res.redirect("/login")

}

module.exports = {
    register,
    registerpost
}