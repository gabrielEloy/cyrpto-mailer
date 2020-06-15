const express = require('express');
const userModel = require('../schemas/users');

const router = express.Router();

router.post('/register', (req, res, next) => {
  const { user, email } = req.body;
  if(user && email){
    const newUser = new userModel({
      name: user, 
      email
    })

    newUser.save()
    .then(() => {
      res.status(200).json({registerSuccess: true, user, email})
      return;
    }).catch(err => {
      res.status(400).json({registerSuccess: false,genericError: true})
      console.log(err)
      return;
    })
    
  }

  if(!user){
    res.status(400).json({registerSuccess: false, missingField: 'user'})
  }
  if(!email){
    res.status(400).json({registerSuccess: false, missingField: 'email'})
  }
  
})

module.exports = router;