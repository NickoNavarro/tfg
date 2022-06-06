const terremotos = require("../models/terremotos")
const tsunami = require("../models/tsunami")
const incendios = require("../models/incendios")
const panel = async(req,res)=>{

    const terremoto = await terremotos.find()
    const tsunamis = await tsunami.find()
    const incendio = await incendios.find()
    let totalTerremotos  = terremoto[0].total
    let totaltsunamis  = tsunamis[0].total
    let totalincendio  = incendio[0].total

    let disasters = {
        terremoto,
        tsunamis,
        incendio
    }
    

    res.render("panel",{disasters,totalTerremotos,totaltsunamis,totalincendio})


}



module.exports = {
    panel
}