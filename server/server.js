const express = require("express")
const cors = require("cors")
const hbs = require("hbs")
var cookieParser = require('cookie-parser');
const database = require("../database/db")

const passport = require("passport")
const session = require("express-session")
var flash = require('connect-flash');

const home = require("../routes/home")
const user = require("../routes/landing")
const register = require("../routes/register")
const login = require("../routes/login");
const panel = require("../routes/panel");
const blog = require("../routes/blog");
const detail = require("../routes/blogdetail");
const offers = require("../routes/offers");
const offersDetail = require("../routes/offersDetail")

const path = require("path");


require("../helpers/passport")
//para poder hacer partials extensiones de archivos como el navbar 
hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));

class server{


    constructor(){
        this.app = express()

        this.port = 8080
      
        this.app.set('view engine' ,'hbs')

       
        this.ConectDatabase()
        this.midelwares()
        this.routes()  
    }


    async ConectDatabase(){
        await database()
    }


    midelwares(){
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(session({
            secret:"secret"
        }))
        this.app.use(flash());
        this.app.use(passport.initialize())
        this.app.use(passport.session())
        this.app.use(function(req, res, next){
            res.locals.success= req.flash('success');
            res.locals.errores= req.flash('errores');
            next();
           });
           


        
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())


    }

    routes(){

        this.app.use("/",user)
        this.app.use("/home",home)
        this.app.use("/register",register)
        this.app.use("/login",login)
        this.app.use("/panel",panel)
        this.app.use("/blog",blog)
        this.app.use("/blogdetail",detail)
        this.app.use("/offers",offers)
        this.app.use("/offersDetail",offersDetail)
        
        
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`escuchando en puerto ${this.port}`)
        })
    }

    
}


module.exports = server


