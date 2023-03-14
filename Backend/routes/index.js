module.exports = app => {

    const User = require('../models/User');
    const bcrypt = require('bcrypt');

    //RegisterAPI
    app.post('/api/user/register', async (req, res) => {

        try {
            // email already in DB
            const user = await User.findOne({
                email:req.body.email
            })
            if(user){
                return res.status(400).json('The email has already existed');
            }else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    identity: req.body.identity
                })

                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(newUser.password, salt);

                newUser.password = hash;
                const addUser = await newUser.save();
                return res.json(addUser);
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Sever Problem');
        }
    })
    }