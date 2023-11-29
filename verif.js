let day = new Date().getDay() //return cur date
let hours = new Date().getHours() // retrun cur hours

function verif (req,res,next){
    if( day>0 && day<6 && hours>8 && hours<17)
    next()
else(res.send(`<h1>welcome sevce is closed noww...../open 8h=>17h<h1/>`))
}
module.exports = verif ;