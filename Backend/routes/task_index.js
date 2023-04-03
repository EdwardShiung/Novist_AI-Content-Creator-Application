module.exports = app => {

    const express = require('express');
    const router = express.Router();
    const Task = require('../models/Task');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const JWTKEY = require('../plugin/config/jwtkey');
    const passport = require('passport');

    //Middleware For Router
    app.use('/api/task', router);

    //- CreateTask_API-Public_API
    router.post('/create',passport.authenticate('jwt', {session: false}), async (req, res) => {
        try {
            const { id } = req.user;
            const dueDate = new Date(req.body.date);
            const newTask = new Task({ ...req.body, userId: id, date: dueDate });
            const saveTask = await newTask.save();
            return res.status(201).json({ newTask: saveTask });
        } catch (err) {
            console.log(err);
            return res.status(500).json('Server Problem');
        }
    })
    }