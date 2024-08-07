
const User = require ("../Model/UserModel")
const bcrypt=require("bcrypt")

exports.insert=[async (req,res)=>{
       const hashedpass=await bcrypt.hash(req.body.password,10)
        const user = new User({
            username: req.body.username,
            email :req.body.email,
            phonenumber :req.body.phonenumber,
            password : hashedpass,
            cpassword:hashedpass
        })
        user.save()
        .then((ele)=>{
            res.send(ele)
        })
        .catch((err)=>{
            res.send(err)
        }
        )
    }
]

exports.list=[
    (req,res)=>{
        User.find()
          .then((users)=>{
            res.send(users)
          })
          .catch((err)=>{
            res.send(err)
          })
    }
]
exports.login = [async (req,res)=> {
        const email = req.body.email
        const password= req.body.password
        User.findOne({
            email:email,
        })
        .then(async (user)=>{
            if(user){
                const isFound=await bcrypt.compare(password,user.password)
                if(isFound){
                    res.send({userFound:true,message:"login success"})
                } else{
                    res.send({userFound:false,message:"password not match"})
                }
                
            }else{
                res.send({
                    userFound:false,
                    message:"email not found"
                })
            }
           

        })
        .catch((err)=>{
            res.send(err)
        })
            
        }
    
]

exports.update=[
    (req,res)=>{

        User.updateOne(
            {_id:req.params.id},
            {$set:{
            username: req.body.username,
            email :req.body.email,
            contact :req.body.contact,
           password : req.body.password
     } })
        
        .then((user)=>{
            res.send(user)
        })
        .catch((err)=>{
            res.send(err)
        }
        )
    }
]
exports.delete =[
    (req,res)=>{
        User.deleteOne(
            {_id:req.params.id})
        .then((data)=>
        {
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })

    }
]