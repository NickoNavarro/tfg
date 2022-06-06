const async = require("hbs/lib/async")
const { getciudad } = require("../helpers/getciudad")
const Blog = require("../models/blog")

const blogdetail = async(req,res)=>{
    
    const {id} = req.params

    const blogdetallado  = await Blog.findById(id)

    console.log(blogdetallado)

    

    res.render("blogdetails",{detalles:blogdetallado})
}


module.exports = {
    blogdetail
}
