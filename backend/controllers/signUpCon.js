const User = require("../models/user");
const user = User;
const bcrypt = require("bcrypt");

const SignUp = (req, res) => {
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
};

module.exports = SignUp;