const async = require("hbs/lib/async")
const Blog = require("../models/blog")


const blog = async(req,res)=>{
    
    
    const blog = await Blog.find()
    

    res.render("blog",{blogs:blog})
}


module.exports = {
    blog
}
