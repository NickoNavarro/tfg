const Router = require("express")

const {home,homeapi} = require("../controllers/homecontroller")
const { isloged } = require("../helpers/autenticate")





const router = Router()

router.get("/",[
    isloged
   
   

],home)



router.post("/",[
   
   

],homeapi)


module.exports = router