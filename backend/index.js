/
// const bcrypt = require('bcrypt')
// const user = require('./Register')
// const e = require("express")
// const { Await } = require("react-router-dom")
// const url = 'mongodb+srv://manvishah2003:manvijaan1702.@cluster0.rw2yfnp.mongodb.net/?retryWrites=true&w=majority'
// mongodb+srv://manvishah2003:<password>@cluster0.rw2yfnp.mongodb.net/?retryWrites=true&w=majority
// const app = express()
// app.use(express.json())

// app.use(express.urlencoded({extended: true}));
// app.use(cors())

// mongoose.connect(url).then(()=>{
//     console.log('Connected to mongoose')
// }).catch((e)=>{
//     console.log("error")
// })
// .then(()=> console.log('Db connected'))
// .catch((err) => console.log(err))

// app.listen(3008,()=>{
//     console.log("BE started on port 3008")
// })

// app.post('/post',async (req ,res)=> {
//     console.log(req.body);
//     const { data } =req.body;
    
//     try {
//         if (data == "manvi")
//         {
//             res.send ({ status:"ok"});
//         }
//      else {
//                 res.send ({ status:"user not found"});
//             }
//     } catch (error) 
//     {
//         res.send({ status:"somrthing went wrong"});
//     }
// });
//    require("./userDetails");
//    const User = mongoose.model("UserInfo");
//    app.post("/re")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const user = require('./register')
const e = require("express")
const { Await } = require("react-router-dom")
const url = ''

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended: true}));
app.use(cors({Credential: true,origin:' http://localhost:3002'}))

mongoose.connect(url).then(()=>{
    console.log('Connected to mongoose')
}).catch((e)=>{
    console.log("error")
})
// .then(()=> console.log('Db connected'))
// .catch((err) => console.log(err))

app.listen(3002,()=>{
    console.log("BE started on port 3002")
})




app.post('/Register',async (req,res)=>{
    const {username,email,password}=req.body
            const User = new user({
                username,
                email,
                password
            })
            User.save().then(()=>{
                console.log('User Added')
            }).catch((e)=>{
                console.log('Error adding a user',e)
            })
        }
    )
app.post('/Login',async(req,res)=>{
    const {email,password}=req.body;
    const User = await user.findOne({email});

    if(!User)
    {
        console.log(res.msg)
        return res.status(404).json({msg: "Data not found"})
    }

    if(password === User.password)
    {
        console.log("validPassword")
        return res.status(200).json({msg: "Logged in sucessfully"})
    }
    else
    {
        console.log(res.msg)
        console.log("Invalid")
        return res.status(500).json({msg: "Invalid credentials"})
    }
})

