const Router = require("express")

const {blogdetail} = require("../controllers/blogdetailcontroller")
const { isloged } = require("../helpers/autenticate")

const router = Router()




router.get("/:id",[
    isloged
   
   

],blogdetail)




module.exports = router