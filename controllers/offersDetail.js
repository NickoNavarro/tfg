const async = require("hbs/lib/async")
const  { options } = require("../helpers/List")


const offersDetail = async(req,res)=>{
    
   const {id} = req.params
    
   const offers = options.find(e => e.id == id)
   

    res.render("offersDetail",{offers:offers})
}


module.exports = {
    offersDetail
}