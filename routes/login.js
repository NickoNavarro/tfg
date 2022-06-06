const Router = require("express")
const { loginController, login } = require("../controllers/loginController")
const passport = require("passport")
const Usuario = require("../models/auth")
const { check } = require("express-validator")
const { validarlogin } = require("../middleware/validarlogin")



const router = Router()

router.get("/",login)

router.post("/",[
    check("username","el  usuario es obligatorio").not().isEmpty(),
    check("password","el password tiene que tener minimo 6 letras").isLength({min:6}),
    validarlogin
],passport.authenticate("signin",{
    successRedirect:"/home",
    failureRedirect:"/login",
    failureFlash:true
}))




router.get("/auth/google",
  passport.authenticate("google",{scope:["email","profile"]
  
  })

)


router.get("/google/callback",
  passport.authenticate("google",{
    successRedirect:"/home",
    failureRedirect:"/login/auth/google"
  
  })

)

router.get("/logout",(req,res)=>{

    req.logOut()
    res.redirect("/login")
  })
  



router.get('/auth/github',
  passport.authenticate('github'));



router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login', }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  }); 


module.exports = router