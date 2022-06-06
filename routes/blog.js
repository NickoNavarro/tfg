const Router = require("express")

const {blog} = require("../controllers/blogcontroller")
const { isloged } = require("../helpers/autenticate")

const router = Router()




router.get("/",[
    isloged
   
   

],blog)






module.exports = router