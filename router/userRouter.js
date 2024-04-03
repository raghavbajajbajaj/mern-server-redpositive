const express = require('express')
const mongoose = require("mongoose")
const User = require("../models/userModel.js")
const router = express.Router()
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.post("/", async (req, res) => {
    const { name, email, age , hobbies} = req.body;
    try {
        const newuser = await User.create({
            name: name,
            email: email,
            age: age ,
            hobbies : hobbies
        })
        res.status(201).json(newuser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/" , async (req , res)=>{
    const allusers = await User.find() ;
    res.status(200).json(allusers) 
})


router.delete("/:id" , async (req , res)=>{
    const {id} = req.params ;
    try{
        const userdeleted = await User.findByIdAndDelete({_id : id})
        res.status(200).json(userdeleted) ;
    }catch(error){
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}) 


router.patch("/:id" , async (req , res)=>{
    const {id} = req.params ;
    const {name , age , email , hobbies} = req.body ;
 
    try{
        const updateduser = await User.findByIdAndUpdate(id , req.body , {new : true }) ;
        res.status(200).json(updateduser) ;
    }catch(error){
        console.error("Error creating user:", error);
        res.status(500).json({ error: "patch error" });
    }
}) 

router.get("/:id" , async (req , res)=>{
  const {id} = req.params ;
  try{
      const updateduser = await User.findById(id , req.body , {new : true }) ;
      res.status(200).json(updateduser) ;
  }catch(error){
      console.error("Error creating user:", error);
      res.status(500).json({ error: "patch error" });
  }
}) 


module.exports = router ;