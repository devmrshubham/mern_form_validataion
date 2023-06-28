const express = require("express")
const User = require("../Model/User.js")
const jwt = require('jsonwebtoken');
const Router = express.Router();


Router.post("/" ,(req,res)=>{
    console.log(req.body)
    const data = new User(
        {
            name:req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password,
            gender:req.body.gender
        }
    )

    data.save()
    .then(
        (success)=>{
            res.send({
                message:"Data Added Successfully",
                Data:data,
                status:1
            })
        }
    ).catch(
        (error)=>{
            console.log(error.message)
            res.send({
                message:"Unable to Add Data ",
                status:0
            })
        }
    )
})



Router.get("/:id",async(req,res)=>{
  
    let Data = await User.findOne({_id:req.params.id})
    res.send(Data)
})

Router.get("/",async(req,res)=>{
     const data = await User.find();
     res.send(data)
})

Router.delete("/:id",(req,res)=>{
    User.deleteOne({_id:req.params.id}).then((success)=>{
        res.send("Data deleted successfully")
    }).catch((error)=>{
        res.send("Data not Deleted")
    })
})

Router.post("/update/:id",(req,res)=>{
    User.findByIdAndUpdate(req.params.id,{...req.body})
    .then((success)=>{
        res.send("Data Updated successfully").status(200)
    }).catch((error)=>{
        res.send(error.message)
    })
})

Router.post("/login",async(req,res)=>{

    const data = await User.find(
        {
           email:req.body.email,
           password:req.body.password 
        }
    )

    if(data.length !==0){

        const token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + (60),
                data:{email:req.body.email,name:data[0].name}
                
            },"dewangan"
        );
        res.send({
            message:"user loged in",
            token:token,
            status:1,
           
        })
    }else{
        res.send({
            message:" User Credentails",
            status:0
        })
    }
})













// Router.post("/login",async(req,res)=>{

//     const data = await User.find(
//         {
//             email:req.body.email,
//             password:req.body.password
//         }
//     )

    

//     if(data !== null){
      
//         const token = jwt.sign({ email:req.body.email,name:data[0].name }, 'shubham');

//         res.send({
//             message:"User loged in",
//             status:1,
//             token :token
//         })
//     }else{
//          res.send({
//             message:"User Credentails",
//             status:0
//          })
//     }

// })


//example of arthorazation of  pages
// Router.post("/verify",(req,res)=>{

//     const token = req.headers.authorization;

//     try {
//         var decoded = jwt.verify(token, 'shubham');
//         console.log(decoded)
//         res.send("toke verify successfully")
        
//     } catch (error) {

//         res.send("internal server error")
        
//     }

 
// })

module.exports = Router;