module.exports = app => {

    const User = require('../models/User');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const JWTKEY = require('../plugin/config/jwtkey');
    const passport = require('passport');

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

    //- List ALl User (Not In the Document --  Only for Testing)
    app.get('/api/user/users', async (req,res) => {
        res.send(await User.find());
    })

    //- LoginAPI
    app.post('/api/user/login', async(req,res) =>{
        const email = req.body.email;
        const password = req.body.password;
        try {
            const user = await User.findOne({email});
            if(!user){
                return res.status(404).json('No User Existed')
            }
            const match = await bcrypt.compare(password, user.password);
            if(match){
                const potocal = {
                    id: user.id,
                    name: user.name,
                    identity: user.identity
                };
                jwt.sign(potocal,JWTKEY.KEY, {expiresIn: 3000}, (err, token) =>{
                    if(err) throw err;
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            }else{
                return res.status(400).json('Wrong Password');
            }
        } catch (err) {
            console.err(err.message);
            res.status(500).json('Sever Problem')
        }
    });

    //- LoginAPI-Private_API
    app.get('/api/user/current', passport.authenticate('jwt', { session:false }), (req,res) => {
        res.json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            identity: req.user.identity
        });
    })
}