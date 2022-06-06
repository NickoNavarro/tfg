const Router = require("express")

const {offersDetail} = require("../controllers/offersDetail")
const { isloged } = require("../helpers/autenticate")

const router = Router()




router.get("/:id",[
    isloged
   
   

],offersDetail)






module.exports = router