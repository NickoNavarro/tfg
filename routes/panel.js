const Router = require("express")

const {panel} = require("../controllers/panelController")
const { isloged } = require("../helpers/autenticate")


const router = Router()

router.get("/",[
    isloged
   
   

],panel)






module.exports = router