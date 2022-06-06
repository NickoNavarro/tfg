const async = require("hbs/lib/async")
const  { options } = require("../helpers/List")


const offers = async(req,res)=>{
    
    res.render("offers",{options:options})
}


module.exports = {
    offers
}