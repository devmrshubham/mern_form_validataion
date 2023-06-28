const express = require("express");
const Router = express.Router();
const {BlogController} = require("../Controller/Blog");
const jwt = require('jsonwebtoken');

Router.post("/",(req,res)=>{
const token = req.headers.authorization
  try {
    jwt.verify(token, 'dewangan');
    const response = new BlogController().AddData(req.body)
  
    response.then((success)=>{
  
      res.send(success)
  
    }).catch((error)=>{
  
      res.send(error)
  
    })
  } catch (error) {

    res.send({
      message:"request not authorized",
      status:0
    })
    
  }
 

})



Router.get("/:id?", (req, res) => {

  const token = req.headers.authorization

try {

  jwt.verify(token, 'dewangan');
  const response = new  BlogController().Getdata(req.params.id);

  response
    .then((success)=>{
  
      res.send(success)
      
  
    }).catch((error)=>{
  
      res.send(error.message)
  
    })
  
} catch (error) {
  res.send("request not authorized ")
  
}
  
 
});

Router.delete("/:id?" , (req ,res) =>{ 

  const response = new BlogController().DeleteData(req.params.id)

  response.then(
    
    (success)=>{
      res.send(success)
    }
  ).catch((error)=>{

    res.send(error.message)
  })
})


Router.post("/update/:id?",(req,res)=>{
  const  response =  new BlogController().UpdateData(req.params.id,req.body);
  response
  .then((success)=>{
    res.send(success)
  }).catch((error)=>{
    res.send(error)
  })
})



module.exports = Router;
