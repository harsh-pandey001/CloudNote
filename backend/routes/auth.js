const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');

// create a User using: POST "/api/auth/createuser"//No login required

router.post('/createuser',[
    body('name','Enter a valid Name').isLength({ min: 3 }),
    body('email','Enter a valid E-mail').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res)=>{
  //if there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this email exists already
    try{
    let user = await User.findOne({email: req.body.email}); 
    if (user) {
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }

    // create a new user
    user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email ,
      })
   
      res.json(user)}
      catch(error){
        console.error(error.message);
        res.status(500).send("Some error occures");
      }
})

module.exports = router