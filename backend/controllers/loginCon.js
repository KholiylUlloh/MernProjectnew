const User = require("../models/user");
const bcrypt = require("bcrypt");


const Login = (req, res) => {
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
  }

  module.exports = Login
