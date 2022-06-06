const async = require("hbs/lib/async")
const fetch  =require("node-fetch")


const  getciudad = async(peticion)=>{
    

    if(peticion){
    const apikey = "76ccba2e4d2707bd82794ffc7b83200d"
    
    const city = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${peticion}&appid=${apikey}`)
    .then(res => res.json())
    .then(resp=> {
        
        const {name} = resp
        const {temp_min} = resp.main
        const {temp_max} = resp.main
        const {humidity} = resp.main
        const {country} = resp.sys
        const {icon} = resp.weather[0]
        const {description}  = resp.weather[0]

        const resta = temp_max - 273
        const resta2 = temp_min - 273

        const maxcelsius = Math.round(resta)
        const mincelsius = Math.round(resta2)

        const datos = {
            name,
            mincelsius,
            maxcelsius,
            humidity,
            country,
            icon,
            description
        }
        
        return datos
    })


        return city
    }
}



module.exports = {
    getciudad
}