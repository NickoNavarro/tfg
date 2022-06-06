const async = require("hbs/lib/async")
const { getciudad } = require("../helpers/getciudad")
const { getTime }  = require("../helpers/getdate")

const home = async(req,res)=>{
    
    const api =  await getciudad("valencia")
    const date  = getTime()


    res.render("home",{datos:api,time:date})
}

const homeapi = async(req,res)=>{

    const {peticion} = req.body

    const api =  await getciudad(peticion)
    const date  = getTime()

    res.render("home",{datos:api,time:date})

}


module.exports = {
    home,
    homeapi
}
    
