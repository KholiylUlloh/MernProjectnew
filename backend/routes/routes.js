const { Router } = require('express')
const router = Router()
const User = require("../models/user");
const user = User
const bcrypt = require("bcrypt");

//Method: POST
//Descr: Login

router.post('/login',(req, res) => {
  const { email, password } = req.body
  if(!email || !password) {
    res.status(400).json({
      message: 'Please fill all required fields'
    })
  }
  User.findOne({email}).then(user => {
    if(!user){
      res.status(400).json({
        message: 'User not found'
      })
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if(!isMatch){
        res.status(400).json({
          message: 'Invalid password'
        })
      }else{
        res.status(200).json({
          message: 'Successfully logged in',
          User
        })
      }
    })
    })
    .catch(err => {
      console.log(err);
    })
})

//Method: POST
//Descr: Sign Up

router.post('/signup',(req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  user.findOne({ email }).then((savedUser) => {
    if (savedUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    bcrypt.hash(password, 10).then((hash) => {
      const user = new User({
        name,
        email,
        password: hash
      });
      user
        .save()
        .then((user) => {
          res.status(200).json({
            message: "User saved successfully",
            user,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
});



module.exports = router