const express = require('express');
const router = express.Router();
const Users = require("../models/users");

// get all users
router.get('/', async (req,res) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch (error) {
    console.error({error})
    res.status(500).json({
      message: error.message
    })
  };
  
})

// create user
router.post('/', async(req,res) => {
  const {name, mobile, family} = req.body;
  const newUser = new Users({name, mobile, family})
  try {
    const saveUser = await newUser.save();
    res.status(201).json({
      message: 'user create successfully',
      id: newUser.id
    })
  } catch (error) {
    res.status(400).json({message: error.message})
  };
  
})

// delete user
router.post('/delete/', async(req,res) => {
  const {id} = req.body;
  console.log({id})
  try {
    const user = await Users.findById(id);
    console.log({user})
    await user.remove();
    res.status(200).json({
      message: 'user remove successfully',
    })
  } catch (error) {
    res.status(404).json({message: error.message})
  };
  
})


module.exports = router