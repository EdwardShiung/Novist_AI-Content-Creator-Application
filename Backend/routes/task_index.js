module.exports = app => {

    const express = require('express');
    const router = express.Router();
    const Task = require('../models/Task');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const JWTKEY = require('../plugin/config/jwtkey');
    const passport = require('passport');
    const dayjs = require('dayjs');

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

    //- List_All_Task_API-Public_API
    router.get('/taskList', passport.authenticate('jwt', {session: false}), async(req, res) => {
        try {
            const { type, day } = req.query ?? {};
            const { id } = req.user;
            const today = dayjs().format('YYYY-MM-DD');
            let min, max;

            switch(day) {
            case 'today':
                min = today;
                max = today;
                break;
            case 'seven':
                min = dayjs().subtract(7, 'day').format('YYYY-MM-DD');
                max = today;
                break;
            case 'thirty':
                min = dayjs().subtract(30, 'day').format('YYYY-MM-DD');
                max = today;
                break;
            default:
                break;
            }

            const query = {
            userId: id,
            ...(type && { type }),
            ...(day && { date: { $lte: new Date(max), $gte: new Date(min) } })
            };
            const tasks = await Task.find(query);

            res.status(200).json({tasks});
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Problem');
        }
    })
}