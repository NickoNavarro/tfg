
const isloged = (req,res,next)=>{

    if(!req.isAuthenticated()){
        res.redirect("/login")
    }

    next()
}


const notisloged = (req,res,next)=>{

    if(req.isAuthenticated()){
        next()
        
    }

    
    res.redirect("/login")
}



module.exports = {
    isloged,
    notisloged
}