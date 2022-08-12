const { Router } = require('express')
const router = Router()


router.post('/signup',(req, res) => {
    const { name, email, password } = req.body;
    if(!email || !password || !name) {
        return res.status(400).json({
            message: 'Please fill all the fields'
        });
    }
    user.findOne({email})
    .then(savedUser => {
        if(savedUser){
            return res.status(400).json({alert: 'User already exists'});
        }
        const user = new User({
            name,
            email,
            password
        });
        user.save()
        .then((user) => {
            res.status(200).json({
                message: 'User saved successfully',
                user
            })
        }).catch((error) => {
            console.log(error);
        })
    })
})

module.exports = router