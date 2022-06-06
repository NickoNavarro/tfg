const Router = require("express")

const index = require("../controllers/landingControler")
const { validarJWT } = require("../middleware/validar-jwt")




const router = Router()

router.get("/",[
   
   

],index)


module.exports = router