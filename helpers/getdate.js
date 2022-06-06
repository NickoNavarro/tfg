const getTime = ()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + ' ' + String(date.getMonth() + 1).padStart(2, '0') + ' ' + date.getFullYear();
    
    let day = weekday[date.getDay()]
  
    return {
        output,
        day
    }
}

module.exports= {
    getTime
}