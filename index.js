const express = require('express')
const app = express()
const bodyparser = require('body-parser')

const Dummy_DB = {
    'sai@123':{
        password:'123'
    },
    'sudha@123':{
        password:'456'
    }
}
app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    // res.sendFile(__dirname+'/index.html')
    res.render('index')
})

app.post('/login',(req,res)=>{
 
//    console.log(Dummy_DB[req.body.mail].password)
   if((Dummy_DB[req.body.mail]) &&(Dummy_DB[req.body.mail].password == req.body.password) ){
    res.redirect('/landing')
   }
   else{
    res.json({
        "mesaage":"something went wrong!"
    })
   }
   
// res.send('Hola')
})
app.get('/landing',(req,res)=>{
    res.send('Hola')
})
app.listen(3000,()=>{
    console.log("server running on posrt 3000")
})