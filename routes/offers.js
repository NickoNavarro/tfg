const Router = require("express")

const {offers} = require("../controllers/offerController")
const { isloged } = require("../helpers/autenticate")

const router = Router()




router.get("/",[
    isloged
   
   

],offers)






module.exports = router