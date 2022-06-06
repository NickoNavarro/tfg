const Router = require("express")
const { check } = require("express-validator")
const validator = require("express-validator")
const passport = require("passport")

const {register,registerpost} = require("../controllers/registerController")
const { notisloged } = require("../helpers/autenticate")
const { validar } = require("../middleware/validar")



const router =  Router()


router.get("/",register)

router.post("/",[
    check("username","el  usuario es obligatorio").not().isEmpty(),
    check("password","el password tiene que tener minimo 6 letras").isLength({min:6}),
    check("email","el email no es valido").isEmail(),
    check("nombre","el  nombre es obligatorio").not().isEmpty(),

    validar
],passport.authenticate("signup",{
    successRedirect:"/login",
    failureRedirect:"/register",
    failureFlash:true
}))


module.exports = router