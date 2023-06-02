const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(express.static('./public'))

const Dummy_DB = {
    'sudha':{
        username:'sita_sai_sudha',
        role:'backend developer',
        techStack:'MERN',
        salary:1000000,
       hobbies:['cricket', 'modeling'],
       image:'https://img.freepik.com/premium-vector/people-design_24877-32157.jpg?w=740',
       exp:''
    },
    'ram':{
        username:'ram_prasad_ponnana',
        role:'Data scientist',
        techStack:'python DataScience',
        salary:2000000,
        hobbies:['writing', 'dancing'],
        image:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1685620777~exp=1685621377~hmac=f1cefefc46f8152d803e0f80604d7f2ef0080b9062277f08fa845e41e5fd6679',
        exp:'data scientist at TalentSprint'
    }
    ,
    'deepu':{
        username:'ramya_sudha_deepika',
        role:'Supply chain analyst',
        techStack:'MAchine learinig',
        salary:15000000,
        hobbies:['mehandi','stand up comedy', 'cooking'],
        image:'https://img.freepik.com/premium-vector/people-design_24877-32159.jpg',
        exp:'supply chain analyst at intel solutions'
    }
}

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.send("<h1> Hoo cool down!! </h1>")
})

app.get('/users/:username' , (req,res)=>{
    let username = req.params.username;
    console.log(req.params.username)
   
    let user_details = Dummy_DB[username]
    console.log(Dummy_DB[username])
    res.render('userdetails',user_details)
})

app.listen(3000,()=>{
    console.log("server running on posrt 3000")
})