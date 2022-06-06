const passport = require("passport")
const Localstrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth2").Strategy
const User = require("../models/auth")
const becrypt = require("bcrypt")
const GitHubStrategy = require('passport-github').Strategy;
const { Mail } = require("./sendmail")

passport.use("signup",new Localstrategy({

    usernameField:"username",
    passwordField:"password",
    passReqToCallback:true
},async(req,username,password,done)=>{

    const {email,nombre} = req.body
    const user = await  User.findOne({username})

    if(user){
       return done(null,false,req.flash("errores"," ya existe ese  usuario"))
    }


    const existeemail = await User.findOne({email})
    if(existeemail){

        return done(null,false,req.flash("errores","este email ya tiene cuenta"))
    }
    


    const newuser = new User({username,password,email,nombre})

    const salt = becrypt.genSaltSync()
    newuser.password = becrypt.hashSync(password,salt)


    Mail(email)

    await newuser.save()

    
    return done(null,newuser)


}))


passport.use("signin",new Localstrategy({

    usernameField:"username",
    passwordField:"password",
    passReqToCallback:true
},async(req,username,password,done)=>{

    
    const user = await  User.findOne({username})

    if(!user){
       return done(null,false,req.flash("errores"," no existe el usuario"))
    }

    const pass = becrypt.compareSync(password,user.password)

    if(!pass){
        return done(null,false,req.flash("errores","password no es correcto"))
    }

    

    return done(null,user)


}))


//authentication google
passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/login/google/callback",
    passReqToCallback   : true
  },
  async(request, accessToken, refreshToken, profile, done)=> {
  
    const {email} =profile
    const user = await User.findOne({email})

    if(user){

        return done(null,user)
    }else{

        const newuser = new User({username:":)",password:":)",email,nombre:":)"})
       await  newuser.save()
       return done(null,newuser)
    }

  },


  
));



//authentication github
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/login/auth/github/callback"
  },
  async(accessToken, refreshToken, profile, done)=> {
    const {email} =profile
    const user = await User.findOne({email})

    if(user){

        return done(null,user)
    }else{

        const newuser = new User({username:":)",password:":)",email,nombre:":)"})
       await  newuser.save()
       return done(null,newuser)
    }
  }
));






passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser(async(id,done)=>{
    const user =await User.findById(id) 
    
    done(null,user)
})